// "use client";
// import React, { useState } from "react";
// import { loadStripe } from "@stripe/stripe.js";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [paymentStatus, setPaymentStatus] = useState("");

//   const clientSecret = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY; // Define your client secret here

//   const handlePayment = async () => {
//     if (!stripe || !elements) {
//       setPaymentStatus("Stripe has not loaded properly.");
//       return;
//     }

//     if (!clientSecret) {
//       setPaymentStatus("Client secret is not defined.");
//       return;
//     }

//     const { error, paymentIntent } = await stripe.confirmCardPayment(
//       clientSecret,
//       {
//         payment_method: {
//           card: elements.getElement(CardElement) ?? { token: "" },
//         },
//       }
//     );

//     if (error) {
//       setPaymentStatus(`Payment failed: ${error.message}`);
//     } else {
//       setPaymentStatus(`Payment succeeded! ID: ${paymentIntent.id}`);
//     }
//   };

//   return (
//     <div>
//       <CardElement />
//       <button onClick={handlePayment}>Pay Now</button>
//       <p>{paymentStatus}</p>
//     </div>
//   );
// };

// const PaymentWrapper = () => (
//   <Elements stripe={stripePromise}>
//     <PaymentForm />
//   </Elements>
// );

// export default PaymentWrapper;
