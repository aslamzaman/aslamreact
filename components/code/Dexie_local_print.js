
const PrintPage = (tbl, fld) => {

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
  str = str + 'import { BtnEn } from "../Form";\n';
  str = str + 'import { jsPDF } from "jspdf";\n';
  str = str + 'import {Close} from "../Icons";\n';	
  str = str + 'import { fetchAll } from "../DexieDatabase";\n';	
  str = str + '\n';
  str = str + '\n';




  


  str = str + 'const Print = ({Msg}) => {\n';
  str = str + 'const [show, setShow] = useState(false);\n';
  


  str = str + '\n';
  str = str + '\n';

  str = str + 'const printShow = () => {\n';
  str = str + 'setShow(true);\n';
  str = str + 'Msg("Ready to print");\n';
  str = str + '}\n';
  str = str + '\n\n\n';

  

  str = str + 'const printHandler = async () => {\n'; 
  str = str + 'const doc = new jsPDF({\n';
  str = str + 'orientation: "p",\n';
  str = str + 'unit: "mm",\n';
  str = str + 'format: "a4",\n';
  str = str + 'putOnlyUsedFonts: true,\n';
  str = str + 'floatPrecision: 16\n';
  str = str + '});\n';

  str = str + '\n';
  str = str + 'const ' + tbl + ' = await fetchAll("' + tbl + '");\n';
  str = str + '\n';
  str = str + 'let y = 20;\n';
  str = str + 'for(let i = 0; i < '+tbl+'.length;i++){\n';

  let a = "";
  for (let i = 0; i < split_fld.length; i = i + 1) {
    if (i != 0) {
     // a = a + 'set' + titleCase(split_fld[i].trim()) + '("");\n';
      a = a + 'doc.text(`${'+tbl+'[i].' + split_fld[i].trim() + '}`, '+ (30*i) +', y , null, null, "center");\n';

    }
  }
  str = str + a;
 
  str = str + 'y = y + 6;\n';
  str = str + '}\n';
  str = str + '\n';

  str = str + 'doc.save(`${Date.now()}-' + tbl + '.pdf`);\n';
  str = str + 'Msg("Print completed.");\n';
  str = str + 'setShow(false);\n';
  str = str + '}\n';
  str = str + '\n';
  str = str + '\n';

  /*  ******************************** */

  str = str + "	return (\n";
  str = str + "		<>\n";
  
  
  str = str + "<div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>\n";
  str = str + '<div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">\n';
   str = str + '<div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">\n';
  str = str + '<h1 className="text-xl font-bold text-blue-600">Print File</h1>\n';
  str = str + '<Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-8 h-8" />\n';
  str = str + "</div>\n\n";
  
  str = str + '<div className="p-6 text-black">\n';
    
    str = str + '<p className="text-left text-md text-red-400">Print File</p>\n';
    str = str + "</div>\n\n";
  
    str = str + '<div className="px-6 py-6 flex justify-end items-center border-t border-gray-300">\n';
    str = str + '<BtnEn Title="Close" Click={() => { setShow(false); Msg("Data ready") }} Class="bg-red-600 hover:bg-red-800 text-white mr-1" />\n';
    str = str + '<BtnEn Title="Print" Click={printHandler} Class="bg-blue-600 hover:bg-blue-800 text-white" />\n';
    str = str + '</div>\n';
    str = str + '</div>\n';
    str = str + '</div>\n';
    str = str + '<button onClick={printShow} title="Print" className="w-8 h-8 rounded-full hover:bg-gray-50 mr-1 flex justify-center items-center">\n';
    str = str + '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">\n';
    str = str + ' <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />\n';
    str = str + '</svg>\n';
    str = str + '</button>\n';

    
    
    str = str + '		</>\n';
  str = str + '	)\n';
  str = str + '}\n';
  
    str = str + 'export default Print;\n';

  return str;
}


export default PrintPage;
