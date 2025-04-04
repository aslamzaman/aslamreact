"use client";
import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";

require("@/app/fonts/Lobster-Regular-normal");
require("@/app/fonts/OpenSansCondensed-Light-normal");
import { BtnSubmit, DropdownEn, TextDt } from "@/components/Form";
import { formatedDateSlash, formatedDate, delay, convertExcelToJson } from "@/lib/utils";
import Loading from "@/components/Loading";



const Certificate = () => {
    const [stdData, setStdData] = useState([]);
    const [dt, setDt] = useState([]);
    const [quart, setQuart] = useState("");
    const [msg, setMsg] = useState("Seclect an excel file");
    const [waitPage, setWaitPage] = useState(false);



    useEffect(() => {
        setDt(formatedDate(new Date()));
    }, [])



    const fileChangeHandler = async (e) => {
        const data = await convertExcelToJson(e.target.files[0], ["sl", "name", "trade", "reg"]);
        console.log(data);
        setStdData(data);
    }


    const createPdfHanler = async (e) => {
        e.preventDefault();

        if (stdData.length < 1) {
            setMsg("Please select a xlsx file");
            return false;
        }

        const doc = new jsPDF({
            orientation: 'l',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16 // or "smart", default is 16
        });

        setMsg("Please wait...");
        setWaitPage(true);


        for (let i = 0; i < stdData.length; i++) {

            doc.addImage(`/images/certificate/Col_EWG_2023_2024_Yr_${quart}.png`, "PNG", 0, 0, 297, 210);

            doc.setFont("Lobster-Regular", "normal");
            doc.setFontSize(24);
            doc.text(`${stdData[i].name}`, 148, 88, null, null, "center");

            doc.setFont("OpenSansCondensed-Light", "normal");
            doc.setFontSize(14);
            doc.text("Registration no: " + stdData[i].reg, 148, 94.5, null, null, "center");

            doc.setFont("Lobster-Regular", "normal");
            doc.setFontSize(17);
            doc.text(`${stdData[i].trade}`, 162, 113, null, null, "center");
            // doc.text(`${period}`, 84, 110.5, null, null, "center");
            doc.setFontSize(16)
            doc.setFont("Lobster-Regular", "normal");

            doc.setFontSize(12);
            doc.text(`${stdData[i].sl}`, 66, 183);
            doc.text(`${formatedDateSlash(dt)}`, 196, 183);

            doc.addPage("a4", "l");
            setMsg(`Page Created:  ${i + 1}`);
            await delay(100);
        }

        doc.deletePage((stdData.length + 1));
        setMsg(`Page Created completed:  ${stdData.length}`);
        setWaitPage(false);
        setStdData([]);
        doc.save(Date.now() + ".pdf");
    }



    if (waitPage) {
        return <Loading message={msg} />
    }


    return (
        <>
            <div className="w-full lg:w-5/6 mx-auto my-[50px] flex flex-col items-center border border-gray-300 rounded-lg drop-shadow-lg bg-white z-50">
                <div className="w-full bg-gray-100 border-b rounded-t-lg">
                    <h1 className="py-2.5 text-center font-semibold text-[calc(1.40rem+0.3vw)]">Certificate COL - 1st Phase</h1>
                </div>
                <p className="py-1.5 text-start text-xs font-bold">{msg}</p>
                <form onSubmit={createPdfHanler} className="w-full p-4">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="col-span-4 lg:col-span-2 mt-4">
                            <input type="file" onChange={fileChangeHandler} className="w-full px-4 py-1.5 text-gray-600 ring-1 focus:ring-4 ring-blue-300 outline-none rounded duration-300 cursor-pointer" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <DropdownEn Title="Select Qurter" Id="quart" Change={(e) => { setQuart(e.target.value) }} Value={quart}>
                                <option value="1">Qurter-1</option>
                                <option value="2">Qurter-2</option>
                                <option value="3">Qurter-3</option>
                                <option value="4">Qurter-4</option>
                            </DropdownEn>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <TextDt Title="Certificate Issue Date" Id="dt" Change={(e) => { setDt(e.target.value) }} Value={dt} />
                        </div>
                    </div>
                    <BtnSubmit Title="Create Certificate" Class="bg-indigo-700 hover:bg-indigo-900 text-white" />
                </form>
                <a href="/images/certificate/certificate.xlsx" className="text-2xl py-4 underline">Format Download</a>
            </div>
        </>
    )
}

export default Certificate;