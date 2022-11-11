import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import LeavePrint from "./LeavePrint";
import { asLib } from "../../util/asLib";

/*
name, dt1, dt2, cause, desp1,desp2, opt


 */

const LeaveAdd = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [dept, setDept] = useState("");
  const [project, setProject] = useState("");
  const [cause, setCause] = useState("");
  const [dt1, setDt1] = useState();
  const [dt2, setDt2] = useState();
  const [description, setDescription] = useState("");

  const [line1, setLine1] = useState("");
  const [dateTag1, setDateTag1] = useState("");
  const [dateTag, setDateTag] = useState("");

  const [lastLine, setLastLine] = useState("Avgvi kvixwiK Amy¯’Zvi Kvi‡Y");
  const [opt, setOpt] = useState("1");


  const [mainModalShow, setMainModalShow] = useState(false);
  const [msg, setMsg] = useState("Data ready");
  const Message = props.AddMsg;

  const staff = asLib.cmes.staff.sc;



  useEffect(() => {
    const date1 = asLib.util.dateFormat(new Date(), "-");
    const date2 = asLib.util.dateFormat(asLib.util.dateAdd(new Date(), 3), "-");
    setDt1(date1);
    setDt2(date2);
  }, [])



  const modalCloseHandaler = () => {
    setMainModalShow(false);
    Message("Data ready");
  }

  const addNewHandler = () => {
    setName("");
    setPost("");
    setDept("");
    setProject("");
    setCause("");
    //setDt1("");
    //setDt2("");
    setDescription("");
    Message("Ready to add new");
    setMainModalShow(true);

  }

  const saveHandler = () => {
    if (!validationCheck() === true) { return false; };
    let obj = {
      id: Date.now(),
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
    if (leaveData) {
      let jsonData = JSON.parse(leaveData);
      localStorage.setItem("leave", JSON.stringify([...jsonData, obj]));
      Message("Data inserted successfully");
    } else {
      localStorage.setItem("leave", JSON.stringify([obj]));
      Message("Data inserted successfully");
    }
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

  const getMsgHandler = (data) => {
    Message(data);
  }


  const dt1OnChangeHandler = (e) => {
    setDt1(e.target.value);
    let dif = asLib.util.dateDiff(e.target.value, dt2, 1);
    let inw = asLib.util.inword.bn(dif);
    let str ="AZGe,  Dc‡iv³ welqwU we‡ePbv K‡i Avgv‡K "+ dif + " ("+ inw + ") w`‡bi AwM«g QywU gbRyi K‡i evwaZ Ki‡eb|";
    
    setDateTag(`AvMvgx ${asLib.util.dateFormat(e.target.value,".")} ZvwiL n‡Z ${asLib.util.dateFormat(dt2,".")} ZvwiL ch©šÍ ‡gvU ${dif} (${inw}) w\`b Awd‡m Dcw¯’Z n‡Z cvie bv|` );
    setLastLine(str);
    setDateTag1("webxZ wb‡e`b GB ‡h, ")
  }

  const dt2OnChangeHandler = (e) => {
    setDt2(e.target.value);
    console.log(asLib.util.dateDiff(dt1, e.target.value, 1));
  }



  return (
    <Container fluid>
      <Row>
        <Col>
          <Modal size="xl" show={mainModalShow} onHide={modalCloseHandaler}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Leave</Modal.Title>
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
                    <Form.Label>Description</Form.Label>
                    <Form.Control style={{ fontFamily: "SutonnyMJ" }} as="textarea" rows={9} onChange={(e) => { setDescription(e.target.value) }} value={description} />
                  </Form.Group>

                  <Form.Group as={Col} lg="4">
                    <Form.Label>Options</Form.Label>
                    <Form.Select onChange={(e) => { setOpt(e.target.value) }} value={opt}>
                      <option value="1">Template-1</option>
                      <option value="2">Template-2</option>
                      <option value="3">Custom</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} lg="4">
                    <Form.Label>Dt1</Form.Label>
                    <Form.Control type="date" onChange={dt1OnChangeHandler} value={dt1} />
                  </Form.Group>
                  <Form.Group as={Col} lg="4">
                    <Form.Label>Dt2</Form.Label>
                    <Form.Control type="date" onChange={dt2OnChangeHandler} value={dt2} />
                  </Form.Group>

                  <Form.Group as={Col} lg="4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={(e) => { setName(e.target.value) }} value={name} />
                  </Form.Group>
                  <Form.Group as={Col} lg="8">
                    <Form.Label>Cause</Form.Label>
                    <Form.Control type="text" onChange={(e) => { setCause(e.target.value) }} value={cause} />
                  </Form.Group>

                  <Form.Group as={Col} lg="12">
                    <p className="text-primary" style={{ fontFamily: "SutonnyMJ", paddingBottom:"0px", marginBottom:"0px" }}>{dateTag1}</p>
                    <input type="text" onChange={(e) => { setLine1(e.target.value) }} value={line1} style={{ fontFamily: "SutonnyMJ", width:"100%",border:"none", paddingBottom:"0px", marginBottom:"0px",marginTop:"0px",paddingTop:"0px", height:"26px", backgroundColor:"#F8FBFE"  }} />
                    <p className="text-primary" style={{ fontFamily: "SutonnyMJ" }}>{dateTag}</p>
                  </Form.Group>
                  <p className="text-primary" style={{ fontFamily: "SutonnyMJ" }}>{lastLine}</p>

                  <p className="text-primary" style={{ margin: "0px", paddingTop: "10px" }}>{msg}</p>
                </Row>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={modalCloseHandaler}>Close</Button>
              <Button variant="primary" onClick={saveHandler}>Save Changes</Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Button variant="primary" onClick={addNewHandler}>Add New</Button>
        </Col>
        <Col className="text-end">
          <LeavePrint PrintMsg={getMsgHandler} />
        </Col>
      </Row>
    </Container>
  );

};
export default LeaveAdd;
