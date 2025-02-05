// // "use client";
// // import React, { useState } from "react";

// // interface Product {
// //   id: string;
// //   addressFrom: string;
// //   addressTo: string;
// //   parcelDetails: any; // Define a more specific type if possible
// //   price: number;
// // }

// // interface ShippoDataProps {
// //   cartProducts: Product[];
// // }

// // const ShippoData: React.FC<ShippoDataProps> = ({ cartProducts = [] }) => {
// //   interface ShipmentDetails {
// //     orderId: string;
// //     trackingNumber: string;
// //   }

// //   const [shipmentDetails, setShipmentDetails] =
// //     useState<ShipmentDetails | null>(null);

// //   const handleCheckout = async () => {
// //     if (cartProducts.length === 0) {
// //       alert("No products in the cart!");
// //       return;
// //     }

// //     const productToShip = cartProducts[0]; // Example: Ship the first product for simplicity
// //     const { id, addressFrom, addressTo, parcelDetails } = productToShip;

// //     const response = await fetch("/api/shippoOrder", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({
// //         productId: id,
// //         addressFrom,
// //         addressTo,
// //         parcels: parcelDetails,
// //         orderId: `ORDER-${id}`,
// //         totalAmount: productToShip.price,
// //       }),
// //     });

// //     const data = await response.json();
// //     if (response.ok) {
// //       setShipmentDetails(data);
// //     } else {
// //       alert(data.message || "Failed to create shipment");
// //     }
// //   };

// //   return (
// //     <div>
// //       <button onClick={handleCheckout}>Checkout & Ship</button>
// //       {shipmentDetails && (
// //         <div>
// //           <p>Product ID: {shipmentDetails.orderId}</p>
// //           <p>Tracking Number: {shipmentDetails.trackingNumber}</p>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ShippoData;

// "use client";
// import React, { useState } from "react";

// interface Product {
//   id: string;
//   addressFrom: string;
//   addressTo: string;
//   parcelDetails: any;
//   price: number;
// }

// interface ShippoDataProps {
//   cartProducts: Product[];
// }

// const ShippoData: React.FC<ShippoDataProps> = ({ cartProducts = [] }) => {
//   interface ShipmentDetails {
//     orderId: string;
//     trackingNumber: string;
//   }

//   const [shipmentDetails, setShipmentDetails] =
//     useState<ShipmentDetails | null>(null);

//   // Log cartProducts to see what's being passed to the component
//   console.log("cartProducts:", cartProducts);

//   const handleCheckout = async () => {
//     if (cartProducts?.length === 100) {
//       alert("No products in the cart!");
//       return;
//     }

//     const productToShip = cartProducts[0]; // Example: Ship the first product for simplicity
//     const { id, addressFrom, addressTo, parcelDetails } = productToShip;

//     const response = await fetch("pages/api/shippoOrder", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         productId: id,
//         addressFrom,
//         addressTo,
//         parcels: parcelDetails,
//         orderId: `ORDER-${id}`,
//         totalAmount: productToShip.price,
//       }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       setShipmentDetails(data);
//     } else {
//       alert(data.message || "Failed to create shipment");
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={handleCheckout}
//         className="bg-black text-white w-[300px] py-2 rounded-lg  "
//       >
//         Checkout & Ship
//       </button>
//       {shipmentDetails && (
//         <div>
//           <p>Product ID: {shipmentDetails.orderId}</p>
//           <p>Tracking Number: {shipmentDetails.trackingNumber}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShippoData;
