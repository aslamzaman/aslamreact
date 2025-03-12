"use client";
import React, { useState, useEffect, useRef } from "react";
import Add from "@/components/honda/Add";
import Edit from "@/components/honda/Edit";
import Delete from "@/components/honda/Delete";
import History from "@/components/honda/history";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { formatedDateDot, sortArray } from "@/lib/utils";
import { jsPDF } from "jspdf";
import { useReactToPrint } from "react-to-print";

const Honda = () => {
    const [hondas, setHondas] = useState([]);
    const [hondahistoris, setHondahistoris] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [waitMsg, setWaitMsg] = useState("");




    useEffect(() => {
        const fetchData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const [hondas, hondahistorys, units, projects] = await Promise.all([
                    getDataFromFirebase("honda"),
                    getDataFromFirebase("hondahistory"),
                    getDataFromFirebase("unit"),
                    getDataFromFirebase("project")
                ]);

                const joinCollection = hondas.map(honda => {
                    const matchUnit = units.find(units => units.id === honda.unitId);

                    const matchHondaHistory = hondahistorys.filter(hondahistory => hondahistory.hondaId === honda.id) || [];
                    const sortHistory = matchHondaHistory.sort((a, b) => sortArray(new Date(b.createdAt), new Date(a.createdAt)));
                    return {
                        ...honda,
                        hondahistory: sortHistory.find(hondahistory => hondahistory.hondaId === honda.id) || {},
                        unit: matchUnit || {},
                        unitName: matchUnit ? matchUnit.nmEn : "",
                        project: projects.find(project => project.id === honda.projectId) || {}
                    }
                });

                console.log("jpom", joinCollection)


                const sortedData = joinCollection.sort((a, b) => sortArray(a.unitName, b.unitName));
                //  console.log("sorted", sortedData);
                setHondas(sortedData);
                setWaitMsg('');
            } catch (error) {
                console.error("Error fetching data:", error);
                setWaitMsg('Failed to fetch data. Please try again.');
            }
        };
        fetchData();
    }, [msg]);


    const messageHandler = (data) => {
        setMsg(data);
    }


    const printHandler = () => {
        const joinHonda = hondas.map(honda => {
            const matchHistory = hondahistoris.find(history => history.hondaId._id === honda._id);
            return {
                ...honda,
                history: matchHistory ? matchHistory : {}
            }
        })


        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true
        });

        let y = 40;

        doc.setFontSize(14);
        doc.text("Centre for Mass Education in Science(CMES)", 105, 20, null, null, 'center');
        doc.text(`${formatedDateDot(new Date(), true)}`, 105, 26, null, null, 'center');

        doc.setFontSize(10);
        doc.text("Origin", 66, 35, null, null, 'center');
        doc.text("Present", 160, 35, null, null, 'center');
        for (let i = 0; i < joinHonda.length; i++) {
            const sp = doc.splitTextToSize(`${joinHonda[i].history.name ? joinHonda[i].history.name : '-'}`, 45);
            const unitProject = `${joinHonda[i].history.unit} - ${joinHonda[i].history.project}`;
            doc.text(`${i + 1}`, 15, y, null, null, 'center');
            doc.text(`${joinHonda[i].unitId.nmEn}`, 20, y, null, null, 'left');
            doc.text(`${joinHonda[i].regNo}`, 65, y, null, null, 'center');
            doc.text(`${joinHonda[i].projectId.name}`, 102, y, null, null, 'center');
            doc.text(sp, 115, y, null, null, 'left');
            //   doc.text(`${joinHonda[i].history.unit ? joinHonda[i].history.unit : '-'}`, 160, y, null, null, 'left');
            doc.text(`${unitProject}`, 160, y, null, null, 'left');

            const lineNumber = sp.length;
            const lineHeight = doc.getLineHeightFactor();

            y += lineNumber * 5 * lineHeight;

        }
        doc.line(20, 36, 111, 36);
        doc.line(115, 36, 203, 36);

        doc.line(113.5, 37, 113.5, 219);
        doc.save("honda_summary.pdf");

        console.log(joinHonda);

    }

    const pageStyle = `@media print {
        @page {
            size: A4 portrait;
            margin: 0.5in;
        }
       #noPrint{display:none};   
        #page{
            font-size: 16px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }`;
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({
        content: () => contentRef.current, pageStyle,
        documentTitle: "Honda report from react print",
    });


    return (
        <div ref={contentRef}>
            <div className="w-full py-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Honda Information</h1>
                <p id="ref" className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
            </div>


            <div id="page" className="w-full lg:w-3/4 mx-auto p-4 border-2 shadow-md rounded-md overflow-auto">
                <button id="noPrint" onClick={reactToPrintFn}>Print</button>
                <p id="noPrint" className="w-full text-sm text-red-700">{msg}</p>
                <table className="w-full border border-gray-200">
                    <thead>
                        <tr className="w-full bg-gray-200">
                            <th className="text-center border-b border-gray-200 px-4 py-2">SL</th>
                            <th className="text-center border-b border-gray-200 px-4 py-2">Unit</th>
                            <th className="text-center border-b border-gray-200 px-4 py-2">Honda Info</th>
                            <th className="text-center border-b border-gray-200 px-4 py-2">Remarks</th>
                            <th id="noPrint" className="w-[100px] font-normal">
                                <div className="w-full flex justify-end py-0.5 pr-4">
                                    <Add message={messageHandler} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {hondas.length ? (
                            hondas.map((honda, i) => (
                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={honda.id}>
                                    <td className="text-center py-2 px-4">{i + 1}</td>
                                    <td className="text-center py-2 px-4"> {honda.unitName} &#8658; {honda.hondahistory.unit}<br />
                                        {honda.project.name} &#8658; {honda.hondahistory.project} <br />
                                        {honda.hondahistory.name}-{honda.hondahistory.post}
                                    </td>
                                    <td className="text-center py-2 px-4">{honda.regNo}<br />
                                        {honda.chassisNo}<br />
                                        {honda.engineNo}<br />
                                        {honda.regDt}
                                    </td>
                                    <td className="text-center py-2 px-4">{honda.remarks}</td>
                                    <td id="noPrint" className="h-8 flex justify-end items-center space-x-1 mt-1 mr-2">
                                        <Edit message={messageHandler} id={honda.id} data={honda} />
                                        <Delete message={messageHandler} id={honda.id} data={honda} />
                                        <History message={messageHandler} id={honda.id} data={honda} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={8} className="text-center py-10 px-4">
                                    Data not available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default Honda;


