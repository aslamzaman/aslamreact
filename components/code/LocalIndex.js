const LocalIndexPage = (tbl, fld) => {
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
  str = str + 'import { Container, Row, Col, Table } from "react-bootstrap";\n';
  str = str + 'import Header from "../../components/layout/Header";\n';
  str = str + 'import ' + titleCase(tbl) + 'Add from "../../components/' + tbl + '/' + titleCase(tbl) + 'Add";\n';
  str = str + 'import ' + titleCase(tbl) + 'Edit from "../../components/' + tbl + '/' + titleCase(tbl) + 'Edit";\n';
  str = str + 'import ' + titleCase(tbl) + 'Delete from "../../components/' + tbl + '/' + titleCase(tbl) + 'Delete";\n';
  str = str + 'import ' + titleCase(tbl) + 'Download from "../../components/' + tbl + '/' + titleCase(tbl) + 'Download";\n';
  str = str + 'import ' + titleCase(tbl) + 'Upload from "../../components/' + tbl + '/' + titleCase(tbl) + 'Upload";\n';
  str = str + 'import ' + titleCase(tbl) + 'Print from "../../components/' + tbl + '/' + titleCase(tbl) + 'Print";\n';
  str = str + 'import Msg from "../../components/layout/Msg";\n';
  str = str + '\n';
  str = str + '\n';
  str = str + 'const ' + titleCase(tbl) + 'Page = () => {\n';
  str = str + 'const [' + tbl + 's, set' + titleCase(tbl) + 's] = useState([]);\n';
  str = str + 'const [msg, setMsg] = useState("Data ready");\n';
  str = str + '\n';
  str = str + '\n';
  str = str + 'useEffect(() => {\n';
  str = str + 'const loadData = ()=>{\n';
  str = str + 'let ' + tbl + 'Data = localStorage.getItem("' + tbl + '");\n';
  str = str + 'if (' + tbl + 'Data) {\n';
  str = str + 'let jsonData = JSON.parse(' + tbl + 'Data);\n';
  str = str + 'set' + titleCase(tbl) + 's(jsonData);\n';
  str = str + '} else {\n';
  str = str + 'set' + titleCase(tbl) + 's([]);\n';
  str = str + '}\n';
  str = str + '};\n';
  str = str + 'loadData();\n';
  str = str + '}, [msg]);\n';
  str = str + '\n';
  str = str + '\n';

  str = str + 'const getMsgHandler = (data) => {\n';
  str = str + 'setMsg(data);\n';
  str = str + '}\n';

  str = str + '\n';
  str = str + '\n';

  str = str + 'return (\n';
  str = str + '<>\n';
  str = str + '<Header Title="' + titleCase(tbl) + '" />\n';
  str = str + '<Msg Msg={msg} />\n';

  str = str + '<Container fluid>\n';
  str = str + '<Row>\n';
  str = str + '<Col>\n';
  str = str + '<' + titleCase(tbl) + 'Add AddMsg={getMsgHandler} />\n';
  str = str + '</Col>\n';
  str = str + '<Col className="text-end">\n';
  str = str + '<' + titleCase(tbl) + 'Print PrintMsg={getMsgHandler} />\n';
  str = str + '</Col>\n';
  str = str + '</Row>\n';
  str = str + '</Container>\n';




  str = str + '<Container fluid>\n';
  str = str + '<Row>\n';
  str = str + '<Col>\n';

  str = str + '<Table striped bordered hover responsive>\n';
  str = str + '<thead className="table-secondary">\n';
  str = str + '<tr>\n';

  let x = "";
  for (let i = 0; i < split_fld.length; i++) {
    if (i != 0) {
      x = x + '<th scope="col">' + titleCase(split_fld[i].trim()) + '</th>\n';
    }
  }
  str = str + x;
  str = str + '<th scope="col" className="text-end">\n';
  str = str + '<' + titleCase(tbl) + 'Download DownloadMsg={getMsgHandler} />\n';
  str = str + '<' + titleCase(tbl) + 'Upload UploadMsg={getMsgHandler} />\n';
  str = str + '</th>\n';

  str = str + '</tr>\n';
  str = str + '</thead>\n';
  str = str + '<tbody>\n';
  str = str + '{\n';

  str = str + tbl + 's.length ? ' + tbl + 's.map((' + tbl + ') =>{\n';
  str = str + 'return (\n';
  str = str + '<tr key={' + tbl + '.id}>\n';
  x = "";
  for (let i = 0; i < split_fld.length; i++) {
    if (i != 0) {
      x = x + '<td>{' + tbl + '.' + split_fld[i].trim() + '}</td>\n';
    }
  }
  str = str + x;
  str = str + '<td style={{ width: "150px", textAlign: "right" }}>\n';
  str = str + '<' + titleCase(tbl) + 'Edit EditMsg={getMsgHandler} Id={' + tbl + '.id} />\n';
  str = str + '<' + titleCase(tbl) + 'Delete DeleteMsg={getMsgHandler} Id={' + tbl + '.id} />\n';

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
  str = str + '</>\n';
  str = str + ');\n';
  str = str + '\n';
  str = str + '\n';
  str = str + '};\n';
  str = str + 'export default ' + titleCase(tbl) + 'Page;\n';


  return str;

}

export default LocalIndexPage;