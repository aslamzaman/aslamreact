import React, { useState } from "react";
import { TextDt, TextEn, BtnSubmit } from "../Form";
import { Close } from "../Icons";
import { insertOne } from "../DexieDatabase";
import { Lib } from "../../utils/Lib";

const Add = ({ Msg }) => {
	const [honda_id, setHonda_id] = useState("");
	const [dt, setDt] = useState("");
	const [name, setName] = useState("");
	const [desig, setDesig] = useState("");
	const [mobile, setMobile] = useState("");
	const [location, setLocation] = useState("");
	const [project, setProject] = useState("");
	const [doc_pic_link, setDoc_pic_link] = useState("");
	const [remarks, setRemarks] = useState("");

	const [show, setShow] = useState(false);



	const resetStateVariables = () => {
		Msg("Ready to add new");
		setHonda_id("");
		setDt("");
		setName("");
		setDesig("");
		setMobile("");
		setLocation("");
		setProject("");
		setDoc_pic_link("");
		setRemarks("");
	}

	const addNewHandler = async () => {
		setShow(true);
		resetStateVariables();
		const hondaId = sessionStorage.getItem("hondaId");
		setHonda_id(hondaId);
		setDt(Lib.util.dateFormat(new Date(), "-"));		
	}

	const createHondalocationObject = () => {
		return {
			id: Date.now(),
			honda_id: honda_id,
			dt: dt,
			name: name,
			desig: desig,
			mobile: mobile,
			location: location,
			project: project,
			doc_pic_link: doc_pic_link,
			remarks: remarks
		}
	}

	const saveHandler = async (e) => {
		e.preventDefault();
		try {
			const newHondalocationData = createHondalocationObject();
			await insertOne("hondalocation", newHondalocationData);
			Msg("Data saved successfully.");
		} catch (error) {
			console.log(`Error saving hondalocation data: ${error}`);
			Msg("Error saving hondalocation data.");
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
								<TextDt Title="Date" Id="dt" Change={e => setDt(e.target.value)} Value={dt} />
								<TextEn Title="Name" Id="name" Change={e => setName(e.target.value)} Value={name} Chr="50" />
								<TextEn Title="Desig" Id="desig" Change={e => setDesig(e.target.value)} Value={desig} Chr="50"  />
								<TextEn Title="Mobile" Id="mobile" Change={e => setMobile(e.target.value)} Value={mobile} Chr="50"  />
								<TextEn Title="Location" Id="location" Change={e => setLocation(e.target.value)} Value={location} Chr="50"  />
								<TextEn Title="Project" Id="project" Change={e => setProject(e.target.value)} Value={project} Chr="50"  />
								<TextEn Title="Doc_pic_link" Id="doc_pic_link" Change={e => setDoc_pic_link(e.target.value)} Value={doc_pic_link} Chr="50"  />
								<TextEn Title="Remarks" Id="remarks" Change={e => setRemarks(e.target.value)} Value={remarks} Chr="50"  />
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
