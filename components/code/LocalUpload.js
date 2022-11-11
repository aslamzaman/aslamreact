
const ListPage = (tbl, fld) => {

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
  str = str + 'import { Button, Modal, Form } from "react-bootstrap";\n';
  str = str + 'import { CloudUpload } from "react-bootstrap-icons";\n';
  str = str + '\n';
  str = str + '\n';


  str = str + 'const ' + titleCase(tbl) + 'Upload = (props) => {\n';
  str = str + 'const [uploadModalShow, setUploadModalShow] = useState(false);\n';
  str = str + 'const [file, setFile] = useState(null);\n';
  str = str + 'const [msg, setMsg] = useState("Select a file.");\n';
  str = str + 'const Message = props.UploadMsg;\n';
  str = str + '\n';
  str = str + '\n';


  str = str + 'const showModal = () => {\n';
  str = str + 'Message("Ready to upload.");\n';
  str = str + 'setUploadModalShow(true);\n';
  str = str + '}\n';
  str = str + '\n';
  str = str + '\n';

  str = str + 'const closeModal = ()=>{\n';
  str = str + 'setUploadModalShow(false);\n';
  str = str + 'Message("Data ready");\n';
  str = str + '}\n';

  str = str + '\n';
  str = str + '\n';

  str = str + 'const uploadHandler = (e) => {\n';
  str = str + 'if (file) {\n';
  str = str + 'const reader = new FileReader();\n';
  str = str + 'reader.onload = (() => {\n';
  str = str + 'let checkData = JSON.parse(reader.result)[0];\n';
  str = str + 'if (!checkData.' + split_fld[1].trim() + ') {\n';
  str = str + 'Message("Data not match!");\n';
  str = str + 'setUploadModalShow(false);\n';
  str = str + 'return false;\n';
  str = str + '};\n';
  str = str + '\n';

  str = str + 'localStorage.setItem("' + tbl + '", reader.result);\n';
  str = str + 'Message("Data loaded successfully");\n';
  str = str + 'setUploadModalShow(false);\n';
  str = str + '})\n';
  str = str + 'reader.readAsText(file);\n';
  str = str + '} else {\n';
  str = str + 'setMsg("Please select a file.");\n';
  str = str + '}\n';
  str = str + '}\n';

  str = str + '\n';
  str = str + '\n';



  str = str + 'return (\n';
  str = str + '<>\n';

  str = str + '<Modal size="lg" show={uploadModalShow} onHide={closeModal}>\n';
  str = str + '<Modal.Header closeButton>\n';
  str = str + '<Modal.Title>Load From Computer </Modal.Title>\n';
  str = str + '</Modal.Header>\n';
  str = str + '<Modal.Body>\n';
  str = str + '<Form.Control type="file" onChange={(e) => { setFile(e.target.files[0]); }} size="lg" accept="application/javascript" />\n';
  str = str + '<p>{msg}</p>\n';
  str = str + '</Modal.Body>\n';
  str = str + '<Modal.Footer>\n';
  str = str + '<Button variant="secondary" onClick={closeModal}>Close</Button>\n';
  str = str + '<Button variant="primary" onClick={uploadHandler}>Upload</Button>\n';
  str = str + '</Modal.Footer>\n';
  str = str + '</Modal>\n';
  str = str + '<Button size="sm" variant="danger" onClick={showModal} title="Load" ><CloudUpload size={15} /></Button>\n';
  str = str + '</>\n';
  str = str + ');\n';
  str = str + '\n';
  str = str + '\n';
  str = str + '};\n';

  str = str + 'export default ' + titleCase(tbl) + 'Upload;\n';

  return str;
}


export default ListPage;
