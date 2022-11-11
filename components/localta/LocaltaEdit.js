import React, { useState } from "react";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";


const LocaltaEdit = (props) => {
  const [place1, setPlace1] = useState("");
  const [t1, setT1] = useState("");
  const [place2, setPlace2] = useState("");
  const [t2, setT2] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [taka, setTaka] = useState("");

  const [mainModalShow, setMainModalShow] = useState(false);
  const [msg, setMsg] = useState("Data ready");
  const Message = props.EditMsg;
  let id = props.Id;


  const closeModal = () => {
    setMainModalShow(false);
    Message("Data ready");
  }

  const showModal = () => {
    setMainModalShow(true);
    let localData = localStorage.getItem("localta");
    let jsonData = JSON.parse(localData);
    let getOneArray = jsonData.filter((t) => {
      return t.id === id;
    });
    let getOne = getOneArray[0];
    setPlace1(getOne.place1);
    setT1(getOne.t1);
    setPlace2(getOne.place2);
    setT2(getOne.t2);
    setVehicle(getOne.vehicle);
    setTaka(getOne.taka);
    Message("Ready to edit");
  }


  const saveHandler = () => {
    if (!validationCheck() === true) { return false; };
    let obj = {
      id: id,
      place1: place1,
      t1: t1,
      place2: place2,
      t2: t2,
      vehicle: vehicle,
      taka: taka
    }
    let localData = localStorage.getItem("localta");
    let jsonData = JSON.parse(localData);
    for (let i = 0; i < jsonData.length; i++) {
      if (jsonData[i].id === id) {
        jsonData[i] = obj;
      }
    }
    localStorage.setItem("localta", JSON.stringify(jsonData));
    Message("Data updated successfully.");
    setMainModalShow(false);
  }


  const validationCheck = () => {
    let warn = [];
    if (place1 && t1 && place2 && t2 && vehicle && taka) {
      return true;
    }
    if (!place1) {
      warn.push(" Place1 required");
    }
    if (!t1) {
      warn.push(" T1 required");
    }
    if (!place2) {
      warn.push(" Place2 required");
    }
    if (!t2) {
      warn.push(" T2 required");
    }
    if (!vehicle) {
      warn.push(" Vehicle required");
    }
    if (!taka) {
      warn.push(" Taka required");
    }
    let checkWarning = warn.toString();
    setMsg(checkWarning);
  }


  return (
    <>
      <Modal size="lg" show={mainModalShow} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Existing Localta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} lg="6">
                <Form.Label>From</Form.Label>
                <Form.Control type="text" onChange={(e) => { setPlace1(e.target.value) }} value={place1} style={{ fontFamily: "SutonnyMj" }} />
              </Form.Group>
              <Form.Group as={Col} lg="6">
                <Form.Label>Time1</Form.Label>
                <Form.Control type="text" onChange={(e) => { setT1(e.target.value) }} value={t1} style={{ fontFamily: "SutonnyMj" }} />
              </Form.Group>
              <Form.Group as={Col} lg="6">
                <Form.Label>Where</Form.Label>
                <Form.Control type="text" onChange={(e) => { setPlace2(e.target.value) }} value={place2} style={{ fontFamily: "SutonnyMj" }} />
              </Form.Group>
              <Form.Group as={Col} lg="6">
                <Form.Label>Time2</Form.Label>
                <Form.Control type="text" onChange={(e) => { setT2(e.target.value) }} value={t2} style={{ fontFamily: "SutonnyMj" }} />
              </Form.Group>
              <Form.Group as={Col} lg="6">
                <Form.Label>Vehicle</Form.Label>
                <Form.Select type="text" onChange={(e) => { setVehicle(e.target.value) }} value={vehicle} style={{ fontFamily: "SutonnyMj" }} >
                  <option value="">---</option>
                  <option value="evm">evm</option>
                  <option value="wmGbwR">wmGbwR</option>
                  <option value="wi·v">wi·v</option>
                </Form.Select>              </Form.Group>
              <Form.Group as={Col} lg="6">
                <Form.Label>Taka</Form.Label>
                <Form.Control type="number" onChange={(e) => { setTaka(e.target.value) }} value={taka} style={{ fontFamily: "SutonnyMj" }} />
              </Form.Group>
              <p className="text-primary" style={{ margin: "0px", paddingTop: "10px" }}>{msg}</p>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
          <Button variant="primary" onClick={saveHandler}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
      <Button size="sm" variant="info me-2" onClick={showModal} title="Edit"><Pencil size={15} /></Button>
    </>
  );


};
export default LocaltaEdit;
