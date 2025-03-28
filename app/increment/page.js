"use client";
import React, { useState, useEffect, useRef } from "react";
import { TextDt, BtnSubmit, TextEn } from "@/components/Form";
import { formatedDate, convertDigitToUnicode, formatedDateUnicode, numberWithComma, inwordUnicode, delay } from "@/lib/utils";
import { localStorageGetItem } from "@/lib/DatabaseLocalStorage";
import Add from "@/components/increment/Add";
import Edit from "@/components/increment/Edit";
import Delete from "@/components/increment/Delete";

import { Tiro_Bangla } from 'next/font/google';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const tiro = Tiro_Bangla({ subsets: ['bengali'], weight: "400" });
import LoadingDot from "@/components/LoadingDot";



const Increment = () => {
    const [increments, setIncrements] = useState([]);
    const [waitMsg, setWaitMsg] = useState("");
    const [msg, setMsg] = useState("");
    const [busy, setBusy] = useState(false);
    const [count, setCount] = useState(0);

    const [incomeYr, setIncomeYr] = useState("");
    const [dt, setDt] = useState("");
    const [activeDt, setActiveDt] = useState("");

    const contentRef = useRef(null);

    const [ref, setRef] = useState("");
    const [nm1, setNm1] = useState("");
    const [nm2, setNm2] = useState("");
    const [sal, setSal] = useState("");



    useEffect(() => {

        const getData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const data = localStorageGetItem("increment");
                const result = data.sort((a, b) => parseInt(b.id) > parseInt(a.id) ? 1 : -1);
                console.log(result);
                setIncrements(result);
                setWaitMsg('');
            } catch (error) {
                console.log(error);
            }
        }
        getData();

        setIncomeYr("2023-2024");
        setDt(formatedDate(new Date()));
        setActiveDt(formatedDate(new Date()));

    }, [msg])


    const messageHandler = (data) => {
        setMsg(data);
    }

    const createPrintPage = async (e) => {
        e.preventDefault();
        if (increments.length < 1) {
            setMsg("No data!");
            return false;
        }


        const doc = new jsPDF({
            orientation: 'p',
            unit: 'px',
            format: 'a4'
        });
        setBusy(true);
        const htmlElement = contentRef.current;
        const pageW = doc.internal.pageSize.getWidth();
        const pageH = doc.internal.pageSize.getHeight();
        setCount(0);
        for (let i = 0; i < increments.length; i++) {
            const nm = increments[i].name;
            const spName = nm.split(";");
            setRef(increments[i].refNo);
            setNm1(spName[0]);
            setNm2(spName[1]);
            setSal(increments[i].salary);
            setCount(i + 1);
            await delay(500);
            const canvas = await html2canvas(htmlElement);
            const url = canvas.toDataURL('images/png');
            doc.addImage(url, 'PNG', 0, 0, pageW, pageH);
            doc.addPage('p');
        }

        doc.deletePage(increments.length + 1);
        doc.save("increement.pdf");
        setBusy(false);
    }





    return (
        <>
            {busy ?<LoadingDot message={`Creating page ${count}`} />: null}
                                                   
            <div className="w-full mb-3 mt-8">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Increment</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
                <p className="w-full text-sm text-center text-pink-600">&nbsp;{msg}&nbsp;</p>
            </div>


            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-4 lg:gap-x-4">
                <div className="p-2 overflow-auto">
                    <form onSubmit={createPrintPage}>
                        <div className="w-full grid grid-cols-1 gap-4">
                            <TextEn Title="Income Year" Id="incomeYr" Change={(e) => { setIncomeYr(e.target.value) }} Value={incomeYr} Chr="150" />
                            <TextDt Title="Date" Id="dt" Change={(e) => { setDt(e.target.value) }} Value={dt} />
                            <TextDt Title="Active Date" Id="activeDt" Change={(e) => { setActiveDt(e.target.value) }} Value={activeDt} />
                        </div>
                        <BtnSubmit Title="Create Print Page" Class="bg-green-600 hover:bg-green-800 text-white" />
                    </form>
                </div>


                <div className="col-span-2 p-2 overflow-auto">
                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">Refno</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Name</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Salary</th>
                                <th className="w-[100px] font-normal">
                                    <div className="w-full flex justify-end mt-1 pr-[3px] lg:pr-2">
                                        <Add message={messageHandler} />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                increments.length ? increments.map(increment => {
                                    return (
                                        <tr className="border-b border-gray-200 hover:bg-gray-100" key={increment.id}>
                                            <td className="text-center py-2 px-4">{increment.refNo}</td>
                                            <td className="text-center py-2 px-4">{increment.name}</td>
                                            <td className="text-center py-2 px-4">{increment.salary}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit message={messageHandler} id={increment.id} data={increment} />
                                                <Delete message={messageHandler} id={increment.id} data={increment} />
                                            </td>
                                        </tr>
                                    )
                                })
                                    : null
                            }
                        </tbody>
                    </table>
                </div>
            </div>




            <div className="w-[10px] h-[10px] overflow-auto">

                <div ref={contentRef} className="w-[2480px] h-[3508px] px-[300px] pt-[675px] pb-[300px] mx-auto">
                    <div className={`w-full h-auto text-[50px] ${tiro.className}`} >


                        <p>স্মারক নং-সিএমইএস/এইচআরডি/{convertDigitToUnicode('2025')}-{convertDigitToUnicode(ref)}<br />{formatedDateUnicode(dt)}</p>
                        <br />
                        <p>জনাব {nm1}<br />{nm2}<br />সিএমইএস, লালমাটিয়া, ঢাকা </p>
                        <br />
                        <p className="text-justify">বিষয় : <span className="font-bold">{convertDigitToUnicode(incomeYr)} অর্থবছরের মূল্যায়নের ভিত্তিতে বাৎসরিক বেতন ৫% বৃদ্ধি ও গত {formatedDateUnicode(activeDt)} তারিখ থেকে কার্যকর করণ প্রসঙ্গে।</span> </p>
                        <br />

                        <p className="text-justify">জনাব,<br />আপনার অবগতির জন্য জানানো যাচ্ছে যে, {convertDigitToUnicode(incomeYr)} অর্থবছরের স্টাফ পারফরমেন্স মূল্যায়নের ভিত্তিতে আপনার বাৎসরিক বেতন ৫% বৃদ্ধি করা হয়েছে। এ সিদ্ধান্ত গত {formatedDateUnicode(activeDt)} তারিখ থেকে কার্যকর হয়েছে।</p>

                        <br />


                        <p className="text-justify">বেতন বৃদ্ধির ফলে আপনার বর্তমান বেতন সর্বসাকুল্যে {convertDigitToUnicode(numberWithComma(sal))}/-({inwordUnicode(sal)}) টাকায় উন্নীত করা হয়েছে। আশা করি, এই সিদ্ধান্ত আপনার জন্য আনন্দদায়ক হবে এবং ভবিষ্যতেও আপনি প্রতিষ্ঠানের উন্নয়নে আত্মনিয়োগ করে যাবেন।</p>

                        <br />

                        <p>আপনার সার্বিক সাফল্য ও সুস্বাস্থ্য কামনা করছি।</p>
                        <br />
                        <p>ধন্যবাদান্তে,</p>

                        <br /><br />
                        <p className="mt-16">মোঃ ওমর ফারুক হায়দার<br />নির্বাহী পরিচালক<br />সিএমইএস</p>
                        <br />
                        <p> অনুলিপি:<br />১. এইচআরডি/পিএফ</p>

                    </div>

                </div>
            </div>



        </>
    );

};

export default Increment;


