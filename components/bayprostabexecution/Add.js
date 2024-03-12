import React, { useState } from "react";
import {TextNum, TextEn, TextBn, BtnSubmit } from "../Form";
import { Close } from "../Icons";
import { addItem, getItems } from "../LocalDatabase";

const Add = ({ Msg }) => {
	const [item, setItem] = useState("");
	const [nos, setNos] = useState("");
	const [taka, setTaka] = useState("");

	const [show, setShow] = useState(false);
	const [eng, setEng] = useState(false);


	const addtHandler = () => {
		setShow(true);
		Msg("Ready to add new");
		setItem("");
		setNos("");
		setTaka("");
		setEng(false);
	}

	const saveHandler = async (e) => {
		e.preventDefault();
		const check = getItems("bayprostabexecution");

		let obj = {
			id: Date.now(),
			item: item,
			nos: nos,
			taka: taka,
			execId: check.length > 0 ? check[0].execId : new Date().toISOString()
		}
		const data = addItem("bayprostabexecution", obj);
		Msg(data.message);
		setShow(false);
	}


	return (
		<>
			<div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>
				<div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
					<div className="px-6 md:px-6 py-6 flex justify-between items-center border-b border-gray-300">
						<h1 className="text-xl font-bold text-blue-600">Add New</h1>
						<Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-9 h-9" />
					</div>

					<div className="px-6 pb-6 text-black">
						<div className="flex items-center space-x-3">
							<input type="checkbox" onChange={() => setEng(!eng)} /> <p>English</p>
						</div>
						<form onSubmit={saveHandler} >
                            <div className="w-full grid grid-cols-4 gap-4 my-4">    
                                {eng?<TextEn Title="Item" Id="item" Change={(e) => { setItem(e.target.value) }} Value={item} Chr="50" />:<TextBn Title="Item" Id="item" Change={(e) => { setItem(e.target.value) }} Value={item} Chr="50" />}

                                <TextNum Title="Nos" Id="nos" Change={(e) => { setNos(e.target.value) }} Value={nos} />
                                <TextNum Title="Taka" Id="taka" Change={(e) => { setTaka(e.target.value) }} Value={taka} />
                            </div>

                            <span onClick={() => { setShow(false); Msg("Data ready") }} className="text-center mt-3 mx-0.5 px-4 py-2.5 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 bg-red-600 hover:bg-red-800 text-white mr-1 cursor-pointer">Close</span>
                            <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                        </form>
					</div>

				</div>
			</div>
			<button onClick={addtHandler} className="w-8 h-8 rounded-full hover:bg-gray-50 mr-1 flex justify-center items-center">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
				</svg>
			</button>
		</>
	)
}
export default Add;
