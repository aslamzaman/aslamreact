
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
    str = str + 'import axios from "axios";\n';
    str = str + 'import { Button, Modal } from "react-bootstrap";\n';
    str = str + 'import { API_URL } from "../../util/ApiUrl";\n';
    str = str + '\n';
    str = str + '\n';



    str = str + 'const ' + titleCase(tbl) + 'Delete = (props) => {\n';
    str = str + 'const [deleteModalShow, setDeleteModalShow] = useState(false);\n';
    str = str + 'const Message = props.DeleteMsg;\n';
    str = str + 'let id = props.Id;\n';
    str = str + '\n';



    str = str + 'const modalCloseHandaler = ()=>{\n';
    str = str + 'setDeleteModalShow(false);\n';
    str = str + ' Message("Data ready");\n';
    str = str + '}\n';

    str = str + '\n';

    str = str + 'const deleteHandler = () => {\n';
    str = str + 'Message("Ready to delete.");\n';
    str = str + 'setDeleteModalShow(true);\n';
    str = str + '}\n';

    str = str + '\n';


    str = str + 'const removeHandler = async () => {\n';
    str = str + 'await axios.delete(`${API_URL}' + tbl + '/delete_one/${id}`)\n';
    str = str + '.then((response) => {\n';
    str = str + 'Message(response.data.msg);\n';
    str = str + 'setDeleteModalShow(false);\n';
    str = str + '})\n';
    str = str + '.catch((err) => {\n';
    str = str + 'console.log(err);\n';
    str = str + '})\n';
    str = str + '}\n';




    str = str + 'return (\n';
    str = str + '<>\n';

    str = str + '<Modal size="sm" show={deleteModalShow} onHide={modalCloseHandaler}>\n';
    str = str + '<Modal.Header closeButton>\n';
    str = str + '<Modal.Title>Delete</Modal.Title>\n';
    str = str + '</Modal.Header>\n';
    str = str + '<Modal.Body>\n';
    str = str + '<p className="text-danger text-center">Are you sure want to delete?</p>\n';
    str = str + '</Modal.Body>\n';
    str = str + '<Modal.Footer>\n';
    str = str + '<Button variant="secondary" onClick={modalCloseHandaler}>Close</Button>\n';
    str = str + '<Button variant="primary" onClick={removeHandler}>Yes</Button>\n';
    str = str + '</Modal.Footer>\n';
    str = str + '</Modal>\n';
    str = str + '<Button variant="secondary me-1" onClick={deleteHandler}>Delete</Button>\n';
    str = str + '</>\n';
    str = str + ');\n';
    str = str + '\n';
    str = str + '};\n';

    str = str + 'export default ' + titleCase(tbl) + 'Delete;\n';

    return str;
}


export default ListPage;
