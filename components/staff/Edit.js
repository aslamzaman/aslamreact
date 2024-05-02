import React, { useState } from "react";
import { TextEn, TextBn, TextDt, TextNum, DropdownEn, BtnSubmit } from "../Form";
import { Close } from "../Icons";
import { fetchOne,  updateOne, fetchAll } from "../DexieDatabase";




const Edit = ({ Msg, Id }) => {
	const [nm_un, setNm_un] = useState("");
	const [nm_en, setNm_en] = useState("");
	const [nm_bn, setNm_bn] = useState("");
	const [dt, setDt] = useState("");
	const [sal, setSal] = useState("");
	const [mobile, setMobile] = useState("");
	const [address, setAddress] = useState("");
	const [district_id, setDistrict_id] = useState("");
	const [gender_id, setGender_id] = useState("");
	const [post_id, setPost_id] = useState("");
	const [project_id, setProject_id] = useState("");
	const [picture_id, setPicture_id] = useState("");
	const [emp_id, setEmp_id] = useState("");
	const [status, setStatus] = useState("");
	const [place_id, setPlace_id] = useState("");
	const [unit_id, setUnit_id] = useState("");
	const [remarks, setRemarks] = useState("");

	const [show, setShow] = useState(false);


	const [genders, setGenders] = useState([]);
	const [posts, setPosts] = useState([]);
	const [projects, setProjects] = useState([]);
	const [places, setPlaces] = useState([]);
	const [units, setUnits] = useState([]);
	const [districts, setDistricts] = useState([]);


	const editHandler = async () => {
		setShow(true);
		Msg("Ready to edit");
		try {
			const [staffData, genderData, postData, projectData, placeData, unitData,districtData] = await Promise.all([
				fetchOne("staff", Id),
				fetchAll("gender"),
				fetchAll("post"),
				fetchAll("project"),
				fetchAll("place"),
				fetchAll("unit"),
				fetchAll("district")
			]);
			setGenders(genderData);
			setPosts(postData);
			setProjects(projectData);
			setPlaces(placeData);
			setUnits(unitData);
			setDistricts(districtData);
			//------------------------------------------------------
			console.log("aslma", staffData)
			if (staffData) {
				const { nm_un, nm_en, nm_bn, dt, sal, mobile, address, district_id, gender_id, post_id, project_id, picture_id, emp_id, status, place_id, unit_id, remarks } = staffData;
				setNm_un(nm_un);
				setNm_en(nm_en);
				setNm_bn(nm_bn);
				setDt(dt);
				setSal(sal);
				setMobile(mobile);
				setAddress(address);
				setDistrict_id(district_id);
				setGender_id(gender_id);
				setPost_id(post_id);
				setProject_id(project_id);
				setPicture_id(picture_id);
				setEmp_id(emp_id);
				setStatus(status);
				setPlace_id(place_id);
				setUnit_id(unit_id);
				setRemarks(remarks);
			} else {
				setNm_un("");
				setNm_en("");
				setNm_bn("");
				setDt("");
				setSal("");
				setMobile("");
				setAddress("");
				setDistrict_id("");
				setGender_id("");
				setPost_id("");
				setProject_id("");
				setPicture_id("");
				setEmp_id("");
				setStatus("");
				setPlace_id("");
				setUnit_id("");
				setRemarks("");
			}
		} catch (error) {
			console.log(`Error fetching staff data: ${error}`);
		}
	};


	const createStaffData = () => {
		return {
			id: Id,
			nm_un: nm_un,
			nm_en: nm_en,
			nm_bn: nm_bn,
			dt: dt,
			sal: sal,
			mobile: mobile,
			address: address,
			district_id: district_id,
			gender_id: gender_id,
			post_id: post_id,
			project_id: project_id,
			picture_id: picture_id,
			emp_id: emp_id,
			status: status,
			place_id: place_id,
			unit_id: unit_id,
			remarks: remarks
		}
	}

	const saveHandler = async (e) => {
		e.preventDefault();
		try {
			const staffData = createStaffData();
			const updatedStaffId = await updateOne("staff", staffData);
			console.log(`Staff with id ${updatedStaffId} updated successfully.`);
			Msg("Data updated successfully.");
		} catch (error) {
			console.log(`Error updating staff data: ${error}`);
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
					<form onSubmit={saveHandler}>
							<div className="grid grid-cols-1 gap-4 my-4">
								<TextEn Title="Name-Unicode" Id="nm_un" Change={e => setNm_un(e.target.value)} Value={nm_un} Chr="50" />
								<TextEn Title="Name-English" Id="nm_en" Change={e => setNm_en(e.target.value)} Value={nm_en} Chr="50" />
								<TextBn Title="Name-Bijoy" Id="nm_bn" Change={e => setNm_bn(e.target.value)} Value={nm_bn} Chr="50" />
								<TextDt Title="Joining Date" Id="dt" Change={e => setDt(e.target.value)} Value={dt} />
								<TextNum Title="Salary" Id="sal" Change={e => setSal(e.target.value)} Value={sal} />
								<TextEn Title="Mobile" Id="mobile" Change={e => setMobile(e.target.value)} Value={mobile} Chr="50" />
								<TextEn Title="Address" Id="address" Change={e => setAddress(e.target.value)} Value={address} Chr="150" />

								<DropdownEn Title="District" Id="District_id" Change={e => setDistrict_id(e.target.value)} Value={district_id}>
									{
										districts.length ? districts.map(dis => {
											return <option value={dis.id} key={dis.id}>{dis.name}</option>
										})
											: null
									}
								</DropdownEn>							
								<DropdownEn Title="Gender" Id="gender_id" Change={e => setGender_id(e.target.value)} Value={gender_id}>
									{
										genders.length?genders.map(gen=>{
											return <option value={gen.id} key={gen.id}>{gen.name}</option>
										})
										:null
									}
								</DropdownEn>
								<DropdownEn Title="Post" Id="post_id" Change={e => setPost_id(e.target.value)} Value={post_id}>
									{
										posts.length?posts.map(pos=>{
											return <option value={pos.id} key={pos.id}>{pos.nm_en}</option>
										})
										:null
									}
								</DropdownEn>
								<DropdownEn Title="Project" Id="project_id" Change={e => setProject_id(e.target.value)} Value={project_id}>
									{
										projects.length?projects.map(prj=>{
											return <option value={prj.id} key={prj.id}>{prj.name}</option>
										})
										:null
									}
								</DropdownEn>	
								<TextEn Title="Employee Id" Id="emp_id" Change={e => setEmp_id(e.target.value)} Value={emp_id} Chr="50" />								

								<DropdownEn Title="Status" Id="status" Change={e => setStatus(e.target.value)} Value={status}>
											<option value="1">Current Staff</option>
											<option value="0">Terminate Staff</option>									
								</DropdownEn>	

								<DropdownEn Title="Place" Id="place_id" Change={e => setPlace_id(e.target.value)} Value={place_id}>
									{
										places.length?places.map(plc=>{
											return <option value={plc.id} key={plc.id}>{plc.name}</option>
										})
										:null
									}
								</DropdownEn>	

								<DropdownEn Title="Unit" Id="unit_id" Change={e => setUnit_id(e.target.value)} Value={unit_id}>
									{
										units.length?units.map(unt=>{
											return <option value={unt.id} key={unt.id}>{unt.nm_en}</option>
										})
										:null
									}
								</DropdownEn>	

								
								<TextEn Title="Remarks" Id="remarks" Change={e => setRemarks(e.target.value)} Value={remarks} Chr="150" />
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
