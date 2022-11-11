import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { jsPDF } from "jspdf";
require("../../helpers/fonts/SUTOM_MJ-normal");
require("../../helpers/fonts/SUTOM_MJ-bold");


const DoccatPrint = (props) => {
const [mainModalShow, setMainModalShow] = useState(false);
const Message = props.PrintMsg;

const closeModal = ()=>{
setMainModalShow(false);
Message("Data ready");
}


const showModal = () => {
Message("Ready to print");
setMainModalShow(true);
}


const printHandler = () => {
const doc = new jsPDF({
orientation: "p",
unit: "mm",
format: "a4",
putOnlyUsedFonts: true,
floatPrecision: 16
});

let doccats = [];
let localData = localStorage.getItem("doccat");
if (localData) {
doccats = JSON.parse(localData);
} else {
Message("No data!!");
return false;
}

let y = 20;
for(let i = 0; i < doccats.length;i++){
doc.text(`${doccats[i].name}`, 30, y , null, null, "center");
y = y + 6;
}

doc.save(`${Date.now()}-doccat.pdf`);
Message("Print completed.");
setMainModalShow(false);
}


return (
<>
<Modal size="lg" show={mainModalShow} onHide={closeModal}>
<Modal.Header closeButton>
<Modal.Title>Print Doccat</Modal.Title>
</Modal.Header>
<Modal.Body>
<h1>Print</h1>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={closeModal}>Close</Button>
<Button variant="primary" onClick={printHandler}>Print</Button>
</Modal.Footer>
</Modal>
<Button variant="secondary" onClick={showModal} title="Print">Print TA</Button>
</>
);

};
export default DoccatPrint;
