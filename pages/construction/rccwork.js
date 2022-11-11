import React, { useState } from "react";
import Header from "../../components/layout/Header";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import {asLib} from "../../util/asLib";
import ConstructionResult from "../../components/construction/ConstructionResult";

const RccWork = () => {
    const [items, setItems] = useState({});
    const [w, setW] = useState("100");
    const [cft, setCft] = useState('1');
    const [r1, setR1] = useState('1');
    const [r2, setR2] = useState('3');
    const [r3, setR3] = useState('6');
    const [rod, setRod] = useState('1.5');


    const [modalShow, setModalShow] = useState(false);
    const modalCloseHandler = () => {
        setModalShow(false);
    }


    const resultHandler = async () => {
        setModalShow(true);
        let x = eval(w);
        let ratio = 0;
        let cement = 0;
        let sand = 0;
        let khoa = 0;
        let rd = 0;

        if (cft === "1") {
            ratio = parseFloat(r1) + parseFloat(r2) + parseFloat(r3);
            cement = (((x * 1.5) / ratio) * r1) / 1.25;
            sand = ((x * 1.5) / ratio) * r2;
            khoa = ((x * 1.5) / ratio) * r3;
            rd = x * (parseFloat(rod) / 100) * 222.5056689342404;
        }
        else {
            ratio = parseFloat(r1) + parseFloat(r2) + parseFloat(r3);
            cement = (((x * 35.3147 * 1.5) / ratio) * r1) / 1.25;
            sand = ((x * 1.5) / ratio) * r2;
            khoa = ((x * 1.5) / ratio) * r3;
            rd = x * (parseFloat(rod) / 100) * 7850;
        }

        setItems([
            {
                name: "Cement",
                qty: cement.toFixed(2),
                rate: parseFloat(asLib.construction.price.cement).toFixed(2),
                total: (parseFloat(asLib.construction.price.cement) * cement).toFixed(2)
            },
            {
                name: "Sand",
                qty: sand.toFixed(2),
                rate: cft === "1"?parseFloat(asLib.construction.price.sand).toFixed(2):(parseFloat(asLib.construction.price.sand)*35.3147).toFixed(2),
                total:cft === "1"?(parseFloat(asLib.construction.price.sand) * sand).toFixed(2):(parseFloat(asLib.construction.price.sand) * sand*35.3147).toFixed(2)
            },
            {
                name: "Khoa",
                qty: khoa.toFixed(2),
                rate: cft === "1"?parseFloat(asLib.construction.price.khoa).toFixed(2):(parseFloat(asLib.construction.price.khoa)*35.3147).toFixed(2),
                total: cft === "1"?(parseFloat(asLib.construction.price.khoa) * khoa).toFixed(2):(parseFloat(asLib.construction.price.khoa) * khoa *35.3147).toFixed(2)
            },
            {
                name: "Rod",
                qty: rd.toFixed(2),
                rate: parseFloat(asLib.construction.price.rod).toFixed(2),
                total: (parseFloat(asLib.construction.price.rod) * rd).toFixed(2)
            }
        ]);


    }


    return (

        <div>
            <Header Title="RCC Works" />

            <Container>
                <Row>
                    <Col>
                        <h3>Works</h3>
                        <hr />
                        <Form>
                            <Row>
                                <Col xs={8}>
                                    <Form.Group>
                                        <Form.Label>Total Works</Form.Label>
                                        <Form.Control type="text" onChange={(e) => { setW(e.target.value); }} value={w} />
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>

                                    <Form.Group>
                                        <Form.Label>&nbsp;</Form.Label>
                                        <Form.Select onChange={(e) => { setCft(e.target.value); }} value={cft}>
                                            <option value="0">m3</option>
                                            <option value="1">cft</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Ratio</Form.Label>
                                        <Form.Control type="text" onChange={(e) => { setR1(e.target.value); }} value={r1} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>&nbsp;</Form.Label>
                                        <Form.Control type="text" onChange={(e) => { setR2(e.target.value); }} value={r2} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>&nbsp;</Form.Label>
                                        <Form.Control type="text" onChange={(e) => { setR3(e.target.value); }} value={r3} />
                                    </Form.Group>
                                </Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Rod %</Form.Label>
                                        <Form.Control type="text" onChange={(e) => { setRod(e.target.value); }} value={rod} />
                                    </Form.Group>
                                </Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                            <Button variant="primary" className="mt-4 mb-4" onClick={resultHandler}>Calculate</Button>
                        </Form>

                    </Col> {/* ----./col-md-6 shadow p-3 mb-5 bg-body rounded----- */}
                </Row>
            </Container> {/* ----./container----- */}
            <Modal size="lg" show={modalShow} onHide={modalCloseHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>RCC Works</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ConstructionResult data={items} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={modalCloseHandler}>Close</Button>
                </Modal.Footer>
            </Modal> 
        </div>
    );
};

export default RccWork;
