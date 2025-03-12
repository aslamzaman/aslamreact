"use client";
import React, { useState,useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { formatedDateDot, sortArray } from "@/lib/utils";


const Print = ({ data }) => {
    const [allLands, setAllLands] = useState([]);
    const [waitMsg, setWaitMsg] = useState("");
    const [gt, setGt] = useState(0);
    const [show, setShow] = useState(false);

    const showEditForm = () => {
        setShow(true);
        const sortData = data.sort((a, b) => sortArray(a.unit.toUpperCase(), b.unit.toUpperCase()));
        console.log(sortData);
        setAllLands(sortData);

        setWaitMsg('');
        //--------------------------------

        const gtTotal = data.reduce((t, c) => t + parseFloat(c.qty), 0);
        setGt(gtTotal);
    };


    const closeEditForm = () => {
        setShow(false);
    };


    const pageStyle = `@media print {
        @page {
            size: A4 portrait;
            margin: 0.5in;
        }
        #page{
            font-size: 16px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }`;

const contentRef = useRef(null);
const reactToPrintFn = useReactToPrint({
    content: () => contentRef.current,
    pageStyle,
    documentTitle: "Honda report from react print",
});



    return (
        <>
            {show && (
                <div className="fixed inset-0 px-4 py-16 bg-black bg-opacity-30 backdrop-blur-sm z-10 overflow-auto">
                    <div className="w-11/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                        <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">

                            <button onClick={closeEditForm} className="w-8 h-8 p-0.5 bg-gray-50 hover:bg-gray-300 rounded-md transition duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full stroke-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                        </div>
                        <div className="px-6 pb-6 text-black">
                        <button id="noPrint" onClick={reactToPrintFn}>Print</button>
                        <div id="page" ref={contentRef} className="p-4 overflow-auto">
                             
                                <table className="w-full border border-gray-200">
                                    <thead>
                                        <tr className="w-full bg-gray-200">
                                            <th className="text-center border-b border-gray-200 px-4 py-1">SL</th>
                                            <th className="text-start border-b border-gray-200 px-4 py-1">Unit</th>
                                            <th className="text-start border-b border-gray-200 px-4 py-1">School</th>
                                            <th className="text-center border-b border-gray-200 px-4 py-1">Qty</th>
                                            <th className="text-center border-b border-gray-200 px-4 py-1">RegDt</th>
                                            <th className="text-center border-b border-gray-200 px-4 py-1">Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allLands.length ? (
                                            allLands.map((land, i) => (
                                                <tr className="border-b border-gray-200 hover:bg-gray-100" key={land.id}>
                                                    <td className="text-center py-1 px-4">{i + 1}</td>
                                                    <td className="text-start py-1 px-4">{land.unit}</td>
                                                    <td className="text-start py-1 px-4">{land.school}</td>
                                                    <td className="text-center py-1 px-4">{land.qty}</td>
                                                    <td className="text-center py-1 px-4">{formatedDateDot(land.regDt, true)}</td>
                                                    <td className="text-center py-1 px-4">{land.remarks}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={6} className="text-center py-10 px-4">
                                                    Data not available.
                                                </td>
                                            </tr>
                                        )}

                                        <tr className="border-b border-gray-200 hover:bg-gray-100 font-bold">
                                            <td className="text-center py-1 px-4"></td>
                                            <td className="text-center py-1 px-4">Total Land</td>
                                            <td colSpan="5" className="text-start py-1 px-4">Grand Total: {gt.toFixed(2)} decimal</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={showEditForm} title="Edit" className="px-1 py-1 hover:bg-teal-300 rounded-md transition duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 stroke-black hover:stroke-blue-800 transition duration-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </button>
        </>
    )
}
export default Print;



