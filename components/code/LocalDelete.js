
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
  str = str + 'import { Button, Modal } from "react-bootstrap";\n';
  str = str + 'import { X } from "react-bootstrap-icons";\n';
  str = str + '\n';
  str = str + '\n';



  str = str + 'const ' + titleCase(tbl) + 'Delete = (props) => {\n';
  str = str + 'const [deleteModalShow, setDeleteModalShow] = useState(false);\n';
  str = str + 'const Message = props.DeleteMsg;\n';
  str = str + 'let id = props.Id;\n';
  str = str + '\n';
  str = str + '\n';


  str = str + 'const closeModal = ()=>{\n';
  str = str + 'setDeleteModalShow(false);\n';
  str = str + ' Message("Data ready");\n';
  str = str + '}\n';

  str = str + '\n';
  str = str + '\n';

  str = str + 'const showModal = () => {\n';
  str = str + 'Message("Ready to delete.");\n';
  str = str + 'setDeleteModalShow(true);\n';
  str = str + '}\n';

  str = str + '\n';


  str = str + 'const removeHandler = async () => {\n';

  str = str + 'let localData = localStorage.getItem("' + tbl + '");\n';
  str = str + 'let jsonData = JSON.parse(localData);\n';
  str = str + 'let getAllWithOutDeleteItem = jsonData.filter((t) =>{\n';
  str = str + 'return t.id !== id;\n';
  str = str + '});\n';
  str = str + '\n';
  str = str + 'localStorage.setItem("' + tbl + '", JSON.stringify(getAllWithOutDeleteItem));\n';
  str = str + 'Message("Data delete successfully.");\n';
  str = str + 'setDeleteModalShow(false);\n';
  str = str + '}\n';


  str = str + '\n';
  str = str + '\n';

  str = str + 'return (\n';
  str = str + '<>\n';

  str = str + '<Modal size="sm" show={deleteModalShow} onHide={closeModal}>\n';
  str = str + '<Modal.Header closeButton>\n';
  str = str + '<Modal.Title>Delete</Modal.Title>\n';
  str = str + '</Modal.Header>\n';
  str = str + '<Modal.Body>\n';
  str = str + '<p className="text-danger text-center">Are you sure want to delete?</p>\n';
  str = str + '</Modal.Body>\n';
  str = str + '<Modal.Footer>\n';
  str = str + '<Button variant="secondary" onClick={closeModal}>Close</Button>\n';
  str = str + '<Button variant="primary" onClick={removeHandler}>Yes</Button>\n';
  str = str + '</Modal.Footer>\n';
  str = str + '</Modal>\n';
  str = str + '<Button size="sm" variant="warning" onClick={showModal} title="Delete"><X size={15} /></Button>\n';
  str = str + '</>\n';
  str = str + ');\n';
  str = str + '\n';
  str = str + '\n';

  str = str + '};\n';
  str = str + 'export default ' + titleCase(tbl) + 'Delete;\n';

  return str;
}


export default ListPage;
