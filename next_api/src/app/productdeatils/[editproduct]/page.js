"use client";

import { Button, Col, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import style from "../../../style/outstyle.module.css";
import { useParams, useRouter } from "next/navigation";

export default function PostApiIntePage() {
  const [mobile, setMobile] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const [form] = Form.useForm();
  const router = useRouter();
  const { editproduct } = useParams();

  const getproductDeatils = async (productId) => {
    let productData = await fetch(
      `http://localhost:3000/api/products/${productId}`
    );
    productData = await productData.json();

    if (productData.success) {
      let result = productData.result;
      setMobile(result.mobile);
      setCompany(result.company);
      setColor(result.color);
      setPrice(result.price);
      form.setFieldsValue(result);
    } else {
      console.log("Data not fetched");
    }
  };

  const updateDetails = async () => {
    let data = await fetch(
      `http://localhost:3000/api/products/${editproduct}`,
      {
        method: "PUT",
        body: JSON.stringify({ mobile, company, color, price }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    data = await data.json();
    if (data.success) {
      alert("Product Updated Successfully");
      console.log(data);
      router.push("/productdeatils");
    } else {
      alert("Error while updating the products");
    }
  };

  useEffect(() => {
    if (!editproduct) return;

    getproductDeatils(editproduct);
  }, [editproduct]);

  return (
    <div>
      <h1 className="text-center">Update API Integration Page</h1>
      <div className="container">
        <div className="row ">
          <Form
            form={form}
            onFinish={updateDetails}
            layout="vertical"
            className="m-4 "
          >
            <h4>Update Product Deatils:</h4>
            <Row gutter={20}>
              <Col xs={24} md={24} lg={8}>
                <Form.Item
                  name="mobile"
                  label="Update Mobile Name"
                  required
                  rules={[
                    { required: true, message: "Please Enter The Mobile Name" },
                  ]}
                >
                  <Input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={24} lg={8}>
                <Form.Item name="company" label="Update Company Name">
                  <Input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={24} lg={8}>
                <Form.Item name="color" label="Update Color">
                  <Input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={24} lg={8}>
                <Form.Item name="price" label="Update Price">
                  <Input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </Form.Item>
              </Col>
            </Row>

            <div className="d-flex justify-content-center gap-4">
              <Button className={style.submitbutton} htmlType="submit">
                Update
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
