
const EditPage = (tbl, datas) => {

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


const url1 = "const response = await axios.get(`${Lib.url}/" + tbl + "/read/${Id}`);";
const url2 = "const response = await axios.put(`${Lib.url}/" + tbl + "/update/${Id}`, new" + titleCase(tbl) + "Object);";

const errData = "console.error(`Error fetching " + tbl + " data: ${error}`);";
const errData2 = " console.error(`Error updating " + tbl + ": ${error}`);";


const stringData = data.map(t => ` ${t}`).toString();



      


const str = `import React, { useState, useEffect } from 'react';
  import { TextEn, BtnSubmit } from '../Form';
  import { Close } from '../Icons';
  import axios from 'axios';
  import { Lib } from "@/utils/Lib";

  
  const Edit = ({ Msg, Id }) => {
      ${stateVar}
      const [show, setShow] = useState(false);
  
      const editHandler = async () => {
          setShow(true);
          Msg('Ready to edit');
          try {
            ${url1}              
              const responseData = response.data;
              if (responseData) {
                  const {${stringData} } = responseData;
                  ${getData}
              } else {
                ${stateClear}
              }
          } catch (error) {
             ${errData}
          }
      };
  
      const create${titleCase(tbl)}Object = () => ({
          ${getValue}
      });
  
      const saveHandler = async (e) => {
          e.preventDefault();
          try {
              const new${titleCase(tbl)}Object = create${titleCase(tbl)}Object();
              ${url2}              
              console.log(response);
              Msg(response.data.message);
          } catch (error) {
            ${errData2}              
              Msg('Failed to update data');
          } finally {
              setShow(false);
          }
      };
  
  
  
      return (
          <>
              {show && (
                  <div className="fixed inset-0 py-16 bg-gray-900 bg-opacity-60 overflow-auto">
                      <div className="w-11/12 lg:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                          <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                              <h1 className="text-xl font-bold text-blue-600">Edit Existing</h1>
                              <Close Click={() => { setShow(false); Msg('Data ready'); }} Size="w-8 h-8" />
                          </div>
  
                          <div className="px-6 pb-6 text-black">
                              <form onSubmit={saveHandler}>
                                  <div className="grid grid-cols-1 gap-4 my-4">
                                  ${dd}
                                  </div>
                                  <span onClick={() => { setShow(false); Msg('Data ready'); }} className="text-center mt-3 mx-0.5 px-4 py-2.5 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 bg-red-600 hover:bg-red-800 text-white mr-1 cursor-pointer">Close</span>
                                  <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                              </form>
                          </div>
                      </div>
                  </div>
              )}
              <button onClick={editHandler} title="Edit" className="w-8 h-8 rounded-full hover:bg-gray-200 mr-1 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
              </button>
          </>
      );
  };
  
  export default Edit;
  `;

return str;
}

export default EditPage;