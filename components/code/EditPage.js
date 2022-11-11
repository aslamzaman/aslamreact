
const EditPage = (tbl, fld) => {

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
  str = str + 'import axios from "axios";\n';
  str = str + 'import { Row, Col, Button, Form, Modal } from "react-bootstrap";\n';
  str = str + 'import {API_URL} from "../../util/ApiUrl";\n';
  str = str + '\n';
  str = str + '\n';

  str = str + 'const ' + titleCase(tbl) + 'Edit = (props) => {\n';
  let a = "";
  for (var i = 0; i < split_fld.length; i = i + 1) {
      if(i != 0){
       a = a + 'const [' + split_fld[i].trim() + ', set' + titleCase(split_fld[i].trim()) + '] = useState("");\n';
      }
  }
  str = str + a;

  str = str + '\n';
  str = str + 'const [mainModalShow, setMainModalShow] = useState(false);\n';
  str = str + 'const [msg, setMsg] = useState("Data ready");\n';
  str = str + 'const Message = props.EditMsg;\n';
  str = str + 'let id = props.Id;\n';

  str = str + '\n';
  str = str + 'const modalCloseHandaler = ()=>{\n';
  str = str + 'setMainModalShow(false);\n';
  str = str + 'Message("Data ready");\n';
  str = str + '}\n';

  str = str + '\n';
 
  str = str + 'const editHandler = async () => {\n';
  str = str + 'setMainModalShow(true);\n';
  str = str + 'let edit_url = `${API_URL}' + tbl + '/get_one/${'+ 'id}`;\n';
  str = str + 'await axios.get(edit_url)\n';
  str = str + '.then((response)=>{\n';
  let b = "";
  for (var j = 0; j < split_fld.length; j++) {
      if(j != 0){
          b = b + 'set' + titleCase(split_fld[j].trim()) + '(response.data.' + split_fld[j].trim() + ');\n';
      }
  }
  str = str + b;

  str = str + 'Message("Ready to edit");\n';
  str = str + '})\n';
  str = str + '.catch((err) => {\n';
  str = str + 'console.log(err);\n';
  str = str + '});\n';  
  str = str + '}\n';
  str = str + '\n';


  str = str + 'const saveHandler = async () => {\n';
  str = str + 'if (!validationCheck() === true) { return false; };\n';
  str = str + 'let obj = {\n';
   b = "";
  for (i = 0; i < (split_fld.length - 1); i = i + 1) {
      if(i != 0){
      b = b + split_fld[i].trim() + ': ' + split_fld[i].trim() + ',\n';
      }
  }
  b = b + (split_fld[(split_fld.length - 1)]).trim() + ': ' + split_fld[i].trim() + '\n';
  str = str + b;
  str = str + '}\n';
  str = str + 'let save_url = `${API_URL}' + tbl + '/update_one/${id}`;\n';
  str = str + 'await axios.post(save_url, obj)\n';
  str = str + '.then((response)=>{\n';
  str = str + 'Message(response.data.msg);\n';
  str = str + 'setMainModalShow(false);\n';
  str = str + '})\n';
  str = str + '.catch((err) => {\n';
  str = str + 'console.log(err);\n';
  str = str + '});\n';  
  str = str + '}\n';
  str = str + '\n';


  str = str + 'const validationCheck = () => {\n';
  str = str + 'let warn=[];\n';

  var e = "";

  for (i = 0; i < (split_fld.length - 1); i = i + 1) {
      if(i != 0){
      e = e + split_fld[i].trim() + ' && ';
      }
  }
  e = e + (split_fld[(split_fld.length - 1)]).trim();

  str = str + 'if(' + e + '){\n';
  str = str + 'return true;\n';
  str = str + '}\n';
  var x = "";
  for (var n = 0; n < split_fld.length; n++) {
      if(n != 0){
      x = x + 'if(!' + split_fld[n] + '){\n';
      x = x + 'warn.push(" ' + titleCase(split_fld[n].trim()) + ' required");\n';
      x = x + '}\n';
      }
  }
  str = str + x;

  str = str + 'let checkWarning = warn.toString();\n';
  str = str + 'setMsg(checkWarning);\n';
  str = str + '}\n';
  str = str + '\n\n';


  /*  ******************************** */


  str = str + 'return (\n';
  str = str + '<>\n';

  str = str + '<Modal size="lg" show={mainModalShow} onHide={modalCloseHandaler}>\n';
  str = str + '<Modal.Header closeButton>\n';
  str = str + '<Modal.Title>Edit Existing ' + titleCase(tbl) + '</Modal.Title>\n';
  str = str + '</Modal.Header>\n';
  str = str + '<Modal.Body>\n';

  str = str + '<Form>\n';
  str = str + '<Row className="mb-3">\n';

  var d = "";
  for (i = 0; i < (split_fld.length); i = i + 1) {
      if(i != 0){
          d = d + '<Form.Group  as={Col} lg="6">\n';
          d = d + '<Form.Label>' + titleCase(split_fld[i].trim()) + '</Form.Label>\n';
          d = d + '<Form.Control type="text" onChange={(e)=>{set' + titleCase(split_fld[i].trim()) + '(e.target.value)}} value={' + split_fld[i].trim() + '} />\n';
          d = d + '</Form.Group>\n';
      }
  }
  str = str + d;
  str = str + '<p className="text-primary" style={{ margin: "0px", paddingTop: "10px" }}>{msg}</p>\n';
  str = str + '</Row>\n';
  str = str + '</Form>\n';
  str = str + '</Modal.Body>\n';
  str = str + '<Modal.Footer>\n';
  str = str + '<Button variant="secondary" onClick={modalCloseHandaler}>Close</Button>\n';
  str = str + '<Button variant="primary" onClick={saveHandler}>Save Changes</Button>\n';
  str = str + '</Modal.Footer>\n';
  str = str + '</Modal>\n';
  str = str + '<Button variant="secondary me-1" onClick={editHandler}>Edit</Button>\n';
  str = str + '</>\n';
  str = str + ');\n';
  str = str + '\n';
  str = str + '};\n';

  str = str + 'export default ' + titleCase(tbl) + 'Edit;\n';

  return str;
}


export default EditPage;
