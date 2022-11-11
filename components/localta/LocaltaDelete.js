import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { X } from "react-bootstrap-icons";


const LocaltaDelete = (props) => {
const [deleteModalShow, setDeleteModalShow] = useState(false);
const Message = props.DeleteMsg;
let id = props.Id;


const closeModal = ()=>{
setDeleteModalShow(false);
 Message("Data ready");
}


const showModal = () => {
Message("Ready to delete.");
setDeleteModalShow(true);
}

const removeHandler = async () => {
let localData = localStorage.getItem("localta");
let jsonData = JSON.parse(localData);
let getAllWithOutDeleteItem = jsonData.filter((t) =>{
return t.id !== id;
});

localStorage.setItem("localta", JSON.stringify(getAllWithOutDeleteItem));
Message("Data delete successfully.");
setDeleteModalShow(false);
}


return (
<>
<Modal size="sm" show={deleteModalShow} onHide={closeModal}>
<Modal.Header closeButton>
<Modal.Title>Delete</Modal.Title>
</Modal.Header>
<Modal.Body>
<p className="text-danger text-center">Are you sure want to delete?</p>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={closeModal}>Close</Button>
<Button variant="primary" onClick={removeHandler}>Yes</Button>
</Modal.Footer>
</Modal>
<Button size="sm" variant="warning" onClick={showModal} title="Delete"><X size={15} /></Button>
</>
);


};
export default LocaltaDelete;
