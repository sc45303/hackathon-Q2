// // "use client";

// // import ProtectedRoute from "@/app/protect/page";
// // import { client } from "@/sanity/lib/client";
// // import { urlFor } from "@/sanity/lib/image";
// // import Image from "next/image";
// // import React, { useEffect, useState } from "react";
// // import Swal from "sweetalert2";

// // interface Order {
// //   id: string;
// //   firstName: string;
// //   lastName: string;
// //   phone: number;
// //   email: string;
// //   address: string;
// //   city: string;
// //   postalCode: string;
// //   total: number;
// //   discount: number;
// //   orderDate: string;
// //   status: string | null;
// //   cartItems: { name: string; image: string }[];
// // }

// // export default function AdminDashboard() {
// //   const [orders, setOrders] = useState<Order[]>([]);
// //   const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
// //   const [filter, setFilter] = useState("All");

// //   // Fetch orders from Sanity on mount
// //   useEffect(() => {
// //     client
// //       .fetch(
// //         `*[_type == "order"]{
// //           _id,
// //           firstName,
// //           lastName,
// //           phone,
// //           email,
// //           address,
// //           city,
// //           postalCode,
// //           total,
// //           discount,
// //           orderDate,
// //           status,
// //           "cartItems": cartItems[] -> {
// //             name,
// //             image
// //           }
// //         }`
// //       )
// //       .then((data) => {
// //         // Map _id to id for easier reference
// //         // eslint-disable-next-line @typescript-eslint/no-explicit-any
// //         const mappedData = data.map((order: any) => ({
// //           id: order._id,
// //           ...order,
// //         }));
// //         setOrders(mappedData);
// //       })
// //       .catch((error) => console.log("Error fetching orders", error));
// //   }, []);

// //   // Filter orders based on the selected filter
// //   const filteredOrders =
// //     filter === "All"
// //       ? orders
// //       : orders.filter((order) => order.status === filter);

// //   // Toggle display of order details
// //   const toggleOrderDetails = (orderId: string) => {
// //     setSelectedOrderId((prev) => (prev === orderId ? null : orderId));
// //   };

// //   // Handle order deletion
// //   const handleDelete = async (orderId: string) => {
// //     const result = await Swal.fire({
// //       title: "Are you sure?",
// //       text: "You won't be able to revert this!",
// //       icon: "warning",
// //       showCancelButton: true,
// //       confirmButtonColor: "#3085d6",
// //       cancelButtonColor: "#d33",
// //       confirmButtonText: "Yes, delete it!",
// //     });
// //     if (!result.isConfirmed) return;
// //     try {
// //       await client.delete(orderId);
// //       setOrders((prevOrders) =>
// //         prevOrders.filter((order) => order.id !== orderId)
// //       );
// //       Swal.fire("Deleted!", "The order has been deleted.", "success");
// //     } catch (error) {
// //       Swal.fire("Error!", "Failed to delete order", "error");
// //       console.log(error);
// //     }
// //   };

// //   // Handle status change of an order
// //   const handleStatusChange = async (orderId: string, newStatus: string) => {
// //     try {
// //       await client.patch(orderId).set({ status: newStatus }).commit();
// //       setOrders((prevOrders) =>
// //         prevOrders.map((order) =>
// //           order.id === orderId ? { ...order, status: newStatus } : order
// //         )
// //       );

// //       if (newStatus === "dispatch") {
// //         Swal.fire(
// //           "Order Dispatched",
// //           "The order has been dispatched.",
// //           "success"
// //         );
// //       } else if (newStatus === "success") {
// //         Swal.fire(
// //           "Order Delivered",
// //           "The order has been delivered.",
// //           "success"
// //         );
// //       }
// //     } catch (error) {
// //       Swal.fire("Error!", "Failed to update order", "error");
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <ProtectedRoute>
// //       <div className="flex flex-col min-h-screen bg-gray-100">
// //         {/* Navbar */}
// //         <nav className="bg-red-600 text-white p-4 shadow-lg flex flex-col md:flex-row justify-between items-center">
// //           <h2 className="text-3xl font-bold">Admin Dashboard</h2>
// //           <div className="flex space-x-4 mt-4 md:mt-0">
// //             {["All", "pending", "dispatch", "success"].map((status) => (
// //               <button
// //                 key={status}
// //                 onClick={() => setFilter(status)}
// //                 className={`px-4 py-2 rounded-lg ${
// //                   filter === status
// //                     ? "bg-white text-red-600 font-bold"
// //                     : "bg-red-600 text-white"
// //                 }`}
// //               >
// //                 {status.charAt(0).toUpperCase() + status.slice(1)}
// //               </button>
// //             ))}
// //           </div>
// //         </nav>

// //         {/* Orders Table */}
// //         <div className="flex-1 p-6 overflow-y-auto">
// //           <div className="bg-white rounded-lg shadow overflow-x-auto">
// //             <table className="min-w-full divide-y divide-gray-200">
// //               <thead className="bg-gray-50">
// //                 <tr>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                     ID
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                     Customer
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                     Address
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                     Date
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                     Total
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                     Status
// //                   </th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                     Actions
// //                   </th>
// //                 </tr>
// //               </thead>
// //               <tbody className="bg-white divide-y divide-gray-200">
// //                 {filteredOrders.map((order) => (
// //                   <React.Fragment key={order.id}>
// //                     <tr
// //                       onClick={() => toggleOrderDetails(order.id)}
// //                       className="bg-gray-50 hover:bg-red-100 transition-all cursor-pointer"
// //                     >
// //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// //                         {order.id}
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// //                         {order.firstName} {order.lastName}
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// //                         {order.address}
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// //                         {new Date(order.orderDate).toLocaleDateString()}
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// //                         ${order.total}
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// //                         <select
// //                           value={order.status || ""}
// //                           onChange={(e) =>
// //                             handleStatusChange(order.id, e.target.value)
// //                           }
// //                           className="bg-gray-100 rounded p-1"
// //                         >
// //                           <option value="pending">Pending</option>
// //                           <option value="dispatch">Dispatched</option>
// //                           <option value="success">Delivered</option>
// //                         </select>
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap text-sm">
// //                         <button
// //                           onClick={(e) => {
// //                             e.stopPropagation();
// //                             handleDelete(order.id);
// //                           }}
// //                           className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition"
// //                         >
// //                           Delete
// //                         </button>
// //                       </td>
// //                     </tr>
// //                     {selectedOrderId === order.id && (
// //                       <tr>
// //                         <td colSpan={7} className="bg-gray-100 p-4">
// //                           <h3 className="font-bold mb-2">Order Details</h3>
// //                           <p>
// //                             <strong>Phone:</strong> {order.phone}
// //                           </p>
// //                           <p>
// //                             <strong>Email:</strong> {order.email}
// //                           </p>
// //                           <p>
// //                             <strong>City:</strong> {order.city}
// //                           </p>
// //                           <div className="mt-2">
// //                             <h4 className="font-semibold">Items:</h4>
// //                             <ul className="space-y-2">
// //                               {order.cartItems.map((item, index) => (
// //                                 <li
// //                                   key={index}
// //                                   className="flex items-center gap-2"
// //                                 >
// //                                   <span>{item.name}</span>
// //                                   {item.image && (
// //                                     <Image
// //                                       src={urlFor(item.image).url()}
// //                                       alt={item.name}
// //                                       width={100}
// //                                       height={100}
// //                                       className="rounded"
// //                                     />
// //                                   )}
// //                                 </li>
// //                               ))}
// //                             </ul>
// //                           </div>
// //                         </td>
// //                       </tr>
// //                     )}
// //                   </React.Fragment>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </div>
// //     </ProtectedRoute>
// //   );
// // }

// "use client";

// import ProtectedRoute from "@/app/protect/page";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import Swal from "sweetalert2";

// interface Order {
//   id: string;
//   firstName: string;
//   lastName: string;
//   phone: number;
//   email: string;
//   address: string;
//   city: string;
//   postalCode: string;
//   total: number;
//   discount: number;
//   orderDate: string;
//   status: string | null;
//   cartItems: { name: string; image: string }[];
// }

// export default function AdminDashboard() {
//   const [orders, setOrders] = useState<Order[]>([]);
//   const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
//   const [filter, setFilter] = useState("All");

//   // Fetch orders from Sanity on mount
//   useEffect(() => {
//     client
//       .fetch(
//         `*[_type == "order"]{
//           _id,
//           firstName,
//           lastName,
//           phone,
//           email,
//           address,
//           city,
//           postalCode,
//           total,
//           discount,
//           orderDate,
//           status,
//           "cartItems": cartItems[] -> {
//             name,
//             image
//           }
//         }`
//       )
//       .then((data) => {
//         // Map _id to id for easier reference and force cartItems to be an empty array if missing.
//         const mappedData = (data || []).map((order: any) => ({
//           id: order._id,
//           ...order,
//           cartItems: order.cartItems || [],
//         }));
//         setOrders(mappedData);
//       })
//       .catch((error) => console.log("Error fetching orders", error));
//   }, []);

//   // Filter orders based on the selected filter
//   const filteredOrders =
//     filter === "All"
//       ? orders
//       : orders.filter((order) => order.status === filter);

//   // Toggle display of order details
//   const toggleOrderDetails = (orderId: string) => {
//     setSelectedOrderId((prev) => (prev === orderId ? null : orderId));
//   };

//   // Handle order deletion
//   const handleDelete = async (orderId: string) => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     });
//     if (!result.isConfirmed) return;
//     try {
//       await client.delete(orderId);
//       setOrders((prevOrders) =>
//         prevOrders.filter((order) => order.id !== orderId)
//       );
//       Swal.fire("Deleted!", "The order has been deleted.", "success");
//     } catch (error) {
//       Swal.fire("Error!", "Failed to delete order", "error");
//       console.log(error);
//     }
//   };

//   // Handle status change of an order
//   const handleStatusChange = async (orderId: string, newStatus: string) => {
//     try {
//       await client.patch(orderId).set({ status: newStatus }).commit();
//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order.id === orderId ? { ...order, status: newStatus } : order
//         )
//       );
//       if (newStatus === "dispatch") {
//         Swal.fire(
//           "Order Dispatched",
//           "The order has been dispatched.",
//           "success"
//         );
//       } else if (newStatus === "success") {
//         Swal.fire(
//           "Order Delivered",
//           "The order has been delivered.",
//           "success"
//         );
//       }
//     } catch (error) {
//       Swal.fire("Error!", "Failed to update order", "error");
//       console.log(error);
//     }
//   };

//   return (
//     <ProtectedRoute>
//       <div className="flex flex-col min-h-screen bg-gray-100">
//         {/* Navbar */}
//         <nav className="bg-red-600 text-white p-4 shadow-lg flex flex-col md:flex-row justify-between items-center">
//           <h2 className="text-3xl font-bold">Admin Dashboard</h2>
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             {["All", "pending", "dispatch", "success"].map((status) => (
//               <button
//                 key={status}
//                 onClick={() => setFilter(status)}
//                 className={`px-4 py-2 rounded-lg ${
//                   filter === status
//                     ? "bg-white text-red-600 font-bold"
//                     : "bg-red-600 text-white"
//                 }`}
//               >
//                 {status.charAt(0).toUpperCase() + status.slice(1)}
//               </button>
//             ))}
//           </div>
//         </nav>

//         {/* Orders Table */}
//         <div className="flex-1 p-6 overflow-x-auto overflow-y-auto">
//           <div className="bg-white rounded-lg shadow overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   {[
//                     "ID",
//                     "Customer",
//                     "Address",
//                     "Date",
//                     "Total",
//                     "Status",
//                     "Actions",
//                   ].map((header) => (
//                     <th
//                       key={header}
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       {header}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredOrders.map((order) => (
//                   <React.Fragment key={order.id}>
//                     <tr
//                       onClick={() => toggleOrderDetails(order.id)}
//                       className="bg-gray-50 hover:bg-red-100 transition-all cursor-pointer"
//                     >
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                         {order.id}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                         {order.firstName} {order.lastName}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                         {order.address}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                         {new Date(order.orderDate).toLocaleDateString()}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                         ${order.total}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                         <select
//                           value={order.status || ""}
//                           onChange={(e) =>
//                             handleStatusChange(order.id, e.target.value)
//                           }
//                           className="bg-gray-100 rounded p-1"
//                         >
//                           <option value="pending">Pending</option>
//                           <option value="dispatch">Dispatched</option>
//                           <option value="success">Delivered</option>
//                         </select>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm">
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleDelete(order.id);
//                           }}
//                           className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                     {selectedOrderId === order.id && (
//                       <tr>
//                         <td colSpan={7} className="bg-gray-100 p-4">
//                           <h3 className="font-bold mb-2">Order Details</h3>
//                           <p>
//                             <strong>Phone:</strong> {order.phone}
//                           </p>
//                           <p>
//                             <strong>Email:</strong> {order.email}
//                           </p>
//                           <p>
//                             <strong>City:</strong> {order.city}
//                           </p>
//                           <div className="mt-2">
//                             <h4 className="font-semibold">Items:</h4>
//                             <ul className="space-y-2">
//                               {(order.cartItems || []).map((item, index) => (
//                                 <li
//                                   key={index}
//                                   className="flex items-center gap-2"
//                                 >
//                                   <span>{item.name}</span>
//                                   {item.image && (
//                                     <Image
//                                       src={urlFor(item.image).url()}
//                                       alt={item.name}
//                                       width={100}
//                                       height={100}
//                                       className="rounded"
//                                     />
//                                   )}
//                                 </li>
//                               ))}
//                             </ul>
//                           </div>
//                         </td>
//                       </tr>
//                     )}
//                   </React.Fragment>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </ProtectedRoute>
//   );
// }
