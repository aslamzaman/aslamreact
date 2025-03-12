"use client";
import React, { useState, useEffect } from "react";
import { BtnSubmit, DropdownEn, TextareaBn, TextDt, TextEn, TextNum } from "@/components/Form";
import { jsPDF } from "jspdf";

import Add from "@/components/bayprostabexecution/Add";
import Edit from "@/components/bayprostabexecution/Edit";
import Delete from "@/components/bayprostabexecution/Delete";
import Download from "@/components/bayprostabexecution/Download";
import Upload from "@/components/bayprostabexecution/Upload";
import Plus from '@/components/bayprostabexecution/Plus';


import { numberWithComma, inwordBangla, formatedDate, formatedDateDot, unique, delay } from "@/lib/utils";
import { localStorageRemoveItem } from "@/lib/DatabaseLocalStorage";
import { Clear } from '@/components/Icons';
import Loading from '@/components/Loading';

require("@/app/fonts/SUTOM_MJ-normal");
require("@/app/fonts/SUTOM_MJ-bold");
import { evaluate } from 'mathjs';
import { getFirebaseData, getLocalData } from "@/helpers/bayprostabexecutionHelpers";



const Bayprostabexecution = () => {
  const [bayprostabexecutions, setBayprostabexecutions] = useState([]);
  const [msg, setMsg] = useState("Data ready");
  const [waitMsg, setWaitMsg] = useState("");
  const [waitPage, setWaitPage] = useState(false);


  const [staffData, setStaffData] = useState([]);
  const [projectData, setProjectData] = useState([]);

  const [bhead, setBhead] = useState("");
  const [staff, setStaff] = useState("");
  const [project, setProject] = useState("");
  const [dt1, setDt1] = useState("");
  const [dt2, setDt2] = useState("");
  const [advance, setAdvance] = useState(3000);
  const [note, setNote] = useState("");

  const [total, setTotal] = useState("");



  useEffect(() => {

    const getData = async () => {
      setWaitMsg("Please wait...");
      try {
        const database = await getFirebaseData();
        console.log(database);
        setStaffData(database.sortStaff);
        setProjectData(database.projects);
        //------------------------------------
        const localData = getLocalData('bayprostabexecution');
        setBayprostabexecutions(localData.data);
        setTotal(localData.totalTk);
        //----------------------------
        setDt2(formatedDate(new Date()));
        setBhead("Utilities")
        setWaitMsg("");
      } catch (err) {
        console.log(err);
      }
    }
    getData();

  }, [msg])



  const messageHandler = (data) => {
    setMsg(data);
  }


  const createHandler = (e) => {
    e.preventDefault();
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });


    setWaitMsg("Please wait...");
    setWaitPage(true);
    setTimeout(() => {

      doc.addImage("/images/formats/bayprostab2.png", "PNG", 0, 0, 210, 297);
      doc.setFontSize(14);
      doc.setFont("times", "normal");
      doc.text(`${project}`, 168.438, 26, null, null, "left");
      doc.text(`${bhead}`, 17, 100, null, null, "left");
      doc.setFont("SutonnyMJ", "normal");
      doc.text(`${staff} `, 38, 37, null, null, "left");
      doc.text(`${dt1 ? formatedDateDot(dt1) : ""}`, 150, 45, null, null, "left");
      doc.text(`${numberWithComma(parseFloat(advance))}/-`, 65, 45, null, null, "right");

      let y = 108;
      for (let i = 0; i < bayprostabexecutions.length; i++) {
        const no = parseFloat(bayprostabexecutions[i].nos);
        const tk = evaluate(`0+${bayprostabexecutions[i].taka}`);
        const line = doc.splitTextToSize(`${bayprostabexecutions[i].item}`, 50);

        doc.setFont("SutonnyMJ", "normal");
        doc.text(line, 17, y, { maxWidth: 50, align: 'left' });
        if (no > 1) {
          doc.text(`${tk.toFixed(2)}`, 90, y, null, null, "right");
          doc.text(`${no.toFixed(2)}`, 101.408, y, null, null, "center");
        } else {
          doc.text("-", 81, y, null, null, "center");
          doc.text("-", 101.408, y, null, null, "center");
        }
        doc.text(`${numberWithComma(bayprostabexecutions[i].subtotal)}/-`, 132, y, null, null, "right");
        const lineNumber = line.length;
        y += lineNumber * 6;
      }


      doc.text(`${numberWithComma(parseInt(total))}/-`, 65, 53, null, null, "right");
      doc.text(`${numberWithComma(parseFloat(advance) - parseInt(total))}/-`, 65, 61, null, null, "right");
      doc.text(`${note ? note : ""}`, 174.347, 100, { maxWidth: 45, align: 'center' });
      doc.text(`${numberWithComma(parseInt(total))}/-`, 132, 235, null, null, "right");
      doc.text(`${inwordBangla(parseInt(total))} UvKv gvÎ`, 45, 241.5, null, null, "left");
      doc.text(`${formatedDateDot(dt2)}`, 60, 247.5, null, null, "left");
      doc.save(new Date().toISOString() + "Bayprostab-Execution.pdf");

      setWaitMsg("");
      setWaitPage(false);
    }, 100);
  }



  const clearAllHandler = () => {
    if (confirm("Be careful! All data will be deleted.")) {
      try {
        const msg = localStorageRemoveItem('bayprostabexecution');
        setMsg(msg);
      } catch (error) {
        console.error(error);
      }
    } else {
      setMsg("Canceled!");
    }
  }


  if (waitPage) {
    return <Loading message="Please wait" />
  }




  return (
    <>

      <div className="w-full py-4">
        <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Bayprostab Execution</h1>
        <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
      </div>


      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div className="w-full border-2 p-4 shadow-md rounded-md">

          <form onSubmit={createHandler}>
            <div className="grid grid-cols-1 gap-2 my-2">
              <TextEn Title="Budget Head" Id="bhead" Change={e => setBhead(e.target.value)} Value={bhead} Chr="150" />

              <DropdownEn Title="Staff Name *" Id="staff" Change={e => setStaff(e.target.value)} Value={staff}>
                {staffData.length ? staffData.map(staff => <option value={staff.nmBn} key={staff.id}>{staff.nmEn}</option>) : null}
              </DropdownEn>
              <DropdownEn Title="Project *" Id="project" Data={projectData} Change={e => setProject(e.target.value)} Value={project}>
                {projectData.length ? projectData.map(project => <option value={project.name} key={project.id}>{project.name}</option>) : null}
              </DropdownEn>

              <div className="w-full flex flex-col items-start">
                <label className='text-xs font-semibold mb-1 opacity-50' htmlFor="dt1">Advance Date</label>
                <input onChange={e => setDt1(e.target.value)} value={dt1} type="date" id="dt1" name="dt1" className="w-full px-4 py-1.5 text-gray-600 ring-1 focus:ring-4 ring-blue-300 outline-none rounded duration-300" />
              </div>

              <TextDt Title="Executon Date *" Id="dt2" Change={e => setDt2(e.target.value)} Value={dt2} />
              <TextNum Title="Advance Taka *" Id="advance" Change={e => setAdvance(e.target.value)} Value={advance} />
              <TextareaBn Title="Note" Id="note" Rows="1" Change={e => setNote(e.target.value)} Value={note} />
            </div>
            <div className="w-full flex justify-start">
              <BtnSubmit Title="Create PDF" Class="bg-blue-600 hover:bg-blue-800 text-white" />
            </div>
          </form>
        </div>



        <div className="col-span-2 w-full overflow-auto">

          <p className="w-full text-sm text-start text-pink-600">&nbsp;{msg}&nbsp;</p>

          <div className="w-auto flex items-center justify-end space-x-1">
            <Clear Click={clearAllHandler} Size="w-7 h-7" />
            <Plus message={messageHandler} data={bayprostabexecutions} />
            <Download message={messageHandler} />
            <Upload message={messageHandler} />
          </div>


          <table className="w-full border border-gray-200">
            <thead>
              <tr className="w-full bg-gray-200">
                <th className="text-center border-b border-gray-200 px-4 py-2">SL</th>
                <th className="text-start border-b border-gray-200 px-4 py-2">Item</th>
                <th className="text-center border-b border-gray-200 px-4 py-2">Nos</th>
                <th className="text-end border-b border-gray-200 px-4 py-2">Taka</th>
                <th className="w-[100px] font-normal">
                  <div className="w-full flex justify-end items-center pr-2.5 font-normal">
                    <Add message={messageHandler} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                bayprostabexecutions.length ? bayprostabexecutions.map((bayprostabexecution, i) => {
                  return (
                    <tr className="border-b border-gray-200 hover:bg-gray-100" key={bayprostabexecution.id}>
                      <td className="text-center py-2 px-4">{i + 1}</td>
                      <td className="text-start py-2 px-4 font-sutonnyN">{bayprostabexecution.item}</td>
                      <td className="text-center py-2 px-4">{bayprostabexecution.nos}</td>
                      <td title={bayprostabexecution.subtotal} className="text-end py-2 px-4">{bayprostabexecution.taka}</td>
                      <td className="flex justify-end items-center mt-1">
                        <Edit message={messageHandler} id={bayprostabexecution.id} data={bayprostabexecution} />
                        <Delete message={messageHandler} id={bayprostabexecution.id} data={bayprostabexecution} />
                      </td>
                    </tr>
                  )
                })
                  : null
              }
              <tr className="border-b border-gray-200 hover:bg-gray-100 font-bold">
                <td className="text-center py-2 px-4"></td>
                <td className="text-start py-2 px-4 font-sutonnyN">†gvU</td>
                <td className="text-center py-2 px-4"></td>
                <td className="text-end py-2 px-4">{numberWithComma(total, false)}</td>
                <td className="flex justify-end items-center mt-1"></td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>

    </>
  );


};
export default Bayprostabexecution;
