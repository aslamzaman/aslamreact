import React, { useState } from "react";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Pencil } from 'react-bootstrap-icons';


const LeaveEdit = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [dept, setDept] = useState("");
  const [project, setProject] = useState("");
  const [cause, setCause] = useState("");
  const [dt1, setDt1] = useState("");
  const [dt2, setDt2] = useState("");
  const [description, setDescription] = useState("");

  const [mainModalShow, setMainModalShow] = useState(false);
  const [msg, setMsg] = useState("Data ready");
  const Message = props.EditMsg;
  let id = props.Id;

  const modalCloseHandaler = () => {
    setMainModalShow(false);
    Message("Data ready");
  }

  const editHandler = async () => {
    setMainModalShow(true);

    let leaveData = localStorage.getItem("leave");
    let jsonData = JSON.parse(leaveData);
    let getOneArray = jsonData.filter((t) => t.id === id);
    let getOne = getOneArray[0];

        setName(getOne.name);
        setPost(getOne.post);
        setDept(getOne.dept);
        setProject(getOne.project);
        setCause(getOne.cause);
        setDt1(getOne.dt1);
        setDt2(getOne.dt2);
        setDescription(getOne.description);
        Message("Ready to edit");
     
  }

  const saveHandler = async () => {
    if (!validationCheck() === true) { return false; };
    let obj = {
      id: id,
      name: name,
      post: post,
      dept: dept,
      project: project,
      cause: cause,
      dt1: dt1,
      dt2: dt2,
      description: description
    }

      let leaveData = localStorage.getItem("leave");
      let jsonData = JSON.parse(leaveData);
      for (let i = 0; i < jsonData.length; i++) {
        if (jsonData[i].id === id) {
          jsonData[i] = obj;
        }
      }
  
      localStorage.setItem("leave", JSON.stringify(jsonData));
      Message("Data updated successfully.");
      setMainModalShow(false);
  }

  const validationCheck = () => {
    let warn = [];
    if (name && post && dept && project && cause && dt1 && dt2 && description) {
      return true;
    }
    if (!name) {
      warn.push(" Name required");
    }
    if (!post) {
      warn.push(" Post required");
    }
    if (!dept) {
      warn.push(" Dept required");
    }
    if (!project) {
      warn.push(" Project required");
    }
    if (!cause) {
      warn.push(" Cause required");
    }
    if (!dt1) {
      warn.push(" Dt1 required");
    }
    if (!dt2) {
      warn.push(" Dt2 required");
    }
    if (!description) {
      warn.push(" Description required");
    }
    let checkWarning = warn.toString();
    setMsg(checkWarning);
  }


  return (
    <>
      <Modal size="lg" show={mainModalShow} onHide={modalCloseHandaler}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Existing Leave</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} lg="6">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" onChange={(e) => { setName(e.target.value) }} value={name} />
              </Form.Group>
              <Form.Group as={Col} lg="6">
                <Form.Label>Post</Form.Label>
                <Form.Control type="text" onChange={(e) => { setPost(e.target.value) }} value={post} />
              </Form.Group>
              <Form.Group as={Col} lg="6">
                <Form.Label>Dept</Form.Label>
                <Form.Control type="text" onChange={(e) => { setDept(e.target.value) }} value={dept} />
              </Form.Group>
              <Form.Group as={Col} lg="6">
                <Form.Label>Project</Form.Label>
                <Form.Control type="text" onChange={(e) => { setProject(e.target.value) }} value={project} />
              </Form.Group>
              <Form.Group as={Col} lg="6">
                <Form.Label>Cause</Form.Label>
                <Form.Control type="text" onChange={(e) => { setCause(e.target.value) }} value={cause} />
              </Form.Group>
              <Form.Group as={Col} lg="6">
                <Form.Label>Dt1</Form.Label>
                <Form.Control type="text" onChange={(e) => { setDt1(e.target.value) }} value={dt1} />
              </Form.Group>
              <Form.Group as={Col} lg="6">
                <Form.Label>Dt2</Form.Label>
                <Form.Control type="text" onChange={(e) => { setDt2(e.target.value) }} value={dt2} />
              </Form.Group>
              <Form.Group as={Col} lg="6">
                <Form.Label>Description</Form.Label>
                <Form.Control style={{ fontFamily: "SutonnyMJ"}} as="textarea" rows={9} onChange={(e) => { setDescription(e.target.value) }} value={description} />
              </Form.Group>
              <p className="text-primary" style={{ margin: "0px", paddingTop: "10px" }}>{msg}</p>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalCloseHandaler}>Close</Button>
          <Button variant="primary" onClick={saveHandler}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
      <Button variant="secondary me-1" onClick={editHandler}>Edit</Button>
    </>
  );

};
export default LeaveEdit;
