import React, { useState } from "react";
import { BtnEn } from "../Form";
import { jsPDF } from "jspdf";
import { Close, Info } from "../Icons";
import { fetchAll } from "../DexieDatabase";


const Print = ({ Msg }) => {
    const [show, setShow] = useState(false);
    const [staffs, setStaffs] = useState([]);


    const printShow = () => {
        const log = sessionStorage.getItem("login");
        log === "login" ? setShow(true) : null;
        Msg("Ready to print");

        const loadStaffData = async () => {
            try {
                const [staffData, genderData, postData, projectData, placeData, unitData] = await Promise.all([
                    fetchAll("staff"),
                    fetchAll("gender"),
                    fetchAll("post"),
                    fetchAll("project"),
                    fetchAll("place"),
                    fetchAll("unit")
                ]);

                console.log(staffData);
                const filterData = staffData.filter(s => parseInt(s.status) === 1);

                const joinData = filterData.map(s => {
                    const matchGender = genderData.find(g => parseInt(g.id) === parseInt(s.gender_id));
                    const matchPost = postData.find(p => parseInt(p.id) === parseInt(s.post_id));
                    const matchProject = projectData.find(pr => parseInt(pr.id) === parseInt(s.project_id));
                    const matchPlace = placeData.find(pl => parseInt(pl.id) === parseInt(s.place_id));
                    const matchUnit = unitData.find(u => parseInt(u.id) === parseInt(s.unit_id));

                    return {
                        ...s,
                        gender: matchGender.name,
                        post: matchPost.nm_en,
                        project: matchProject.name,
                        place: matchPlace.name,
                        unit: matchUnit.nm_en
                    }
                })

                const SortByEmpId = joinData.sort((a, b) => {
                    if (parseInt(a.emp_id) < parseInt(b.emp_id)) {
                        return -1;
                    } else {
                        return 1;
                    }
                });

                setStaffs(SortByEmpId || []);

            } catch (error) {
                console.log(`Error loading staff data: ${error}`);
            }
        };
        loadStaffData();


    }



    const printShowMultiplePages = async () => {
        const doc = new jsPDF({
            orientation: "p",
            unit: "mm",
            format: "a4",
            putOnlyUsedFonts: true,
            floatPrecision: 16
        });

        const staff = await fetchAll("staff");

        const margin = 20;
        const itemsPerPage = 9;
        let y = margin;

        doc.setFontSize(12);
        for (let i = 0; i < staff.length; i++) {

            doc.text(`${staff[i].emp_id}`, 105, y, null, null, "center");
            doc.text(`${staff[i].nm_en} (${staff[i].deg_en})-${staff[i].unit}`, 105, y + 7, null, null, "center");
            doc.text(`${staff[i].dt}`, 105, y + 14, null, null, "center");


            y = y + 30;

            if (i % itemsPerPage === itemsPerPage - 1) {
                // Add a new page
                doc.addPage();

                // Reset the y-coordinate
                y = margin;
            }
        }

        doc.save(`${Date.now()}-staff.pdf`);
        Msg("Print completed.");
        setShow(false);
    }



    const printHandler = async () => {
        const doc = new jsPDF({
            orientation: "p",
            unit: "mm",
            format: "a4",
            putOnlyUsedFonts: true,
            floatPrecision: 16
        });



        const margin = 15;
        const itemsPerPage = 12;
        let y = margin;

        doc.setFontSize(12);
        for (let i = 0; i < staffs.length; i++) {

            doc.text(`Employee Id: ${staffs[i].emp_id}`, 105, y, null, null, "center");
            doc.text(`${staffs[i].nm_en}`, 105, y + 6, null, null, "center");
            doc.text(`${staffs[i].post}`, 105, y + 12, null, null, "center");
           

            y = y + 23;

            if (i % itemsPerPage === itemsPerPage - 1) {
                // Add a new page
                doc.addPage();

                // Reset the y-coordinate
                y = margin;
            }
        }

        doc.save(`${Date.now()}-staff.pdf`);
        Msg("Print completed.");
        setShow(false);
    }



    return (
        <>
            <div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>
                <div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                    <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                        <h1 className="text-xl font-bold text-blue-600">Print File</h1>
                        <Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-8 h-8" />
                    </div>

                    <div className="p-6 text-black">
                        <p className="text-left text-md text-red-400">Print File</p>
                    </div>

                    <div className="px-6 py-6 flex justify-end items-center border-t border-gray-300">
                        <BtnEn Title="Close" Click={() => { setShow(false); Msg("Data ready") }} Class="bg-red-600 hover:bg-red-800 text-white mr-1" />
                        <BtnEn Title="Print" Click={printHandler} Class="bg-blue-600 hover:bg-blue-800 text-white" />
                    </div>
                </div>
            </div>

            <button onClick={printShow} title="Print" className="w-8 h-8 rounded-full hover:bg-gray-50 mr-1 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                </svg>
            </button>
        </>
    )
}
export default Print;
