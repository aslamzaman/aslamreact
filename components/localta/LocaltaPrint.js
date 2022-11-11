import React, { useState } from "react";
import { Row, Col, Button, Form, Modal, ListGroup } from "react-bootstrap";
import { asLib } from "../../util/asLib";
import { jsPDF } from "jspdf";
require("../../helpers/fonts/SUTOM_MJ-normal");
require("../../helpers/fonts/SUTOM_MJ-bold");

const helpList = [
  "m¨v‡ii evmvq ‡PK ¯^v¶‡ii Rb¨",
  "m¨v‡ii evmv ‡_‡K ‡PK eB Avbvi Rb¨",
  "wbD gv‡K©‡U KvMR µ‡qi Rb¨",
  "e¨vs‡K ‡PK Rgv ‡`qvi Rb¨",
  "e¨vsK ‡_‡K UvKv D‡Ëvj‡bi Rb¨",
  "wc«›Uv‡ii Kvwj K‡i Rb¨",
  "m¨v‡ii evRvi µ‡qi Rb¨",
  "wc‡KGmGd-G wgwUs Kivi Rb¨"
]

const LocaltaPrint = (props) => {
  const [dt, setDt] = useState("");
  const [cause, setCause] = useState("");
  const [staff, setStaff] = useState("");

  const stafs = asLib.cmes.staff.sc;

  const [mainModalShow, setMainModalShow] = useState(false);
  const [helpModalShow, setHelpModalShow] = useState(false);
  const [msg, setMsg] = useState("Data ready");
  const Message = props.PrintMsg;









  const closeModal = () => {
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
      orientation: "p",
      unit: "mm",
      format: "a4",
      putOnlyUsedFonts: true,
      floatPrecision: 16
    });

    asLib.cmes.format.localTaUp({ doc });

    let localtas = [];
    let localData = localStorage.getItem("localta");
    if (localData) {
      localtas = JSON.parse(localData);
    } else {
      Message("No data!!");
      return false;
    }

    //----------------------------------------------------
    let y = 67;
    let total = 0;
    for (let i = 0; i < localtas.length; i++) {
      let tick = localtas[i].vehicle;
      let x = 0;
      let x1 = 0;
      let x2 = 0;

      if (tick === "evm") {
        x = 105;
        x1 = 130;
        x2 = 150;
      } else if (tick === "wmGbwR") {
        x = 128;
        x1 = 107;
        x2 = 150;
      } else if (tick === "wi·v") {
        x = 148;
        x1 = 130;
        x2 = 107;
      }
      doc.text(`${localtas[i].place1}`, 27, y + (i * 6), null, null, "center");
      doc.text(`${localtas[i].t1}`, 48.5, y + (i * 6), null, null, "center");

      doc.text(`${localtas[i].place2}`, 69.5, y + (i * 6), null, null, "center");
      doc.text(`${localtas[i].t2}`, 92, y + (i * 6), null, null, "center");

      doc.addImage("/images/tick_mark/tick.png", "PNG", x, y - 4 + (i * 6), 4.25, 4.25);
      doc.text(`-`, x1, y + (i * 6), null, null, "center");
      doc.text(`-`, x2, y + (i * 6), null, null, "center");

      doc.text(`${parseFloat(localtas[i].taka).toFixed(2)}`, 195, y + (i * 6), null, null, "right");
      total = total + parseFloat(localtas[i].taka);
    }

    doc.text(`${total.toFixed(2)}`, 195, 113.6, null, null, "right");
    let t = parseInt(total).toString();
    doc.text(`${asLib.util.inword.bn(t)} UvKv gvÎ`, 39, 113.6, null, null, "left");


    doc.text(`${staff}`, 97, 35.6, null, null, "center");
    doc.text(`${asLib.util.dateFormat(dt, ".")}`, 178, 35.6, null, null, "center");
    doc.text("mv‡m", 178, 44, null, null, "center");
    doc.text(`${cause}`, 89, 44, null, null, "center");
    //-------------------------------------------------------

    doc.save(`${Date.now()}-localta.pdf`);
    Message("Print completed.");
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
      <Modal size="lg" show={mainModalShow} onHide={closeModal}>
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
                        <option key={i} value={`${s.nm_bn}, ${s.deg_bn}`}>{s.nm_bn}</option>
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
          <Button variant="secondary" onClick={closeModal}>Close</Button>
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
              helpList.map((l, i) => {
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

      <Button variant="secondary" onClick={showModal} title="Print">Print TA</Button>
    </>
  );

};
export default LocaltaPrint;
