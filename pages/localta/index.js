import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Header from "../../components/layout/Header";
import LocaltaAdd from "../../components/localta/LocaltaAdd";
import LocaltaEdit from "../../components/localta/LocaltaEdit";
import LocaltaDelete from "../../components/localta/LocaltaDelete";
import LocaltaDownload from "../../components/localta/LocaltaDownload";
import LocaltaUpload from "../../components/localta/LocaltaUpload";
import LocaltaPrint from "../../components/localta/LocaltaPrint";
import Msg from "../../components/layout/Msg";

const iniData = [
  {
      id: 1667922578707,
      place1: "mv‡m",
      t1: "10.10",
      place2: "m¨vi evmv",
      t2: "10.30",
      vehicle: "wi·v",
      taka: "60.00"
  },
  {
      id: 1667922622347,
      place1: "m¨vi evmv",
      t1: "11.00",
      place2: "mv‡m",
      t2: "11.30",
      vehicle: "wi·v",
      taka: "60.00"
  }
]

const LocaltaPage = () => {
  const [localtas, setLocaltas] = useState([]);
  const [msg, setMsg] = useState("Data ready");


  useEffect(() => {
    const loadData = () => {
      let localtaData = localStorage.getItem("localta");
      if (localtaData) {
        let jsonData = JSON.parse(localtaData);
        setLocaltas(jsonData);
      } else {
        localStorage.setItem("localta", JSON.stringify(iniData));
        setLocaltas(iniData);
      }
    };
    loadData();
  }, [msg]);


  const getMsgHandler = (data) => {
    setMsg(data);
  }


  return (
    <>
      <Header Title="Local TA" />
      <Msg Msg={msg} />
      <Container fluid>
        <Row>
          <Col>
            <LocaltaAdd AddMsg={getMsgHandler} />
          </Col>
          <Col className="text-end">
            <LocaltaPrint PrintMsg={getMsgHandler} />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead className="table-secondary">
                <tr>
                  <th scope="col">From</th>
                  <th scope="col">Time1</th>
                  <th scope="col">Where</th>
                  <th scope="col">Time2</th>
                  <th scope="col">Vehicle</th>
                  <th scope="col">Taka</th>
                  <th scope="col" className="text-end">
                    <LocaltaDownload DownloadMsg={getMsgHandler} />
                    <LocaltaUpload UploadMsg={getMsgHandler} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  localtas.length ? localtas.map((localta) => {
                    return (
                      <tr key={localta.id} style={{fontFamily:"SutonnyMJ"}}>
                        <td>{localta.place1}</td>
                        <td>{localta.t1}</td>
                        <td>{localta.place2}</td>
                        <td>{localta.t2}</td>
                        <td>{localta.vehicle}</td>
                        <td>{localta.taka}</td>
                        <td style={{ width: "150px", textAlign: "right" }}>
                          <LocaltaEdit EditMsg={getMsgHandler} Id={localta.id} />
                          <LocaltaDelete DeleteMsg={getMsgHandler} Id={localta.id} />
                        </td>
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
export default LocaltaPage;
