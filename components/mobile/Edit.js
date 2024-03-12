import React, { useState } from "react";
import { TextEn, TextNum, BtnSubmit, DropdownEn } from "../../components/Form";
import { Close } from "../Icons";

import { fetchAll } from "../../components/DexieDatabase";
import { editItem, updateItem } from "../LocalDatabase"


const Edit = ({ Msg, Id }) => {
    const [mobiles, setMobiles] = useState([]);
    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [taka, setTaka] = useState("");

    const [show, setShow] = useState(false);


    const editHandler = async () => {
        setShow(true);
        Msg("Ready to edit");

        const getData = async () => {
            try {
              const staffs = await fetchAll("mobile");
              setMobiles(staffs);
            } catch (err) {
              console.log(err);
            }
          }
          getData();
          

        let local = editItem("mobile", Id);
        if (local) {
            const { name, num, taka } = local;
            setName(name);
            setNum(num);
            setTaka(taka);
        } else {
            setName('');
            setNum('');
            setTaka('');
        }
    }


    const saveHandler = (e) => {
        e.preventDefault();
        let obj = {
            id: Id,
            name: name,
            num: num,
            taka: taka
        }
        let local = updateItem("mobile", Id, obj);
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
                        <h1 className="text-xl font-bold text-blue-600">Edit Existing</h1>
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
            <button onClick={editHandler} className="w-7 h-7 mr-2 bg-fuchsia-700 hover:bg-fuchsia-900 text-white flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
            </button>
        </>
    )
}
export default Edit;
