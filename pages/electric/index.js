import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { jsPDF } from 'jspdf';
import { asLib } from '../../util/asLib';



const titleCase = (str) => {
  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}


export default function BearerGo() {
  const [months, setMonths] = useState("");
  const [dt, setDt] = useState("");
  const [project, setProject] = useState("");
  const [taka, setTaka] = useState("5000");
  const [yr, setYr] = useState("");
  const [msg, setMsg] = useState("Data ready");
  const [projectDropdown, setProjectDropdown] = useState([]);
  const [monthDropdown, setMonthDropdown] = useState([]);

  useEffect(() => {
    setProjectDropdown(asLib.cmes.project);
    setMonthDropdown(asLib.util.monthsObj);
    setDt(asLib.util.dateFormat(new Date(), "-"));
    const d = new Date();
    let year = d.getFullYear();
    setYr(year);
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
    doc.text("Centre for Mass Education in Science(CMES)", 105, 25, null, null, "center");
    doc.setFontSize(13);
    doc.text("House-5/4, Block-F, Lalmatia, Dhaka-1207", 105, 32, null, null, "center");

    doc.setFont("times", "bold");
    doc.text("Request For Prepaid Electric Bill", 105, 42, null, null, "center");
    doc.setFontSize(13);
    doc.setFont("times", "normal");
    doc.text(`Project: ${project}`, 105, 48, null, null, "center");
    doc.text(`Date: ${asLib.util.dateFormat(new Date(), ".")}`, 105, 54, null, null, "center");
    doc.line(25, 60, 185, 60);
    doc.line(25, 70, 185, 70);
    doc.line(25, 200, 185, 200);
    doc.line(25, 210, 185, 210);
    doc.setFont("times", "bold");
    doc.text("SL", 35, 67, null, null, "center");
    doc.text("Description", 100, 67, null, null, "center");
    doc.text("Taka", 165, 67, null, null, "center");
    doc.line(25, 60, 25, 210);
    doc.line(45, 60, 45, 210);
    doc.line(150, 60, 150, 210);
    doc.line(185, 60, 185, 210);

    doc.setFont("times", "normal");
    doc.text("1", 35, 77, null, null, "center");
    doc.text(`Electric bill for the month of ${months} ${yr}`, 47, 77, null, null, "left");
    doc.text(`${taka}/-`, 180, 77, null, null, "right");

    doc.setFont("times", "bold");

    doc.text("Total", 47, 207, null, null, "left");
    doc.text(`${taka}/-`, 180, 207, null, null, "right");
    let total = parseInt(taka);
    doc.setFont("times", "normal");
      let t = asLib.util.inword.en(total).trim();
    console.log(t);
    doc.text(`Inword: ${titleCase(t)} Taka Only`, 25, 215, null, null, "left");
    doc.line(175, 82, 160, 197);
    
    doc.text("Aslam Zaman", 25, 241, null, null, "left");
    doc.text("Senior Program Organizer", 25, 247, null, null, "left");
    doc.text("CMES", 25, 253, null, null, "left");


    doc.save(Date.now() + ".pdf");
  }



  const validationCheck = () => {
    let warn = [];
    if (dt && taka && project && months) {
      return true;
    }

    if (!dt) {
      warn.push(" Date required");
    }

    if (!taka) {
      warn.push(" Taka required");
    }
    if (!months) {
      warn.push(" Month required");
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
          <h1>Electric Bill</h1>
          <p className="text-primary mb-4" style={{ margin: "0px", paddingTop: "10px" }}>{msg}</p>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#FAEDEB", paddingTop: "15px", paddingBottom: "5px" }}>
        <Col>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">Date</Form.Label>
            <Col sm="10"><Form.Control type="date" onChange={(e) => { setDt(e.target.value) }} value={dt} /></Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">Project</Form.Label>
            <Col sm="10">
              <Form.Select onChange={(e) => { setProject(e.target.value) }} value={project}>
                <option value="">--</option>
                {
                  projectDropdown.map((p) => {
                    return <option key={p.id} value={p.name}>{p.name}</option>
                  })
                }
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">Month</Form.Label>
            <Col sm="10">
              <Form.Select onChange={(e) => { setMonths(e.target.value) }} value={months}>
                <option value="">--</option>
                {
                  monthDropdown.map((m, i) => {
                    return <option key={i} value={m.en}>{m.en}</option>
                  })
                }
              </Form.Select>
            </Col>
          </Form.Group>



          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">Taka</Form.Label>
            <Col sm="10"><Form.Control onChange={(e) => { setTaka(e.target.value) }} value={taka} /></Col>
          </Form.Group>


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







