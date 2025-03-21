import React, { useState } from "react";
import { TextEn, BtnSubmit, DropdownEn, TextBn, TextDt, TextNum } from "@/components/Form";
import { getDataFromFirebase, updateDataToFirebase } from "@/lib/firebaseFunction";
import { formatedDate } from "@/lib/utils";


const Edit = ({ message, id, data }) => {
    const [nmEn, setNmEn] = useState('');
    const [nmBn, setNmBn] = useState('');
    const [nmUn, setNmUn] = useState('');
    const [joinDt, setJoinDt] = useState('');
    const [mobile, setMobile] = useState('');
    const [genderId, setGenderId] = useState('');
    const [postId, setPostId] = useState('');
    const [projectId, setProjectId] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');
    const [empId, setEmpId] = useState('');
    const [placeId, setPlaceId] = useState('');
    const [unitId, setUnitId] = useState('');
    const [status, setStatus] = useState('');
    const [remarks, setRemarks] = useState('');
    const [salary, setSalary] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [show, setShow] = useState(false);

    const [genders, setGenders] = useState([]);
    const [posts, setPosts] = useState([]);
    const [projects, setProjects] = useState([]);
    const [places, setPlaces] = useState([]);
    const [units, setUnits] = useState([]);



    const showEditForm = async () => {
        setShow(true);
        try {
            const [responseGender, responsePost, responseProject, responsePlace, responseUnit] = await Promise.all([
                getDataFromFirebase("gender"),
                getDataFromFirebase("post"),
                getDataFromFirebase("project"),
                getDataFromFirebase("place"),
                getDataFromFirebase("unit")
            ]);
            setGenders(responseGender);
            setPosts(responsePost);
            setProjects(responseProject);
            setPlaces(responsePlace);
            setUnits(responseUnit);


            const { nmEn, nmBn, nmUn, joinDt, mobile, gender, post, project, pictureUrl, empId, place, unit, status, remarks, salary, createdAt } = data;
            setNmEn(nmEn);
            setNmBn(nmBn);
            setNmUn(nmUn);
            setJoinDt(formatedDate(joinDt));
            setMobile(mobile);
            setGenderId(gender.id);
            setPostId(post.id);
            setProjectId(project.id);
            setPictureUrl(pictureUrl);
            setEmpId(empId);
            setPlaceId(place.id);
            setUnitId(unit.id);
            setStatus(status);
            setRemarks(remarks);
            setSalary(salary);
            setCreatedAt(createdAt);
        } catch (error) {
            console.error('Failed to fetch delivery data:', error);
        }
    };


    const closeEditForm = () => {
        setShow(false);
    };


    const createObject = () => {
        return {
            nmEn: nmEn,
            nmBn: nmBn,
            nmUn: nmUn,
            joinDt: joinDt,
            mobile: mobile,
            genderId: genderId,
            postId: postId,
            projectId: projectId,
            pictureUrl: pictureUrl,
            empId: empId,
            placeId: placeId,
            unitId: unitId,
            status: status,
            remarks: remarks,
            salary: salary,
            createdAt: createdAt
        }
    }


    const saveHandler = async (e) => {
        e.preventDefault();
        try {
            const newObject = createObject();
            const msg = updateDataToFirebase('staff', id, newObject);
            message(msg);
        } catch (error) {
            console.error("Error saving staff data:", error);
            message("Error saving staff data.");
        } finally {
            setShow(false);
        }
    }


    return (
        <>
            {show && (
                <div className="fixed inset-0 py-16 bg-black bg-opacity-30 backdrop-blur-sm z-10 overflow-auto">
                    <div className="w-11/12 md:w-1/2 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                        <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                            <h1 className="text-xl font-bold text-blue-600">Edit Existing Data</h1>
                            <button onClick={closeEditForm} className="w-8 h-8 p-0.5 bg-gray-50 hover:bg-gray-300 rounded-md transition duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full stroke-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                        </div>

                        <div className="px-6 pb-6 text-black">
                            <form onSubmit={saveHandler} >
                                <div className="grid grid-cols-1 gap-4 my-4">
                                    <TextEn Title="Name (English)" Id="nmEn" Change={e => setNmEn(e.target.value)} Value={nmEn} Chr={50} />
                                    <TextBn Title="Name (Bangla)" Id="nmBn" Change={e => setNmBn(e.target.value)} Value={nmBn} Chr={50} />
                                    <TextBn Title="Name (Unicode)" Id="nmUn" Change={e => setNmUn(e.target.value)} Value={nmUn} Chr={50} />
                                    <TextDt Title="Joining Date" Id="joinDt" Change={e => setJoinDt(e.target.value)} Value={joinDt} />
                                    <TextEn Title="Mobile" Id="mobile" Change={e => setMobile(e.target.value)} Value={mobile} Chr={50} />
                                    <DropdownEn Title="Gender" Id="genderId" Change={e => setGenderId(e.target.value)} Value={genderId}>
                                        {genders.length ? genders.map(gender => <option value={gender.id} key={gender.id}>{gender.name}</option>) : null}
                                    </DropdownEn>
                                    <DropdownEn Title="Post" Id="postId" Change={e => setPostId(e.target.value)} Value={postId}>
                                        {posts.length ? posts.map(post => <option value={post.id} key={post.id}>{post.nmEn}</option>) : null}
                                    </DropdownEn>


                                    <DropdownEn Title="Project" Id="projectId" Change={e => setProjectId(e.target.value)} Value={projectId}>
                                        {projects.length ? projects.map(project => <option value={project.id} key={project.id}>{project.name}</option>) : null}
                                    </DropdownEn>
                                    <TextEn Title="Picture Url" Id="pictureUrl" Change={e => setPictureUrl(e.target.value)} Value={pictureUrl} Chr={250} />
                                    <TextEn Title="Employee Id" Id="empId" Change={e => setEmpId(e.target.value)} Value={empId} Chr={50} />

                                    <DropdownEn Title="Place" Id="placeId" Change={e => setPlaceId(e.target.value)} Value={placeId}>
                                        {places.length ? places.map(place => <option value={place.id} key={place.id}>{place.name}</option>) : null}
                                    </DropdownEn>

                                    <DropdownEn Title="Unit" Id="unitId" Change={e => setUnitId(e.target.value)} Value={unitId}>
                                        {units.length ? units.map(unit => <option value={unit.id} key={unit.id}>{unit.nmEn}</option>) : null}
                                    </DropdownEn>
                                    <TextNum Title="Status" Id="status" Change={e => setStatus(e.target.value)} Value={status} />
                                    <TextNum Title="Salary" Id="salary" Change={e => setSalary(e.target.value)} Value={salary} />
                                    <TextEn Title="Remarks" Id="remarks" Change={e => setRemarks(e.target.value)} Value={remarks} Chr={250} />
                                </div>
                                <div className="w-full flex justify-start">
                                    <input type="button" onClick={closeEditForm} value="Close" className="bg-pink-600 hover:bg-pink-800 text-white text-center mt-3 mx-0.5 px-4 py-2 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 cursor-pointer" />
                                    <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                                </div>
                            </form>
                        </div>


                    </div >
                </div >
            )}
            <button onClick={showEditForm} title="Edit" className="px-1 py-1 hover:bg-teal-300 rounded-md transition duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 stroke-black hover:stroke-blue-800 transition duration-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
            </button>
        </>
    )
}
export default Edit;


