
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
  str = str + 'import React from "react";\n';
  str = str + 'import { saveAs } from "file-saver";\n';
  str = str + '\n';
  str = str + '\n';





  str = str + 'const Download = ({Msg}) => {\n';
  str = str + '\n';
  str = str + '\n';



  str = str + 'const downloadHandler = () => {\n';
  str = str + 'let localData = localStorage.getItem("' + tbl + '");\n';
  str = str + 'if (localData) {\n';
  str = str + 'const blob = new Blob([localData], { type: "application/json" });\n';
  str = str + 'saveAs(blob, `${new Date().toISOString()}-' + tbl + '.js`);\n';
  str = str + 'Msg("Data download successfully.");\n';
  str = str + '} else {\n';
  str = str + 'Msg("Data not available.");\n';
  str = str + '}\n';
  str = str + '}\n';

  str = str + '\n';
  str = str + '\n';



  str = str + 'return (\n';


  str = str + '<button onClick={downloadHandler} className="w-7 h-7 mr-2 bg-gray-700 hover:bg-gray-900 text-white flex justify-center items-center">\n';
  str = str + '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">\n';
  str = str + '<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />\n';
  str = str + '</svg>\n';
  str = str + '</button>\n';

  str = str + ');\n';
  str = str + '\n';
  str = str + '\n';
  str = str + '};\n';

  str = str + 'export default Download;\n';

  return str;
}


export default ListPage;
