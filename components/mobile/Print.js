import React, { useState } from "react";
import { BtnSubmit, DropdownEn, TextDt } from "../../components/Form";
import { jsPDF } from "jspdf";
import { Close } from "../Icons";
import { Lib } from "../../utils/Lib";
import { getItems } from "../LocalDatabase";
import { fetchAll } from "../DexieDatabase";


const MobileBillCreation = ({ doc }, data) => {

    const project = data.project;
    const dt = data.dt;
    const mobile = data.mobile;

    doc.addImage("/images/formats/mobilebill.png", "PNG", 0, 0, 210, 297);
    doc.setFont("times", "italic");
    doc.setFontSize(14);
    doc.text(`${project}`, 103, 52.5, null, null, "left");
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    doc.text(` ${Lib.util.dateFormat(dt, ".")}`, 103, 58.25, null, null, "left");

    let y = 70;

    doc.line(15, y, 195, y) // horizontal line
    doc.line(15, y + 7, 195, y + 7) // horizontal line

    doc.line(15, y, 15, y + 7) // vertical line
    doc.line(25, y, 25, y + 7) // vertical line
    doc.line(110, y, 110, y + 7) // vertical line
    doc.line(168, y, 168, y + 7) // vertical line
    doc.line(195, y, 195, y + 7) // vertical line

    doc.setFont("times", "bold");
    doc.text("SL", 20, y + 5, null, null, "center");
    doc.text("USER NAME", 35, y + 5, null, null, "left");
    doc.text("NUMBER", 140, y + 5, null, null, "center");
    doc.text("TAKA", 182, y + 5, null, null, "center");
    doc.setFont("times", "normal");
    //----------------------------------------------------

    let total = 0;
    for (let i = 0; i < mobile.length; i++) {
        doc.text(`${i + 1}`, 20, y + 12, null, null, "center");
        doc.text(`${mobile[i].name}`, 35, y + 12, null, null, "left");
        doc.text(`${mobile[i].num}`, 140, y + 12, null, null, "center");
        doc.text(`${mobile[i].taka}`, 182, y + 12, null, null, "center");

        doc.line(15, y + 14, 195, y + 14) // horizontal line

        doc.line(15, y + 7, 15, y + 14) // vertical line  
        doc.line(25, y + 7, 25, y + 14) // vertical line
        doc.line(110, y + 7, 110, y + 14) // vertical line
        doc.line(168, y + 7, 168, y + 14) // vertical line
        doc.line(195, y + 7, 195, y + 14) // vertical line

        total = total + parseFloat(mobile[i].taka);
        y = y + 7;
    }

    doc.line(15, y + 14, 195, y + 14) // horizontal line
    doc.line(15, y + 7, 15, y + 14) // vertical line
    doc.line(25, y + 7, 25, y + 14) // vertical line
    doc.line(168, y + 7, 168, y + 14) // vertical line
    doc.line(195, y + 7, 195, y + 14) // vertical line


    doc.setFont("times", "bold");
    doc.text("TOTAL", 35, y + 12, null, null, "left");
    doc.text(`${total}`, 182, y + 12, null, null, "center");
    doc.setFont("times", "normal");
    let inodrd = Lib.util.inword.en(parseInt(total));
    doc.text(`INWORD: ${inodrd.toUpperCase()} ONLY`, 15, y + 19, null, null, "left");


    doc.text("Prepared By:", 15, y + 45, null, null, "left");
    doc.text("Aslam Zaman", 15, y + 45 + 6, null, null, "left");
    doc.text("Senior Program Organizer", 15, y + 45 + 12, null, null, "left");
}


const Print = ({ Msg }) => {
    const [projectData, setProjectData] = useState([]);
    const [show, setShow] = useState(false);
    const [project, setProject] = useState("");
    const [dt, setDt] = useState("");


    const printShow = () => {
        setShow(true);
        Msg("Ready to print");

        const getRemoteData = async () => {
            try {
                const data = await fetchAll("project");
                setProjectData(data);
            } catch (err) {
                console.log(err);
            }
        }
        getRemoteData();




        setDt(Lib.util.dateFormat(new Date(), "-"));


    }

    const doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true,
        floatPrecision: 16 // or "smart", default is 16
    });

    const printHandler = (e) => {
        e.preventDefault();
        Msg("Please wait...");

        let mobile = [];
        let localData = getItems("mobile");
        if (localData.length > 0) {
            mobile = localData;
        } else {
            Msg("No data!!");
            return false;
        }
        const data = {
            mobile: mobile,
            project: project,
            dt: dt
        }


        setTimeout(() => {
            MobileBillCreation({ doc }, data);
            doc.save(`${new Date().toISOString()}-mobile-bill.pdf`);
            Msg("PDF create completed.");
        }, 0);

        setShow(false);
    }


    return (
        <>
            <div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>
                <div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                    <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                        <h1 className="text-xl font-bold text-blue-600">Print File</h1>
                        <Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-9 h-9" />
                    </div>

                    <div className="p-6 text-black">
                        <form onSubmit={printHandler}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <TextDt Title="Date" Id="dt" Change={(e) => { setDt(e.target.value) }} Value={dt} />
                                <DropdownEn Title="Project" Id="project" Type="text" Change={(e) => { setProject(e.target.value) }} Value={project}>
                                    {
                                        projectData.length ? projectData.map(p => <option value={p.name} key={p.id}>{p.name}</option>) : null
                                    }
                                </DropdownEn>
                            </div>
                            <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                        </form>
                    </div>
                </div>
            </div>
            <button onClick={printShow} className="w-7 h-7 bg-green-600 hover:bg-green-800 text-white flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                </svg>
            </button>
        </>
    )
}
export default Print;
