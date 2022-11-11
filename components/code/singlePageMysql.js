
const singlePage = (tbl, fld) => {

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
    str = str + 'import React, { useState, useEffect } from "react";\n';
    str = str + 'import axios from "axios";\n';
    str = str + 'import {Container, Row, Col, Button, Form, Table, Modal } from "react-bootstrap";\n';
    str = str + 'import Header from "../../components/layout/Header";\n';
    str = str + 'import {API_URL} from "../../util/ApiUrl";\n';
    str = str + '\n';


    str = str + 'const ' + titleCase(tbl) + 'Page = () => {\n';
    str = str + 'const [' + tbl + 's, set' + titleCase(tbl) + 's] = useState([]);\n';
    str = str + '\n';
    let a = "";
    for (var i = 0; i < split_fld.length; i = i + 1) {
        if(i != 0){
         a = a + 'const [' + split_fld[i].trim() + ', set' + titleCase(split_fld[i].trim()) + '] = useState("");\n';
        }
    }
    str = str + a;

    str = str + '\n';
    str = str + 'const [msg, setMsg] = useState("Data ready");\n';
    str = str + 'const [updateId, setUpdateId] = useState("");\n';
    str = str + 'const [deleteId, setDeleteId] = useState("");\n';

    str = str + '\n';
    str = str + 'const [mainModalShow, setMainModalShow] = useState(false);\n';
    str = str + 'const [mainModalTitle, setMainModalTitle] = useState("");\n';
    str = str + 'const [deleteModalShow, setDeleteModalShow] = useState(false);\n';
    str = str + 'const [viewModalShow, setViewModalShow] = useState(false);\n';


    str = str + '\n';
    str = str + 'useEffect(() => {\n';
    str = str + 'const loadData = async()=>{\n';
    str = str + 'let url = `${API_URL}' + tbl + '`;\n';
    str = str + 'await axios.get(url)\n';
    str = str + '.then((response) => {\n';
    str = str + 'set' + titleCase(tbl) + 's(response.data);\n';
    str = str + '})\n';
    str = str + '.catch((err) => {\n';
    str = str + 'console.log(err);\n';
    str = str + '});\n';
    str = str + '};\n';
    str = str + 'loadData();\n';
    str = str + '}, [msg]);\n';
    str = str + '\n';

   
    str = str + 'const addNewHandler = () => {\n';
    a = "";
    for (i = 0; i < split_fld.length; i = i + 1) {
        if(i != 0){
        a = a + 'set' + titleCase(split_fld[i].trim()) + '("");\n';
        }
    }
    str = str + a;
    str = str + 'setMainModalShow(true);\n';
    str = str + 'setUpdateId("0");\n';
    str = str + 'setMsg("Ready to add new");\n';
    str = str + 'setMainModalTitle("Add New ' + titleCase(tbl) + '");\n';
	str = str + '// dropDownFnc();\n'; 
    str = str + '}\n';
    str = str + '\n';



    str = str + 'const editHandler = async (id) => {\n';
    str = str + 'setMainModalShow(true);\n';
    str = str + 'setMainModalTitle("Update ' + titleCase(tbl) + '");\n';
	str = str + '// dropDownFnc();\n'; 
    str = str + 'let url_edit = `${API_URL}' + tbl + '/get_one/${id}`;\n';
    str = str + 'await axios.get(url_edit)\n';
    str = str + '.then((response) => {\n';
    let b = "";
    for (var j = 0; j < split_fld.length; j++) {
        if(j != 0){
            b = b + 'set' + titleCase(split_fld[j].trim()) + '(response.data.' + split_fld[j].trim() + ');\n';
        }
    }
    str = str + b;
    str = str + 'setMsg("Ready to edit");\n';
    str = str + 'setUpdateId(id);\n';
    str = str + '})\n';
    str = str + '.catch((err) => {\n';
    str = str + 'console.log(err);\n';
    str = str + '});\n';
    str = str + '}\n';
    str = str + '\n';

    str = str + 'const saveHandler = async () => {\n';
    str = str + 'if (!validationCheck() === true) { return false; };\n';
    str = str + 'let save_url = "";\n';
    str = str + 'if (updateId === "0") {\n';
    str = str + 'save_url = `${API_URL}' + tbl + '/insert_one`;\n';
    str = str + '} else {\n';
    str = str + 'save_url = `${API_URL}' + tbl + '/update_one/${updateId}`;\n';
    str = str + '}\n';

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
    str = str + 'await axios.post(save_url, obj)\n';
    str = str + '.then((response)=>{\n';
    str = str + 'setMsg(response.data.msg);\n';
    str = str + 'setMainModalShow(false);\n';
    str = str + '})\n';
    str = str + '.catch((err) => {\n';
    str = str + 'console.log(err);\n';
    str = str + '});\n';
    a = "";
    for (i = 0; i < split_fld.length; i = i + 1) {
        if(i != 0){
        a = a + 'set' + titleCase(split_fld[i].trim()) + '("");\n';
        }
    }
    str = str + a;
    str = str + '}\n';
    str = str + '\n';


    str = str + 'const deleteHandler = (id) => {\n';
    str = str + 'setDeleteModalShow(true);\n';
    str = str + 'setMsg("Are you sure?");\n';
    str = str + 'setDeleteId(id);\n';
    str = str + '}\n';
    str = str + '\n';

    str = str + 'const removeHandler = async () =>{\n';
    str = str + 'let url_delete = `${API_URL}' + tbl + '/delete_one/${deleteId}`;\n';
    str = str + 'await axios.delete(url_delete)\n';
    str = str + '.then((response)=>{\n';
    str = str + 'setMsg(response.data.msg);\n';
    str = str + 'setDeleteModalShow(false);\n';
    str = str + '})\n';
    str = str + '.catch((err)=>{\n';
    str = str + 'console.log(err);\n';
    str = str + '})\n';
    str = str + '}\n';
    str = str + '\n';

    str = str + 'const viewHandler = async (id) => {\n';
    str = str + 'setViewModalShow(true);\n';
    str = str + 'let url_view = `${API_URL}' + tbl + '/get_one/${id}`;\n';
    str = str + 'await axios.get(url_view)\n';
    str = str + '.then((response) => {\n';

    b = "";
    for (j = 0; j < split_fld.length; j++) {
        if(j != 0){
        b = b + 'set' + titleCase(split_fld[j].trim()) + '(response.data.' + split_fld[j].trim() + ');\n';
        }
    }
    str = str + b;   
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
    str = str + '<div>\n';
    str = str + '<Header Title="' + titleCase(tbl) + '" />\n';
    str = str + '\n';


    str = str + '<Container fluid>\n';
    str = str + '<Row>\n';
    str = str + '<Col>\n';
    str = str + '<Button variant="primary" onClick={addNewHandler}>Add New</Button>\n';
    str = str + '<p className="text-primary" style={{ margin: "0px", paddingTop: "10px" }}>{msg}</p>\n';
    str = str + '</Col>\n';
    str = str + '</Row>\n';
    str = str + '<Row>\n';
    str = str + '<Col>\n';
    str = str + '<Table striped bordered hover responsive>\n';
    str = str + '<thead className="table-secondary">\n';
    str = str + '<tr>\n';

    x = "";
    for (let i = 0; i < split_fld.length; i++) {
        if(i != 0){
            x = x + '<th scope="col">' + titleCase(split_fld[i].trim()) + '</th>\n';
        }
    }
    str = str + x;
    str = str + '<th scope="col" className="text-center"> Actions</th>\n';
    str = str + '</tr>\n';
    str = str + '</thead>\n';
    str = str + '<tbody>\n';
    str = str + '{\n';

    str = str + tbl + 's.length ? ' + tbl + 's.map((' + tbl + ') =>{\n';
    str = str + 'return (\n';
    str = str + '<tr key={' + tbl + '.id}>\n';
    x = "";
    for (let i = 0; i < split_fld.length; i++) {
        if(i != 0){
            x = x + '<td>{' + tbl + '.' + split_fld[i].trim() + '}</td>\n';
        }
    }
    str = str + x;
    str = str + '<td style={{ width: "180px", textAlign: "right" }}>\n';
    str = str + '<Button variant="secondary me-1" size="sm" onClick={() => { editHandler(' + tbl + '.id) }}> Edit</Button>\n';
    str = str + '<Button variant="danger me-1" size="sm" onClick={() => { deleteHandler(' + tbl + '.id) }}>Delete</Button>\n';
    str = str + '<Button variant="success" size="sm" onClick={() => { viewHandler(' + tbl + '.id) }}>View</Button>\n';

    str = str + '</td>\n';
    str = str + '</tr>\n';
    str = str + ')\n';
    str = str + '})\n';
    str = str + ': null\n';
    str = str + '}\n';
    str = str + '</tbody>\n';
    str = str + '</Table>\n';
    str = str + '</Col>\n';
    str = str + '</Row>\n';
    str = str + '</Container>\n';



    str = str + '\n'; 
    str = str + '<Modal size="lg" show={mainModalShow} onHide={()=>{setMainModalShow(false);}}>\n';
    str = str + '<Modal.Header closeButton>\n';
    str = str + '<Modal.Title>{mainModalTitle}</Modal.Title>\n';
    str = str + '</Modal.Header>\n';
    str = str + '<Modal.Body>\n';

    str = str + '<Form>\n';
    str = str + '<Row className="mb-3">\n';

    var d = "";
    for (i = 0; i < (split_fld.length); i = i + 1) {
        if(i != 0){
            d = d + '<Form.Group  as={Col} lg="6">\n';
            d = d + '<Form.Label>' + titleCase(split_fld[i].trim()) + '</Form.Label>\n';
            d = d + '<Form.Control type="text" onChange={(e)=>{set' + titleCase(split_fld[i].trim()) + '(e.target.value)}} className="form-control" value={' + split_fld[i].trim() + '} />\n';
            d = d + '</Form.Group>\n';
        }
    }
    str = str + d;
    str = str + '<p className="text-primary" style={{ margin: "0px", paddingTop: "10px" }}>{msg}</p>\n';
    str = str + '</Row>\n';
    str = str + '</Form>\n';
    str = str + '</Modal.Body>\n';
    str = str + '<Modal.Footer>\n';
    str = str + '<Button variant="secondary" onClick={()=>{setMainModalShow(false);}}>Close</Button>\n';
    str = str + '<Button variant="primary" onClick={saveHandler}>Save Changes</Button>\n';
    str = str + '</Modal.Footer>\n';
    str = str + '</Modal>\n';
    str = str + '\n';



    str = str + '<Modal show={deleteModalShow} onHide={()=>{setDeleteModalShow(false);}}>\n';
    str = str + '<Modal.Header closeButton>\n';
    str = str + '<Modal.Title>Delete</Modal.Title>\n';
    str = str + '</Modal.Header>\n';
    str = str + ' <Modal.Body>\n';
    str = str + '<p className="text-danger text-center">{msg}</p>\n';
    str = str + ' </Modal.Body>\n';
    str = str + '<Modal.Footer>\n';
    str = str + '<Button variant="secondary" onClick={()=>{setDeleteModalShow(false);}}>Close</Button>\n';
    str = str + '<Button variant="primary" onClick={removeHandler}>Yes</Button>\n';
    str = str + '</Modal.Footer>\n';
    str = str + '</Modal>\n';

    str = str + '\n';



    str = str + '<Modal show={viewModalShow} onHide={()=>{setViewModalShow(false);}}>\n';
    str = str + '<Modal.Header closeButton>\n';
    str = str + '<Modal.Title>Detail</Modal.Title>\n';
    str = str + '</Modal.Header>\n';
    str = str + ' <Modal.Body>\n';
    str = str + ' <Table striped hover bordered>\n';
    str = str + '<tbody>\n';


    b = "";
    for (j = 0; j < split_fld.length; j++) {
        if(j != 0){
            b = b + '<tr>\n';
            b = b + '<td><strong>' + titleCase(split_fld[j].trim()) + '</strong></td><td>{' + split_fld[j].trim() + '}</td>\n';
            b = b + '</tr>\n';
        }
    }
    str = str + b;   



    str = str + '</tbody>\n';
    str = str + ' </Table>\n';

    str = str + ' </Modal.Body>\n';
    str = str + '<Modal.Footer>\n';
    str = str + '<Button variant="secondary" onClick={()=>{setViewModalShow(false);}}>Close</Button>\n';
    str = str + '</Modal.Footer>\n';
    str = str + '</Modal>\n';

    str = str + '\n';
    str = str + '</div>\n';
    str = str + ');\n';
    str = str + '\n';
    str = str + '};\n';

    str = str + 'export default ' + titleCase(tbl) + 'Page;\n';

    return str;
}


export default singlePage;
