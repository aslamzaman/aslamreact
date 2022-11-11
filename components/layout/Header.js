import { Container, Row, Col, Button, Table } from "react-bootstrap";

function Header(props) {

  return (
    <Container fluid>
      <Row>
        <Col>
          <div style={{ height: "60px", backgroundColor: "#FAF8F8", color: "#5C65A2", marginBottom: "20px" }}>
            <h1 className="text-center" style={{ fontSize: "40px" }}>{props.Title}</h1>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Header