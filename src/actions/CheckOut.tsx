// "use server";

// import { client } from "@/sanity/lib/client";

// interface OrderData {
//   customerName: string;
//   customerEmail: string;
//   customerPhone: string;
//   customerAddress: string;
//   products: Array<{
//     productName: string;
//     quantity: number;
//     price: number;
//   }>;
//   totalAmount: number;
// }

// export const CheckOut = async (cartItems: any[], customerInfo: any) => {
//   const orderData: OrderData = {
//     customerName: customerInfo.name,
//     customerEmail: customerInfo.email,
//     customerPhone: customerInfo.phone,
//     customerAddress: customerInfo.address,
//     products: cartItems.map((item) => ({
//       productName: item.name,
//       quantity: item.quantity,
//       price: item.price,
//     })),
//     totalAmount: cartItems.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0
//     ),
//   };

//   try {
//     const result = await client.create({
//       _type: "order",
//       ...orderData,
//     });
//     console.log("Order created in Sanity:", result);
//     return result;
//   } catch (error) {
//     console.error("Error creating order in Sanity:", error);
//     throw error;
//   }
// };
