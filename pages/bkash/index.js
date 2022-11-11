import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button, Form, Modal } from 'react-bootstrap';
import { X, Pencil, Trash, Check, Printer } from 'react-bootstrap-icons';
import { jsPDF } from 'jspdf';
import { asLib } from "../../util/asLib";
require('../../helpers/fonts/SUTOM_MJ-normal');
require('../../helpers/fonts/SUTOM_MJ-bold');



const Bkash = () => {
  const [datas, setDatas] = useState([]);
  const [iniData, setIniData] = useState([]);

  const [dt, setDt] = useState("");
  const [unt, setUnt] = useState("");
  const [tk, setTk] = useState("");
  const [totalTk, setTotalTk] = useState(0);

  const [msg, setMsg] = useState("Data ready");
  const [updateId, setUpdateId] = useState("");
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setIniData(asLib.cmes.unit.bn);
    if(datas){
      let total = 0;
      for(let i = 0; i < datas.length;i++){
        total = total+  parseInt(datas[i].taka);
      }
      setTotalTk(total);
    }
  }, [msg,datas])

  const printHandler = () => {
    const doc = new jsPDF(
      {
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true,
        floatPrecision: 16 // or "smart", default is 16
      }
    )
    doc.setFont("SutonnyMJ", "normal");
    doc.setFontSize(20);
    doc.text('†m›Uvi di g¨vm GWy‡Kkb Bb mv‡qÝ (wmGgBGm)', 105, 20, null, null, "center");
    doc.setFontSize(16);
    doc.text("evwo bs- 5/4, eøK- Gd, jvjgvwUqv, XvKv 1207",
      105, 26, null, null, "center");
    doc.setFont("SutonnyMJ", "bold");
    doc.setFontSize(18);
    doc.text("BDwbU mg~‡n dvÛ †cÖi‡Yi weKvk wej", 105, 40, null, null, "center");
    doc.setFont("SutonnyMJ", "normal");
    doc.setFontSize(16);
    //doc.line(20,37,190,37); // horizontal line
    doc.text(`ZvwiL: ${asLib.util.dateFormat(dt, ".")}`, 105, 46, null, null, "center");
    doc.setFontSize(16);

    let y = 76;
    let y1 = y;
    let t = 0;

    doc.line(20, y - 16, 190, y - 16); // horizontal line
    doc.line(20, y - 8, 190, y - 8); // horizontal line
    doc.setFont("SutonnyMJ", "bold");
    doc.text("µwgK bs", 32, y - 10, null, null, "center");
    doc.text("BDwbU", 95, y - 10, null, null, "center");
    doc.text("UvKv", 170, y - 10, null, null, "center");
    doc.setFont("SutonnyMJ", "normal");
    for (let i = 0; i < datas.length; i++) {
      doc.text(`${i + 1}`, 32, y - 2, null, null, "center");
      doc.text(`${datas[i].unit}`, 95, y - 2, null, null, "center");
      doc.text(`${datas[i].taka}/-`, 170, y - 2, null, null, "center");
      t = t + parseInt(datas[i].taka);
      doc.line(20, y, 190, y); // horizontal line
      y = y + 8;
    }
    doc.line(20, y, 190, y); // horizontal line

    doc.line(20, y1 - 16, 20, y); // vertical line
    doc.line(45, y1 - 16, 45, y); // vertical line
    doc.line(145, y1 - 16, 145, y); // vertical line
    doc.line(190, y1 - 16, 190, y); // vertical line
    doc.setFont("SutonnyMJ", "bold");
    doc.text("†gvU UvKv", 95, y - 2, null, null, "center");
    doc.text(`${t}/-`, 170, y - 2, null, null, "center");
    doc.setFont("SutonnyMJ", "normal");
    doc.text(`UvKv K_vqt- ${asLib.util.inword.bn(t)} UvKv gvÎ`, 20, y + 8 - 2, null, null, "left");
    doc.text(`Avmjvg Rvgvb`, 20, y + 42, null, null, "left");
    doc.text(`wmwbqi †cÖvMÖvg AM©vbvBRvi`, 20, y + 48, null, null, "left");
    doc.text(`wmGgBGm`, 20, y + 54, null, null, "left");
    doc.save("1.pdf");
    setModalShow(false);
  }

  const clearHandler = () => {
    setUnt("");
    setTk("");
    setMsg("Data ready");
  }

  const editHandler = (id) => {
    setMsg("Ready to update.");
    setUpdateId(id);
    const s = datas.filter((t) => {
      return t.id === id;
    });
    setUnt(s[0].unit);
    setTk(s[0].taka);
  }

  const saveHandler = () => {
    if (tk === "" || unt === "") {
      setMsg("Please fill up width data");
      return false;
    }

    if (updateId > 0) {
      for (let i = 0; i < datas.length; i++) {
        if (updateId === datas[i].id) {
          datas[i] = {
            id: updateId,
            unit: unt,
            taka: tk
          }
        }
        setUpdateId("");
        setMsg("Data updated successfully.");
      }
    } else {
      datas.push({
        id: Date.now(),
        unit: unt,
        taka: tk
      })
      setMsg("Data save successfully.");
    }
    setTk("");
    setUnt("");

  }

  const deleteHandler = (id) => {
    setMsg("");
    const noDeleted = datas.filter((res) => {
      return res.id !== id;
    }
    );
    setDatas(noDeleted);
    setMsg("Data deleted successfully.");

  }

  const showModalHandler = () => {
    if (datas.length === 0) {
      setMsg("No data!");
      return false;
    } else {
      setDt(asLib.util.dateFormat(new Date(), "-"));
      setModalShow(true);
    }

  }


  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Bkash Bill= {totalTk}</h1>
            <p className="text-primary mb-4" style={{ margin: "0px", paddingTop: "10px" }}>{msg}</p>
            <Table bordered hover>
              <thead>
                <tr>
                  <th style={{ textAlign: "center", width: "20%" }}>SL</th>
                  <th style={{ textAlign: "center", width: "30%" }}>Unit</th>
                  <th style={{ textAlign: "center", width: "30%" }}>Taka</th>
                  <th style={{ width: "20%", textAlign: "center" }}>
                    <Button variant="primary" size="sm" onClick={showModalHandler} title="Crear input"><Printer color="#FFFFFF" size={15} /></Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">
                  </td>
                  <td>
                    <Form.Select style={{ fontFamily: "SutonnyMJ", textAlign: "center" }} onChange={(e) => { setUnt(e.target.value); setMsg("Data ready."); }} value={unt}>
                      <option value="">---</option>
                      {
                        iniData.map((d) => {
                          return (
                            <option key={d.id} value={d.name}> {d.name} </option>
                          );
                        })
                      }
                    </Form.Select>
                  </td>
                  <td>
                    <input type="text" className="form-control text-center" onChange={(e) => { setTk(e.target.value); setMsg("Data ready.") }} value={tk} />
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Button variant="success me-1" size="sm" onClick={saveHandler} title="Save change"><Check color="#FFFFFF" size={15} /> </Button>
                    <Button variant="danger me-1" size="sm" onClick={clearHandler} title="Crear input"><X color="#FFFFFF" size={15} /></Button>
                  </td>
                </tr>
                {
                  datas.map((b, i) => {
                    return (
                      <tr key={i}>
                        <td style={{ fontFamily: "SutonnyMJ", textAlign: "center" }}>{i + 1}.</td>
                        <td style={{ fontFamily: "SutonnyMJ", textAlign: "center" }}>{b.unit}</td>
                        <td style={{ fontFamily: "SutonnyMJ", textAlign: "center" }}>{b.taka}/-
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <Button variant="info me-1" size="sm" onClick={() => { editHandler(b.id) }} title="Edit"><Pencil color="#FFFFFF" size={15} /></Button>
                          <Button variant="warning me-1" size="sm" onClick={() => { deleteHandler(b.id) }} title="Delete"><Trash color="#FFFFFF" size={15} /></Button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container >
      <Modal size="sm" show={modalShow} onHide={() => { setModalShow(false) }}>
        <Modal.Body>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" onChange={(e) => { setDt(e.target.value) }} value={dt} />
          <Button variant="secondary mt-2 me-2" onClick={() => { setModalShow(false) }}>Close</Button>
          <Button variant="primary mt-2" onClick={printHandler}>Print</Button>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Bkash;