import React, { useState } from "react";
import { TextEn, TextEnDisabled, BtnSubmit, Input, InputDisabled, Submit } from "../../components/Form";
import { Close } from "../Icons";
import { fetchOne, updateOne } from "../../components/DexieDatabase";

const Edit = ({ Msg, Id }) => {
	const [items, setItems] = useState("");
	const [rate, setRate] = useState("");

	const [show, setShow] = useState(false);


	const editHandler = async () => {
		setShow(true);
		Msg("Ready to edit");

		let getOne = await fetchOne("price", Id);
		console.log(getOne)
		setItems(getOne.items);
		setRate(getOne.rate);
	}


	const saveHandler = async (e) => {
		e.preventDefault();
		let obj = {
			id: Id,
			items: items,
			rate: rate
		}
		let data = await updateOne("price", obj);
		console.log(data)
		Msg("Data updated successfully.");
		setShow(false);
	}


	return (
		<>
			<div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>
				<div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
					<div className="px-6 md:px-6 py-6 flex justify-between items-center border-b border-gray-300">
						<h1 className="text-xl font-bold text-blue-600">Edit Existing</h1>
						<Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-9 h-9" />
					</div>

					<div className="px-6 pb-6 text-black">
						<form onSubmit={saveHandler} >
							<TextEnDisabled Title="Items" Id="items" Change={(e) => { setItems(e.target.value) }} Value={items} Chr="50" />
							<TextEn Title="Rate" Id="rate" Change={(e) => { setRate(e.target.value) }} Value={rate} Chr="12" />
							<span onClick={() => { setShow(false); Msg("Data ready") }} className="text-center mt-3 mx-0.5 px-4 py-2.5 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 bg-red-600 hover:bg-red-800 text-white mr-1 cursor-pointer">Close</span>
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
