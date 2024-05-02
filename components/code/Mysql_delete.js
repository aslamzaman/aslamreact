
const DeletePage = (tbl, datas) => {

    const titleCase = (str) => {
      return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }
  
  
    const splitData = datas.split(",");
    const data = splitData.map(s => s.trim());
    data.shift();
    console.log(data)
  
  
  
    let dd = "";
    data.map((d, i) => {
      i === (data.length - 1)
        ? dd = dd + `<TextEn Title="${titleCase(d)}" Id="${d}" Change={(e) => set${titleCase(d)}(e.target.value)} Value={${d}} Chr="50" />`
        : dd = dd + `<TextEn Title="${titleCase(d)}" Id="${d}" Change={(e) => set${titleCase(d)}(e.target.value)} Value={${d}} Chr="50" />\n`;
    }
    );
  
    let stateVar = "";
    data.map((d, i) => {
      i === (data.length - 1)
        ? stateVar = stateVar + `const [${d}, set${titleCase(d)}] = useState('');`
        : stateVar = stateVar + `const [${d}, set${titleCase(d)}] = useState('');\n`
    }
    );
  
  
  
    let stateClear = "";
    data.map((d, i) => {
      i === (data.length - 1)
        ? stateClear = stateClear + `set${titleCase(d)}('');`
        : stateClear = stateClear + `set${titleCase(d)}('');\n`
    }
    );
  
    let getData = "";
    data.map((d, i) => {
      i === (data.length - 1)
        ? getData = getData + `set${titleCase(d)}(${d});`
    : getData = getData + `set${titleCase(d)}(${d});\n`
  }
    );
  
  
  let getValue = "";
  data.map((d, i) => {
    i === (data.length - 1)
      ? getValue = getValue + `${d}: ${d}`
      : getValue = getValue + `${d}: ${d},\n`
  }
  );
  

  const url1 = "const response = await axios.delete(`${Lib.url}/"+tbl+"/delete/${Id}`);";
  
  const errData = "console.error(`Error fetching " + tbl + " data: ${error}`);";
  const errData2 = " console.error(`Error updating " + tbl + ": ${error}`);";
  
  
  const stringData = data.map(t => ` ${t}`).toString();
  
  
  const str = `import React, { useState } from "react";
  import { BtnEn } from "../../components/Form";
  import { Close } from "../Icons";
  import axios from "axios";
  import { Lib } from "@/utils/Lib";


  const Delete = ({ Msg, Id }) => {
      const [show, setShow] = useState(false);
  
      const deleteHandler = async () => {
          setShow(true);
          Msg("Ready to delete");
      }
  
  
      const removeHandler = async () => {
          try {
              ${url1}           
              Msg(response.data.message);
          } catch (error) {
              Msg("Error deleting ${tbl}");
              console.error(error);
          }
          setShow(false);
      }
  
  
      return (
          <>
              {show && (
                  <div className="fixed inset-0 py-16 bg-gray-900 bg-opacity-60 overflow-auto">
                      <div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                          <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                              <h1 className="text-xl font-bold text-blue-600">Delete Existing</h1>
                              <Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-8 h-8" />
                          </div>
  
                          <div className="p-6 text-black">
                              <p className="text-left text-md text-red-400">Are you sure delete?</p>
                          </div>
  
                          <div className="px-6 py-6 flex justify-end items-center border-t border-gray-300">
                              <BtnEn Title="Close" Click={() => { setShow(false); Msg("Data ready") }} Class="bg-red-600 hover:bg-red-800 text-white mr-1" />
                              <BtnEn Title="Yes" Click={removeHandler} Class="bg-blue-600 hover:bg-blue-800 text-white" />
                          </div>
                      </div>
                  </div>
              )}
              <button onClick={deleteHandler} title="Delete" className="w-8 h-8 rounded-full hover:bg-gray-200 mr-2 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
          </>
      )
  }
  export default Delete;
  `;
  
  return str;
  }
  
  export default DeletePage;