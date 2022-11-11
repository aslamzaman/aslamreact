import React, { useState } from "react";
import { jsPDF } from "jspdf";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
require("../../helpers/fonts/OpenSansCondensed-Light-normal");
require("../../helpers/fonts/Lobster-Regular-normal");
require("../../helpers/fonts/SUTOM_MJ-bold");
require("../../helpers/fonts/SUTOM_MJ-normal");

const Certificate = () => {
  const [msg, setMsg] = useState("Seclect an excel file");

  const createPdfHanler = async () => {

    setMsg("Please wait...");
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    /*
                    name 148 76
                    reg 148 86
                    trade 162 100
                    sl 66 179
                    dt 196 179 
    */

    // Image Add
    doc.addImage("/images/cmes_logo/cmes.png", "PNG", 20, 20, 20, 30);

    // Image Add
    doc.setFont("times", "normal");
    doc.setFontSize(16);
    doc.text("Hello world", 105, 40, null, null, "center");

    doc.setFont("OpenSansCondensed-Light", "normal");
    doc.setFontSize(14);
    doc.text("Registration No", 105, 50, null, null, "center");

    doc.setFont("Lobster-Regular", "normal");
    doc.setFontSize(14);
    doc.text("Registration No", 105, 60, null, null, "center");

    doc.setFont("SutonnyMJ", "bold");
    doc.setFontSize(14);
    doc.text("Avgv‡`i †`‡ki bvg evsjv‡`k", 105, 70, null, null, "center");


    doc.setFont("SutonnyMJ", "normal");
    doc.setFontSize(14);
    doc.text("Avgv‡`i †`‡ki bvg evsjv‡`k", 105, 80, null, null, "center");

    // wrap text

    let str = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
`;

    let wrapText = doc.splitTextToSize(str, 150);
    doc.setFont("times", "normal");
    doc.setFontSize(14);
    doc.text(wrapText, 105, 90, null, null, "center");




    // Add new Page
    doc.addPage("a4", "p");

    // Add HTML Text

    doc.setFont("times", "normal");
    doc.setFontSize(14);
    let x = `<p style="width:200px;font-family: 'Arial';font-size: 12px;text-align:center;line-height: 95%;letter-spacing: 0.01px;">Name: Aslam Zaman<br>Thana: Ulipur, District: Kurigram</p>`;
    doc.text(`${new Date()}`, 20, 20);

    doc.html(x, {
      callback: function (g) {
        g.save();
      },
      x: 5,
      y: 30
    });
  }

  return (
    <div style={{ backgroundColor: "#D2F3F1 " }}>
      <Header title="Create Certificates" />

      <Container>
        <Row>
          <Col xs="12">
            <p>{msg}</p>
            <Button variant="primary" onClick={createPdfHanler}>Create PDF</Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Certificate;