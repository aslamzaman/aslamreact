import React, { useState } from "react";
import { Row, Col, Button, Form, Modal, ListGroup } from "react-bootstrap";
import { asLib } from "../../util/asLib";
import { jsPDF } from "jspdf";
require('../../helpers/fonts/SUTOM_MJ-normal');
require('../../helpers/fonts/SUTOM_MJ-bold');

const helpList = [
  "m¨v‡ii evmvq ‡PK ¯^v¶‡ii Rb¨",
  "m¨v‡ii evmv ‡_‡K ‡PK eB Avbvi Rb¨",
  "wbD gv‡K©‡U KvMR µ‡qi Rb¨",
  "e¨vs‡K ‡PK Rgv ‡`qvi Rb¨",
  "e¨vsK ‡_‡K UvKv D‡Ëvj‡bi Rb¨",
  "wc«›Uv‡ii Kvwj µ‡qi Rb¨",
  "m¨v‡ii evRvi µ‡qi Rb¨",
  "wc‡KGmGd-G wgwUs Kivi Rb¨"
]

const LeavePrint = (props) => {
  const [dt, setDt] = useState("");
  const [cause, setCause] = useState("");
  const [staff, setStaff] = useState("");

  const stafs = asLib.cmes.staff.sc;



  const [mainModalShow, setMainModalShow] = useState(false);
  const [helpModalShow, setHelpModalShow] = useState(false);
  const [msg, setMsg] = useState("Data ready");
  const Message = props.PrintMsg;


  const modalCloseHandaler = () => {
    setMainModalShow(false);
    Message("Data ready");
  }


  const showModal = () => {
    setDt(asLib.util.dateFormat(new Date(), "-"));
    setCause("");
    setStaff("");
    Message("Ready to print");
    setMainModalShow(true);
  }


  const printHandler = () => {
    if (!validationCheck() === true) { return false; };

    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });

    asLib.cmes.format.leave({ doc });
    let leaves = [];
    let leaveData = localStorage.getItem("leave");
    if (leaveData) {
      leaves = JSON.parse(leaveData);
    } else {
      Message("No data!!");
      return false;
    }
    doc.setFontSize(16);
    //----------------------------------------------------
   let s = staff.split(",");
   doc.text(`${asLib.util.dateFormat(new Date(),".")}`, 169, 40-1, null, null, "left"); // name
    doc.text(`${s[0]}`, 59, 50-1, null, null, "center"); // name
    doc.text(`${s[1]}`, 130, 50-1, null, null, "center");  // post
    doc.setFont("times", "normal");
    doc.setFontSize(14);
    doc.text(`${s[2]}`, 186, 50-1, null, null, "center");   // project
    doc.setFont("SutonnyMJ", "normal");
    doc.setFontSize(16);
    doc.text(`${cause}`, 123, 60-1, null, null, "center");
    doc.text(`${leaves[0].dt1}`, 70.5, 70-1, null, null, "center");
    doc.text(`${leaves[0].dt2}`, 120.5, 70-1, null, null, "center");
    doc.text(`1`, 162.5, 70-1, null, null, "center"); 
    let lastLinge = "AZGe g‡nv`‡qi wbKU Avgvi Av‡e`b, DcwiD³ welqwU we‡ePbv K‡i Avgvi D³ QywU gÄyi Kivi  m`q AbygwZ Kvgbv KiwQ |\n";  
    doc.text(`${leaves[0].description} ${lastLinge}`, 20, 120, null, null, "left");
   
    //-------------------------------------------------------

    doc.save(`${Date.now()}-leave.pdf`);
    setMainModalShow(false);
  }


  const validationCheck = () => {
    let warn = [];
    if (dt && cause && staff) {
      return true;
    }
    if (!dt) {
      warn.push(" Date required");
    }
    if (!cause) {
      warn.push(" Cause required");
    }
    if (!staff) {
      warn.push(" Staff required");
    }
    let checkWarning = warn.toString();
    setMsg(checkWarning);
  }


  const okHandler = (str) => {
    setCause(str);
    setHelpModalShow(false);
  }

  return (
    <>
      <Modal size="lg" show={mainModalShow} onHide={modalCloseHandaler}>
        <Modal.Header closeButton>
          <Modal.Title>Create Local TA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} lg="12">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" onChange={(e) => { setDt(e.target.value) }} value={dt} />
              </Form.Group>
              <Form.Group as={Col} lg="12">
                <Form.Label>Cause</Form.Label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" onChange={(e) => { setCause(e.target.value) }} value={cause} style={{ fontFamily: "SutonnyMj" }} />
                  <button className="btn btn-outline-secondary" type="button" onClick={ () => {setHelpModalShow(true);}}>Help</button>
                </div>

              </Form.Group>
              <Form.Group as={Col} lg="12">
                <Form.Label>Staff</Form.Label>
                <Form.Select onChange={(e) => { setStaff(e.target.value) }} value={staff} style={{ fontFamily: "SutonnyMj" }} >
                  <option value="">---</option>
                  {
                    stafs.map((s, i) => {
                      return (
                        <option key={i} value={`${s.nm_bn}, ${s.deg_bn}, ${s.prj}`}>{s.nm_bn}</option>
                      )
                    })
                  }
                </Form.Select>
              </Form.Group>
              <p className="text-primary" style={{ margin: "0px", paddingTop: "10px" }}>{msg}</p>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalCloseHandaler}>Close</Button>
          <Button variant="primary" onClick={printHandler}>Print</Button>
        </Modal.Footer>
      </Modal>


      <Modal size="lg" show={helpModalShow} onHide={() => { setHelpModalShow(false) }}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup style={{ fontFamily: "SutonnyMj" }}>
            {
              helpList.map((l,i) => {
                return (
                  <ListGroup.Item action onClick={() => { okHandler(l) }} key={i}>
                    {l}
                  </ListGroup.Item>
                )
              })
            }
          </ListGroup>
        </Modal.Body>
      </Modal>





      <Button variant="secondary" onClick={showModal} title="New Add">Print TA</Button>
    </>

  );

};
export default LeavePrint;
