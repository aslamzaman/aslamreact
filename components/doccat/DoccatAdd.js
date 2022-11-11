import React, { useState } from "react";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";


const DoccatAdd = (props) => {
const [name, setName] = useState("");

const [mainModalShow, setMainModalShow] = useState(false);
const [msg, setMsg] = useState("Data ready");
const Message = props.AddMsg;


const closeModal = ()=>{
setMainModalShow(false);
Message("Data ready");
}


const getMsgHandler = (data) => {
Message(data);
}


const showModal = () => {
setName("");
Message("Ready to add new");
setMainModalShow(true);
}


const saveHandler = async () => {
if (!validationCheck() === true) { return false; };
let obj = {
id: Date.now(),
name: name
}

let localData = localStorage.getItem("doccat");
if (localData) {
let jsonData = JSON.parse(localData);
localStorage.setItem("doccat", JSON.stringify([...jsonData, obj]));
Message("Data inserted successfully");
} else {
localStorage.setItem("doccat", JSON.stringify([obj]));
Message("Data inserted successfully");
}
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
<Modal.Title>Add New Doccat</Modal.Title>
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
<Button variant="primary" onClick={showModal} title="New Add">Add New</Button>
</>
);


};
export default DoccatAdd;
