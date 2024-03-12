import { stateVeriables, resetStateVariable, createObjec, formInput } from "./Fnc";


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
  str = str + 'import { TextEn, BtnEn, BtnSubmit } from "../../components/Form";\n';
  str = str + 'import {Close} from "../Icons";\n';
  str = str + 'import {editItem, updateItem} from "../LocalDatabase";\n';
  str = str + '\n';
  str = str + '\n';

  str = str + 'const Edit = ({Msg, Id}) => {\n';
  str = str + stateVeriables(split_fld);

  str = str + '\n';
  str = str + 'const [show, setShow] = useState(false);\n\n';
  str = str + resetStateVariable(split_fld, "edit");
  
  str = str + '\n';
  str = str + 'const editHandler = () => {\n';
  str = str + "setShow(true);\n";
  str = str + 'Msg("Ready to edit");\n';
  str = str + '\n';
  str = str + 'try {\n';
  str = str + 'const ' + tbl + 'Data =  editItem("' + tbl + '", Id);\n';
  str = str + 'if (' + tbl + 'Data) {\n';

  let b = split_fld.map(t => " " + t);
  b.shift();
  str = str + ' const {' + b + ' } = ' + tbl + 'Data;\n';

  b = "";
  for (var j = 0; j < split_fld.length; j++) {
    if (j != 0) {
      b = b + 'set' + titleCase(split_fld[j].trim()) + '(' + split_fld[j].trim() + ');\n';
    }
  }
  str = str + b;

  str = str + '} else {\n';
  str = str + 'resetStateVariables();\n'

  str = str + '}\n';

  str = str + '} catch (error) {\n';
  str = str + 'console.log(`Error fetching ' + tbl + ' data: ${error}`);\n';
  str = str + '}\n';


  str = str + '};\n\n\n';

  str = str + createObjec(tbl, split_fld, "edit");


  str = str + 'const saveHandler = (e) => {\n';
  str = str + 'e.preventDefault();\n';

  str = str + 'try {\n';
  str = str + 'const ' + tbl + 'Data  = create' + titleCase(tbl) + 'Object();\n';
  str = str + 'const updated' + titleCase(tbl) + ' =  updateItem("' + tbl + '", Id, ' + tbl + 'Data);\n';
  str = str + 'Msg(updated' + titleCase(tbl) + '.message);\n';
  str = str + '} catch (error) {\n';
  str = str + 'Msg(updated' + titleCase(tbl) + '.message);\n';
  str = str + 'console.log(`Error updating ' + tbl + ' data: ${error}`);\n';
  str = str + '}\n';
  str = str + 'setShow(false);\n';
  str = str + "}\n\n";


  /*  ******************************** */


  str = str + "	return (\n";
  str = str + "		<>\n";


  str = str + "<div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>\n";
  str = str + '<div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">\n';
  str = str + '<div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">\n';
  str = str + '<h1 className="text-xl font-bold text-blue-600">Edit Existing</h1>\n';
  str = str + '<Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-9 h-9" />\n';
  str = str + "</div>\n\n";

  str = str + formInput(split_fld);


  str = str + '</div>\n';
  str = str + '</div>\n';
  str = str + '<button onClick={editHandler} className="w-7 h-7 mr-2 bg-fuchsia-700 hover:bg-fuchsia-900 text-white flex justify-center items-center">\n';
  str = str + '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">\n';
  str = str + '<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />\n';
  str = str + '</svg>\n';
  str = str + '</button>\n';


  str = str + '		</>\n';
  str = str + '	)\n';
  str = str + '}\n';

  str = str + 'export default Edit;\n';

  return str;
}


export default EditPage;
