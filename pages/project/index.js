import React from "react";
import Header from "../../components/layout/Header";
import { Container, Row, Col, Table } from "react-bootstrap";
import { asLib } from "../../util/asLib";

const ProjectPage = () => {
  const projects = asLib.cmes.project;

  return (
    <>
      <Header Title="Project" />
      <Container fluid>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead className="table-secondary">
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  projects.length ? projects.map((project, i) => {
                    return (
                      <tr key={project.id}>
                        <td>{i + 1}</td>
                        <td>{project.name}</td>
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
export default ProjectPage;
