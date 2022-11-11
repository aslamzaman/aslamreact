import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Table, Modal, Form } from "react-bootstrap";
import Header from "../../components/layout/Header";
import { X, Pencil, Trash, Check, Printer, Save } from 'react-bootstrap-icons';
import { jsPDF } from "jspdf";
import { asLib } from "../../util/asLib";
import { Project } from "../../helpers/courier_bill/project";

const mobileBill = [
  {id:1,name:"Office & Organization", num:"01711439324", taka:500},
  {id:2,name:"Chairman", num:"01711564665", taka:2500},
  {id:3,name:"Establishment", num:"01730051229", taka:500},
  {id:3,name:"A/C", num:"01766667350", taka:500}
];


export default function Simple() {
  const [projects, setUProjects] = useState([]);
  const [bills, setBills] = useState([]);

  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [taka, setTaka] = useState("");

  const [project,setProject] = useState("CORE");
  const [totalTaka, setTotalTaka] = useState("");
  const [msg, setMsg] = useState("Data ready");
  const [updateId, setUpdateId] = useState("");
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const TotalTaka = (x) => {
      let gtTaka = 0;
      for (let j = 0; j < x.length; j++) {
        gtTaka = gtTaka + parseFloat(x[j].taka);
      }
      setTotalTaka(gtTaka);
    }

    if (bills.length === 0) {
      if (localStorage.getItem("mobileBills")) {
        let jsonData = JSON.parse(localStorage.getItem("mobileBills"));
        setBills(jsonData);
      } else {
        setBills(mobileBill);
      }
    }

    setUProjects(Project);
    TotalTaka(bills);
  }, [bills.length, msg,bills])




  // ------------------- Modal -------------------------
  const modalShowHandler = () => {
    setModalShow(true);
  }

  // ------------------- Helpers -------------------------

  const validationCheck = () => {
    let warn = [];
    if (name && num && taka) {
      return true;
    }
    if (!name) {
      warn.push(" Name required");
    }
    if (!num) {
      warn.push(" Number required");
    }
    if (!taka) {
      warn.push(" Taka required");
    }
    let checkWarning = warn.toString();
    setMsg(checkWarning);
  }

const nameChangeHandler =(e)=>{
  setName(e.target.value);
  for(let i = 0; i < mobileBill.length; i++){
    if(e.target.value===mobileBill[i].name){
      setNum(mobileBill[i].num);
    }
  }
}
  // ------------------- Buttons Function -------------------------

  const printHandler = () => {
    if (project === "") { setMsg("Please select project"); return false; };
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });

    doc.setFont("times", "normal");
    doc.setFontSize(16);
    doc.text("Centre for Mass Education in Science (CMES)", 105, 15, null, null, "center");
    doc.setFontSize(12);
    doc.text("House-5/4, Block-F, Lalmatia, Dhaka-1207", 105, 21, null, null, "center");
    doc.setFont("times", "bold");
    doc.setFontSize(20);
    doc.text("Mobile Bill", 105, 35, null, null, "center");
    doc.setFont("times", "italic");
    doc.setFontSize(14);
    doc.text(`Project: ${project}`, 105, 41, null, null, "center");
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text(`Date: ${asLib.util.dateFormat(new Date(),".")}`, 105, 46, null, null, "center");

    doc.line(15, 50, 195, 50) // horizontal line
    doc.line(15, 56, 195, 56) // horizontal line
    doc.line(15, 56, 15, 50) // vertical line
    doc.line(25, 56, 25, 50) // vertical line
    doc.line(110, 56, 110, 50) // vertical line
    doc.line(168, 56, 168, 50) // vertical line
    doc.line(195, 56, 195, 50) // vertical line

    doc.setFont("times", "bold");
    doc.text("SL", 20, 54, null, null, "center");
    doc.text("USER NAME", 35, 54, null, null, "left");
    doc.text("NUMBER", 140, 54, null, null, "center");
    doc.text("TAKA", 182, 54, null, null, "center");
    doc.setFont("times", "normal");
    //----------------------------------------------------
    let y = 62;
    let total = 0;
    for (let i = 0; i < bills.length; i++) {
      doc.text(`${i+1}`, 20, y-2 , null, null, "center");
      doc.text(`${bills[i].name}`, 35, y-2 , null, null, "left");
      doc.text(`${bills[i].num}`, 140, y-2 , null, null, "center");
      doc.text(`${bills[i].taka}`, 182, y-2, null, null, "center");
      doc.line(15, y, 195, y) // horizontal line
      doc.line(15, y, 15, y-6) // vertical line
      doc.line(25, y, 25, y-6) // vertical line
      doc.line(110, y, 110, y-6) // vertical line
      doc.line(168, y, 168, y-6) // vertical line
      doc.line(195, y, 195, y-6) // vertical line

      total = total + parseFloat(bills[i].taka);
      y=y+6;
    }

doc.line(15, y, 195, y) // horizontal line
doc.line(15, y, 15, y-6) // vertical line
doc.line(25, y, 25, y-6) // vertical line
doc.line(168, y, 168, y-6) // vertical line
doc.line(195, y, 195, y-6) // vertical line
doc.setFont("times", "bold");
doc.text("TOTAL", 44, y-2, null, null, "center");
doc.text(`${total}`, 182, y-2, null, null, "center");
doc.setFont("times", "normal");
let inodrd = asLib.util.inword.en(parseInt(total));
doc.text(`INWORD: ${inodrd.toUpperCase()}`, 15, y-2+6, null, null, "left");


doc.text("Prepared By:", 15, y+45, null, null, "left");
doc.text("Aslam Zaman", 15, y+45+6, null, null, "left");
doc.text("Senior Program Organizer", 15, y+45+12, null, null, "left");




    //-------------------------------------------------------
    doc.save("1.pdf");
    setModalShow(false);
  }

  const downloadHandler = () => {
  }

  const saveHandler = () => {
    if (!validationCheck() === true) { return false; };
    let obj = {
      id: Date.now(),
      name: name,
      num: num,     
      taka: taka
    }

    if (updateId === "") {
      setBills([...bills, obj]);
      localStorage.setItem("mobileBills", JSON.stringify([...bills, obj]));
      setMsg(`Data inserted successfully.`);
    } else {
      for (let i = 0; i < bills.length; i++) {
        if (bills[i].id === updateId) {
          bills[i] = obj;
        }
      }
      setUpdateId("");
      setMsg(`Data updated successfully.`);
      localStorage.setItem("mobileBills", JSON.stringify(bills));
    }
    clearHandler();
  }

  const clearHandler = () => {
    setName("");
    setNum("");
    setTaka("");
    setUpdateId("");
    setMsg("Ready for new addition.");
  }

  const editHandler = (id) => {
    const bill = bills.filter((t) => t.id === id);
    setName(bill[0].name);
    setNum(bill[0].num); 
    setTaka(bill[0].taka);
    setUpdateId(id);
    setMsg("Ready for edit.");
  }


  const deleteHandler = (id) => {
    let text = "Do you sure!\nDelete this entry?";
    if (confirm(text) == true) {
      for (let i = 0; i < bills.length; i++) {
        if (bills[i].id === id) {
          let deleted = bills.filter((t) => t.id !== id);
          setBills(deleted);
          localStorage.setItem("mobileBills", JSON.stringify(deleted));
          setMsg(`Data delete successfully`);
        }
      }
    } else {
      text = "You canceled!";
    }
  }




  return (
    <>
      <Header Title={`Mobile Bill: [${totalTaka}]`} />
      <Container fluid>
        <Row>
          <Col>
            <p className="text-primary" style={{ margin: "0px", paddingTop: "10px" }}>{msg}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="table-responsive">
              <Table striped bordered hover responsive>
                <thead className="table-secondary">
                  <tr>
                    <th scope="col" style={{ width: "15%", textAlign: "center" }}>SL</th>
                    <th scope="col" style={{ width: "20%", textAlign: "left" }}>Name</th>
                    <th scope="col" style={{ width: "25%", textAlign: "center" }}>Number</th>
                    <th scope="col" style={{ width: "25%", textAlign: "right" }}>Taka</th>
                    <th scope="col" style={{ width: "10%", textAlign: "center", minWidth: "95px" }} className="text-center">
                      <Button variant="primary me-1" size="sm" onClick={modalShowHandler} title="Print local TA"><Printer color="#FFFFFF" size={15} /></Button>
                      <Button variant="secondary" size="sm" onClick={downloadHandler} title="Download blank format"><Save color="#FFFFFF" size={15} /></Button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>
                      <select className="form-control" onChange={nameChangeHandler} value={name}>
                        <option value="">Select Unit</option>
                        <option value="Office & Organization">Office & Organization</option>
                        <option value="Chairman">Chairman</option>
                        <option value="Establishment">Establishment</option>
                        <option value="A/C">A/C</option>
                      </select>
                    </td>
                    <td> <input className="form-control" type="text" onChange={(e) => { setNum(e.target.value) }} value={num} /></td>
                    <td> <input className="form-control" type="number" onChange={(e) => { setTaka(e.target.value) }} value={taka} maxLength="8" /></td>
                    <td style={{ textAlign: "center", fontFamily: "Arial" }}>
                      <Button variant="success me-1" size="sm" onClick={saveHandler} title="Save change"><Check color="#FFFFFF" size={15} />
                      </Button><Button variant="danger me-1" size="sm" onClick={clearHandler} title="Crear input"><X color="#FFFFFF" size={15} /></Button>
                    </td>
                  </tr>


                  {
                    bills.length ? bills.map((b, index) => {
                      return (
                        <tr key={index}>
                          <td style={{ textAlign: "center" }}>{index + 1}</td>
                          <td style={{ textAlign: "left" }}>{b.name}</td>
                          <td style={{ textAlign: "center" }}>{b.num}</td>
                          <td style={{ textAlign: "right" }}>{b.taka}</td>
                          <td style={{ textAlign: "center" }}>
                            <Button variant="info me-1" size="sm" onClick={() => { editHandler(b.id) }} title="Edit"><Pencil color="#FFFFFF" size={15} /></Button>
                            <Button variant="warning me-1" size="sm" onClick={() => { deleteHandler(b.id) }} title="Delete"><Trash color="#FFFFFF" size={15} /></Button>
                          </td>
                        </tr>
                      )
                    })
                      : null
                  }
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal size="md" show={modalShow} onHide={() => { setModalShow(false); }}>
        <Modal.Header closeButton>
          <Modal.Title>Mobile Bill</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='form'>
            <Row>
              <Col sm={12}>
                <p>{msg}</p>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <Form.Label>Cause</Form.Label>
                <Form.Select onChange={(e) => { setProject(e.target.value); }} value={project} >
                  <option value="">Select Project</option>
                  {
                    projects.length ? projects.map((p, index) => {
                      return (
                        <option value={p.name} key={index}>{p.name}</option>
                      )
                    }) : null
                  }
                </Form.Select>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='me-2' onClick={() => { setModalShow(false); }}>Close</Button>
          <Button variant='primary' onClick={printHandler}>Print</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}