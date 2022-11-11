import React, { useEffect, useState } from 'react';
import Header from '../../components/layout/Header';
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import {asLib} from "../../util/asLib";
import ConstructionResult from "../../components/construction/ConstructionResult";


const PlasterWorks = () => {
    const [items, setItems] = useState({});
    const [works, setWorks] = useState(100);
    const [r1, setR1] = useState(1);
    const [r2, setR2] = useState(4);
    const [depth, setDepth] = useState(1);
    const [depthString, setDepthString] = useState("inch");
    const [opt, setOpt] = useState("sft");
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        if (opt === "sft") {
            setDepthString("inch");
            setDepth(1);
        } else {
            setDepthString("mm")
            setDepth(25.4);
        }
    }, [opt]);



    const modalCloseHandler = () => {
        setModalShow(false);
    }


    const resultHandler =  () => {
        setModalShow(true);
        let x = eval(works);
        let cement = 0;
        let sand = 0;

        if (opt === "sft") {
            let ratio = (parseFloat(r1) + parseFloat(r2));
            let worksWt = (parseFloat(x) * (depth / 12) * 1.5);
    
            cement = (((worksWt / ratio) * parseFloat(r1)) / 1.25);
            sand = ((worksWt / ratio) * parseFloat(r2));
        }
        else {
            let ratio = (parseFloat(r1) + parseFloat(r2));
            let worksWt = (parseFloat(x) * (depth / 1000) * 1.5);
            cement = ((((worksWt / ratio) * parseFloat(r1)) * 35.3147) / 1.25);
            sand = ((worksWt / ratio) * parseFloat(r2));
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
                rate: opt === "sft"?parseFloat(asLib.construction.price.sand).toFixed(2):(parseFloat(asLib.construction.price.sand)*35.3147).toFixed(2),
                total: opt === "sft"?(parseFloat(asLib.construction.price.sand) * sand).toFixed(2):(parseFloat(asLib.construction.price.sand) * sand*35.3147).toFixed(2)
            }
        ]);



    }

    return (
        <div>
            <Header Title="Plaster Works" />
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
                                        <Form.Control type="text" onChange={(e) => { setWorks(e.target.value); }} value={works} />
                                    </Form.Group>
                                </Col>
                                <Col xs={4}>
                                    <Form.Group>
                                        <Form.Label>&nbsp;</Form.Label>
                                        <Form.Select onChange={(e) => { setOpt(e.target.value); }} value={opt}>
                                            <option value="sft">SFT</option>
                                            <option value="m2">M2</option>
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
                                <Form.Label>Depth ({depthString})</Form.Label>
                                </Col>
                            </Row>
                            <Row>                               
                                <Col xs="4">
                                <Form.Group>
                                        <Form.Control type="text" onChange={(e) => { setDepth(e.target.value); }} value={depth} />
                                    </Form.Group>
                                </Col>                            
                            </Row>

                            <Button variant="primary" className="mt-4 mb-4" onClick={resultHandler} >Calculate</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>

            <Modal size="lg" show={modalShow} onHide={modalCloseHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Plaster Works</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ConstructionResult data={items} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={modalCloseHandler}>Close</Button>
                </Modal.Footer>
            </Modal>


        </div>

    )

}

export default PlasterWorks;