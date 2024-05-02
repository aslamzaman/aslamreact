import React, { useState } from "react";
import { TextEn, TextNum, DropdownEn, BtnSubmit } from "../Form";
import { Close } from "../Icons";

import { insertOne, fetchAll } from "../DexieDatabase";



const TextBox = ({ Title, Id, Change, Value, Chr }) => {
    return (
      <div className="w-full flex flex-col items-start">
        <label className='text-xs font-semibold mb-1' htmlFor={Id}>{Title}</label>
        <input onChange={Change} value={Value} type="text" id={Id} name={Id} className="w-full px-4 py-1.5 text-gray-600 ring-1 focus:ring-4 ring-blue-300 outline-none rounded duration-300" maxLength={Chr} />
      </div>
    )
  }




const Add = ({ Msg }) => {
    const [staff_id, setStaff_id] = useState("");
    const [arear, setArear] = useState("");
    const [sal1, setSal1] = useState("");
    const [sal2, setSal2] = useState("");
    const [remarks, setRemarks] = useState("");

    const [show, setShow] = useState(false);

    const [staffs, setStaffs] = useState([]);


    const resetStateVariables = () => {
        Msg("Ready to add new");
        setStaff_id("");
        setArear("");
        setSal1("");
        setSal2("");
        setRemarks("");
    }

    const addNewHandler = async () => {
        setShow(true);
        resetStateVariables();
        try {
            const staffData = await fetchAll("staff");
            const fieldStaff = staffData.filter(s=> parseInt(s.place_id)===1699884054697);
            setStaffs(fieldStaff ? fieldStaff : []);
        }
        catch (err) {
            console.log(err);
        }
    }

    const createUnitsalaryObject = () => {
        return {
            id: Date.now(),
            staff_id: staff_id,
            arear: arear,
            sal1: sal1,
            sal2: sal2,
            remarks: remarks
        }
    }

    const saveHandler = async (e) => {
        e.preventDefault();
        try {
            const newUnitsalaryData = createUnitsalaryObject();
            await insertOne("unitsalary", newUnitsalaryData);
            Msg("Data saved successfully.");
        } catch (error) {
            console.log(`Error saving unitsalary data: ${error}`);
            Msg("Error saving unitsalary data.");
        }
        setShow(false);
    }

    return (
        <>
            <div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>
                <div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                    <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                        <h1 className="text-xl font-bold text-blue-600">Add New</h1>
                        <Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-8 h-8" />
                    </div>

                    <div className="px-6 pb-6 text-black">
                        <form onSubmit={saveHandler}>
                            <div className="grid grid-cols-1 gap-4 my-4">

                                <DropdownEn Title="Staff" Id="staff_id" Change={e => setStaff_id(e.target.value)} Value={staff_id}>
                                    {
                                        staffs.length ? staffs.map(s => {
                                            return <option value={s.id} key={s.id}>{s.nm_en}</option>
                                        })
                                            : null
                                    }
                                </DropdownEn>

                                <TextNum Title="Arear" Id="arear" Change={e => setArear(e.target.value)} Value={arear} />
                                <TextNum Title="Salary-1" Id="sal1" Change={e => setSal1(e.target.value)} Value={sal1} />
                                <TextEn Title="Salary-2" Id="sal2" Change={e => setSal2(e.target.value)} Value={sal2} Chr="50" />
                                <TextBox Title="Remarks" Id="remarks" Change={e => setRemarks(e.target.value)} Value={remarks} Chr="100" />
                            </div>
                            <span onClick={() => { setShow(false); Msg("Data ready") }} className="text-center mt-3 mx-0.5 px-4 py-2.5 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 bg-red-600 hover:bg-red-800 text-white mr-1 cursor-pointer">Close</span>
                            <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                        </form>
                    </div>

                </div>
            </div>
            <button onClick={addNewHandler} title="Add" className="w-8 h-8 rounded-full hover:bg-gray-50 mr-1 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </>
    )
}
export default Add;
