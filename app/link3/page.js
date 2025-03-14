"use client";
import React, { useState, useEffect } from "react";
import { TextDt, TextNum, DropdownEn, BtnSubmit } from "@/components/Form";
import { jsPDF } from "jspdf";
import { titleCamelCase, inwordEnglish, formatedDate, formatedDateDot } from "@/lib/utils";

const montsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];




const Link3 = () => {
    const [msg, setMsg] = useState("Data ready");

    const [dt, setDt] = useState('');
    const [taka, setTaka] = useState('1764');
    const [months, setMonths] = useState('');
    const [yr, setYr] = useState('');


    useEffect(() => {
        setDt(formatedDate(new Date()));
        setYr(new Date().getFullYear());
        setMonths(montsArray[new Date().getMonth()]);
    }, []);


    //-----------------------------------------------


    const pdfCreateHandler = (e) => {
        e.preventDefault();
        setMsg("Please wait...");
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

                doc.addImage("/images/formats/link3.png", "PNG", 0, 0, 210, 297);
                doc.setFontSize(12);
                doc.setFont("times", "normal");
                doc.text(`${formatedDateDot(dt, true)}`, 100, 54, null, null, "left");

                doc.text(`${months} ${yr}`, 114, 77, null, null, "left");
                //-------------------------------------------------------------
                doc.text(`- ${1764 - parseFloat(taka)}.00`, 175.3, 97.1, null, null, "right");
                //-------------------------------------------------------------

                doc.setFont("times", "bold");
                doc.text(`${1932 - (1764 - parseInt(taka))}.00`, 175.3, 179.3, null, null, "right"); // Total Taka
                let total = `${1932 - (1764 - parseInt(taka))}`;
                doc.setFont("times", "normal");
                let t = inwordEnglish(parseInt(total));
                doc.text(`${titleCamelCase(t)} Taka Only`, 40, 188, null, null, "left"); // Inword
                //--------------------------------------------------------------------

                doc.save(new Date().toISOString() + "-Link3-Bill.pdf");
                setMsg("");
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="w-full py-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Link3 Internet Bill</h1>
                <p className="w-full text-center text-lg text-blue-300">&nbsp;{msg}&nbsp;</p>
            </div>


            <div className="w-full lg:w-3/4 mx-auto p-4 border-2 border-gray-300 shadow-lg rounded-lg">
                <form onSubmit={pdfCreateHandler}>
                    <div className="grid grid-cols-2 gap-4">
                        <TextDt Title="Date" Id="dt" Change={e => setDt(e.target.value)} Value={dt} />
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
                    </div>
                    <BtnSubmit Title="Create Electric Bill" Class="bg-blue-600 hover:bg-blue-800 text-white" />

                </form>
            </div>

        </>
    );

};

export default Link3;


