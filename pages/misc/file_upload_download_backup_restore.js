import React, { useState } from "react";
import { saveAs } from "file-saver";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";


const Certificate = () => {
  const [blobData, setBlobData] = useState("");


  const fileUploadHandler = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        let result = e.target.result;
        let json = JSON.parse(result);

        console.log(result);
        console.log(json);
      }
      fileReader.readAsText(file);
    }
  }


  const fleDownload = () => {

    const en = [
      {
        id: 1,
        name: "Alinagar"
      },
      {
        id: 2,
        name: "Amtoli"
      },
      {
        id: 3,
        name: "Amua"
      },
      {
        id: 4,
        name: "Bakshiganj"
      },
      {
        id: 5,
        name: "Damkura"
      },
      {
        id: 6,
        name: "Deuty"
      },
      {
        id: 7,
        name: "Elaipur"
      },
      {
        id: 8,
        name: "Fulbari"
      },
      {
        id: 9,
        name: "Ghontaghar"
      },
      {
        id: 10,
        name: "Gobratola"
      },
      {
        id: 11,
        name: "Haluaghat"
      },
      {
        id: 12,
        name: "Jaldhaka"
      },
      {
        id: 13,
        name: "Jointiapur"
      },
      {
        id: 14,
        name: "Kayetpara"
      },
      {
        id: 15,
        name: "Khasherhat"
      },
      {
        id: 16,
        name: "Kuripara"
      },
      {
        id: 17,
        name: "Malgara"
      },
      {
        id: 18,
        name: "Nalitabari"
      },
      {
        id: 19,
        name: "Noyadiary"
      },
      {
        id: 20,
        name: "Patharghata"
      },
      {
        id: 21,
        name: "Ranirbandor"
      },
      {
        id: 22,
        name: "Satbaria"
      },
      {
        id: 23,
        name: "Shokhipur"
      },
      {
        id: 24,
        name: "Suruj"
      },
      {
        id: 25,
        name: "Ulipur"
      },
      {
        id: 26,
        name: "Vatpara"
      },
      {
        id: 27,
        name: "SAC"
      },
      {
        id: 28,
        name: "SC"
      }
    ]
    var blob = new Blob([JSON.stringify(blobData ? blobData : en, null, 2)], { type: "application/javascript" });
    saveAs(blob, "hello world.js")
  }


  const fileRestoreHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        let result = e.target.result;
        let json = JSON.parse(result);

        //console.log(result);
        // console.log(json);
       
                for (let i = 0; i < json.length; i++) {
                  let obj = json[i];
                  let a = Object.keys(obj);
                  let b = Object.values(obj);
                  let k = a[0];
                  let v = b[0];
                  console.log(v);
                  localStorage.setItem([k], JSON.stringify(v));
                }
      }
      fileReader.readAsText(file);
    }
  }


  const fleBackup = () => {
    var a = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      a.push(k);
    }

    console.log(a);

    let d = [];
    for (let j = 0; j < a.length; j++) {
      d.push({ [a[j]]: JSON.parse(localStorage.getItem(a[j])) });
    }
    console.log(d);
  }


  return (
    <div style={{ backgroundColor: "#D2F3F1 " }}>
      <Header Title="File Download" />

      <Container>
        <Row>
          <Col xs="12">
            <Form.Group controlId="formFile" className="mb-3">
              <label>Upload</label>
              <Form.Control type="file" onChange={fileUploadHandler} accept="application/javascript" />
            </Form.Group>
          </Col>
          <Col xs="12">
            <Form.Group controlId="formFile" className="mb-3">
              <label>localStorage Resotre</label>
              <Form.Control type="file" onChange={fileRestoreHandler} accept="application/javascript" />
            </Form.Group>
          </Col>

          <Col xs="12">
            <Button variant="primary me-2" onClick={fleDownload}>File Download</Button>

            <Button variant="primary me-2" onClick={fleBackup}>File Backup</Button>
          </Col>
        </Row>

      </Container>
      <Footer />
    </div>
  )
}

export default Certificate;