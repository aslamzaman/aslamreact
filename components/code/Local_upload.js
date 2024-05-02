
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
  str = str + 'import {BtnEn } from "../../components/Form";\n';
  str = str + 'import {Close} from "../Icons";\n';	
  str = str + '\n';
  str = str + '\n';


  str = str + 'const Upload = ({Msg}) => {\n';
  str = str + 'const [file, setFile] = useState(null);\n';


  str = str + '\n';
  str = str + '\n';
  str = str + 'const [show, setShow] = useState(false);\n';
  str = str + '\n';
  str = str + '\n';

  str = str + 'const showModal = () => {\n';
  str = str + "		setShow(true);\n";
  str = str + '		Msg("Ready to upload");\n';	
  str = str + '}\n';
  str = str + '\n';
  str = str + '\n';


  str = str + 'const uploadHandler = (e) => {\n';
  str = str + 'if (file) {\n';
  str = str + 'const reader = new FileReader();\n';
  str = str + 'reader.onload = (() => {\n';
  str = str + 'let checkData = JSON.parse(reader.result)[0];\n';
  str = str + 'if (!checkData.' + split_fld[1].trim() + ') {\n';
  str = str + 'Msg("Data not match!");\n';
  str = str + 'setShow(false);\n';
  str = str + 'return false;\n';
  str = str + '};\n';
  str = str + '\n';

  str = str + 'localStorage.setItem("' + tbl + '", reader.result);\n';
  str = str + 'Msg("Data loaded successfully");\n';
  str = str + 'setShow(false);\n';
  str = str + '})\n';
  str = str + 'reader.readAsText(file);\n';
  str = str + '} else {\n';
  str = str + 'Msg("Please select a file.");\n';
  str = str + 'setShow(false);\n';
  str = str + '}\n';
  str = str + '}\n';

  str = str + '\n';
  str = str + '\n';



  str = str + 'return (\n';
  str = str + "		<>\n";
  str = str + "<div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>\n";
  str = str + '<div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">\n';
   str = str + '<div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">\n';
  str = str + '<h1 className="text-xl font-bold text-blue-600">Upload File</h1>\n';
  str = str + '<Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-9 h-9" />\n';
  str = str + "</div>\n\n";
  
  str = str + '<div className="p-6 text-black">\n';
  



  str = str + '<input type="file" onChange={(e) => { setFile(e.target.files[0]); }} className="w-full px-4 py-1.5 text-gray-600 ring-1 focus:ring-4 ring-blue-300 outline-none rounded duration-300" accept="application/javascript" />\n';
 
    str = str + "</div>\n\n";
  
    str = str + '<div className="px-6 py-6 flex justify-end items-center border-t border-gray-300">\n';



    str = str + '<BtnEn Title="Close" Click={() => { setShow(false); Msg("Data ready") }} Class="bg-red-600 hover:bg-red-800 text-white mr-1" />\n';
    str = str + '<BtnEn Title="Upload" Click={uploadHandler} Class="bg-blue-600 hover:bg-blue-800 text-white" />\n';
    str = str + '</div>\n';
    str = str + '</div>\n';
    str = str + '</div>\n';
    str = str + '<button onClick={showModal} className="w-7 h-7 bg-teal-500 hover:bg-teal-700 text-white flex justify-center items-center">\n';
    str = str + '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">\n';
    str = str + '<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />\n';
    str = str + '</svg>\n';
    str = str + '</button>\n';
    
    
    str = str + '		</>\n';
  str = str + '	)\n';
  str = str + '}\n';





  str = str + 'export default Upload;\n';

  return str;
}


export default ListPage;
