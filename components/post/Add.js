import React, { useState } from "react";
import { TextEn, TextBn, BtnSubmit } from "../Form";
import { Close } from "../Icons";
import { insertOne } from "../DexieDatabase";


const Add = ({ Msg }) => {
    const [nm_en, setNm_en] = useState("");
    const [nm_bn, setNm_bn] = useState("");

    const [show, setShow] = useState(false);


    const resetStateVariables = () => {
        Msg("Ready to add new");
        setNm_en("");
        setNm_bn("");
    }

    const addNewHandler = () => {
        setShow(true);
        resetStateVariables();
    }

    const createPostObject = () => {
        return {
            id: Date.now(),
            nm_en: nm_en,
            nm_bn: nm_bn
        }
    }

    const saveHandler = async (e) => {
        e.preventDefault();
        try {
            const newPostData = createPostObject();
            await insertOne("post", newPostData);
            Msg("Data saved successfully.");
        } catch (error) {
            console.log(`Error saving post data: ${error}`);
            Msg("Error saving post data.");
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
                                <TextEn Title="Name English" Id="nm_en" Change={e => setNm_en(e.target.value)} Value={nm_en} Chr="50" />
                                <TextBn Title="Name Bijoy" Id="nm_bn" Change={e => setNm_bn(e.target.value)} Value={nm_bn} Chr="50" />
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
