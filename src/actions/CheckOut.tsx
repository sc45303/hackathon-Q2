/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { shipEngine } from "@/app/helper/shipEngine";
import { client } from "@/sanity/lib/client";
// Import your ShipEngine helper

interface OrderData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  products: Array<{
    productName: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  shipmentTrackingNumber?: string; // Add shipment details
  shippingLabelUrl?: string;
}

export const CheckOut = async (cartItems: any[], customerInfo: any) => {
  const orderData: OrderData = {
    customerName: customerInfo.name,
    customerEmail: customerInfo.email,
    customerPhone: customerInfo.phone,
    customerAddress: customerInfo.address,
    products: cartItems.map((item) => ({
      productName: item.name,
      quantity: item.quantity,
      price: item.price,
    })),
    totalAmount: cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ),
  };

  try {
    // 1. Create the order in Sanity
    const result = await client.create({
      _type: "order",
      ...orderData,
    });
    console.log("Order created in Sanity:", result);

    // 2. Fetch Shipping Rates
    const shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: {
          name: orderData.customerName,
          phone: orderData.customerPhone,
          addressLine1: orderData.customerAddress, // Simplified example
          cityLocality: "karachi",
          stateProvince: "CA",
          postalCode: "5000",
          countryCode: "PK",
          addressResidentialIndicator: "yes",
        },
        shipFrom: {
          name: "Shop.co",
          phone: "+1 555 123 4567",
          addressLine1: "742 Evergreen Terrace",
          cityLocality: "Springfield",
          stateProvince: "IL",
          postalCode: "62701",
          countryCode: "US",
          addressResidentialIndicator: "no",
        },
        packages: [
          {
            weight: { value: 5, unit: "pound" },
            dimensions: {
              length: 10,
              width: 5,
              height: 5,
              unit: "inch",
            },
          },
        ],
      },
      rateOptions: {
        carrierIds: [process.env.SHIPENGINE_FIRST_COURIER || ""].filter(
          Boolean
        ),
      },
    });

    console.log("Shipment Rates:", shipmentDetails);

    // Select the first available rate for simplicity
    const selectedRate = shipmentDetails.rateResponse.rates
      ? shipmentDetails.rateResponse.rates[0]
      : null;

    if (selectedRate) {
      // 3. Generate the shipping label
      const labelResponse = await shipEngine.createLabelFromRate({
        rateId: selectedRate.rateId,
      });

      console.log("Shipping Label:", labelResponse);

      // 4. Update the order with shipment details in Sanity
      const updatedOrder = await client
        .patch(result._id)
        .set({
          shipmentTrackingNumber: labelResponse.trackingNumber,
          shippingLabelUrl: labelResponse.labelDownload.href,
        })
        .commit();

      console.log("Order updated with shipment details:", updatedOrder);
      return updatedOrder;
    }

    return result;
  } catch (error) {
    console.error("Error during checkout or shipment:", error);
    throw error;
  }
};
