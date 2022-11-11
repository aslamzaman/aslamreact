import React,{useState} from "react";
import { Container, Row, Col, Table, Button, Modal, Form } from "react-bootstrap";
import { CloudDownload, CloudUpload } from 'react-bootstrap-icons';

import LeaveEdit from "./LeaveEdit";
import LeaveDelete from "./LeaveDelete";
import { saveAs } from "file-saver";


const LeaveList = (props) => {
  const leaves = props.Data;
  const Message = props.ListMsg;


  const [fileModalShow, setFileModalShow] = useState(false);

  const getMsgHandler = (data) => {
    Message(data);
  }

  const saveFileHandler = () => {
    let leaveData = localStorage.getItem("leave");
    if(!leaveData){
      Message("Data not available.");
      return false;
    }
    const blob = new Blob([leaveData], { type: "application/json" });
    saveAs(blob, `${Date.now()}-leave.js`);
  }

  const changeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (() => {
      let checkData = JSON.parse(reader.result)[0];
      if (!checkData.post) { Message("Data not support"); setFileModalShow(false); return false; }
      localStorage.setItem("leave", reader.result);
      Message("Data loaded successfully");
      setFileModalShow(false);
    })
    reader.readAsText(file);
  }




  return (
    <Container fluid>
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead className="table-secondary">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Post</th>
                <th scope="col">Dept</th>
                <th scope="col">Project</th>
                <th scope="col">Cause</th>
                <th scope="col">Dt1</th>
                <th scope="col">Dt2</th>
                <th scope="col">Description</th>
                <th scope="col" className="text-end">
                  <Button size="sm" variant="success me-2" onClick={saveFileHandler} title="Save"><CloudDownload size={15} /></Button>
                  <Button size="sm" variant="danger" onClick={() => { setFileModalShow(true); }} title="Load" ><CloudUpload size={15} /></Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                leaves.length ? leaves.map((leave) => {
                  return (
                    <tr key={leave.id}>
                      <td>{leave.name}</td>
                      <td>{leave.post}</td>
                      <td>{leave.dept}</td>
                      <td>{leave.project}</td>
                      <td>{leave.cause}</td>
                      <td>{leave.dt1}</td>
                      <td>{leave.dt2}</td>
                      <td>{leave.description}</td>
                      <td style={{ width: "150px", textAlign: "right" }}>
                        <LeaveEdit EditMsg={getMsgHandler} Id={leave.id} />
                        <LeaveDelete DeleteMsg={getMsgHandler} Id={leave.id} />
                      </td>
                    </tr>
                  )
                })
                  : null
              }
            </tbody>
          </Table>
          <Modal size="lg" show={fileModalShow} onHide={() => { setFileModalShow(false) }}>
            <Modal.Header closeButton>
              <Modal.Title>Load From Computer </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Control type="file" onChange={changeHandler} size="lg" accept="application/javascript" />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => { setFileModalShow(false) }}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );

};
export default LeaveList;
