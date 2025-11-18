"use client";

import React, { useState } from "react";

export default function UploadImagePage() {
  const [file, setFile] = useState();

  const handlefileSubmit = async (e) => {
    e.preventDefault();
    console.log("file submitted");
    const data = new FormData();
    data.append("file", file);
    let result = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    result = await result.json();
    console.log(result);
    if (result.message) {
      alert(result.message);
    } else {
      alert("File upload failed");
    }
  };

  return (
    <div>
      Upload Image
      <form onSubmit={handlefileSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit">Submit</button>
        <div>
          {file && (
            <img src={URL.createObjectURL(file)} alt="preview" width={200} />
          )}
        </div>
      </form>
    </div>
  );
}
