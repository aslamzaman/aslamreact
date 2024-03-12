import { stateVeriables, resetStateVariable, createObjec, formInput } from "./Fnc";


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
  str = str + 'import { TextEn, BtnEn, BtnSubmit } from "../Form";\n';
  str = str + 'import {Close} from "../Icons";\n';
  str = str + 'import {addItem} from "../LocalDatabase";\n';




  str = str + '\n';
  str = str + '\n';

  str = str + 'const Add = ({Msg}) => {\n';
  str = str + stateVeriables(split_fld);

  str = str + '\n';
  str = str + 'const [show, setShow] = useState(false);\n';
  str = str + '\n';

  str = str + resetStateVariable(split_fld, "add");
  str = str + '\n\n';

  str = str + createObjec(tbl, split_fld, "add");
  str = str + '\n';


  str = str + "const addtHandler = () => {\n";
  str = str + "setShow(true);\n";
  str = str + 'resetStateVariables();';
  str = str + "	}\n\n";



  str = str + 'const saveHandler =  (e) => {\n';
  str = str + 'e.preventDefault();\n';

  str = str + ' try{\n';
  str = str + 'const ' + tbl + 'Object = create' + titleCase(tbl) + 'Object();\n';

  str = str + 'const local = addItem("' + tbl + '",' + tbl + 'Object);\n';
  str = str + 'Msg(local.message);\n';
  str = str + '}catch(error){\n';
  str = str + 'console.log(`Error saveing houserent data: ${error}`);\n';
  str = str + 'Msg(local.message);\n';
  str = str + '}\n';
  str = str + 'setShow(false);\n';
  str = str + '}\n';
  str = str + '\n';
  str = str + '\n';

  /*  ******************************** */


  str = str + "	return (\n";
  str = str + "		<>\n";


  str = str + "			<div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>\n";
  str = str + '				<div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">\n';
  str = str + '				<div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">\n';
  str = str + '						<h1 className="text-xl font-bold text-blue-600">Add New</h1>\n';
  str = str + '					<Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-9 h-9" />\n';
  str = str + "				</div>\n\n";

  str = str + formInput(split_fld);

  str = str + '				</div>\n';
  str = str + '			</div>\n';
  str = str + '<button onClick={addtHandler} className="w-7 h-7 mr-2 bg-indigo-700 hover:bg-indigo-900 text-white flex justify-center items-center">\n';
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
