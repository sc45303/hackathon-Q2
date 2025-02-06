"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import Link from "next/link";

const SuccessPageContent = () => {
  const searchParams = useSearchParams();
  const total = searchParams ? (searchParams.get("total") ?? "0.00") : "0.00";
  const orderId = searchParams ? searchParams.get("orderId") : null;

  const [orderDetails, setOrderDetails] = useState<{
    paymentStatus?: "paid" | "unpaid";
    products?: any[];
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch order details
  useEffect(() => {
    const fetchOrderDetails = async () => {
      if (!orderId) return;

      try {
        const response = await fetch(`/api/orders/${orderId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch order details.");
        }

        const data = await response.json();
        setOrderDetails(data);
      } catch {
        setError("Unable to fetch order details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  // Handle payout with Stripe
  const handlePayout = async () => {
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Order Payment",
          price: parseFloat(total) * 100, // Convert to subunits
        }),
      });

      const data = await response.json();

      if (response.ok && data.url) {
        window.location.href = data.url;
      } else {
        alert(`Error creating Stripe payment session: ${data.error}`);
      }
    } catch (error) {
      console.error("Payment initiation error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="text-center bg-white p-8 shadow-lg rounded-lg w-96">
      {/* Dynamic Heading Based on Payment Status */}
      {orderDetails?.paymentStatus === "paid" ? (
        <h1 className="text-4xl font-bold text-blue-600">
          Payment Successful!
        </h1>
      ) : (
        <h1 className="text-4xl font-bold text-green-600">
          Order Created Successfully!
        </h1>
      )}

      {/* Dynamic Message */}
      <p className="text-gray-700 mt-4">
        {orderDetails?.paymentStatus === "paid"
          ? `Your payment of $${parseFloat(total).toFixed(2)} has been successfully processed.`
          : "Your order has been placed successfully. Please proceed to payment."}
      </p>

      {orderId && (
        <p className="text-gray-500 mt-2">
          <strong>Order ID:</strong> {orderId}
        </p>
      )}

      {loading && (
        <p className="text-gray-500 mt-4">Loading order details...</p>
      )}
      {error && <p className="text-white mt-4">{error}</p>}

      {/* Display Products */}
      {orderDetails?.products && (
        <div className="mt-4 text-left">
          <h3 className="text-lg font-bold">Products Ordered:</h3>
          <ul className="list-disc list-inside">
            {orderDetails.products.map((product: any) => (
              <li key={product.productId} className="mt-1">
                {product.name} - ${product.price} x {product.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Buttons for further actions */}
      <div className="mt-8 flex flex-col gap-4">
        {!loading && orderDetails?.paymentStatus !== "paid" && (
          <button
            onClick={handlePayout}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Proceed to Payment
          </button>
        )}
        <Link href="/">
          <p className="text-white bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-900">
            Continue Shopping
          </p>
        </Link>
      </div>
    </div>
  );
};

const SuccessPage = () => (
  <main className="h-screen flex flex-col justify-center items-center bg-gray-100">
    <Suspense fallback={<p>Loading page...</p>}>
      <SuccessPageContent />
    </Suspense>
  </main>
);

export default SuccessPage;
