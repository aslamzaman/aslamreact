import React, { useState } from "react";
import * as XLSX from 'xlsx';
import { Container, Row, Col, Table, Form, Button } from "react-bootstrap";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";


const Certificate = () => {
  const [msg, setMsg] = useState("Seclect an excel file");
  const [stdData, setStdData] = useState([]);


  const fileChangeHandler = async (e) => {
    const file = e.target.files[0];
    if (file) {

      setMsg("Please wait...");
      const bufferObj = await file.arrayBuffer();

      const workbook = XLSX.read(bufferObj, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);
      console.log(json);
      setStdData(json);
      setMsg("Excel file loaded");
    } else {
      setMsg("Seclect an excel file");
    }
  }

  const saveHandler = ()=>{
    const worksheet = XLSX.utils.json_to_sheet(stdData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "My Sheet 1");
  
    /* fix headers */
    XLSX.utils.sheet_add_aoa(worksheet, [["Name", "Post", "Date"]], { origin: "A1" });
  
    /* calculate column width */
    
    worksheet["!cols"] = [ { wch: 25 } ,{ wch: 5 },{ wch: 12 }];
  
    /* create an XLSX file and try to save to Presidents.xlsx */
    XLSX.writeFile(workbook, "Presidents.xlsx", { compression: true });

  }

  return (
    <div style={{ backgroundColor: "#D2F3F1 " }}>
      <Header title="Create Certificates" />

      <Container>
        <Row>
          <Col xs="12">
            <p>{msg}</p>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Control type="file" onChange={fileChangeHandler} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
            </Form.Group>  
            <Button variant="primary" onClick={saveHandler}>Save Excel File</Button>          
          </Col>
        </Row>
        <Row>
          <Col xs="12">
           <Table bordered hover>
            <tbody>
              {
                stdData.length?stdData.map((s, i)=>{
                  return(
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{s.Name}</td>                     
                      <td>{s.Post}</td>
                      <td>{s.Date}</td>
                    </tr>
                  )
                }):null
              }
            </tbody>
            </Table>       
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Certificate;