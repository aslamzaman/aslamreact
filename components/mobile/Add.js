import React, { useState } from "react";
import { TextEn, TextNum, BtnSubmit, DropdownEn } from "../../components/Form";
import { Close } from "../Icons";

import { fetchAll } from "../../components/DexieDatabase";
import { addItem } from "../LocalDatabase"



const Add = ({ Msg }) => {
    const [mobiles, setMobiles] = useState([]);
    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [taka, setTaka] = useState("");

    const [show, setShow] = useState(false);


    const addtHandler = async () => {
        setShow(true);
        Msg("Ready to add new");

        const getData = async () => {
            try {
              const staffs = await fetchAll("mobile");
              setMobiles(staffs);
            } catch (err) {
              console.log(err);
            }
          }
          getData();

        setName("Office & Organization");
        setNum("01711439324");
        setTaka("");
    }

    const saveHandler = async (e) => {
        e.preventDefault();
        let obj = {
            id: Date.now(),
            name: name,
            num: num,
            taka: taka
        }

        let local = addItem("mobile", obj);
        Msg(local.message);
        setShow(false);
    }

    const nameChangeHandler = (e) => {
        setName(e.target.value);
        let x = mobiles.find(t => t.name === e.target.value);
        setNum(x.mobile);
    }



    return (
        <>
            <div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>
                <div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                    <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                        <h1 className="text-xl font-bold text-blue-600">Add New</h1>
                        <Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-9 h-9" />
                    </div>

                    <div className="px-6 pb-6 text-black">
                    <form onSubmit={saveHandler} >
                            <DropdownEn Title="Name" Id="name" Change={nameChangeHandler} Value={name}>
                                {mobiles.map(m => <option value={m.name} key={m.id}>{m.name}</option>)}
                            </DropdownEn>

                            <TextEn Title="Num" Id="num" Change={(e) => { setNum(e.target.value) }} Value={num} Chr="50" />
                            <TextNum Title="Taka" Id="taka" Change={(e) => { setTaka(e.target.value) }} Value={taka} />
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
