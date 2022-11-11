import React, { useState } from "react";
import { Container, Row, Col, Button, Modal, Card } from "react-bootstrap";
import { Image } from "react-bootstrap-icons";
import { asLib } from "../../util/asLib";

const DocDisplay = (props) => {
  const [obj, setObj] = useState([]);

  const [mainModalShow, setMainModalShow] = useState(false);
  let id = props.Id;


  const closeModal = () => {
    setMainModalShow(false);
  }

  const showModal = () => {
    setMainModalShow(true);
    let jsonData = asLib.cmes.doc;
    let getByCat = jsonData.filter(t => t.cat.id === id);
    console.log(getByCat);
    setObj(getByCat);
  }

const imgClickHandler = (ur)=>{
  window.open(ur, "_blank");
}

  return (
    <>
      <Modal size="xl" show={mainModalShow} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Galary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {
                obj.map((o, i) => {
                  return (

                    <Col md={4} className="mb-3">
                      <Card>
                        <Card.Img variant="top" src={o.picurl} alt="doc" height="300px" onClick={()=>{imgClickHandler(o.picurl)}} style={{cursor:"pointer"}} />
                        <Card.Body>
                          <Card.Title>{o.cat.name}</Card.Title>
                          <Card.Text>
                          {o.unit} | {o.dt} <br />
                          <span style={{fontSize:"5px"}}>{o.id}</span>
                          </Card.Text>    
                        </Card.Body>
                      </Card>                     
                    </Col>

                  )
                })
              }
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Button size="sm" variant="success" onClick={showModal} title="Edit"><Image size={15} /></Button>
    </>
  );


};
export default DocDisplay;
