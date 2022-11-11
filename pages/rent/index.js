import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Header from "../../components/layout/Header";

import { Page1 } from "../../helpers/bayprostab/Page1";
import { Page2 } from "../../helpers/bayprostab/Page2";
import { Goformat } from "../../helpers/bayprostab/Goformat";

require('../../helpers/fonts/SUTOM_MJ-normal');
require('../../helpers/fonts/SUTOM_MJ-bold');


import { asLib } from "../../util/asLib";

const Houserent = () => {


  const doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
    floatPrecision: 16 // or "smart", default is 16
  });


  const [msg, setMsg] = useState("Seclect options");
  const [mnth, setMnth] = useState("Rvbyqvix");
  const [yr, setYr] = useState("2022");
  const [mn, setMn] = useState([]);


  useEffect(()=>{
    setMn(asLib.util.monthsObj);
  },[])



  const createHouseRent = () => {
    setMsg("Please wait...");

    Page1({doc},mnth, yr);
    doc.addPage("a4", "p");
    Page2({doc}, mnth, yr);
    doc.addPage("a4", "p");
    Goformat({doc}, mnth, yr);

    setMsg("PDF file Created");
    doc.save(Date.now() + ".pdf");
  }


  return (
    <div>
      <Header Title="House Rent" />

      <Container>
        <Row>
          <Col xs="12">
            <p>{msg}</p>
            <Form.Select onChange={(e) => { setMnth(e.target.value) }} value={mnth}>
              {
                mn.map((m) => {
                  return (<option key={m.en} value={m.bn}>{m.en}</option>);
                })
              }
            </Form.Select>
            <Form.Select onChange={(e) => { setYr(e.target.value) }} value={yr}>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </Form.Select>
            <Button variant="secondary" className="mt-4" onClick={createHouseRent}>Create House Rent</Button>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Houserent;