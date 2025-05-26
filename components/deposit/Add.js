import React, { useState } from "react";
import { BtnSubmit, TextDt, TextEn, TextNum } from "@/components/Form";
import { addDataToIndexedDB } from "@/lib/DatabaseIndexedDB";
import { formatedDate } from "@/lib/utils";

const Add = ({ message }) => {
    const [name, setName] = useState('');
    const [bank, setBank] = useState('');
    const [cheque, setCheque] = useState('');
    const [dt, setDt] = useState('');
    const [tk, setTk] = useState('');   
    const [show, setShow] = useState(false);


    const resetVariables = () => {
        setName('');
        setBank('');
        setCheque('');
        setDt(formatedDate(new Date()));
        setTk('');        
    }


    const showAddForm = () => {
        setShow(true);
        resetVariables();
    }


    const closeAddForm = () => {
        setShow(false);
    }


    const createObject = () => {
        return {
            id: Date.now(),
            name: name,
            bank: bank,
            cheque:cheque,
            dt: dt,
            tk: tk            
        }
    }


    const saveHandler = async (e) => {
        e.preventDefault();
        try {
            const newObject = createObject();
            const msg = await addDataToIndexedDB('deposit', newObject);
            message(msg);
        } catch (error) {
            console.error("Error saving deposit data:", error);
            message("Error saving deposit data.");
        } finally {
            setShow(false);
        }
    }


    return (
        <>
            {show && (
                <div className="fixed inset-0 px-2 py-16 bg-gray-500/50 z-10 overflow-auto">
                    <div className="w-full md:w-[500px] lg:w-[800px] mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                        <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                            <h1 className="text-xl font-bold text-blue-600">Add New Data</h1>
                            <button onClick={closeAddForm} className="w-8 h-8 p-0.5 bg-gray-50 hover:bg-gray-300 rounded-md transition duration-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full stroke-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="px-4 pb-6 text-black">
                            <form onSubmit={saveHandler}>
                                <div className="grid grid-cols-1 gap-4 my-4">
                                    <TextEn Title="Name" Id="name" Change={e => setName(e.target.value)} Value={name} Chr={150} />
                                    <TextEn Title="Bank" Id="bank" Change={e => setBank(e.target.value)} Value={bank} Chr={150} />
                                    <TextEn Title="Cheque" Id="cheque" Change={e => setCheque(e.target.value)} Value={cheque} Chr={150} />
                                    <TextDt Title="Date" Id="dt" Change={e => setDt(e.target.value)} Value={dt} />
                                    <TextNum Title="Taka" Id="tk" Change={e => setTk(e.target.value)} Value={tk} />                                
                                </div>
                                <div className="w-full flex justify-start">
                                    <input type="button" onClick={closeAddForm} value="Close" className="bg-pink-600 hover:bg-pink-800 text-white text-center mt-3 mx-0.5 px-4 py-2 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 cursor-pointer" />
                                    <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={showAddForm} className="px-1 py-1 bg-blue-500 hover:bg-blue-700 rounded-md transition duration-500 cursor-pointer" title="Add New">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-7 h-7 stroke-white hover:stroke-gray-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </>
    )
}
export default Add;
  
