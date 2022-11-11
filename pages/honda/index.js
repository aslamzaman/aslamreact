import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Header from "../../components/layout/Header";
import { asLib } from "../../util/asLib";
import HondaDetail from "../../components/honda/HondaDetail";



const HondaPage = () => {
  const [hondas, setHondas] = useState([]);
  const [msg, setMsg] = useState([]);


  useEffect(() => {
    const presentSituation = () => {
      let x = asLib.cmes.honda;
      // console.log(x);
      setHondas(itemSort(x));
    }
    presentSituation();
  }, [msg]);


  const itemSort = (data) => {
    return data.sort((a, b) => {
      const nameA = a.unit.toUpperCase(); // ignore upper and lowercase
      const nameB = b.unit.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }


  const summeryHandler = () => {

  }


  return (
    <>
      <Header Title="Honda" />

      <Container fluid>
        <Row>
          <Col>
            <Button variant="primary me-2" onClick={summeryHandler}>Summary</Button>
            <p>{msg}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead className="table-secondary">
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Honda Position Summary</th>
                  <th scope="col">Registration</th>
                  <th scope="col">Reg. Date</th>
                  <th scope="col">Age</th>
                  <th scope="col" className="text-center"> Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  hondas.length ? hondas.map((honda, index) => {
                    let n = honda.location.length - 1;
                    let arr = ["DHAKA METRO-HA-29-6343", "DHAKA METRO-HA-29-6334", "DHAKA METRO HA-29-6326"];
                    let x = "";
                    let b = false;
                    if (honda.registration === arr[0] || honda.registration === arr[1] || honda.registration === arr[2]) {
                      x = `${honda.unit}->${honda.location[n].location}(${honda.location[n].project}), ${honda.location[n].name}(${honda.location[n].desig})`;
                      b = false;
                    } else {
                      x = `${honda.unit}->${honda.location[n].location}(${honda.location[n].project}), ${honda.location[n].name}(${honda.location[n].desig})`;
                      b = true;
                    }
                    return (
                      <tr key={index}>
                        <td className="text-center">{index + 1}</td>
                        <td>{b ? x : <s>{x}</s>}</td>
                        <td className="text-center">{b ? honda.registration : <s>{honda.registration}</s>}</td>
                        <td className="text-center">{b ? asLib.util.dateFormat(honda.reg_dt, ".") : <s>{asLib.util.dateFormat(honda.reg_dt, ".")}</s>}</td>
                        <td className="text-center">{b ? asLib.util.Age(honda.reg_dt) : <s>{asLib.util.Age(honda.reg_dt)}</s>}</td>
                        <td style={{ width: "90px", textAlign: "right" }}>
                          <HondaDetail Registration={honda.registration} />
                        </td>
                      </tr>
                    )

                  }) : null
                }
              </tbody>
            </Table>
          </Col>
        </Row>

      </Container>

    </>
  );

};
export default HondaPage;
