import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import Header from "../../components/layout/Header";
import {asLib} from "../../util/asLib";

const Rod = () => {
    const [total, setTotal] = useState(100);
    const [opt, setOpt] = useState("1");
    const [dia, setDia] = useState("3");
    const [lblDia, setLblDia] = useState("Dia (#)");
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
        if( e.target.value === "1"){
            setLblDia("Dia (#)");
            setDia(3);
        }else{
            setLblDia("Dia (mm)");
            setDia(9);
        }
    }

    const fpsResult = ()=>{
        let l = parseFloat(total);
        let d = ((parseFloat(dia)/8)/12);
        let t = (((22/7)*d*d)/4)*l;
        let w = t*222.287036276678;
        setResult(w.toFixed(2) + "kg @ " + (asLib.construction.price.rod).toFixed(2) + " = Tk." + (w*asLib.construction.price.rod).toFixed(2));
    } 

    const mksResult = ()=>{
        let l = parseFloat(total);
        let d = parseFloat(dia)/1000;
        let t = (((22/7)*d*d)/4)*l;
        let w = t*7850;
        setResult(w.toFixed(2) + "kg @ " + (asLib.construction.price.rod).toFixed(2) + " = Tk." + (w*asLib.construction.price.rod).toFixed(2));
    } 
    
    const calculateHandler = () => {
        setModalShow(true);
        if(opt==="1"){
           fpsResult();
        }else{
            mksResult();
        }
    }


    return (
        <div>
            <Header Title="Rod Weight" />
            <Container>
                <Row>
                    <Col xs={12} lg={2}>
                    </Col>

                    <Col xs={12} lg={8}>

                        <div style={{ padding: "20px", backgroundColor: "#EAECEE", border: "1px solid gray", borderRadius: "10px", boxShadow: "2px 2px 15px gray" }}>

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
                                            <Form.Label>{lblDia}</Form.Label>
                                            <Form.Control type="text" onChange={(e) => { setDia(e.target.value) }} value={dia} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="primary" className="mt-3" onClick={calculateHandler}>Calculate</Button>
                            </Form>
                            <hr />                           
                        </div>
                    </Col>

                    <Col xs={12} lg={2}>
                    </Col>
                </Row>
            </Container>
            <Modal size="lg" show={modalShow} onHide={modalCloseHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Rod Weight</Modal.Title>
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

export default Rod;