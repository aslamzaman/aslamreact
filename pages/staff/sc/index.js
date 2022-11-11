import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Table, Modal } from "react-bootstrap";
import Header from "../../../components/layout/Header";
import { asLib } from "../../../util/asLib";



const ScStaff = () => {
  const [staffs, setStaffs] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setStaffs(asLib.cmes.staff.sc);
    setMsg("SC staff");
  }, []);


  return (
    <div>
      <Header Title="SC Staff" />


      <Container fluid>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead className="table-secondary">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Name_En</th>
                  <th scope="col">Name_Bn/Deg</th>
                  <th scope="col">Join</th>                 
                  <th>Project</th>
                </tr>
              </thead>
              <tbody>
                {
                  staffs.length ? staffs.map((staff, index) => {
                    return (
                      <tr key={index}>
                        <td>{(index +1)}. {staff.nm_un}</td>
                        <td>{staff.nm_en}</td>
                        <td style={{fontFamily: "SutonnyMJ"}}>{staff.nm_bn}<br/> {staff.deg_bn}</td>
                        <td>{staff.dt}</td>                       
                        <td>{staff.prj}</td>
                      </tr>
                    )
                  })
                    : null
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>


    </div>
  );

};
export default ScStaff;
