import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Header from "../../components/layout/Header";
import DocEdit from "../../components/doc/DocDisplay";
import { asLib } from "../../util/asLib";


const DocPage = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    let doc = asLib.cmes.doc;
    let catId = doc.map(d => d.cat.id);
    let srtId = [...new Set(catId)];
    let srtDoc = srtId.map(s => doc.filter(t => t.cat.id === s)[0]);
    console.log(srtDoc);
    setDocs(srtDoc);
  }, []);


  return (
    <>
      <Header Title="Documents" />
      <Container fluid>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead className="table-secondary">
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Category</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Date</th>
                  <th scope="col" className="text-end">

                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  docs.length ? docs.map((doc, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{doc.cat.name}</td>
                        <td>{doc.unit}</td>
                        <td>{doc.dt}</td>

                        <td style={{ width: "150px", textAlign: "right" }}>
                          <DocEdit Id={doc.cat.id} />
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
export default DocPage;
