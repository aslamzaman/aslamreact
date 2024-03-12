
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
  str = str + 'import { BtnEn } from "../../components/Form";\n';
  str = str + 'import {Close} from "../Icons";\n';
  str = str + 'import {deleteItem} from "../LocalDatabase";\n';
  str = str + '\n';
  str = str + '\n';



  str = str + 'const Delete = ({Msg, Id}) => {\n';
  str = str + 'const [show, setShow] = useState(false);\n';
  str = str + '\n';
  str = str + '\n';


  str = str + 'const deleteHandler = () => {\n';
  str = str + 'setShow(true);\n';
  str = str + 'Msg("Ready to delete.");\n';
  str = str + '}\n\n\n';


  str = str + 'const removeHandler = () => {\n';

  str = str + 'try {\n';
  str = str + 'let deletedItem =  deleteItem("' + tbl + '", Id);\n';
  str = str + ' Msg(deletedItem.message);\n';
  str = str + '} catch (error) {\n';
  str = str + ' Msg(deletedItem.message);\n';
  str = str + 'console.log(`Error deleting data: ${error}`);\n';
  str = str + '}\n';
  str = str + 'setShow(false);\n';
  str = str + "}\n\n";

  str = str + '\n';
  str = str + '\n';

  str = str + "	return (\n";
  str = str + "		<>\n";
  
  
  str = str + "<div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>\n";
  str = str + '<div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">\n';
   str = str + '<div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">\n';
  str = str + '<h1 className="text-xl font-bold text-blue-600">Delete Existing</h1>\n';
  str = str + '<Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-9 h-9" />\n';
  str = str + "</div>\n\n";
  
  str = str + '<div className="p-6 text-black">\n';
    
    str = str + '<p className="text-left text-md text-red-400">Are you sure delete?</p>\n';
    str = str + "</div>\n\n";
  
    str = str + '<div className="px-6 py-6 flex justify-end items-center border-t border-gray-300">\n';
    str = str + '<BtnEn Title="Close" Click={() => { setShow(false); Msg("Data ready") }} Class="bg-red-600 hover:bg-red-800 text-white mr-1" />\n';
    str = str + '<BtnEn Title="Yes" Click={removeHandler} Class="bg-blue-600 hover:bg-blue-800 text-white" />\n';
    str = str + '</div>\n';
    str = str + '</div>\n';
    str = str + '</div>\n';
    str = str + '<button onClick={deleteHandler} className="w-7 h-7 bg-red-700 hover:bg-red-900 text-white flex justify-center items-center">\n';
    str = str + '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">\n';
    str = str + '<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />\n';
    str = str + '</svg>\n';
    str = str + '</button>\n';
    
    str = str + '		</>\n';
  str = str + '	)\n';
  str = str + '}\n';
  
    str = str + 'export default Delete;\n';

  return str;
}


export default ListPage;
