
import React, { useState } from "react";
import { jsPDF } from "jspdf";
import * as XLSX from 'xlsx';
require("../../utils/fonts/Lobster-Regular-normal");
require("../../utils/fonts/OpenSansCondensed-Light-normal");
import { BtnSubmit } from "../../components/Form";
import Layout from "../../components/Layout";

// Loading component
const Loading = ({ count, len }) => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[200px] h-[130px] flex flex-col justify-center items-center border border-gray-400 rounded-lg shadow-lg">
                <p className="text-gray-700">Please Wait...</p>
                <p className="w-[120px] h-[1px] bg-gray-800"></p>
                <p className="text-gray-700 text-lg font-bold">{count}/{len}</p>
                <p className="text-xs text-gray-500">Certificate Creating.</p>
            </div>
        </div>
    );
};


const CertificateGeneral = () => {
    const [stdData, setStdData] = useState([]);
    const [msg, setMsg] = useState("Seclect an excel file");

    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const [len, setLen] = useState(0);


    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];

        if (file) {
            const bufferObj = await file.arrayBuffer();
            const workbook = XLSX.read(bufferObj, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(worksheet, { header: ["sl", "name", "trade", "reg", "period", "dt", "grade"] });
            console.log(json);
            setStdData(json);

        } else {
            setMsg("Seclect an excel file");
        }
    }


    const doc = new jsPDF({
        orientation: 'l',
        unit: 'mm',
        format: 'a4',
        putOnlyUsedFonts: true,
        floatPrecision: 16 // or "smart", default is 16
    });


    const createPdfHanler = (e) => {
        e.preventDefault();
        if (stdData.length < 1) {
            setMsg("Please select xlxs file");
            return false;
        }
        setMsg("Certificate Creating.");
        setLoading(true);

        let i = 0;
        setLen(stdData.length - 1);
        const myTimer = setInterval(() => {
            if (i > 0) {
                doc.addImage("/images/certificate/Cirtificate_general.png", "PNG", 0, 0, 297, 210);

                doc.setFont("Lobster-Regular", "normal");
                doc.setFontSize(24);
                doc.text(`${stdData[i].name}`, 148, 72, null, null, "center");

                doc.setFont("OpenSansCondensed-Light", "normal");
                doc.setFontSize(14);
                doc.text("Registration No: " + stdData[i].reg, 148, 79, null, null, "center");

                doc.setFont("Lobster-Regular", "normal");
                doc.setFontSize(16);
                doc.text(`${stdData[i].trade}`, 163, 105.75, null, null, "center");
                doc.setFontSize(14)
                doc.text(`${stdData[i].period}`, 84, 114, null, null, "center");
                doc.text(`${stdData[i].grade}`, 147, 122, null, null, "center")

                doc.setFontSize(12);
                doc.text(`${stdData[i].sl}`, 66, 182);
                doc.text(`${stdData[i].dt}`, 196, 182);
                doc.addPage("a4", "l");
                setCount(i);
            }
            i = i + 1;
            if (i >= stdData.length) {
                clearInterval(myTimer);
                doc.deletePage((stdData.length));
                doc.save(new Date().toISOString() + "-general-student-certificate.pdf");
                setMsg("PDF file Created");
                setLoading(false);
            }
        }, 0);

    }


    return (
        <Layout Title="Certificate General">
            {loading ? (
                <Loading count={count} len={len} />
            ) : (
                <div className="p-6">
                    <div className="w-11/12 md:w-8/12 mx-auto my-[50px] flex flex-col items-center border border-gray-200 rounded-lg shadow-md bg-white z-50">
                        <div className="w-full bg-gray-100 border-b rounded-t-lg">
                            <h1 className="py-2.5 text-center font-semibold text-[calc(1.40rem+0.3vw)]">Certificate General</h1>
                        </div>
                        <p className="py-2 text-md text-red-600 text-start font-bold">{msg}</p>
                        <form onSubmit={createPdfHanler} className="w-full p-6">
                            <input type="file" onChange={fileChangeHandler} className="w-full px-4 py-1.5 text-gray-600 ring-1 focus:ring-4 ring-blue-300 outline-none rounded duration-300 cursor-pointer" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
                            <BtnSubmit Title="Create PDF" Class="bg-indigo-700 hover:bg-indigo-900 text-white" />
                        </form>
                        <a href="/images/certificate/certificate_general.xlsx" className="text-2xl py-4 underline">Format Download</a>
                    </div>
                </div>
            )}
        </Layout>


    )
}

export default CertificateGeneral;