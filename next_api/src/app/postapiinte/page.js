"use client";

import { Button, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import style from "../../style/outstyle.module.css";
import { useRouter } from "next/navigation";

export default function PostApiIntePage() {
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [form] = Form.useForm();
  const router = useRouter();

  const handleSubmit = async () => {
    let data = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile, company, color, price }),
    });
    data = await data.json();
    console.log(data);
    if (data.success) {
      alert("Product added Successfully");
      router.push("/productdeatils");
      form.resetFields();
    } else {
      alert("Failed to add product");
    }
  };

  return (
    <div>
      <h1 className="text-center">Post API Integration Page</h1>
      <div className="container">
        <div className="row ">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            className="m-4 "
          >
            <h4>Add Product Deatils:</h4>
            <Row gutter={20}>
              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  name="mobile"
                  label="Enter Mobile Name"
                  required
                  rules={[
                    { required: true, message: "Please Enter The Mobile Name" },
                  ]}
                >
                  <Input
                    type="text"
                    placeholder="Enter Mobile Name"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  name="company"
                  label="Enter Company Name"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please Enter the Company Name",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    placeholder="Enter Compnay Name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  name="color"
                  label="Enter Color"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Enter the color of the mobile",
                    },
                  ]}
                >
                  <Input
                    type="text"
                    placeholder="Enter Color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  name="price"
                  label="Enter Price"
                  required
                  rules={[
                    { required: true, message: "Enter Price of the mobile" },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>
            <div className="d-flex justify-content-center gap-4">
              <Button className={style.submitbutton} htmlType="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
