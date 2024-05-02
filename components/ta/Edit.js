import React, { useState } from "react";
import { TextNum, DropdownEn, BtnSubmit } from "../Form";
import { Close } from "../Icons";
import { fetchOne, updateOne, fetchAll } from "../DexieDatabase";




const Edit = ({ Msg, Id }) => {
    const [unit_id, setUnit_id] = useState("");
    const [tk, setTk] = useState("");
    const [units, setUnits] = useState([]);
    const [show, setShow] = useState(false);


    const editHandler = async () => {
        setShow(true);
        Msg("Ready to edit");
        try {
            const [taData, units] = await Promise.all([fetchOne("ta", Id), fetchAll("unit")]);
            if (taData) {
                const { unit_id, tk } = taData;
                setUnit_id(unit_id);
                setTk(tk);
            } else {
                setUnit_id("");
                setTk("");
            }
            setUnits(units || []);
        } catch (error) {
            console.log(`Error fetching ta data: ${error}`);
        }
    };


    const createTaData = () => {
        return {
            id: Id,
            unit_id: unit_id,
            tk: tk
        }
    }

    const saveHandler = async (e) => {
        e.preventDefault();
        try {
            const taData = createTaData();
            const updatedTaId = await updateOne("ta", taData);
            console.log(`Ta with id ${updatedTaId} updated successfully.`);
            Msg("Data updated successfully.");
        } catch (error) {
            console.log(`Error updating ta data: ${error}`);
            Msg("Data updating error");
        }
        setShow(false);
    }

    return (
        <>
            <div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>
                <div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                    <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                        <h1 className="text-xl font-bold text-blue-600">Edit Existing</h1>
                        <Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-8 h-8" />
                    </div>

                    <div className="px-6 pb-6 text-black">
                        <form onSubmit={saveHandler} >
                            <div className="grid grid-cols-1 gap-4 my-4">
                            <DropdownEn Title="Unit" Id="unit_id" Change={e => setUnit_id(e.target.value)} Value={unit_id}>
								{
									units.length > 0 ? units.map(u => {
										return <option value={u.id} key={u.id}>{u.nm_en}</option>
									}) : null
								}
							</DropdownEn>
                            <TextNum Title="Taka" Id="tk" Change={e => setTk(e.target.value)} Value={tk} />
                            </div>
                            <span onClick={() => { setShow(false); Msg("Data ready") }} className="text-center mt-3 mx-0.5 px-4 py-2.5 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 bg-red-600 hover:bg-red-800 text-white mr-1 cursor-pointer">Close</span>
                            <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                        </form>
                    </div>


                </div>
            </div>
            <button onClick={editHandler} title="Edit" className="w-8 h-8 rounded-full hover:bg-gray-200 mr-1 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
            </button>
        </>
    )
}
export default Edit;
