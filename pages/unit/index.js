import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Header from "../../components/layout/Header";
import { asLib } from "../../util/asLib";

const UnitPage = () => {

let units = asLib.cmes.unit.en;


      return (
            <>
                  <Header Title="Unit" />
                  <Container fluid>
                        <Row>
                              <Col>
                                    <Table striped bordered hover responsive>
                                          <thead className="table-secondary">
                                                <tr>
                                                      <th scope="col">SL</th>
                                                      <th scope="col">Name-En</th>                                                   
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {
                                                      units.length ? units.map((unit, i) => {
                                                            return (
                                                                  <tr key={unit.id}>
                                                                        <td>{i+1}</td>
                                                                        <td>{unit.name}</td>
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
            </>
      );

};
export default UnitPage;
