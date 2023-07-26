import { useEffect } from "react";
import AddProducts from "./addProducts";
import DeleteProducts from "./deleteProducts";
import UpdateProducts from "./updateProducts";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
};

async function getProducts() {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductList() {
  const products: Product[] = await getProducts();
  const result = getProducts();
  console.log(result);
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <AddProducts />
      </div>
      <div>
        <button className="btn py-2">
          <Link href="/">Logout</Link>
        </button>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="flex">
                <UpdateProducts {...product} />
                <br />
                <DeleteProducts {...product} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
