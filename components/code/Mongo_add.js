
const AddPage = (tbl, fld) => {

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
  str = str + 'import { TextEn, BtnSubmit } from "../Form";\n';
  str = str + 'import {Close} from "../Icons";\n';
  str = str + 'import {update' + titleCase(tbl) + '} from "../Database";\n\n\n';


  

  str = str + 'const Add = ({Data, Msg}) => {\n';
  let a = "";
  for (var i = 0; i < split_fld.length; i = i + 1) {
    if (i != 0) {
      a = a + 'const [' + split_fld[i].trim() + ', set' + titleCase(split_fld[i].trim()) + '] = useState("");\n';
    }
  }
  str = str + a;


  str = str + '\n';
  str = str + 'const [show, setShow] = useState(false);\n\n\n';


  str = str + "	const resetStateVariables = () => {\n";
  str = str + '		Msg("Ready to add new");\n';
  a = "";
  for (i = 0; i < split_fld.length; i = i + 1) {
    if (i != 0) {
      a = a + '		set' + titleCase(split_fld[i].trim()) + '("");\n';
    }
  }
  str = str + a;
  str = str + "	}\n\n";



   str = str + "const addNewHandler = () => {\n";
   str = str + "setShow(true);\n";
   str = str + "resetStateVariables();\n";
  str = str + "}\n\n";




  str = str + '	const create' + titleCase(tbl) + 'Object = () => {\n';
  str = str + "return {\n";
  let b = "";
  b = b + 'id: Date.now(),\n';
  for (i = 0; i < (split_fld.length - 1); i = i + 1) {
    if (i != 0) {
      b = b + split_fld[i].trim() + ': ' + split_fld[i].trim() + ',\n';
    }
  }
  b = b + (split_fld[(split_fld.length - 1)]).trim() + ': ' + split_fld[i].trim() + '\n';
  str = str + b;
  str = str + "}\n";
  str = str + "}\n\n";

  
  str = str + 'const save' + titleCase(tbl) + ' = async (' + tbl + ') => {\n';
  str = str + 'const addData = Data ? [...Data, ' + tbl + '] : [' + tbl + '];\n';
  str = str + 'const addMsg = await update' + titleCase(tbl) + '(addData);\n';
  str = str + 'if (addMsg.success) {\n';
  str = str + 'return "' + titleCase(tbl) + ' information successfully added.";\n';
  str = str + '} else {\n';
  str = str + 'throw new Error("Error: Failed to add ' + tbl + ' information.");\n';
  str = str + '}\n';
  str = str + "}\n\n";


  str = str + 'const saveHandler = async (e) => {\n';
  str = str + 'e.preventDefault();\n';
  str = str + 'try {\n';
  str = str + 'const ' + tbl + ' = create' + titleCase(tbl) + 'Object();\n';
  str = str + 'const message = await save' + titleCase(tbl) + '(' + tbl + ');\n';
  str = str + 'Msg(message);\n';
  str = str + '} catch (error) {\n';
  str = str + 'console.log(error);\n';
  str = str + 'Msg("Error: Failed to add ' + tbl + ' information.");\n';
  str = str + '}\n';
  str = str + 'setShow(false);\n';
  str = str + "}\n\n";


  /*  ******************************** */


  str = str + "	return (\n";
  str = str + "		<>\n";


  str = str + "			<div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>\n";
  str = str + '				<div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">\n';
  str = str + '				<div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">\n';
  str = str + '						<h1 className="text-xl font-bold text-blue-600">Add New</h1>\n';
  str = str + '					<Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-8 h-8" />\n';
  str = str + "				</div>\n\n";

  str = str + '				<div className="px-6 pb-6 text-black">\n';
  str = str + '				<form onSubmit={saveHandler}>\n';
  str = str + '<div className="grid grid-cols-1 gap-4 my-4">\n';

  var d = "";
  for (i = 0; i < (split_fld.length); i = i + 1) {
    if (i != 0) {
      d = d + '					<TextEnt Title="' + titleCase(split_fld[i].trim()) + '" Id="' + split_fld[i].trim() + '" Change={e => set' + titleCase(split_fld[i].trim()) + '(e.target.value) } Value={' + split_fld[i].trim() + '} Chr="50" /> \n';
    }
  }
  str = str + d;
  
  str = str + '</div>\n';
  str = str + '<span onClick={() => { setShow(false); Msg("Data ready") }} className="text-center mt-3 mx-0.5 px-4 py-2.5 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 bg-red-600 hover:bg-red-800 text-white mr-1 cursor-pointer">Close</span>\n';
  str = str + '<BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />\n';
  str = str + '</form>\n';
  str = str + "				</div>\n\n";
  str = str + '				</div>\n';
  str = str + '			</div>\n';
  str = str + '<button onClick={addNewHandler} title="Add" className="w-8 h-8 rounded-full hover:bg-gray-50 mr-1 flex justify-center items-center">\n';
  str = str + '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">\n';
  str = str + '<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />\n';
  str = str + '</svg>\n';
  str = str + '</button>\n';


  str = str + '		</>\n';
  str = str + '	)\n';
  str = str + '}\n';

  str = str + 'export default Add;\n';

  return str;
}


export default AddPage;
