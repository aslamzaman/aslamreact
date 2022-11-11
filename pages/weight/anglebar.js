import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import Header from "../../components/layout/Header";
import { asLib } from "../../util/asLib";

const Anglebar = () => {
    const [total, setTotal] = useState(100);
    const [opt, setOpt] = useState("1");

    const [Width1, setWidth1] = useState("1.5");
    const [Width2, setWidth2] = useState("1.5");

    const [lblWidth, setLblWidth] = useState("Size (inch x inch)");

    const [angleDepth, setAngleDepth] = useState("1.5");
    const [lblDepth, setLblDepth] = useState("Depth (#)");

    const [result, setResult] = useState("Result");

    const [modalShow, setModalShow] = useState(false);
    const modalShowHandler = () => {
        setModalShow(true);
    }
    const modalCloseHandler = () => {
        setModalShow(false);
    }

    const optChangeHanlar = (e) => {
        setOpt(e.target.value);
        if (e.target.value === "1") {
            setWidth1("1.5");
            setWidth2("1.5");
            setLblWidth("Size (inch × inch)");
            setAngleDepth("1.5");
            setLblDepth("Depth (#)");
        } else {
            setWidth1("38");
            setWidth2("38");
            setLblWidth("Size (mm × mm)");
            setAngleDepth("38");
            setLblDepth("Depth (mm)");
        }
    }

    const fpsResult = () => {
        let l = parseFloat(total);
        let w1 = parseFloat(Width1) / 12;
        let w2 = parseFloat(Width2) / 12;
        let d = (parseFloat(angleDepth) / 8) / 12;
        let w3 = (w1 + w2 - d)
        let t = (l * w3 * d);
        let wt = t * 222.287036276678;
        setResult(wt.toFixed(2) + "kg @ " + (asLib.construction.price.anglebar).toFixed(2) + " = Tk." + (wt * asLib.construction.price.anglebar).toFixed(2));
    }

    const mksResult = () => {
        let l = parseFloat(total);
        let w1 = parseFloat(Width1) / 1000;
        let w2 = parseFloat(Width2) / 1000;
        let d = parseFloat(angleDepth) / 1000;
        let w3 = (w1 + w2 - d)
        let t = (l * w3 * d);
        let wt = t * 7850;
        setResult(wt.toFixed(2) + "kg @ " + (asLib.construction.price.anglebar).toFixed(2) + " = Tk." + (wt * asLib.construction.price.anglebar).toFixed(2));
    }
    const calculateHandler = () => {
        setModalShow(true);
        if (opt === "1") {
            fpsResult();
        } else {
            mksResult();
        }
    }


    return (
        <div>
            <Header Title="Angle Bar Weight" />
            <Container>
                <Row>
                    <Col xs={12} lg={2}>
                    </Col>
                    <Col xs={12} lg={8}>
                        <div style={{ padding: "20px", backgroundColor: "#EAECEE", border: "1px solid gray", borderRadius: "10px", boxShadow: "2px 2px 15px gray" }}>
                            <Form>
                                <Row>
                                    <Col xs={7}>
                                        <Form.Group>
                                            <Form.Label>Total Length</Form.Label>
                                            <Form.Control type="text" onChange={(e) => { setTotal(e.target.value) }} value={total} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={5}>
                                        <Form.Group>
                                            <Form.Label>&nbsp;</Form.Label>
                                            <Form.Select onChange={optChangeHanlar} value={opt}>
                                                <option value="1">Feet</option>
                                                <option value="2">Meter</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: "10px" }}>
                                    <Col>
                                        <Form.Label>{lblWidth}</Form.Label>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: "10px" }}>
                                    <Col xs={4}>
                                        <Form.Group>
                                            <Form.Control type="text" onChange={(e) => { setWidth1(e.target.value) }} value={Width1} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={4}>
                                        <Form.Group>
                                            <Form.Control type="text" onChange={(e) => { setWidth2(e.target.value) }} value={Width2} />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row style={{ marginTop: "10px" }}>
                                    <Col>
                                    <Form.Label>{lblDepth}</Form.Label>
                                    </Col>
                                </Row>

                                <Row style={{ marginTop: "10px" }}>
                                    <Col xs={4}>
                                        <Form.Group>                                           
                                            <Form.Control type="text" onChange={(e) => { setAngleDepth(e.target.value) }} value={angleDepth} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="primary" className="mt-3" onClick={calculateHandler}>Calculate</Button>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={12} lg={2}>
                    </Col>
                </Row>
            </Container>

            <Modal size="lg" show={modalShow} onHide={modalCloseHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Total Angle Bar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className="text-secondary mt-4">{result}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={modalCloseHandler}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Anglebar;