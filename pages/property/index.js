import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Modal, Table } from "react-bootstrap";
import Header from "../../components/layout/Header";

import { asLib } from "../../util/asLib";


const PropertyPage = () => {
  const [s1, setS1] = useState("4.72");
  const [s2, setS2] = useState("5.28");
  const [d, setD] = useState("50");
  const [opt, setOpt] = useState("0");

  const [share1, setShare1] = useState("0");
  const [share2, setShare2] = useState("0");
  const [developer, setDeveloper] = useState("0");
  const [total, setTotal] = useState("0");



  // ---------------------------------------------------------
  const [result1, setResult1] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");
  const [result4, setResult4] = useState("");
  const [result5, setResult5] = useState("");
  const [result6, setResult6] = useState("");


  const [modalShow, setModalShow] = useState(false);


  const calculateHandler = () => {
    setModalShow(true);

    let land = asLib.rajuk.conv_sft(s1, s2, d, opt);
    let mgc = asLib.rajuk.get_mgc(s1, s2, d, opt);
    let share = asLib.rajuk.shareing(s1, s2, d, opt);


    console.log(share);
    setResult1(`FAR = ${mgc.result_far.toFixed(2)}; MGC (Maximum Ground Coverage) = ${mgc.result_mgc_ratio.toFixed(2)}%; Land area = ${land.toFixed(2)}sft.`);
    setResult2(`MBA (Maximum Building Area) = (FAR x Land area) = ${mgc.result_mgc.toFixed(2)}sft.;`)

    setResult3(`Allowable ground coverage (Land area x MGC) = ${(land * (mgc.result_mgc_ratio / 100)).toFixed(2)}sft.`)

    setResult4(`Maximum floor (without ground floor):`);

    setResult5(` = (MBA ÷ Allowable ground coverage)`);
    setResult6(`= ${(mgc.result_mgc / (land * (mgc.result_mgc_ratio / 100))).toFixed(2)}nos.`);


    setShare1(share.share1_sft.toFixed(2));
    setShare2(share.share2_sft.toFixed(2));
    setDeveloper(share.developer_sft.toFixed(2));
    setTotal((share.share1_sft+share.share2_sft + share.developer_sft).toFixed(2));

  }
  //--------------------------------------------------------------

  const ModalCloseHandler = () => {
    setModalShow(false);
  }



  return (
    <div>
      <Header title="Property Sharing" />
      <Container fluid>
        <Row>
          <Col xs={6} sm={3}>
            <Form.Group>
              <Form.Label>Share1</Form.Label>
              <Form.Control type="text" onChange={(e) => { setS1(e.target.value); }} value={s1} />
            </Form.Group>
          </Col>
          <Col xs={6} sm={3}>
            <Form.Group>
              <Form.Label>Share2</Form.Label>
              <Form.Control type="text" onChange={(e) => { setS2(e.target.value); }} value={s2} />
            </Form.Group>
          </Col>
          <Col xs={6} sm={3}>
            <Form.Group>
              <Form.Label>Developer (%)</Form.Label>
              <Form.Control type="text" onChange={(e) => { setD(e.target.value); }} value={d} />
            </Form.Group>
          </Col>
          <Col xs={6} sm={3}>
            <Form.Group>
              <Form.Label>&nbsp;</Form.Label>
              <Form.Select onChange={(e) => { setOpt(e.target.value); }} value={opt}>
                <option value="0">Decimal</option>
                <option value="1">Katha</option>
                <option value="2">Sft</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} className="mt-4">
            <Button variant="success" className="me-1" onClick={calculateHandler}>Calculate</Button>
          </Col>
        </Row>
      </Container>


      <Modal size="lg" show={modalShow} onHide={ModalCloseHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Result as per Rajuk&#39;s building code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {result1}<hr />
          {result2}<hr />
          {result3}<hr />
          <strong>{result4}</strong><br />
          {result5}<br />
          <strong>{result6}</strong><hr />
          <Table className="table table-hover">
            <thead>
              <tr>
                <th className="text-center">#</th>
                <th className="text-left">Description</th>
                <th className="text-end">MBA(SFT)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td className="text-left">Share - 1</td>
                <td className="text-end">{share1}</td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td className="text-left">Share - 2</td>
                <td className="text-end">{share2}</td>
              </tr>
              <tr>
                <td className="text-center">3</td>
                <td className="text-left">Developer</td>
                <td className="text-end">{developer}</td>
              </tr>
              <tr>
                <td className="text-center"></td>
                <td className="text-left"><strong>Total</strong></td>
                <td className="text-end"><strong>{total}</strong></td>
              </tr>
            </tbody>
          </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" className="me-1" onClick={ModalCloseHandler}>Close</Button>
        </Modal.Footer>
      </Modal>



    </div>
  );

};
export default PropertyPage;
