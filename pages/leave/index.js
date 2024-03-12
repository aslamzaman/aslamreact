import React, { useState, useEffect } from "react";
import { BtnEn, BtnSubmit, DropdownEn, TextDt, TextBn, TextareaBn } from "../../components/Form";
import Layout from "../../components/Layout";
import { Lib } from "../../utils/Lib";
import { jsPDF } from "jspdf";

import { fetchAll } from "../../components/DexieDatabase";

require("../../utils/fonts/SUTOM_MJ-normal");
require("../../utils/fonts/SUTOM_MJ-bold");



const LeaveBillFormat = ({ doc }, data) => {
  const nm = data.nm;
  const dt1 = data.dt1;
  const dt2 = data.dt2;
  const cause = data.cause;
  const description = data.description;

  let s = nm.split(",");

  doc.addImage("/images/formats/leave.png","PNG",0,0,210,297);
  doc.setFont("SutonnyMJ", "normal");
  doc.setFontSize(14);
  //----------------------------------------------------
  doc.text(`${Lib.util.dateFormat(new Date(), ".")}`, 169, 40 - 1, null, null, "left"); // date
  doc.text(`${s[0]}`, 59, 50 - 1, null, null, "center"); // name
  doc.text(`${s[1]}`, 130, 50 - 1, null, null, "center");  // post
  doc.setFont("times", "normal");
  doc.setFontSize(13);
  doc.text(`${s[2]}`, 186, 50 - 1, null, null, "center");   // project
  doc.setFont("SutonnyMJ", "normal");
  doc.setFontSize(14);
  doc.text(`${cause}`, 123, 60 - 1, null, null, "center");
  doc.text(`${Lib.util.dateFormat(dt1, ".")}`, 70.5, 70 - 1, null, null, "center");
  doc.text(`${Lib.util.dateFormat(dt2, ".")}`, 120.5, 70 - 1, null, null, "center");
  doc.text(`${Lib.util.dateDiff(dt1, dt2, 1)}`, 162.5, 70 - 1, null, null, "center");

  doc.text(`${description}`, 20, 121.5, { maxWidth: 178, align: 'justify' });
  doc.text(`${Lib.util.dateDiff(dt1, dt2, 1)}`, 60, 244 - 1, null, null, "center");
  doc.text(`${Lib.util.dateDiff(dt1, dt2, 1)}`, 172, 244 - 1, null, null, "center");
}




const LeavePage = () => {
  const [nm, setNm] = useState("");
  const [dt1, setDt1] = useState("");
  const [dt2, setDt2] = useState("");
  const [cause, setCause] = useState("");
  const [description, setDescription] = useState("");
  const [msg, setMsg] = useState("***");
  const [texcolor, setTextcolor] = useState("text-gray-600");

  const [staffData, setStaffData] = useState([]);


  useEffect(() => {

    const getData = async () => {
      try {

        const [staffs, posts, projects] = await Promise.all([fetchAll("staff"), fetchAll("post"), fetchAll("project")]);

        const joinStaffs = staffs.map(s => {
          const matchPost = posts.find(ps => parseInt(ps.id) === parseInt(s.post_id));
          const matchProject = projects.find(pr => parseInt(pr.id) === parseInt(s.project_id));
          return {
            ...s,
            post: matchPost.nm_bn,
            project: matchProject.name
          }
        })
        setStaffData(joinStaffs);

      } catch (err) {
        console.log(err);
      }
    }
    getData();
    const date1 = Lib.util.dateFormat(new Date(), "-");
    setDt1(date1);
    setDt2(date1);
    setCause("cvwievwiK Kv‡Ri Rb¨");
    setDescription("");
  }, [])


  const doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
    floatPrecision: 16 // or "smart", default is 16
  });



  const printHandler = (e) => {
    e.preventDefault();
    if (description === "") {
      setMsg("Click on 'Create Application' button");
      setTextcolor("text-red-600");
      return false;
    }
    setMsg("Please wait...");

    const data = {
      nm: nm,
      dt1: dt1,
      dt2: dt2,
      cause: cause,
      description: description
    }

    setTimeout(() => {
      LeaveBillFormat({ doc }, data);
      setMsg("PDF create completed.");
      doc.save(`${new Date().toISOString()}-leave-application.pdf`);
    }, 0);
  }


  const daylast = () => {
    let l = Math.round(Lib.util.dateDiff(new Date(), dt1, +1));

    let x = "";
    let y = "";

    if (l === 1) {
      x = "AvR";
      y = "_vKv m¤¢e n‡e bv";
    } else if (l < 1) {
      x = "MZ";
      y = "n‡Z cvwi bvB";
    } else {
      x = "AvMvgx";
      y = "_vKv m¤¢e n‡e bv";
    }
    console.log(l);
    return [x, y];

  }


  const btnRefresh = () => {
    let ss = daylast();
    console.log(ss[0]);
    const appText = `webxZ wb‡e\`b GB †h, ${cause} ${ss[0]} ${Lib.util.dateFormat(dt1, ".")} ZvwiL n‡Z ${Lib.util.dateFormat(dt2, ".")} ZvwiL ch©šÍ †gvU ${Lib.util.dateDiff(dt1, dt2, +1)}(${Lib.util.inword.bn(Lib.util.dateDiff(dt1, dt2, +1))}) ) w\`b Awd‡m Dcw¯’Z ${ss[1]}|
       
AZGe, Dc‡iv³ welqwU we‡ePbv K‡i ${ss[0]} ${Lib.util.dateDiff(dt1, dt2, +1)}(${Lib.util.inword.bn(Lib.util.dateDiff(dt1, dt2, +1))}) w\`‡bi QywU gbRyi K‡i evwaZ Ki‡eb|
`;
    setDescription(appText);
    setMsg("Ok! Ready to create pdf");
    setTextcolor("text-purple-600");

  }


  return (
    <Layout Title="Leave Application">
      <div className="flex flex-col items-center content-center pt-10">

        <h1 className="text-gray-400 text-2xl font-bold">Leave Application</h1>

        <div className="w-11/12">
          <h5 className={texcolor}>{msg}</h5>
          <form onSubmit={printHandler}>
            <div className="py-2">
              <DropdownEn Title="Staff Name" Id="nm" Change={e => { setNm(e.target.value); setDescription(""); setMsg("***") }} Value={nm}>
                {
                  staffData.map((s, i) => {

                    let vl = s.nm_bn + "," + s.post + "," + s.project;
                    return <option value={vl} key={i}>{s.nm_en}</option>
                  })
                }
              </DropdownEn>
            </div>


            <div className="flex flex-row content-center space-x-4">
              <TextDt Title="Start Date" Id={dt1} Change={e => { setDt1(e.target.value); setDescription(""); setMsg("***") }} Value={dt1} />
              <TextDt Title="End Date" Id={dt2} Change={e => { setDt2(e.target.value); setDescription(""); setMsg("***") }} Value={dt2} />
            </div>

            <div className="w-full py-2">
              <TextBn Title="Cause" Id={cause} Change={(e) => { setCause(e.target.value); setDescription(""); setMsg("***") }} Value={cause} Chr="100" />
            </div>

            <div className="pb-8">
              <BtnEn Title="Create Application" Click={btnRefresh} Class="bg-purple-600 hover:bg-purple-800 text-white" />
            </div>

            <TextareaBn Title="Description" Id={description} Rows="4" Change={e => setDescription(e.target.value)} Value={description} />
            <BtnSubmit Title="Create Pdf" Class="bg-slate-600 hover:bg-slate-800 text-white" />
          </form>



        </div>
      </div>
    </Layout>



  );

};
export default LeavePage;
