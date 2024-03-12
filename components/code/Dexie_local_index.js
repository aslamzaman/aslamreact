const MongoIndexPage = (tbl, fld) => {
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
  str = str + 'import Layout from "../../components/Layout";\n';
  str = str + 'import Add from "../../components/' + tbl + '/Add";\n';
  str = str + 'import Edit from "../../components/' + tbl + '/Edit";\n';
  str = str + 'import Delete from "../../components/' + tbl + '/Delete";\n';
  str = str + 'import Print from "../../components/' + tbl + '/Print";\n';
  str = str + 'import {fetchAll} from "../../components/DexieDatabase";\n\n\n';


  str = str + 'const ' + titleCase(tbl) + ' = () => {\n';
  str = str + 'const [' + tbl + 's, set' + titleCase(tbl) + 's] = useState([]);\n';
  str = str + 'const [msg, setMsg] = useState("Data ready");\n\n\n';


  str = str + 'useEffect(() => {\n';


  str = str + ' const load' + titleCase(tbl) + 'Data = async () => {\n';
  str = str + 'try {\n';
  str = str + 'const ' + tbl + 'Data = await fetchAll("' + tbl + '");\n';
  str = str + 'set' + titleCase(tbl) + 's(' + tbl + 'Data || []);\n';
  str = str + '} catch (error) {\n';
  str = str + 'console.log(`Error loading ' + tbl + ' data: ${error}`);\n';
  str = str + '}\n';
  str = str + '};\n';
  str = str + 'load' + titleCase(tbl) + 'Data();\n';




  str = str + '}, [msg]);\n\n\n';



  str = str + 'const msgHandler = (data) => {\n';
  str = str + 'setMsg(data);\n';
  str = str + '}\n\n\n';


  str = str + 'return (\n';
  str = str + '<Layout Title="' + titleCase(tbl) + '">\n\n';
  str = str + '<div className="w-full mt-4">\n';
  str = str + ' <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">' + titleCase(tbl) + '</h1>\n';
  str = str + '</div>\n\n';

  str = str + '<div className="w-full overflow-auto">\n';
  str = str + '<div className="mt-6">\n';
  str = str + '<p className="w-full text-sm text-red-700">{msg}</p>\n\n';
  str = str + '<table className="w-full border border-gray-200">\n';
  str = str + '<thead>\n';
  str = str + '<tr className="w-full bg-gray-200">\n';

  let x = "";
  for (let i = 0; i < split_fld.length; i++) {
    if (i != 0) {
      x = x + '<th className="text-center border-b border-gray-200 px-4 py-2">' + titleCase(split_fld[i].trim()) + '</th>\n';
    }
  }
  str = str + x;


  str = str + '<th className="font-normal text-start flex justify-end mt-1">\n';


  str = str + '<Add Msg={msgHandler} />\n';
  str = str + '<Print Msg={msgHandler} />\n';;
  str = str + '</th>\n';
  str = str + '</tr>\n';
  str = str + '</thead>\n';
  str = str + '<tbody>\n';


  str = str + '{\n';
  str = str + tbl + 's.length ? ' + tbl + 's.map((' + tbl + ') =>{\n';
  str = str + 'return (\n';
  str = str + '<tr className="border-b border-gray-200" key={' + tbl + '.id}>\n';
  x = "";
  for (let i = 0; i < split_fld.length; i++) {
    if (i != 0) {
      x = x + '<td className="text-center py-2 px-4">{' + tbl + '.' + split_fld[i].trim() + '}</td>\n';
    }
  }
  str = str + x;


  str = str + '<td className="flex justify-end items-center mt-1">\n';
  str = str + '<Edit Msg={msgHandler} Id={' + tbl + '.id} />\n';
  str = str + '<Delete Msg={msgHandler} Id={' + tbl + '.id} />\n';
  str = str + '</td>\n';
  str = str + '</tr>\n';
  str = str + ')\n';
  str = str + '})\n';
  str = str + ': null\n';
  str = str + '}\n';

  str = str + '</tbody>\n';
  str = str + '</table>\n';
  str = str + '</div>\n';
  str = str + '</div>\n';
  str = str + '</Layout>\n';
  str = str + ');\n';
  str = str + '\n';
  str = str + '};\n';
  str = str + 'export default ' + titleCase(tbl) + ';\n';


  return str;

}

export default MongoIndexPage;