import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Table, Modal } from "react-bootstrap";
import Header from "../../components/layout/Header";
import { asLib } from "../../util/asLib";



const LandPage = () => {
  const [lands, setLands] = useState([]);
  const [schools, setSchools] = useState([]);
  const [unit, setUnit] = useState("");
  const [gt, setGt] = useState(0);

  const [mainModalShow, setMainModalShow] = useState(false);

  useEffect(() => {
    let land = asLib.cmes.land;
    let x = [];
    let gt = 0;
    for (let i = 0; i < land.length; i++) {
      
      let school = land[i].school;
      let ret = {};
      if(school){
        ret = schoolArr(school);
      }
      gt = gt + parseFloat(ret.qty);


      x.push({
        id: land[i].id,
        unit: land[i].unit,
        qty: ret.qty,
        reg: ret.regDt,
        age: asLib.util.Age(ret.regDt)
      });


    }
    console.log(x);
    setGt(gt);
    setLands(x);
  }, []);

  const schoolArr = (data) => {
    let qty = 0;
    let regDt = "";
    for (let j = 0; j < data.length; j++) {
      qty = qty + parseFloat(data[j].qty);
      if (data[j].school === "RTC") {
        regDt = data[j].reg_dt;
      }
    }
    return {qty: qty, regDt: regDt};
  }



  const detailHandler = (id) => {
    let land = asLib.cmes.land;
    let getOne = land.filter((t) => t.id === id);
    let x = getOne[0];

    let total = 0;
    let y = x.school;
    for (let i = 0; i < y.length; i++) {
      total = total + parseFloat(y[i].qty);
    }

    setUnit(`${x.unit} = ${total} Decimal`);
    console.log(y);
    setSchools(y);
    setMainModalShow(true);

  }

  const printHandler = () => {

  }



  return (
    <>
      <Header Title="Land" />

      <Container fluid>
        <Row>
          <Col>
            <Button variant="primary" onClick={printHandler}>Print</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead className="table-secondary">
                <tr>
                  <th scope="col">Unit</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Reg</th>
                  <th scope="col">Age</th>
                  <th scope="col" className="text-center"> Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  lands.length ? lands.map((land) => {
                    return (
                      <tr key={land.id}>
                        <td>{land.unit}</td>
                        <td>{land.qty}</td>
                        <td>{land.reg}</td>
                        <td>{land.age}</td>
                        <td style={{ width: "70px", textAlign: "right" }}>
                          <Button variant="secondary" onClick={() => { detailHandler(land.id) }}>Detail</Button>
                        </td>
                      </tr>
                    )
                  })
                    : null
                }
                <tr>
                  <td><strong>Total Land</strong></td>
                  <td><strong>{gt} Decimal = {(gt / 247.10514233242).toFixed(2)} Hectare</strong></td>
                  <td colSpan={3}></td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>

      <Modal size="xl" show={mainModalShow} onHide={() => { setMainModalShow(false); }}>
        <Modal.Header closeButton>
          <Modal.Title>{unit}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Table striped bordered hover responsive>
            <thead className="table-secondary">
              <tr>
                <th scope="col">School</th>
                <th scope="col">Qty</th>
                <th scope="col">Reg_dt</th>
                <th scope="col">Donors</th>
                <th scope="col">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {
                schools.length ? schools.map((school) => {
                  return (
                    <tr key={school.id}>
                      <td>{school.school}</td>
                      <td>{school.qty}</td>
                      <td>{school.reg_dt}</td>
                      <td>{school.donors}</td>
                      <td>{school.remarks}</td>
                    </tr>
                  )
                })
                  : null
              }

            </tbody>
          </Table>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setMainModalShow(false); }}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

};
export default LandPage;
