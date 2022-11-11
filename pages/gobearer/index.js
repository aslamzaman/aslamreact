import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { jsPDF } from 'jspdf';
import { asLib } from '../../util/asLib';
require('../../helpers/fonts/SUTOM_MJ-normal');
require('../../helpers/fonts/SUTOM_MJ-bold');


export default function BearerGo() {
  const [subject, setSubject] = useState("");
  const [dt, setDt] = useState("");
  const [hd, setHd] = useState("");
  const [total, setTotal] = useState("");
  const [project, setProject] = useState("");

  const [txt, setTxt] = useState("");
  const [taka, setTaka] = useState("");
  const [msg, setMsg] = useState("Data ready");
  const [projdecDropdown, setProjdecDropdown] = useState([]);

  useEffect(() => {
    setProjdecDropdown(asLib.cmes.project);
  }, [])

  const printHandler = () => {
    if (!validationCheck() === true) { return false; };
    const doc = new jsPDF(
      {
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true,
        floatPrecision: 16 // or "smart", default is 16
      }
    )

    doc.setFontSize(16);
    doc.setFont("times", "normal");
    doc.text(`${hd}`, 145, 68, null, null, "center");
    doc.setFont("SutonnyMJ", "normal");
    doc.text(`ms¯’cb`, 181, 68, null, null, "center");
    doc.text(`${dt}`, 186, 41.75, null, null, "center");
    doc.text(`${txt}`, 29, 68, null, null, "left");
    doc.text(`${taka}`, 122, 68, null, null, "right");
    doc.text(`${asLib.util.numberWithCommas(total)}/-`, 122, 187, null, null, "right");
    doc.text(`${asLib.util.inword.bn(parseInt(total))} UvKv gvÎ`, 53, 195.5, null, null, "left");
    asLib.cmes.format.go({ doc });

    doc.addPage("a4", "p");
    doc.setFont("times", "normal");
    doc.setFontSize(16);
    doc.text(`${project}`, 112, 41, null, null, "center");
    doc.text(`${hd}`, 161, 122, null, null, "center");
    doc.setFont("SutonnyMJ", "normal");
    doc.text(`${dt}`, 176, 49.5, null, null, "center");
    doc.text(`${txt}`, 34, 122, null, null, "left");
    doc.text(`${taka}`, 131, 122, null, null, "right");
    doc.text(`${asLib.util.numberWithCommas(total)}/-`, 131, 248, null, null, "right");
    doc.text(`${asLib.util.inword.bn(parseInt(total))} UvKv gvÎ`, 38, 255.5, null, null, "left");
    asLib.cmes.format.bearer({ doc });


    doc.save(Date.now() + ".pdf");
  }

  const validationCheck = () => {
    let warn = [];
    if (subject && dt && hd && total && txt && taka && project) {
      return true;
    }
    if (!subject) {
      warn.push(" Subject required");
    }
    if (!dt) {
      warn.push(" Date required");
    }
    if (!hd) {
      warn.push(" Head required");
    }
    if (!total) {
      warn.push(" Total required");
    }
    if (!txt) {
      warn.push(" Detail required");
    }
    if (!taka) {
      warn.push(" Taka required");
    }
    if (!project) {
      warn.push(" Project required");
    }
    let checkWarning = warn.toString();
    setMsg(checkWarning);
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>GO and Bearer</h1>
          <p className="text-primary mb-4" style={{ margin: "0px", paddingTop: "10px" }}>{msg}</p>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#FAEDEB", paddingTop: "15px", paddingBottom: "5px" }}>
        <Col>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">Date</Form.Label>
            <Col sm="10"><Form.Control onChange={(e) => { setDt(e.target.value) }} value={dt} placeholder={asLib.util.dateFormat(new Date(), ".")} /></Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">Budget</Form.Label>
            <Col sm="10"><Form.Control as="textarea" rows={1} onChange={(e) => { setHd(e.target.value) }} value={hd} /></Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">Project</Form.Label>
            <Col sm="10">
              <Form.Select onChange={(e) => { setProject(e.target.value) }} value={project}>
                <option value="">--</option>
                {
                  projdecDropdown.map((p) => {
                    return <option key={p.id} value={p.name}>{p.name}</option>
                  })
                }
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">Taka</Form.Label>
            <Col sm="10"><Form.Control onChange={(e) => { setTotal(e.target.value) }} value={total} /></Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">Subject</Form.Label>
            <Col sm="10"><Form.Control style={{ fontFamily: "SutonnyMJ" }} onChange={(e) => { setSubject(e.target.value) }} value={subject} /></Col>
          </Form.Group>
        </Col>
        <Col>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Detail</Form.Label>
                <Form.Control style={{ fontFamily: "SutonnyMJ" }} as="textarea" rows={9} onChange={(e) => { setTxt(e.target.value) }} value={txt} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Detail Taka</Form.Label>
                <Form.Control style={{ fontFamily: "SutonnyMJ", textAlign: "right" }} as="textarea" rows={9} onChange={(e) => { setTaka(e.target.value) }} value={taka} />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant='primary mt-3' onClick={printHandler}>Print</Button>
        </Col>
      </Row>
    </Container >
  )
}







