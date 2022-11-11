import React, { useState } from "react";
import Header from "../../components/layout/Header";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import {asLib} from "../../util/asLib";
import ConstructionResult from "../../components/construction/ConstructionResult";



const BrickWork = () => {
    const [items, setItems] = useState({});

    const [w, setW] = useState("100");
    const [cft, setCft] = useState('1');
    const [r1, setR1] = useState('1');
    const [r2, setR2] = useState('5');


    const [modalShow, setModalShow] = useState(false);
    const modalShowHandler = () => {
        setModalShow(true);
    }
    const modalCloseHandler = () => {
        setModalShow(false);
    }

    const resultHandler = () => {
        setModalShow(true);
        let x = eval(w);
        let brick = 0;
        let cement = 0;
        let sand = 0;
        let sandRate = 0;

        let newW = parseFloat(x) * 0.30 * 1.5;
        let r = parseFloat(r1) + parseFloat(r2);

        if (cft === "1") {
            brick = parseFloat(x) * 12;
            cement = ((newW / r) * parseFloat(r1)) / 1.25;
            sand = (newW / r) * parseFloat(r2);
            sandRate = parseFloat(asLib.construction.price.sand);
        }
        else {
            brick = parseFloat(x) * 12 * 35.3147;
            cement = ((newW / r) * parseFloat(r1) * 35.3147) / 1.25;
            sand = (newW / r) * parseFloat(r2);
            sandRate = parseFloat(asLib.construction.price.sand) * 35.3147;
        }

        setItems([
            {
                name: "Brick",
                qty: brick.toFixed(2),
                rate: parseFloat(asLib.construction.price.brick).toFixed(2),
                total: (parseFloat(asLib.construction.price.brick) * brick).toFixed(2)
            },
            {
                name: "Cement",
                qty: cement.toFixed(2),
                rate: parseFloat(asLib.construction.price.cement).toFixed(2),
                total: (parseFloat(asLib.construction.price.cement) * cement).toFixed(2)
            },
            {
                name: "Sand",
                qty: sand.toFixed(2),
                rate: sandRate.toFixed(2),
                total: (sandRate * sand).toFixed(2)
            }
        ]);
    }

    return (
        <div>

            <Header Title="Brick Works" />

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

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button variant="primary" className="mb-4 mt-4" onClick={resultHandler}>Calculate</Button>

                                </Col>
                            </Row>
                        </Form>

                    </Col>
                </Row> {/* ----./row----- */}
            </Container> {/* ----./container----- */}

            <Modal size="lg" show={modalShow} onHide={modalCloseHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Brick Works</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ConstructionResult data={items} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={modalCloseHandler}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div >
    );
};

export default BrickWork;
