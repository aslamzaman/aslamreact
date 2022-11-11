
const PrintPage = (tbl, fld) => {

  const titleCase = (str) => {
    return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  const clearHandler = (str) => {
    var x1 = str.replace(/`/g, "");
    return x1;
  }


  var clear_fld = clearHandler(fld);
  var split_fld = clear_fld.split(',');

  let str = "";
  str = str + 'import React, { useState } from "react";\n';
  str = str + 'import { Button, Modal } from "react-bootstrap";\n';
  str = str + 'import { jsPDF } from "jspdf";\n';
  str = str + 'require("../../helpers/fonts/SUTOM_MJ-normal");\n';
  str = str + 'require("../../helpers/fonts/SUTOM_MJ-bold");\n';
  str = str + '\n';
  str = str + '\n';

  str = str + 'const ' + titleCase(tbl) + 'Print = (props) => {\n';
  let a = "";
  str = str + 'const [mainModalShow, setMainModalShow] = useState(false);\n';
  str = str + 'const Message = props.PrintMsg;\n';


  str = str + '\n';
  str = str + 'const closeModal = ()=>{\n';
  str = str + 'setMainModalShow(false);\n';
  str = str + 'Message("Data ready");\n';
  str = str + '}\n';

  str = str + '\n';
  str = str + '\n';

  str = str + 'const showModal = () => {\n';
  str = str + 'Message("Ready to print");\n';
  str = str + 'setMainModalShow(true);\n';
  str = str + '}\n';
  str = str + '\n';
  str = str + '\n';



  str = str + 'const printHandler = () => {\n';
  str = str + 'const doc = new jsPDF({\n';
  str = str + 'orientation: "p",\n';
  str = str + 'unit: "mm",\n';
  str = str + 'format: "a4",\n';
  str = str + 'putOnlyUsedFonts: true,\n';
  str = str + 'floatPrecision: 16\n';
  str = str + '});\n';

  str = str + '\n';
  str = str + 'let ' + tbl + 's = [];\n';
  str = str + 'let localData = localStorage.getItem("' + tbl + '");\n';
  str = str + 'if (localData) {\n';
  str = str + tbl + 's = JSON.parse(localData);\n';
  str = str + '} else {\n';
  str = str + 'Message("No data!!");\n';
  str = str + 'return false;\n';
  str = str + '}\n';

  str = str + '\n';
  str = str + 'let y = 20;\n';
  str = str + 'for(let i = 0; i < ' + tbl + 's.length;i++){\n';

  a = "";
  for (let i = 0; i < split_fld.length; i = i + 1) {
    if (i != 0) {
     // a = a + 'set' + titleCase(split_fld[i].trim()) + '("");\n';
      a = a + 'doc.text(`${' + tbl + 's[i].' + split_fld[i].trim() + '}`, '+ (30*i) +', y , null, null, "center");\n';

    }
  }
  str = str + a;


 // str = str + 'doc.text(`${' + tbl + 's[i].' + split_fld[0].trim() + '}`, 105, y , null, null, "center");\n';
  
  str = str + 'y = y + 6;\n';
  str = str + '}\n';
  str = str + '\n';

  str = str + 'doc.save(`${Date.now()}-' + tbl + '.pdf`);\n';
  str = str + 'Message("Print completed.");\n';
  str = str + 'setMainModalShow(false);\n';
  str = str + '}\n';
  str = str + '\n';
  str = str + '\n';

  /*  ******************************** */

  str = str + 'return (\n';
  str = str + '<>\n';
  str = str + '<Modal size="lg" show={mainModalShow} onHide={closeModal}>\n';
  str = str + '<Modal.Header closeButton>\n';
  str = str + '<Modal.Title>Print ' + titleCase(tbl) + '</Modal.Title>\n';
  str = str + '</Modal.Header>\n';
  str = str + '<Modal.Body>\n';
  str = str + '<h1>Print</h1>\n';
  str = str + '</Modal.Body>\n';
  str = str + '<Modal.Footer>\n';
  str = str + '<Button variant="secondary" onClick={closeModal}>Close</Button>\n';
  str = str + '<Button variant="primary" onClick={printHandler}>Print</Button>\n';
  str = str + '</Modal.Footer>\n';
  str = str + '</Modal>\n';
  str = str + '<Button variant="secondary" onClick={showModal} title="Print">Print TA</Button>\n';
  str = str + '</>\n';
  str = str + ');\n';
  str = str + '\n';
  str = str + '};\n';

  str = str + 'export default ' + titleCase(tbl) + 'Print;\n';

  return str;
}


export default PrintPage;
