import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { jsPDF } from "jspdf";
import { asLib } from "../../util/asLib";
require('../../helpers/fonts/SUTOM_MJ-normal');
require('../../helpers/fonts/SUTOM_MJ-bold');
import Header from "../../components/layout/Header";


const Format = () => {

  const leaveHandler = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    asLib.cmes.format.leave({ doc });
    doc.save("1.pdf");
  }


  const LocaltaHandler = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    asLib.cmes.format.localTaUp({ doc });
    asLib.cmes.format.localTaDn({ doc });
    doc.save(`${Date.now()}.pdf`);
  }


  const tabillHandler = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });

    asLib.cmes.format.taBill({ doc });
    doc.save("1.pdf");
  }


  const bayprostab = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    asLib.cmes.format.bayprostab({ doc });
    doc.save(Date.now() + ".pdf");
  }


  const go = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    asLib.cmes.format.go({ doc });
    doc.save(Date.now() + ".pdf");
  }


  const bearer = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });

    asLib.cmes.format.bearer({ doc });
    doc.save(Date.now() + ".pdf");
  }


  const tourPlan = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    asLib.cmes.format.tourPlan({ doc });
    doc.save(Date.now() + ".pdf");
  }


  const tourExecution = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    asLib.cmes.format.tourExecution({ doc });
    doc.save(Date.now() + ".pdf");
  }


  const localMovement = () => {
    const doc = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });

    asLib.cmes.format.localMovement({ doc });
  doc.save(Date.now() + ".pdf");
  }


  const gatePassHandler = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });

    asLib.cmes.format.gatePass({ doc });
    doc.save(Date.now() + ".pdf");
  }

  const chalanHandler = () => {
    const doc = new jsPDF({
      orientation: 'l',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });
    asLib.cmes.format.chalan({ doc });
  doc.save(Date.now() + ".pdf");
  }

  return (
    <>
      <Header Title="Format Download" />
      <Container>
        <Row>

          <div className="d-grid gap-2 col-sm-6 mx-auto">
            <Button variant='primary' onClick={leaveHandler}>Leave</Button>
            <Button variant='secondary' onClick={LocaltaHandler}>Local TA Bill</Button>
            <Button variant='info' onClick={tabillHandler}>TA Bill</Button>
            <Button variant='success' onClick={bayprostab}>Bayprostab</Button>
            <Button variant='warning' onClick={go}>GO Format</Button>
            <Button variant='secondary' onClick={bearer}>Bearar Format</Button>
            <Button variant='danger' onClick={tourPlan}>Tour Plan</Button>
            <Button variant='info' onClick={tourExecution}>Tour Execution</Button>
            <Button variant='dark' onClick={localMovement}>Local Movement</Button>
            <Button variant='secondary' onClick={gatePassHandler}>Gate Pass</Button>
            <Button variant='danger' onClick={chalanHandler}>Chalan</Button>
          </div>
        </Row>
      </Container>

    </>
  )
}

export default Format;