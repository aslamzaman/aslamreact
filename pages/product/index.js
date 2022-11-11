import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Header from "../../components/layout/Header";
import ProductAdd from "../../components/product/ProductAdd";
import ProductEdit from "../../components/product/ProductEdit";
import ProductDelete from "../../components/product/ProductDelete";
import ProductDownload from "../../components/product/ProductDownload";
import ProductUpload from "../../components/product/ProductUpload";
import ProductPrint from "../../components/product/ProductPrint";
import Msg from "../../components/layout/Msg";


const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [msg, setMsg] = useState("Data ready");


  useEffect(() => {
    const loadData = () => {
      let productData = localStorage.getItem("product");
      if (productData) {
        let jsonData = JSON.parse(productData);
        setProducts(jsonData);
      } else {
        setProducts([]);
      }
    };
    loadData();
  }, [msg]);


  const getMsgHandler = (data) => {
    setMsg(data);
  }


  return (
    <>
      <Header Title="Product" />
      <Msg Msg={msg} />
      <Container fluid>
        <Row>
          <Col>
            <ProductAdd AddMsg={getMsgHandler} />
          </Col>
          <Col className="text-end">
            <ProductPrint PrintMsg={getMsgHandler} />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead className="table-secondary">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Rate</th>
                  <th scope="col">Dt</th>
                  <th scope="col" className="text-end">
                    <ProductDownload DownloadMsg={getMsgHandler} />
                    <ProductUpload UploadMsg={getMsgHandler} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  products.length ? products.map((product) => {
                    return (
                      <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.rate}</td>
                        <td>{product.dt}</td>
                        <td style={{ width: "150px", textAlign: "right" }}>
                          <ProductEdit EditMsg={getMsgHandler} Id={product.id} />
                          <ProductDelete DeleteMsg={getMsgHandler} Id={product.id} />
                        </td>
                      </tr>
                    )
                  })
                    : null
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );


};
export default ProductPage;
