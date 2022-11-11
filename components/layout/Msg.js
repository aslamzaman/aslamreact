import React from "react";
import { Container, Row, Col, Button, Form, Table, Modal } from "react-bootstrap";

const Msg = (props) => {
  const Message = props.Msg;

  return (
    <Container fluid>
      <Row>
        <Col>
          <p className="text-primary pt-2">{Message}</p>
        </Col>
      </Row>
    </Container>

  )
}
export default Msg;
