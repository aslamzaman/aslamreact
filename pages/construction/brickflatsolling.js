import React, { useState } from "react";
import Header from "../../components/layout/Header";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import ConstructionResult from "../../components/construction/ConstructionResult";
import {asLib} from "../../util/asLib";


const BrickFlatSolling = () => {
    const [items, setItems] = useState({});

    const [w, setW] = useState("100");
    const [sft, setSft] = useState('1');

    const [modalShow, setModalShow] = useState(false);
    const modalShowHandler = () => {
        setModalShow(true);
    }
    const modalCloseHandler = () => {
        setModalShow(false);
    }

    const resultHandler = async () => {
        setModalShow(true);
        let x = eval(w);
        let brick = 0;
        let sand = 0;
        let sandRate = 0;

        if (sft === "1") {
            brick = parseFloat(x * 3);
            sand = (x * 0.05);
            sandRate = parseFloat(asLib.construction.price.sand);
        }
        else {
            brick = parseFloat(x * 3 * 10.76);
            sand = (x * 0.05 * 10.76) / 35.31;
            sandRate = parseFloat(asLib.construction.price.sand) * 35.31;
        }

        setItems([
            {
                name: "Brick",
                qty: brick.toFixed(2),
                rate: parseFloat(asLib.construction.price.brick).toFixed(2),
                total: (parseFloat(asLib.construction.price.brick) * brick).toFixed(2)
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
            <Header Title="Brick Flat Solling" />
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
                                        <Form.Control type="text" onChange={(e) => { setW(e.target.value); }} className="form-control" value={w} />
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group>
                                        <Form.Label>&nbsp;</Form.Label>
                                        <Form.Select onChange={(e) => { setSft(e.target.value); }} value={sft}>
                                            <option value="0">m2</option>
                                            <option value="1">sft</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" className="mt-4 mb-4" onClick={resultHandler}>Calculate</Button>
                        </Form>
                    </Col>  
                </Row>
            </Container>

            <Modal size="lg" show={modalShow} onHide={modalCloseHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Brick Flat Solling</Modal.Title>
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



export default BrickFlatSolling;




