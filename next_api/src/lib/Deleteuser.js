"use client";

import React from "react";
import style from "../style/outstyle.module.css";
import { useRouter } from "next/navigation";

export default function Deleteuser(props) {
  let userId = props.id;
  const router = useRouter();
  const handleDeleteUser = async () => {
    let result = await fetch(`http://localhost:3000/api/products/${userId}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result.success) {
      alert("User Deleted Successfully");
      router.refresh();
    } else {
      alert("User Not Deleted");
    }
  };

  return (
    <div>
      <button className={style.submitbutton} onClick={handleDeleteUser}>
        Delete
      </button>
    </div>
  );
}
