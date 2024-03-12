import React, { useEffect, useState, useRef } from "react";
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { Lib } from "@/utils/Lib";

import Layout from "../../components/Layout";
import { DropdownEn, TextDt, TextBn, TextareaBn, BtnSubmit, BtnEn } from "../../components/Form";
import { fetchAll } from "@/components/DexieDatabase";
import { Htmlpage, Dropdown, MyComponents, TextAreaBody, TextAreaPara } from '../../components/letter/LetterComponents';
import Upload from "../../components/letter/Upload";

require("../../utils/fonts/SUTOM_MJ-bold");
require("../../utils/fonts/SUTOM_MJ-normal");


// Loading component
const Loading = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[200px] h-[130px] flex flex-col justify-center items-center border border-gray-400 rounded-lg shadow-lg">
                <p className="text-gray-700 text-xs py-2">Please Wait...</p>
                <p className="w-[120px] h-[1px] bg-gray-800"></p> 
                <p className="text-lg text-gray-500 font-bold py-2">PDF Creating...</p>
            </div>
        </div>
    );
};



const CreateLetter = () => {
    const [msg, setMsg] = useState("***");
    const [staffData, setStaffData] = useState([]);

    //------------------------------------------------------
    const [pageHeader, setPageHeader] = useState(3);
    const [swarak, setSwarak] = useState(2);
    const [swarkaNo, setSwarkaNo] = useState("GBPAviwW /2023-54");
    const [copy, setCopy] = useState(0);
    const [dt, setDt] = useState("");

    const [staff, setStaff] = useState("Avmjvg Rvgvb,wmwbqi †cÖvMÖvg AM©vbvBRvi");

    const [subject, setSubject] = useState(`ÒBDwbU BbPvR©Ó wnmv‡e Avcbvi wb‡qv‡Mi †gqv\` 30 Rvbyqvwi-2021 ch©šÍ e„w× KiY cÖm‡½|`);
    const [txt, setTxt] = useState(`Avcbvi c~‡e©i wb‡qvM cÎ ¯§viK bs wmGgBGm/GBPAviwW/2020-263,20RyjvB-2020 ZvwiL Gi eiv‡Z AeMwZ I ev¯Íevq‡bi Rb¨ Rvbv‡bv hv‡”Q †h, gvjMvov BDwb‡Ui BbPvR© wnmv‡e m¤úyb© A¯’vqx wb‡qv†Mi †gqv\` 01 Rvbyqvwi-2021 ZvwiL †_‡K 30 Ryb-2021 ZvwiL ch©šÍ e„w× Kiv n‡jv| Avcbvi cy‡e©i wb‡qvM c‡ Îi kZ©vejx A_©vr BDwb‡Ui mvwe©K e¨e¯’vcbvi cvkvcvwk wZbwU GweGm Gi ZZ¡veavb I iÿbv‡eÿb Ki‡eb| AvMvgx‡Z mv‡mi KZ©„c‡ÿi wb‡\`©kbv Abyhvqx KvR Ki‡eb Ges AviwUwm I GweGm mg~‡ni K¨v¤úvm cwi¯‹vi cwi”Qbœ ivL‡eb I mv‡mi wb‡\`©kbvgZ KvR Ki‡eb| G c‡\` cÖwZôv‡bi mva¨ Abyhvqx mvewmwW wn‡m‡e Avcbvi m¤§vwb fvZv n‡e me©mvKz‡j¨ gvwmK 7,000/(mvZ nvRvi) UvKv| Z‡e D³ Zvwi‡Li ci Avcbvi \`vwqZ¡ cvj‡bi mvdj¨ Abyhvqx Avcbvi cyb:wb‡qvM we‡ewPZ n‡e| `);
    const [p2, setP2] = useState(`GK gv‡mi ‡bvwU‡k A_ev mgcwigvb †eZb w\`‡q wmGgBGm A_ev Avcwb †h †Kvb cÿ G wb‡qv‡Mi Aemvb NUv‡Z cvi‡eb|`);
    const [certify, setCertify] = useState("Avmjvg Rvgvb,wmwbqi †cÖvMÖvg AM©vbvBRvi");

    const [loading, setLoading] = useState(false);
    const pageRef = useRef();


    const setData = () => {
        const data = localStorage.getItem('letter');
        const jsonObj = JSON.parse(data);
        if (jsonObj) {
            setPageHeader(jsonObj.pageHeader);
            setSwarak(jsonObj.swarak);
            setSwarkaNo(jsonObj.swarkaNo);
            setCopy(jsonObj.copy);
            setDt(jsonObj.dt);
            setStaff(jsonObj.staff);
            setSubject(jsonObj.subject);
            setTxt(jsonObj.txt);
            setP2(jsonObj.p2);
            setCertify(jsonObj.certify);
        } else {
            console.log("No data found.")
        }

    }


    useEffect(() => {
        setDt(Lib.util.dateFormat(new Date(), "-"));

        const getData = async () => {
            try {
                const [staff, post] = await Promise.all([
                    fetchAll("staff"),
                    fetchAll("post")
                ]);

                const result = staff.map(s => {
                    const matchPost = post.find(p => parseInt(p.id) === parseInt(s.post_id));
                    return {
                        ...s,
                        post: matchPost ? matchPost.nm_bn : 'Error'
                    }
                });
                setStaffData(result);


            } catch (err) {
                console.log(err);
            }
        }
        getData();
        setData();

    }, [])



    const createPdfHandler = async (e) => {
        e.preventDefault();
        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16 // or "smart", default is 16
        });
        setLoading(true);
        const pageText = pageRef.current;
        try {
            const canvas = await html2canvas(pageText);
            const dataUrl = canvas.toDataURL('images/png');
            doc.addImage(dataUrl, "PNG", 0, 0, 210, 297);
            doc.save(new Date().toISOString() + "-Letter.pdf");
        }
        catch (err) {
            console.log(err);
        }finally{
            setLoading(false);
        }
    }


    const createData = {
        pageHeader: pageHeader,
        swarak: swarak,
        swarkaNo: swarkaNo,
        copy: copy,
        dt: dt,
        staff: staff,
        subject: subject,
        txt: txt,
        p2: p2,
        certify: certify
    }


    const downloadHandler = () => {
        let localData = JSON.stringify(createData);
        console.log(localData)
        if (localData) {
            const blob = new Blob([localData], { type: "application/json" });
            saveAs(blob, `${new Date().toISOString()}-letter.js`);
            setMsg("Data download successfully.");
        } else {
            setMsg("Data not available.");
        }
    }



    const getMsg = (data) => {
        setMsg(data);
    }

    return (
        <Layout Title="Leave Application">
            {loading ? (
                <Loading />
            ) : (
                <div className="flex flex-col items-center content-center pt-4">

                    <h1 className="text-gray-400 text-2xl font-bold pb-6">Create Letter</h1>

                    <div className="w-full lg:w-3/4 p-2 lg:p-6 grid grid-cols-1 gap-4 border shadow-md lg:shadow-lg ">

                        <div className="w-full grid grid-cols-1 sm:grid-cols-2">
                            <p className="w-full pt-0 sm:pt-4 text-start">{msg}</p>

                            <div className="flex flex-rows justify-end space-x-4">
                                <BtnEn Title="Download" Click={downloadHandler} Class="w-36 bg-gray-600 hover:bg-gray-800 text-white" />
                                <Upload Msg={getMsg} />
                            </div>
                        </div>


                        <form onSubmit={createPdfHandler}>
                            <div className="w-full grid grid-cols-1 gap-y-3">
                                <div className="w-full grid grid-cols-2 gap-x-4">
                                    <Dropdown Title="Sarok" Id="swarak" Change={e => setSwarak(parseInt(e.target.value))} Value={swarak}>
                                        <option value="2">With Swarak</option>
                                        <option value="7">No Swarak</option>
                                    </Dropdown>
                                    {swarak === 2 ? <TextBn Title="Swarak No." Id={swarkaNo} Change={e => setSwarkaNo(e.target.value)} Value={swarkaNo} Chr="50" /> : null}
                                </div>

                                <div className="w-full grid grid-cols-2 gap-x-4">
                                    <TextDt Title="Date" Id={dt} Change={e => setDt(e.target.value)} Value={dt} />
                                    <Dropdown Title="Page Header" Id="pageHeader" Change={e => setPageHeader(e.target.value)} Value={pageHeader}>
                                        <option value="3">CMES Text Head Page</option>
                                        <option value="4">Print Letter Head Pad</option>
                                        <option value="6">Digital Letter Head Page</option>
                                        <option value="5">Blank White Page</option>
                                    </Dropdown>
                                </div>

                                <DropdownEn Title="Recipient" Id="staff" Change={(e) => { setStaff(e.target.value) }} Value={staff}>
                                    {
                                        staffData.map((s, i) => {
                                            let nm = s.nm_bn + "," + s.post;
                                            return <option value={nm} key={i}>{s.nm_en}</option>
                                        })
                                    }
                                </DropdownEn>

                                <TextBn Title="Subject" Id={subject} Change={e => setSubject(e.target.value)} Value={subject} Chr="200" />

                                <TextAreaBody Change={e => setTxt(e.target.value)} Value={txt} />
                                <TextAreaPara Title="" Change={e => setP2(e.target.value)} Value={p2} />
                                <DropdownEn Title="Consignor" Id="certify" Change={(e) => { setCertify(e.target.value) }} Value={certify}>
                                    {
                                        staffData.map((s, i) => {
                                            let nm = s.nm_bn + "," + s.post;
                                            return <option value={nm} key={i}>{s.nm_en}</option>
                                        })
                                    }
                                </DropdownEn>

                                <Dropdown Title="Duplicate" Id="copy" Change={e => setCopy(parseInt(e.target.value))} Value={copy}>
                                    <option value="0">HRD/PF</option>
                                    <option value="1">HRD/PF/AC</option>
                                    <option value="7">No Duplicate</option>
                                </Dropdown>
                                <BtnSubmit Title="Create PDF" Class="w-36 bg-teal-600 hover:bg-teal-800 text-white" />

                            </div>
                        </form>
                        <div className="w-[1px] h-[1px] bg-gray-400 overflow-auto">

                            <Htmlpage Ref={pageRef}>
                                {MyComponents[pageHeader]()}
                                <div className="text-[64.75px] leading-tight text-justify">


                                    <p className="w-full mt-[80px] pl-[292px]">
                                        {pageHeader === '5' ? null : MyComponents[swarak](swarkaNo)}
                                        {Lib.util.dateFormatBn(dt)}
                                    </p>

                                    <p className="w-full mt-[80px] pl-[292px]">
                                    Rbve {staff.split(",")[0]}<br />
                                        {staff.split(",")[1]}<br />
                                        wmGgBGm, XvKv-1207<br />
                                    </p>


                                    <p className="w-full mt-[80px] pl-[292px] pr-[220px]">
                                        welq: <span className="font-bold"> {subject}|</span>
                                    </p>


                                    <p className="w-full mt-[80px] pl-[292px] pr-[220px]">
                                        Rbve,<br />
                                        {txt}
                                    </p>

                                    {p2 === "" ? null : (<p className="w-full mt-[80px] pl-[292px] pr-[220px]">{p2}</p>)}

                                    <p className="w-full mt-[80px] pl-[292px]">
                                        ab¨ev`v‡šÍ
                                    </p>

                                    <p className="w-full mt-[80px] pl-[292px]">
                                        {certify.split(",")[0]}<br />
                                        {certify.split(",")[1]}<br />
                                        wmGgBGm<br />
                                    </p>

                                    <p className="w-full mt-[80px] pl-[292px]">
                                        {MyComponents[copy]()}
                                    </p>
                                </div>
                            </Htmlpage>


                        </div>
                    </div>

                </div>
            )}
        </Layout >



    );

};
export default CreateLetter;
