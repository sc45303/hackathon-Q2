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

  return (
    <div className="text-center bg-white p-10 shadow-xl rounded-lg w-96">
      {orderDetails?.paymentStatus === "paid" ? (
        <h1 className="text-4xl font-bold text-blue-600">
          Payment Successful!
        </h1>
      ) : (
        <h1 className="text-4xl font-bold text-green-600">
          Order Created Successfully!
        </h1>
      )}

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
      {error && <p className="text-red-600 mt-4">{error}</p>}

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

      <div className="mt-8 flex flex-col gap-4">
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
