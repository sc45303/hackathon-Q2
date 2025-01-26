// import { groq } from "next-sanity";

import { defineType } from "sanity"

// export const allProducts = groq `*[_type == "product" ]`;
// export const four = groq `*[_type == "product"][0...4]`;


export default defineType  ({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "customerEmail",
      title: "Customer Email",
      type: "string",
    },
    {
      name: "customerPhone",
      title: "Customer Phone",
      type: "string",
    },
    {
      name: "customerAddress",
      title: "Customer Address",
      type: "text",
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "productName",
              title: "Product Name",
              type: "string",
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
            },
            {
              name: "price",
              title: "Price",
              type: "number",
            },
          ],
        },
      ],
    },
    {
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
    },
  ],
});
