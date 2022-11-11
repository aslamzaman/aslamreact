
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
  str = str + 'import { Button } from "react-bootstrap";\n';
  str = str + 'import { CloudDownload } from "react-bootstrap-icons";\n';
  str = str + 'import { saveAs } from "file-saver";\n';
  str = str + '\n';
  str = str + '\n';





  str = str + 'const ' + titleCase(tbl) + 'Download = (props) => {\n';
  str = str + 'const Message = props.DownloadMsg;\n';
  str = str + '\n';
  str = str + '\n';



  str = str + 'const downloadHandler = () => {\n';
  str = str + 'let localData = localStorage.getItem("' + tbl + '");\n';
  str = str + 'if (localData) {\n';
  str = str + 'const blob = new Blob([localData], { type: "application/json" });\n';
  str = str + 'saveAs(blob, `${Date.now()}-' + tbl + '.js`);\n';
  str = str + 'Message("Data download successfully.");\n';
  str = str + '} else {\n';
  str = str + 'Message("Data not available.");\n';
  str = str + '}\n';
  str = str + '}\n';

  str = str + '\n';
  str = str + '\n';



  str = str + 'return (\n';
  str = str + '<Button size="sm" variant="success me-2" onClick={downloadHandler} title="Save"><CloudDownload size={15} /></Button>\n';
  str = str + ');\n';
  str = str + '\n';
  str = str + '\n';
  str = str + '};\n';

  str = str + 'export default ' + titleCase(tbl) + 'Download;\n';

  return str;
}


export default ListPage;
