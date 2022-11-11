
//----------------------------------
const IndexPage = (tbl, fld) => {
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
  str = str + 'import Header from "../../components/layout/Header";\n';
  str = str + 'import {API_URL} from "../../util/ApiUrl";\n';
  str = str + 'import ' + titleCase(tbl) + 'Add from "../../components/' + tbl + '/' + titleCase(tbl) + 'Add";\n';
  str = str + 'import ' + titleCase(tbl) + 'List from "../../components/' + tbl + '/' + titleCase(tbl) + 'List";\n';
  str = str + 'import Msg from "../../components/layout/Msg";\n';
  str = str + '\n';


  str = str + 'const ' + titleCase(tbl) + 'Page = () => {\n';
  str = str + 'const [' + tbl + 's, set' + titleCase(tbl) + 's] = useState([]);\n';
  str = str + 'const [msg, setMsg] = useState("Data ready");\n';
  str = str + '\n';
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
  str = str + '\n';

  str = str + 'const getMsgHandler = (data) => {\n';
  str = str + 'setMsg(data);\n';
  str = str + '}\n';
  str = str + '\n';
  str = str + '\n';


  str = str + 'return (\n';
  str = str + '<>\n';
  str = str + '<Header Title="' + titleCase(tbl) + '" />\n'; 
  str = str + '<' + titleCase(tbl) + 'Add AddMsg={getMsgHandler} />\n';
  str = str + '<Msg Msg={msg} />\n';
  str = str + '<' + titleCase(tbl) + 'List ListMsg={getMsgHandler} Data={' + tbl + 's} />\n';
  str = str + '</>\n';
  str = str + ');\n';
  str = str + '\n';
  str = str + '};\n';

  str = str + 'export default ' + titleCase(tbl) + 'Page;\n';

  return str;

}

export default IndexPage;