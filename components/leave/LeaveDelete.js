import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";



const LeaveDelete = (props) => {
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const Message = props.DeleteMsg;
  let id = props.Id;

  const modalCloseHandaler = () => {
    setDeleteModalShow(false);
    Message("Data ready");
  }

  const deleteHandler = () => {
    Message("Ready to delete.");
    setDeleteModalShow(true);
  }

  const removeHandler = async () => {
      let leaveData = localStorage.getItem("leave");
      let jsonData = JSON.parse(leaveData);
      let getAllWithOutDeleteItem = jsonData.filter((t) => t.id !== id);
      localStorage.setItem("leave", JSON.stringify(getAllWithOutDeleteItem));
      Message("Data delete successfully.")
      setDeleteModalShow(false);
  }


  return (
    <>
      <Modal size="sm" show={deleteModalShow} onHide={modalCloseHandaler}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-danger text-center">Are you sure want to delete?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={modalCloseHandaler}>Close</Button>
          <Button variant="primary" onClick={removeHandler}>Yes</Button>
        </Modal.Footer>
      </Modal>
      <Button variant="secondary me-1" onClick={deleteHandler}>Delete</Button>
    </>
  );

};
export default LeaveDelete;
