import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="p-4 rounded-3xl    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <Image
        src={product.image}
        alt={product.name}
        height={400}
        width={400}
        className=" rounded-lg mb-4 object-contain"
      />
      <h4 className="text-lg font-semibold">{product.name}</h4>
      <p className="text-gray-700">${product.price}</p>
    </div>
  );
}
