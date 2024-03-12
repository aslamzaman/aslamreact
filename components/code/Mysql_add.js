
const AddPage = (tbl, datas) => {

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
  data.map(d => stateVar = stateVar + `const [${d}, set${titleCase(d)}] = useState('');\n`);

  let stateClear = "";
  data.map(d => stateClear = stateClear + `set${titleCase(d)}('');\n`);

  let getValue = "";
  data.map((d, i) => {
    i === (data.length - 1)
      ? getValue = getValue + `${d}: ${d}`
      : getValue = getValue + `${d}: ${d},\n`
  }
  );

  const  url = "`${Lib.url}/"+tbl+"/create`" ; 


  const str = `import React, { useState } from 'react';
import { TextEn, BtnSubmit } from '../Form';
import { Close } from '../Icons';
import axios from 'axios';
import { Lib } from "@/utils/Lib";


const Add = ({ Msg }) => {
  ${stateVar}
  const [show, setShow] = useState(false);

  const resetStateVariables = () => {
    Msg('Ready to add new');
    ${stateClear}};

  const addNewHandler = () => {
    setShow(true);
    resetStateVariables();
  };

  const create${titleCase(tbl)}Object = () => ({
    ${getValue}
  });

  const saveHandler = async (e) => {
    e.preventDefault();
    try {
      const new${titleCase(tbl)}Data = create${titleCase(tbl)}Object();
      const response = await axios.post(${url}, new${titleCase(tbl)}Data);
      Msg(response.data.message);
    } catch (error) {
      console.error('Error saving ${tbl}:', error);
      Msg('Failed to save data');
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
              <h1 className="text-xl font-bold text-blue-600">Add New</h1>
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
      <button onClick={addNewHandler} title="Add" className="w-8 h-8 rounded-full hover:bg-gray-50 mr-1 flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </>
  );
};

export default Add;
`;


  return str;
}

export default AddPage;
