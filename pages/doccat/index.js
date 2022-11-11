import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Header from "../../components/layout/Header";
import DoccatAdd from "../../components/doccat/DoccatAdd";
import DoccatEdit from "../../components/doccat/DoccatEdit";
import DoccatDelete from "../../components/doccat/DoccatDelete";
import DoccatDownload from "../../components/doccat/DoccatDownload";
import DoccatUpload from "../../components/doccat/DoccatUpload";
import DoccatPrint from "../../components/doccat/DoccatPrint";
import Msg from "../../components/layout/Msg";
import { cat } from "../../components/doccat/cat";


const DoccatPage = () => {
  const [doccats, setDoccats] = useState([]);
  const [msg, setMsg] = useState("Data ready");


  useEffect(() => {
    const loadData = () => {
      let doccatData = localStorage.getItem("doccat");
      if (doccatData) {
        let jsonData = JSON.parse(doccatData);
        setDoccats(jsonData);
      } else {
        localStorage.setItem("doccat", JSON.stringify(cat));
        setDoccats(cat);
      }
    };
    loadData();
  }, [msg]);


  const getMsgHandler = (data) => {
    setMsg(data);
  }


  return (
    <>
      <Header Title="Doccat" />
      <Msg Msg={msg} />
      <Container fluid>
        <Row>
          <Col>
            <DoccatAdd AddMsg={getMsgHandler} />
          </Col>
          <Col className="text-end">
            <DoccatPrint PrintMsg={getMsgHandler} />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead className="table-secondary">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col" className="text-end">
                    <DoccatDownload DownloadMsg={getMsgHandler} />
                    <DoccatUpload UploadMsg={getMsgHandler} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  doccats.length ? doccats.map((doccat) => {
                    return (
                      <tr key={doccat.id}>
                        <td>{doccat.name}</td>
                        <td style={{ width: "150px", textAlign: "right" }}>
                          <DoccatEdit EditMsg={getMsgHandler} Id={doccat.id} />
                          <DoccatDelete DeleteMsg={getMsgHandler} Id={doccat.id} />
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
export default DoccatPage;
