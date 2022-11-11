import React, { useState } from "react";
import { jsPDF } from "jspdf";
import * as XLSX from 'xlsx';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Header from "../../components/layout/Header";
require("../../helpers/fonts/Lobster-Regular-normal");
require("../../helpers/fonts/OpenSansCondensed-Light-normal");


const Certificate = () => {
    const [stdData, setStdData] = useState([]);
    const [msg, setMsg] = useState("Seclect an excel file");


    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        if (file) {

            setMsg("Please wait...");
            const bufferObj = await file.arrayBuffer();

            const workbook = XLSX.read(bufferObj, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet, { header: ["sl", "name", "trade", "reg", "period", "dt"] });
            console.log(json);
            setStdData(json);
            setMsg("Excel file loaded");
        } else {
            setMsg("Seclect an excel file");
        }
    }

    const createPdfHanler = () => {
        if (stdData.length < 1) {
            setMsg("Please select xlxs file");
            return false;
        }
        setMsg("Please wait...");
        const doc = new jsPDF({
            orientation: 'l',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16 // or "smart", default is 16
        });
        console.log(stdData);
        for (let i = 0; i < stdData.length; i++) {
            if (i > 0) {
                doc.addImage("/images/certificate/Cirtificate_F.png", "PNG", 0, 0, 297, 210);

                doc.setFont("Lobster-Regular", "normal");
                doc.setFontSize(24);
                doc.text(`${stdData[i].name}`, 148, 82, null, null, "center");

                doc.setFont("OpenSansCondensed-Light", "normal");
                doc.setFontSize(14);
                doc.text("Registration No: " + stdData[i].reg, 148, 89, null, null, "center");

                doc.setFont("Lobster-Regular", "normal");
                doc.setFontSize(16);
                doc.text(`${stdData[i].trade}`, 163, 104, null, null, "center");
                doc.setFontSize(14)
                doc.text(`${stdData[i].period}`, 86, 111, null, null, "center");

                doc.setFontSize(12);
                doc.text(`${stdData[i].sl}`, 66, 182);
                doc.text(`${stdData[i].dt}`, 196, 182);

                doc.addPage("a4", "l");
            }
        }
        setMsg("PDF file Created");
        doc.deletePage((stdData.length));
        doc.save(Date.now() + ".pdf");

    }

    return (
        <div style={{ backgroundColor: "#D2F3F1 " }}>
            <Header Title="Create Certificates COL" />

            <Container>
                <Row>
                    <Col xs="12">
                        <p>{msg}</p>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Control type="file" onChange={fileChangeHandler} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
                        </Form.Group>
                        <a href="/images/certificate/certificate.xlsx" download className="btn btn-success me-2">Format Download</a>
                        <Button variant="primary" onClick={createPdfHanler}>Create PDF</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Certificate;