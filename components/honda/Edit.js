import React, { useState } from "react";
import { TextEn, TextDt, BtnSubmit, DropdownEn } from "../Form";
import { Close } from "../Icons";
import { fetchAll, fetchOne, updateOne } from "../DexieDatabase";




const Edit = ({ Msg, Id }) => {
	const [registration, setRegistration] = useState("");
	const [reg_dt, setReg_dt] = useState("");
	const [chassis, setChassis] = useState("");
	const [engine, setEngine] = useState("");
	const [cc, setCc] = useState("");
	const [seat, setSeat] = useState("");
	const [made_year, setMade_year] = useState("");
	const [company, setCompany] = useState("");
	const [status, setStatus] = useState("");
	const [project_id, setProject_id] = useState("");
	const [unit_id, setUnit_id] = useState("");

	const [show, setShow] = useState(false);

	const [projects, setProjects] = useState([]);
	const [units, setUnits] = useState([]);

	const editHandler = async () => {
		setShow(true);
		Msg("Ready to edit");
		try {
			const [hondaData, projectData, unitData] = await Promise.all([fetchOne("honda", Id), fetchAll("project"), fetchAll("unit")]);
			setProjects(projectData);
			setUnits(unitData);

			if (hondaData) {
				const { registration, reg_dt, chassis, engine, cc, seat, made_year, company, status, project_id, unit_id } = hondaData;
				setRegistration(registration);
				setReg_dt(reg_dt);
				setChassis(chassis);
				setEngine(engine);
				setCc(cc);
				setSeat(seat);
				setMade_year(made_year);
				setCompany(company);
				setStatus(status);
				setProject_id(project_id);
				setUnit_id(unit_id);
			} else {
				setRegistration("");
				setReg_dt("");
				setChassis("");
				setEngine("");
				setCc("");
				setSeat("");
				setMade_year("");
				setCompany("");
				setStatus("");
				setProject_id("");
				setUnit_id("");
			}
		} catch (error) {
			console.log(`Error fetching honda data: ${error}`);
		}
	};


	const createHondaData = () => {
		return {
			id: Id,
			registration: registration,
			reg_dt: reg_dt,
			chassis: chassis,
			engine: engine,
			cc: cc,
			seat: seat,
			made_year: made_year,
			company: company,
			status: status,
			project_id: project_id,
			unit_id: unit_id
		}
	}

	const saveHandler = async (e) => {
		e.preventDefault();
		try {
			const hondaData = createHondaData();
			const updatedHondaId = await updateOne("honda", hondaData);
			console.log(`Honda with id ${updatedHondaId} updated successfully.`);
			Msg("Data updated successfully.");
		} catch (error) {
			console.log(`Error updating honda data: ${error}`);
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
								<TextEn Title="Registration No." Id="registration" Change={e => setRegistration(e.target.value)} Value={registration} Chr="50" />
								<TextDt Title="Registration Date" Id="reg_dt" Change={e => setReg_dt(e.target.value)} Value={reg_dt} />
								<TextEn Title="Chassis No." Id="chassis" Change={e => setChassis(e.target.value)} Value={chassis} Chr="50" />
								<TextEn Title="Engine No." Id="engine" Change={e => setEngine(e.target.value)} Value={engine} Chr="50" />
								<TextEn Title="CC" Id="cc" Change={e => setCc(e.target.value)} Value={cc} Chr="50" />
								<TextEn Title="Seat No." Id="seat" Change={e => setSeat(e.target.value)} Value={seat} Chr="50" />
								<TextEn Title="Made Year" Id="made_year" Change={e => setMade_year(e.target.value)} Value={made_year} Chr="50" />
								<TextEn Title="Company Nmae" Id="company" Change={e => setCompany(e.target.value)} Value={company} Chr="50" />
								<TextEn Title="Status" Id="status" Change={e => setStatus(e.target.value)} Value={status} Chr="50" />


								<DropdownEn Title="Project" Id="project_id" Change={e => setProject_id(e.target.value)} Value={project_id}>
									{
										projects.length ? projects.map(p => {
											return <option value={p.id} key={p.id}>{p.name}</option>
										})
											: null
									}
								</DropdownEn>
								<DropdownEn Title="Unit" Id="unit_id" Change={e => setUnit_id(e.target.value)} Value={unit_id}>
									{
										units.length ? units.map(u => {
											return <option value={u.id} key={u.id}>{u.nm_en}</option>
										})
											: null
									}
								</DropdownEn>

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
