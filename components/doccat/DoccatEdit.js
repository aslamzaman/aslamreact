import React, { useState } from "react";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";


const DoccatEdit = (props) => {
const [name, setName] = useState("");

const [mainModalShow, setMainModalShow] = useState(false);
const [msg, setMsg] = useState("Data ready");
const Message = props.EditMsg;
let id = props.Id;


const closeModal = ()=>{
setMainModalShow(false);
Message("Data ready");
}

const showModal = () => {
setMainModalShow(true);
let localData = localStorage.getItem("doccat");
let jsonData = JSON.parse(localData);
let getOneArray = jsonData.filter((t) => {
return t.id === id;
});
let getOne = getOneArray[0];
setName(getOne.name);
Message("Ready to edit");
}


const saveHandler = () => {
if (!validationCheck() === true) { return false; };
let obj = {
id: id,
name: name
}
let localData = localStorage.getItem("doccat");
let jsonData = JSON.parse(localData);
for (let i = 0; i < jsonData.length; i++) {
if (jsonData[i].id === id) {
jsonData[i] = obj;
}
}
localStorage.setItem("doccat", JSON.stringify(jsonData));
Message("Data updated successfully.");
setMainModalShow(false);
}


const validationCheck = () => {
let warn=[];
if(name){
return true;
}
if(!name){
warn.push(" Name required");
}
let checkWarning = warn.toString();
setMsg(checkWarning);
}


return (
<>
<Modal size="lg" show={mainModalShow} onHide={closeModal}>
<Modal.Header closeButton>
<Modal.Title>Edit Existing Doccat</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form>
<Row className="mb-3">
<Form.Group  as={Col} lg="6">
<Form.Label>Name</Form.Label>
<Form.Control type="text" onChange={(e)=>{setName(e.target.value)}} value={name} />
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
export default DoccatEdit;
