// import { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

// const SHIPPO_API_URL = "https://api.goshippo.com/shipments/";
// const SHIPPO_API_KEY = process.env.SHIPPO_API_KEY || "";

// export default async function shippoOrder(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { addressFrom, addressTo, parcels, orderId, totalAmount, productId } = req.body;

//   if (!addressFrom || !addressTo || !parcels || !orderId || !totalAmount) {
//     return res.status(400).json({ message: "Missing required fields." });
//   }

//   try {
//     // Log the incoming request body to debug
//     console.log("Request body:", req.body);

//     const response = await axios.post(
//       SHIPPO_API_URL,
//       {
//         address_from: addressFrom,
//         address_to: addressTo,
//         parcels,
//         async: false,
//       },
//       {
//         headers: {
//           Authorization: `ShippoToken ${SHIPPO_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     // Log the Shippo API response for debugging
//     const shipment = response.data;
//     console.log("Shippo API Response:", shipment);

//     res.status(200).json({
//       productId,
//       orderId,
//       totalAmount,
//       trackingNumber: shipment.object_id,
//       eta: shipment.eta || "3-5 business days",
//       status: "Shipment created successfully!",
//     });
//   } catch (error) {
//     const err = error as any;
//     console.error("Error creating shipment:", err.response?.data || err.message);
//     res.status(500).json({ message: "Failed to create shipment", error: err.response?.data || err.message });
//   }
// }
