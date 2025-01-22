// import { defineQuery } from "next-sanity";

// export const allProducts = defineQuery(`
//   *[_type == "product"] {
//     _id,
//     title,
//     discountPercentage,
//     priceWithoutDiscount,
//     description,
//     price,
//     rating,
//     tags,
//     "imageUrl": image.asset->url
//   }
// `);



// export const NewArrivalProducts  = defineQuery(`
  
//   *[_type == "product" && "new arrival" in tags]{
//   _id,
//   name,
//   description,
//   price,
//   discountPercentage,
//   priceWithoutDiscount,
//   rating,
//   ratingCount,
//   category->{
//     _id,
//     title
//   },
//   tags,
//   sizes,
//   "imageUrl": image.asset->url
// }`)
// export const TopSellingProducts  = defineQuery(`
  
//   *[_type == "product"][3..6] {
//     _id,
//     title,
//     price,
//     "slug": slug.current,
//     rating
//     "image": image.asset->url,
//   }`)

  
export const getAllProducts = `*[_type == "products"]{
  _id,
  name,
  price,
  description,
  image,
  category,
  discountPercent,
  new,
  colors,
  sizes
}`

export const getProductById = `*[_type == "products" && _id == $id][0]{
  _id,
  name,
  price,
  description,
  image,
  category,
  discountPercent,
  new,
  colors,
  sizes
}`

export const getNewArrivals = `*[_type == "products" && new == true]{
  _id,
  name,
  price,
  description,
  image,
  category,
  discountPercent,
  new,
  colors,
  sizes
}`