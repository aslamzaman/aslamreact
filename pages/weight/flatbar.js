import React, { useState } from "react";
import { Container, Row, Col, Button, Form,Modal } from "react-bootstrap";
import Header from "../../components/layout/Header";
import {asLib} from "../../util/asLib";

const Flatbar = () => {
    const [total, setTotal] = useState(100);
    const [opt, setOpt] = useState("1");

    const [flatWidth, setFlatWidth] = useState("1.5");
    const [lblWidth, setLblWidth] = useState("Width (inch)");

    const [flatDepth, setFlatDepth] = useState("1");
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
            setFlatWidth("1.5");
            setLblWidth("Width (inch)");
            setFlatDepth("1");
            setLblDepth("Depth (#)");
        } else {
            setFlatWidth("38.1");
            setLblWidth("Width (mm)");
            setFlatDepth("3.17");
            setLblDepth("Depth (mm)");
        }
    }

    const fpsResult = () => {
        let l = parseFloat(total);
        let w = parseFloat(flatWidth) / 12;
        let d = (parseFloat(flatDepth) / 8) / 12;
        let t = (l * w * d);
        let wt = t * 222.287036276678;
        setResult(wt.toFixed(2) + "kg @ " + (asLib.construction.price.flatbar).toFixed(2) + " = Tk." + (wt * asLib.construction.price.flatbar).toFixed(2));
    }

    const mksResult = () => {
        let l = parseFloat(total);
        let w = parseFloat(flatWidth) / 1000;
        let d = parseFloat(flatDepth) / 1000;
        let t = (l * w * d);
        let wt = t * 7850;
        setResult(wt.toFixed(2) + "kg @ " + (asLib.construction.price.flatbar).toFixed(2) + " = Tk." + (wt * asLib.construction.price.flatbar).toFixed(2));
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
            <Header Title="Flatbar Weight" />
            <Container>
                <Row>
                    <Col xs={12} lg={2}>
                    </Col>

                    <Col xs={12} lg={8}>
                        <div style={{ padding: "20px", backgroundColor: "#ABEBC6", border: "1px solid gray", borderRadius: "10px", boxShadow: "2px 2px 15px gray" }}>

                            <Form>
                            <Row>
                                <Col>
                                    <Form.Label>Total Length</Form.Label>
                                </Col>
                            </Row>
                                <Row>
                                    <Col xs={6}>
                                        <Form.Group>                                            
                                            <Form.Control type="text" onChange={(e) => { setTotal(e.target.value) }} value={total} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={6}>
                                        <Form.Group>                                           
                                            <Form.Select onChange={optChangeHanlar} value={opt}>
                                                <option value="1">Feet</option>
                                                <option value="2">Meter</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: "10px" }}>
                                    <Col xs={5}>
                                        <Form.Group>
                                            <Form.Label>{lblWidth}</Form.Label>
                                            <Form.Control type="text" onChange={(e) => { setFlatWidth(e.target.value) }} value={flatWidth} />
                                        </Form.Group>
                                    </Col>
                                    <Col xs={5}>
                                        <Form.Group>
                                            <Form.Label>{lblDepth}</Form.Label>
                                            <Form.Control type="text" onChange={(e) => { setFlatDepth(e.target.value) }} value={flatDepth} />
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
                    <Modal.Title>Total Flat Bar</Modal.Title>
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

export default Flatbar;