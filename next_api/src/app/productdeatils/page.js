import Link from "next/link";
import React from "react";
import style from "../../style/outstyle.module.css";
import Deleteuser from "@/lib/Deleteuser";

async function fetchData() {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();
  if (data.success) {
    return data.result;
  } else {
    return { success: false, message: "Error while fetching data" };
  }
}

export default async function PageproductDetails() {
  const mobiledata = [
    {
      id: 1,
      mobile: "Samsung",
      company: "Samsung Pvt Ltd",
      color: "Black",
      price: 25000,
    },
    {
      id: 2,
      mobile: "Iphone",
      company: "Apple Inc",
      color: "White",
      price: 80000,
    },
    {
      id: 3,
      mobile: "OnePlus",
      company: "OnePlus Tech",
      color: "Blue",
      price: 35000,
    },
  ];

  const products = await fetchData();
  console.log("Fetched User Data", products);

  return (
    <div className="justify-content-center">
      <h1 className="text-center">Get Product List</h1>
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Mobile</th>
            <th scope="col">Company</th>
            <th scope="col">Color</th>
            <th scope="col">Price</th>
            <th scope="col">Edit Product</th>
            <th scope="col">Delete Product</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item._id}>
              <th scope="row">{index + 1}</th>
              <td>{item.mobile}</td>
              <td>{item.company}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>
                <Link
                  href={"productdeatils/" + item._id}
                  className={style.submitbutton}
                >
                  Edit
                </Link>
              </td>
              <td>
                <Deleteuser id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
