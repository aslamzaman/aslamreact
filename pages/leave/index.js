import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form, Modal, ListGroup } from "react-bootstrap";
import Header from "../../components/layout/Header";
import Msg from "../../components/layout/Msg";
import { asLib } from "../../util/asLib";
import { Question } from "react-bootstrap-icons";

import { jsPDF } from "jspdf";
require('../../helpers/fonts/SUTOM_MJ-normal');
require('../../helpers/fonts/SUTOM_MJ-bold');






const LeavePage = () => {
  const [name, setName] = useState("");
  const [dt1, setDt1] = useState("");
  const [dt2, setDt2] = useState("");
  const [cause, setCause] = useState("");
  const [description, setDescription] = useState("");

  const [staffs, setStaffs] = useState([]);
  const [msg, setMsg] = useState("Details");
  const [helpModalShow, setHelpModalShow] = useState(false);

  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [diff, setDiff] = useState("");
  const [wrd, setWrd] = useState("");

  useEffect(() => {
    setStaffs(asLib.cmes.staff.sc);
    const date1 = asLib.util.dateFormat(new Date(), "-");
    setName("");
    setDt1(date1);
    setDt2(date1);
    setCause("");
    setDescription("");
  }, [])

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    setCause("");
    setDescription("");
  }

  const dt1ChangeHandler = (e) => {
    setDt1(e.target.value);
    setCause("");
    setDescription("");
  }

  const dt2ChangeHandler = (e) => {
    setDt2(e.target.value);
    setCause("");
    setDescription("");
  }

  const okHandler = (id) => {
    let fnd = helpList1.filter((t) => t.id === id);
    let data = fnd[0];
    setCause(data.sub);
    setDescription(data.temp);
    setHelpModalShow(false);
    helpConstrain(dt1, dt2);
  }

  const validationCheck = () => {
    let warn = [];
    if (name && dt1 && dt2 && cause && description) {
      return true;
    }
    if (!name) {
      warn.push(" Name required");
    }
    if (!dt1) {
      warn.push(" Date-1 required");
    }
    if (!dt2) {
      warn.push(" Date-2 required");
    }
    if (!cause) {
      warn.push(" Cause required");
    }
    if (!description) {
      warn.push(" Description required");
    }
    let checkWarning = warn.toString();
    setMsg(checkWarning);
  }

  const descriptionSplit = (description) => {
    let x = [];
    let st = description.split('\n');
    for (let i = 0; i < st.length; i++) {
      let s = st[i].trim();
      if (s.length > 5) {
        x.push(s);
      }
    }
    return x;
  }

  const printHandler = () => {
    if (!validationCheck() === true) { return false; };

    let leave = asLib.util.dateDiff(dt1, dt2, 1);
    if (leave > 20 || leave < 1) {
      setMsg("Please fix the date");
      return false;
    }

    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });

    asLib.cmes.format.leave({ doc });


    doc.setFontSize(16);
    //----------------------------------------------------
    let s = name.split(",");
    doc.text(`${asLib.util.dateFormat(new Date(), ".")}`, 169, 40 - 1, null, null, "left"); // date
    doc.text(`${s[0]}`, 59, 50 - 1, null, null, "center"); // name
    doc.text(`${s[1]}`, 130, 50 - 1, null, null, "center");  // post
    doc.setFont("times", "normal");
    doc.setFontSize(14);
    doc.text(`${s[2]}`, 186, 50 - 1, null, null, "center");   // project
    doc.setFont("SutonnyMJ", "normal");
    doc.setFontSize(16);
    doc.text(`${cause}`, 123, 60 - 1, null, null, "center");
    doc.text(`${asLib.util.dateFormat(dt1, ".")}`, 70.5, 70 - 1, null, null, "center");
    doc.text(`${asLib.util.dateFormat(dt2, ".")}`, 120.5, 70 - 1, null, null, "center");
    doc.text(`${asLib.util.dateDiff(dt1, dt2, 1)}`, 162.5, 70 - 1, null, null, "center");

    doc.setDrawColor(0, 0, 0);
    let des = descriptionSplit(description);
    let nl = `${des[0]}\n\n${des[1]}`;
    doc.text(nl, 20, 120, { maxWidth: 178, align: 'justify' });

    doc.text(`${asLib.util.dateDiff(dt1, dt2, 1)}`, 60, 244 - 1, null, null, "center");
    doc.text(`${asLib.util.dateDiff(dt1, dt2, 1)}`, 172, 244 - 1, null, null, "center");

    //-------------------------------------------------------

    doc.save(`${Date.now()}-leave.pdf`);
  }

  const helpConstrain = (date1, date2) => {
    let leave = asLib.util.dateDiff(date1, date2, 1);
    setD1(asLib.util.dateFormat(date1, "."));
    setD2(asLib.util.dateFormat(date2, "."));
    setDiff(leave);
    setWrd(asLib.util.inword.bn(leave));
  }

  const helpList1 = [
    {
      id: 1,
      sub: "cvwievwiK Abyôv‡b †hvM †`qv",
      temp: `webxZ wb‡e\`b GB †h, evmvq cvwievwiK Abyôv‡b AskMªnY Kivi Kvi‡b AvMvgx ${d1} ZvwiL n‡Z ${d2} ZvwiL ch©šÍ †gvU ${diff} (${wrd}) w\`b Awd‡m Dcw¯’Z n‡Z cvie bv|
        
      AZGe,  Dc‡iv³ welqwU we‡ePbv K‡i Avgv‡K ${diff} (${wrd}) w\`‡bi AwMªg QywU gbRyi K‡i evwaZ Ki‡eb|`
    },
    {
      id: 2,
      sub: "MÖv‡gi evwo †givgZ Kivi Rb¨ ",
      temp: `webxZ wb‡e\`b GB †h, Avgvi Mªv‡gi evwo †givgZ Kivi Rb¨ AvMvgx ${d1} ZvwiL n‡Z ${d2} ZvwiL ch©šÍ †gvU ${diff} (${wrd}) w\`b Awd‡m Dcw¯’Z n‡Z cvie bv|
        
      AZGe,  Dc‡iv³ welqwU we‡ePbv K‡i Avgv‡K ${diff} (${wrd}) w\`‡bi AwMªg QywU gbRyi K‡i evwaZ Ki‡eb|`
    },
    {
      id: 3,
      sub: "evmv e`j Kivi Rb¨ QywUi Av‡e`b",
      temp: `webxZ wb‡e\`b GB †h, Avgvi evmv ¯’vbvšÍ‡ii Rb¨ AvMvgx ${d1} ZvwiL n‡Z ${d2} ZvwiL ch©šÍ †gvU ${diff} (${wrd}) w\`b Awd‡m Dcw¯’Z n‡Z cvie bv|
        
      AZGe,  Dc‡iv³ welqwU we‡ePbv K‡i Avgv‡K ${diff} (${wrd}) w\`‡bi AwMªg QywU gbRyi K‡i evwaZ Ki‡eb|`
    },
    {
      id: 4,
      sub: "kvixwiK Amy¯’Zvi Rb¨",
      temp: `webxZ wb‡e\`b GB †h, Avgvi kvixwiK Amy¯’Zvi  MZ  ${d1} ZvwiL n‡Z ${d2} ZvwiL ch©šÍ †gvU ${diff} (${wrd}) w\`b Awd‡m Dcw¯’Z n‡Z cvwi bvB|
        
      AZGe,  Dc‡iv³ welqwU we‡ePbv K‡i Avgv‡K D³  ${diff} (${wrd}) w\`‡bi AwMªg QywU gbRyi K‡i evwaZ Ki‡eb|`
    },
    {
      id: 5,
      sub: "`y‡h©vMc~Y© AvenIqvi Rb¨",
      temp: `webxZ wb‡e\`b GB †h,  MZ   ${d1} ZvwiL n‡Z  ${d2} ZvwiL ch©šÍ †gvU ${diff} (${wrd}) w\`b \`y‡h©vMc~Y© AvenvIqvi Kvi‡Y  Awd‡m Dcw¯’Z n‡Z cvwi bvB|
        
      AZGe,  Dc‡iv³ welqwU we‡ePbv K‡i Avgv‡K D³  ${diff} (${wrd}) w\`‡bi AwMªg QywU gbRyi K‡i evwaZ Ki‡eb|`
    },
    {
      id: 6,
      sub: "kn‡i Mvwo PjvPj eÜ _vKvq",
      temp: `webxZ wb‡e\`b GB †h,  MZ   ${d1} ZvwiL n‡Z  ${d2} ZvwiL ch©šÍ †gvU ${diff} (${wrd}) w\`b †kvi Mvwo PjvPj eÜ _vKvq Awd‡m Dcw¯’Z n‡Z cvwi bvB|
        
      AZGe,  Dc‡iv³ welqwU we‡ePbv K‡i Avgv‡K D³  ${diff} (${wrd}) w\`‡bi QywU gbRyi K‡i evwaZ Ki‡eb|`
    },
    {
      id: 7,
      sub: "cvwievwiK cÖ‡qvR‡b MÖv‡gi evwo hvIqvi Rb¨",
      temp: `webxZ wb‡e\`b GB †h,  AvMvgx   ${d1} ZvwiL n‡Z  ${d2} ZvwiL ch©šÍ †gvU ${diff} (${wrd}) w\`b cvwievwiK cª‡qvR‡b †\`‡ki evwo‡Z _vK‡Z n‡e|  GRb¨ G mg‡q Awd‡m Dcw¯’Z n‡Z cvi‡evbv |
        
      AZGe,  Dc‡iv³ welqwU we‡ePbv K‡i Avgv‡K D³ ${diff} (${wrd}) w\`‡bi AwMªg  QywU gbRyi K‡i evwaZ Ki‡eb|`
    },
    {
      id: 8,
      sub: "evmvq †gngvb Avmvi Rb¨",
      temp: `webxZ wb‡e\`b GB †h,  AvMvgx  ${d1} ZvwiL n‡Z  ${d2} ZvwiL ch©šÍ †gvU ${diff} (${wrd}) w\`b evmvq †gngvb Avmvi Kvi‡Y Awd‡m Dcw¯’Z n‡Z cvi‡evbv |
        
      AZGe,  Dc‡iv³ welqwU we‡ePbv K‡i Avgv‡K D³  ${diff} (${wrd}) w\`‡bi AwMªg  QywU gbRyi K‡i evwaZ Ki‡eb|`
    },
    {
      id: 9,
      sub: "Rwg msµvšÍ RwUjZv wbim‡bi Rb¨",
      temp: `webxZ wb‡e\`b GB †h,  Avgvi Mªv‡gi evwo‡Z Rwg msµvšÍ RwUjZv wbim‡bi Rb¨ ${d1} ZvwiL n‡Z  ${d2} ZvwiL ch©šÍ †gvU ${diff} (${wrd}) w\`b Mªv‡g Dcw¯’Z _vK‡Z n‡e|  GKvi‡Y Awd‡m Dcw¯’Z n‡Z cvi‡evbv |
        
      AZGe,  Dc‡iv³ welqwU we‡ePbv K‡i Avgv‡K D³  ${diff} (${wrd}) w\`‡bi AwMªg  QywU gbRyi K‡i evwaZ Ki‡eb|`
    },
    {
      id: 10,
      sub: "C` Dcj‡¶",
      temp: `webxZ wb‡e\`b GB †h,  C\` Dcj‡¶  Avgvi Mªv‡gi evwo‡Z   ${d1} ZvwiL n‡Z  ${d2} ZvwiL ch©šÍ †gvU ${diff} (${wrd}) w\`b Dcw¯’Z _vK‡Z n‡e|  GKvi‡Y Awd‡m Dcw¯’Z n‡Z cvi‡evbv |
        
      AZGe,  Dc‡iv³ welqwU we‡ePbv K‡i Avgv‡K D³  ${diff} (${wrd}) w\`‡bi AwMªg  QywU gbRyi K‡i evwaZ Ki‡eb|`
    },
    {
      id: 11,
      sub: "`yM©vc~Rv Dcj‡¶",
      temp: `webxZ wb‡e\`b GB †h,  \`yM©vc~Rv Dcj‡¶  Avgvi Mªv‡gi evwo‡Z  ${d1} ZvwiL n‡Z  ${d2} ZvwiL ch©šÍ †gvU ${diff} (${wrd}) w\`b Dcw¯’Z _vK‡Z n‡e|  GKvi‡Y Awd‡m Dcw¯’Z n‡Z cvi‡evbv |
        
      AZGe,  Dc‡iv³ welqwU we‡ePbv K‡i Avgv‡K D³  ${diff} (${wrd}) w\`‡bi AwMªg  QywU gbRyi K‡i evwaZ Ki‡eb|`
    }

  ]

  return (
    <>
      <Header Title="Leave Application" />
      <Msg Msg={msg} />
      <Container fluid>
        <Row>
          <Col sm={3}>
            <Form.Group className="mb-2">
              <Form.Select onChange={nameChangeHandler} value={name} style={{ fontFamily: "SutonnyMJ" }}>
                <option value="">wb‡Ri bvg wm‡j± Kiæb</option>
                {
                  staffs.map((s, i) => {
                    return (
                      <option value={`${s.nm_bn},${s.deg_bn},${s.prj}`} key={i}>{s.nm_bn}</option>
                    )
                  })
                }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control type="date" onChange={dt1ChangeHandler} value={dt1} style={{ fontFamily: "SutonnyMJ" }} />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control type="date" onChange={dt2ChangeHandler} value={dt2} style={{ fontFamily: "SutonnyMJ" }} />
            </Form.Group>
            <Form.Group className="mb-2">
              <div className="input-group mb-2">
                <input type="text" className="form-control" onChange={(e) => { setCause(e.target.value) }} value={cause} style={{ fontFamily: "SutonnyMj" }} />
                <button className="btn btn-outline-secondary p-1" type="button" onClick={() => { setHelpModalShow(true); helpConstrain(dt1, dt2); }}><Question size={20} /></button>
              </div>
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <Button size="lg" variant="primary" onClick={printHandler}>Save As PDF</Button>
            </div>
          </Col>
          <Col sm={9}>
            <Form.Group>
              <Form.Control style={{ fontFamily: "SutonnyMJ" }} as="textarea" rows={7} onChange={(e) => { setDescription(e.target.value) }} value={description} />
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Modal size="lg" show={helpModalShow} onHide={() => { setHelpModalShow(false) }}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup style={{ fontFamily: "SutonnyMj" }}>
            {
              helpList1.map((l) => {
                return (
                  <ListGroup.Item action onClick={() => { okHandler(l.id) }} key={l.id}>
                    {l.sub}
                  </ListGroup.Item>
                )
              })
            }
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );

};
export default LeavePage;
