import React, { useState } from "react";
import { BtnSubmit, DropdownBn, TextNum } from "../Form";
import { Close } from "../Icons";
import { addItem } from "../LocalDatabase";
import { fetchAll } from "../DexieDatabase";

const Add = ({ Msg }) => {
    const [units, setUnits] = useState([]);
    const [unit, setUnit] = useState("AvjxbMi");
    const [taka, setTaka] = useState("");

    const [show, setShow] = useState(false);





    const addtHandler = async () => {
        setShow(true);
        Msg("Ready to add new"); 

        try {
            const data = await fetchAll("unit");          
            setUnits(data);
        } catch (err) {
            console.log(err);
        }

    }

    const saveHandler = (e) => {
        e.preventDefault();
        let obj = {
            id: Date.now(),
            unit: unit,
            taka: taka
        }
        const save = addItem("bkash", obj);
        Msg(save.message);
        setShow(false);
    }


    return (
        <>
            <div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>
                <div className="w-11/12 md:w-8/12 mx-auto bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                    <div className="px-4 py-2 flex justify-between items-center border-b border-gray-300">
                        <h1 className="text-xl font-bold text-blue-600">Add New</h1>
                        <Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-9 h-9" />
                    </div>

                    <div className="px-6 pb-6 text-black">
                        <form onSubmit={saveHandler}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                                <DropdownBn Title="Unit" Id="unit" Change={(e) => { setUnit(e.target.value) }} Value={unit}>
                                    <option value="">---</option>
                                    {units.length? units.map(u => <option value={u.nm_bn} key={u.id}>{u.nm_bn}</option>):null}
                                </DropdownBn>
                                <TextNum Title="Taka" Id="taka" Change={(e) => { setTaka(e.target.value) }} Value={taka} />
                            </div>
                            <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                        </form>
                    </div>

                </div>
            </div>
            <button onClick={addtHandler} className="w-7 h-7 mr-2 bg-indigo-700 hover:bg-indigo-900 text-white flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </>
    )
}
export default Add;
