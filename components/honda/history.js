import React, { useState, useRef } from "react";
import { dateDifferenceInDays, formatedDateDot, sortArray } from "@/lib/utils";
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';



const History = ({ message, id, data }) => {
    const [histories, setHistories] = useState({});
    const [age, setAge] = useState(0);

    const [waitMsg, setWaitMsg] = useState("");
    const [show, setShow] = useState(false);
    const pageRef = useRef();



    const showHistoryForm = async () => {
        setShow(true);
        try {
            const {hondahistory} = data;

            const sortData = hondahistory.sort((a, b)=>sortArray(new Date(b.createdAt), new Date(a.createdAt)));
            const lastPersonUses = sortData[0];
           // console.log(lastPersonUses)
            setHistories(lastPersonUses);
            const day = dateDifferenceInDays(data.regDt, new Date(), true);
            const year = (day / 365).toFixed(2);
            setAge(year);
        } catch (err) {
            console.log(err);
        }
    };


    const closeHistoryForm = () => {
        setShow(false);
    };


    const printHandler = async () => {
        setWaitMsg("Please wait...");
        try {
            const doc = new jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: 'a4',
                putOnlyUsedFonts: true
            });

            const canvas = await html2canvas(pageRef.current, {
                scale: 4,
                useCORS: true
            })
            const url = canvas.toDataURL("images/png", 1.0);
            doc.addImage(url, "PNG", 0, 0, 210, 297);
            doc.setFontSize(16);
            doc.text("Honda Informatioln", 105, 15, null, null, "center");
            doc.save("honda_inforamtion.pdf");
          
            setWaitMsg("");
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <>
            {show && (
                <div className="fixed inset-0 py-16 bg-black bg-opacity-30 backdrop-blur-sm z-10 overflow-auto">
                    <div className="w-11/12 md:w-1/2 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                        <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                            <h1 className="text-xl font-bold text-blue-600">Details of the Motorcycle</h1>
                            <div className="flex space-x-4">
                                <button onClick={printHandler} className="px-4 py-0.5 rounded-full border border-gray-300">Print</button>
                                <button onClick={closeHistoryForm} className="w-8 h-8 p-0.5 bg-gray-50 hover:bg-gray-300 rounded-md transition duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full stroke-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                        </div>

                        <div className="px-6 pt-10 pb-16 text-black overflow-auto bg-gray-200">
                        <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
                            <div ref={pageRef} className="w-[595px] h-[842px] p-[52px] text-[12px] mx-auto bg-white">
                                <p className="text-center my-8">
                                    <span className="font-bold">{data.regNo}</span><br />
                                    Registration Date: {data.regDt}<br />
                                    Chassis No: {data.chassisNo}<br />
                                    Engine No: {data.engineNo}<br />
                                    Age: {age}<br />
                                </p>

                                <hr />

                                <p className="text-center my-8">
                                    <span className="text-gray-800">-:Received By:-</span><br />
                                    <span className="font-bold"> {histories.name}</span><br />
                                    Designation: {histories.post}<br />
                                    Unit: {histories.unit}<br />
                                    Project: {histories.project}<br />
                                    Mobile: {histories.mobile}<br />
                                    Date: {formatedDateDot(histories.dt, true)}
                                </p>

                                <hr />

                                <p className="text-center my-8">
                                    <span className="text-gray-800">-:Documents and Others:-</span><br />
                                    Registration Certificate: {histories.regCertificate}<br />
                                    Tax Certificate: {histories.taxCertificate}<br />
                                    Insurance: {histories.insurance}<br />
                                    Helmet: {histories.helmet}
                                </p>

                                <hr />

                                <p className="text-center my-8">
                                    <span className="text-gray-800">-:Remarks:-</span><br />
                                    {histories.remarks}<br />
                                </p>
                            </div>

                        </div>


                    </div >
                </div >
            )}
            <button title="Detail" onClick={showHistoryForm} className="w-7 h-7 p-0.5 bg-gray-50 hover:bg-gray-300 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full p-[1px] stroke-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </>
    )
}
export default History;


