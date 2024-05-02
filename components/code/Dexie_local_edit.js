
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
  str = str + 'import { TextEn, BtnSubmit } from "../Form";\n';
  str = str + 'import {Close} from "../Icons";\n';
  str = str + 'import {fetchOne, updateOne} from "../DexieDatabase";\n\n\n';
  str = str + '\n';
  str = str + '\n';

  str = str + 'const Edit = ({Msg, Id}) => {\n';
  let a = "";
  for (var i = 0; i < split_fld.length; i = i + 1) {
    if (i != 0) {
      a = a + 'const [' + split_fld[i].trim() + ', set' + titleCase(split_fld[i].trim()) + '] = useState("");\n';
    }
  }
  str = str + a;

  str = str + '\n';
  str = str + 'const [show, setShow] = useState(false);\n';

  str = str + '\n';
  str = str + '\n';


  str = str + 'const editHandler = async () => {\n';;
  str = str + "setShow(true);\n";
  str = str + 'Msg("Ready to edit");\n';



  str = str + 'try {\n';
  str = str + 'const ' + tbl + 'Data = await fetchOne("' + tbl + '", Id);\n';
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

  b = "";
  for (var j = 0; j < split_fld.length; j++) {
    if (j != 0) {
      b = b + 'set' + titleCase(split_fld[j].trim()) + '("");\n';
    }
  }
  str = str + b;
  str = str + '}\n';

  str = str + '} catch (error) {\n';
  str = str + 'console.log(`Error fetching ' + tbl + ' data: ${error}`);\n';
  str = str + '}\n';


  str = str + '};\n\n\n';




  str = str + '	const create' + titleCase(tbl) + 'Data  = () => {\n';
  str = str + "return {\n";
  b = "";
  b = b + 'id: Id,\n';
  for (i = 0; i < (split_fld.length - 1); i = i + 1) {
    if (i != 0) {
      b = b + split_fld[i].trim() + ': ' + split_fld[i].trim() + ',\n';
    }
  }
  b = b + (split_fld[(split_fld.length - 1)]).trim() + ': ' + split_fld[i].trim() + '\n';
  str = str + b;
  str = str + "}\n";
  str = str + "}\n\n";



  str = str + 'const saveHandler = async (e) => {\n';
  str = str + 'e.preventDefault();\n';

  str = str + 'try {\n';
  str = str + 'const ' + tbl + 'Data  = create' + titleCase(tbl) + 'Data();\n';
  str = str + 'const updated' + titleCase(tbl) + 'Id = await updateOne("' + tbl + '", ' + tbl + 'Data);\n';
  str = str + 'console.log(`' + titleCase(tbl) + ' with id ${updated' + titleCase(tbl) + 'Id} updated successfully.`);\n';
  str = str + 'Msg("Data updated successfully.");\n';
  str = str + '} catch (error) {\n';
  str = str + 'console.log(`Error updating ' + tbl + ' data: ${error}`);\n';
  str = str + 'Msg("Data updating error");\n';
  str = str + '}\n';
  str = str + 'setShow(false);\n';
  str = str + "}\n\n";




  /*  ******************************** */


  str = str + "	return (\n";
  str = str + "		<>\n";


  str = str + "			<div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>\n";
  str = str + '				<div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">\n';
  str = str + '				<div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">\n';
  str = str + '						<h1 className="text-xl font-bold text-blue-600">Edit Existing</h1>\n';
  str = str + '						<Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-8 h-8" />\n';
  str = str + "				</div>\n\n";

  str = str + '				<div className="px-6 pb-6 text-black">\n';
  str = str + '				<form onSubmit={saveHandler} >\n';
  str = str + '<div className="grid grid-cols-1 gap-4 my-4">\n';

  var d = "";
  for (i = 0; i < (split_fld.length); i = i + 1) {
    if (i != 0) {
      d = d + '					<TextEn Title="' + titleCase(split_fld[i].trim()) + '" Id="' + split_fld[i].trim() + '" Change={e => set' + titleCase(split_fld[i].trim()) + '(e.target.value) } Value={' + split_fld[i].trim() + '} Chr="50" /> \n';
    }
  }
  str = str + d;


  str = str + '</div>\n';
  str = str + '<span onClick={() => { setShow(false); Msg("Data ready") }} className="text-center mt-3 mx-0.5 px-4 py-2.5 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 bg-red-600 hover:bg-red-800 text-white mr-1 cursor-pointer">Close</span>\n';
  str = str + '	<BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />\n';
  str = str + '	</form>\n';
  str = str + "				</div>\n\n\n";
  str = str + '				</div>\n';
  str = str + '			</div>\n';
  str = str + '<button onClick={editHandler} title="Edit" className="w-8 h-8 rounded-full hover:bg-gray-200 mr-1 flex justify-center items-center">\n';
  str = str + '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">\n';
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
