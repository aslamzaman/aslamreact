import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { CloudUpload } from "react-bootstrap-icons";


const LocaltaUpload = (props) => {
const [uploadModalShow, setUploadModalShow] = useState(false);
const [file, setFile] = useState(null);
const [msg, setMsg] = useState("Select a file.");
const Message = props.UploadMsg;


const showModal = () => {
Message("Ready to upload.");
setUploadModalShow(true);
}


const closeModal = ()=>{
setUploadModalShow(false);
Message("Data ready");
}


const uploadHandler = (e) => {
if (file) {
const reader = new FileReader();
reader.onload = (() => {
let checkData = JSON.parse(reader.result)[0];
if (!checkData.place1) {
Message("Data not match!");
setUploadModalShow(false);
return false;
};

localStorage.setItem("localta", reader.result);
Message("Data loaded successfully");
setUploadModalShow(false);
})
reader.readAsText(file);
} else {
setMsg("Please select a file.");
}
}


return (
<>
<Modal size="lg" show={uploadModalShow} onHide={closeModal}>
<Modal.Header closeButton>
<Modal.Title>Load From Computer </Modal.Title>
</Modal.Header>
<Modal.Body>
<Form.Control type="file" onChange={(e) => { setFile(e.target.files[0]); }} size="lg" accept="application/javascript" />
<p>{msg}</p>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={closeModal}>Close</Button>
<Button variant="primary" onClick={uploadHandler}>Upload</Button>
</Modal.Footer>
</Modal>
<Button size="sm" variant="danger" onClick={showModal} title="Load" ><CloudUpload size={15} /></Button>
</>
);


};
export default LocaltaUpload;
