"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/electric/Add";
import Edit from "@/components/electric/Edit";
import Delete from "@/components/electric/Delete";
import { TextDt, TextNum, DropdownEn, BtnSubmit } from "@/components/Form";
import { jsPDF } from "jspdf";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { formatedDate, inwordEnglish, sortArray } from "@/lib/utils";




const Electric = () => {
    const [electrics, setElectrics] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [waitMsg, setWaitMsg] = useState("");

    const [dt, setDt] = useState('');
    const [taka, setTaka] = useState('');
    const [months, setMonths] = useState('');
    const [yr, setYr] = useState('');
    const [staffName, setStaffName] = useState('');
    const [projectName, setProjectName] = useState('');

    const [staffs, setStaffs] = useState([]);
    const [projects, setProjects] = useState([]);




    useEffect(() => {

        const loadData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const [responseStaff, responseProject, responsePost, response] = await Promise.all([
                    getDataFromFirebase("staff"),
                    getDataFromFirebase("project"),
                    getDataFromFirebase("post"),
                    getDataFromFirebase("electric")
                ]);

                //  console.log(responseStaff, responseProject, response);
                const scStaff = responseStaff.filter(staff => staff.placeId === "6BtqRhIrKQ776jyywIC8");
                const joinWithPost = scStaff.map(staff => {
                    const matchPost = responsePost.find(post => post.id === staff.postId) || {}
                    return {
                        ...staff,
                        post: matchPost ? matchPost.nmEn : ""
                    }
                })
                console.log(joinWithPost)
                setStaffs(joinWithPost);
                setProjects(responseProject);

                const electricSort = response.sort((a, b) => sortArray(new Date(a.createdAt), new Date(b.createdAt)))

                setElectrics(electricSort);
                setWaitMsg('');

            } catch (error) {
                console.error("Error fetching data:", error);

            }
        };
        loadData();

        setDt(formatedDate(new Date()));
    }, [msg]);


    const messageHandler = (data) => {
        setMsg(data);
    }

    //-----------------------------------------------


    const pdfCreateHandler = (e) => {
        e.preventDefault();
        setWaitMsg("Please wait...");
        try {
            setTimeout(() => {
                const doc = new jsPDF({
                    orientation: 'p',
                    unit: 'mm',
                    format: 'a4',
                    putOnlyUsedFonts: true,
                    floatPrecision: 16 // or "smart", default is 16
                });

                //--------------------------------------------------------------------

                doc.addImage("/images/formats/electricbill.png", "PNG", 0, 0, 210, 297);
                doc.setFontSize(13);
                doc.setFont("times", "normal");
                doc.text(`${projectName}`, 100, 48, null, null, "left");
                doc.text(`${formatedDate(dt)}`, 100, 54, null, null, "left");

                doc.text(`Electric bill for the month of ${months} ${yr}`, 47, 77, null, null, "left");
                doc.text(`${taka}/-`, 180, 77, null, null, "right");

                doc.setFont("times", "bold");
                doc.text(`${taka}/-`, 180, 207, null, null, "right");
                let total = parseInt(taka);
                doc.setFont("times", "normal");
                let t = inwordEnglish(total);
                doc.text(`${t.toUpperCase()} TAKA ONLY`, 45, 215, null, null, "left");

                doc.text(`${staffName.split(",")[0]}`, 25, 241, null, null, "left");
                doc.text(`${staffName.split(",")[1]}`, 25, 247, null, null, "left");

                //--------------------------------------------------------------------

                doc.save(new Date().toISOString() + "-electrickbill.pdf");
                setWaitMsg("");
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="w-full py-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Electric Bill</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
            </div>


            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">

                <div className="w-full border-2 p-4 shadow-md rounded-md">
                    <form onSubmit={pdfCreateHandler}>
                        <TextDt Title="Date" Id="dt" Change={e => setDt(e.target.value)} Value={dt} />
                        <DropdownEn Title="Staff" Id="staffName" Change={e => setStaffName(e.target.value)} Value={staffName}>
                            {staffs.length ? staffs.map(staff => <option value={`${staff.nmEn},${staff.post}`} key={staff.id}>{staff.nmEn}</option>) : null}
                        </DropdownEn>
                        <DropdownEn Title="Project" Id="projectName" Change={e => setProjectName(e.target.value)} Value={projectName}>
                            {projects.length ? projects.map(project => <option value={project.name} key={project.id}>{project.name}</option>) : null}
                        </DropdownEn>

                        <DropdownEn Title="Month" Id="months" Change={e => setMonths(e.target.value)} Value={months}>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </DropdownEn>

                        <DropdownEn Title="Year" Id="yr" Change={e => setYr(e.target.value)} Value={yr}>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                            <option value="2030">2030</option>
                            <option value="2031">2031</option>
                            <option value="2032">2032</option>
                            <option value="2033">2033</option>
                            <option value="2034">2034</option>
                            <option value="2035">2035</option>
                            <option value="2036">2036</option>
                            <option value="2037">2037</option>
                            <option value="2038">2038</option>
                            <option value="2039">2039</option>
                            <option value="2040">2040</option>
                        </DropdownEn>
                        <TextNum Title="Taka" Id="taka" Change={e => setTaka(e.target.value)} Value={taka} />
                        <BtnSubmit Title="Create Electric Bill" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                    </form>
                </div>


                <div className="w-full lg:col-span-2 border-2 p-4 shadow-md rounded-md">
                    <p className="w-full text-sm text-red-700">{msg}</p>
                    <div className="p-2 overflow-auto">
                        <table className="w-full border border-gray-200">
                            <thead>
                                <tr className="w-full bg-gray-200">
                                    <th className="text-start border-b border-gray-200 px-4 py-2">Description</th>
                                    <th className="w-[100px] font-normal">
                                        <div className="w-full flex justify-end py-0.5 pr-4">
                                            <Add message={messageHandler} />
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {electrics.length ? (
                                    electrics.map(electric => (
                                        <tr className="border-b border-gray-200 hover:bg-gray-100" key={electric.id}>
                                            <td className="text-start py-2 px-4">{electric.description}</td>
                                            <td className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                                                <Edit message={messageHandler} id={electric.id} data={electric} />
                                                <Delete message={messageHandler} id={electric.id} data={electric} />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={2} className="text-center py-10 px-4">
                                            Data not available.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );

};

export default Electric;


