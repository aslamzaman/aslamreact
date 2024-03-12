import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";

import Add from "../../components/bayprostabexecution/Add";
import Edit from "../../components/bayprostabexecution/Edit";
import Delete from "../../components/bayprostabexecution/Delete";
import Download from "../../components/bayprostabexecution/Download";
import Upload from "../../components/bayprostabexecution/Upload";
import Print from "../../components/bayprostabexecution/Print";

import { jsPDF } from "jspdf";
import { Lib } from "../../utils/Lib";
import { BtnEn, DropdownEn, TextareaBn, TextDt, TextNum } from "../../components/Form";

import { Panel, PanelBody } from "../../components/Panel";
import { fetchAll } from "../../components/DexieDatabase";
import { getItems } from "../../components/LocalDatabase";

require("../../utils/fonts/SUTOM_MJ-normal");
require("../../utils/fonts/SUTOM_MJ-bold");



const BayprostabFormat = ({ doc }, data) => {

  let x = data.db;
  const total = x.reduce(
    (a, c) => a + parseFloat(c.taka), 0
  );

  doc.addImage("/images/formats/bayprostab2.png", "PNG", 0, 0, 210, 297);
  doc.setFontSize(14);
  doc.text(`${data.project}`, 168.438, 26, null, null, "left");

  doc.setFont("SutonnyMJ", "normal");
  doc.text(`${data.staff} `, 38, 37, null, null, "left");
  doc.text(`${data.dt1 ? Lib.util.dateFormat(data.dt1) : ""}`, 150, 45, null, null, "left");

  let y = 100;
  let gt = 0;

  for (let i = 0; i < x.length; i++) {
    let tk = parseFloat(x[i].taka);
    if (tk === 0) {
      y = y + 2;
      doc.setFont("times", "normal");
      doc.text(`${x[i].item}`, 17, y, null, null, "left");
    } else {
      doc.setFont("SutonnyMJ", "normal");
      doc.text(`${x[i].item}`, 17, y, null, null, "left");
      doc.text(`${Lib.util.numberWithCommas(x[i].taka)}/-`, 90, y, null, null, "right");
      doc.text(`${x[i].nos}`, 101.408, y, null, null, "center");
      let subTotal = parseInt(parseFloat(x[i].taka) * parseFloat(x[i].nos));
      doc.text(`${Lib.util.numberWithCommas(subTotal)}/-`, 132, y, null, null, "right");
      gt = gt + parseInt(parseFloat(x[i].taka) * parseFloat(x[i].nos));
    }
    y = y + 6;
  }
  doc.setFont("SutonnyMJ", "normal");
  doc.text(`${Lib.util.numberWithCommas(data.advance)}/-  `, 65, 45, null, null, "right");
  doc.text(`${Lib.util.numberWithCommas(gt)}/- `, 65, 53, null, null, "right");
  doc.text(`${Lib.util.numberWithCommas(parseFloat(data.advance) - parseFloat(gt))}/- `, 65, 61, null, null, "right");

  doc.text(`${data.note ? data.note : ""}`, 174.347, 100, { maxWidth: 45, align: 'center' });
  doc.text(`${Lib.util.numberWithCommas(gt)}/-`, 132, 235, null, null, "right");


  doc.text(`${Lib.util.inword.bn(gt)} UvKv gvÎ`, 45, 241.5, null, null, "left");

  doc.text(`${Lib.util.dateFormat(data.dt2, ".")}`, 65, 247.5, null, null, "left");

}




const Bayprostabexecution = () => {
  const [staffData, setStaffData] = useState([]);
  const [projectData, setProjectData] = useState([]);

  const [bayprostabexecutions, setBayprostabexecutions] = useState([]);
  const [msg, setMsg] = useState("Data ready");


  const [staff, setStaff] = useState("");
  const [project, setProject] = useState("");

  const [dt1, setDt1] = useState("");
  const [dt2, setDt2] = useState("");
  const [advance, setAdvance] = useState(3000);
  const [note, setNote] = useState("");
  const [total, setTotal] = useState("");



  useEffect(() => {

    const getData = async () => {
      try {
        const [staffs, projects] = await Promise.all([fetchAll("staff"), fetchAll("project")]);
        const result = staffs.filter(s => parseInt(s.place_id) === 1699884047193);
        setStaffData(result);
        setProjectData(projects);
      } catch (err) {
        console.log(err);
      }
    }
    getData();

    const getLocalData = getItems("bayprostabexecution");

    const result = getLocalData.reduce((total, data) => {
      const taka = parseFloat(data.taka);
      const nos = parseFloat(data.nos);
      return taka !== 0 ? total + taka * nos : total;
    }, 0);


    setTotal(result)


    setBayprostabexecutions(getLocalData);


  }, [msg])



  const msgHandler = (data) => {
    setMsg(data);
  }

  const createHandler = () => {
    if (staff === "") { setMsg("Please select staff"); return false; }
    if (project === "") { setMsg("Please select project"); return false; }
    if (dt2 === "") { setMsg("Please write execution date"); return false; }
    if (advance === "") { setMsg("Please write advance"); return false; }
    let localData = JSON.parse(localStorage.getItem('bayprostabexecution'));
    if (!localData) { setMsg("No Data"); return false; }

    setMsg("Please wait...");

    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });


    const data =
    {
      staff: staff,
      project: project,
      dt1: dt1,
      dt2: dt2,
      advance: advance,
      note: note,
      db: JSON.parse(localStorage.getItem('bayprostabexecution'))
    }

    setTimeout(() => {
      BayprostabFormat({ doc }, data);
      doc.save(new Date().toISOString() + "Bayprostab-Execution.pdf");
      setMsg("PDF file Created");
    }, 0);
  }



  return (
    <Layout Title="Bayprostab Execution">

      <Panel>
        <PanelBody>
          <div className="w-full">
            <h1 className="w-full text-3xl font-semibold text-gray-600 text-center">Bayprostab Execution</h1>
          </div>
          <div className="w-full pt-4">
            <p className="w-full text-md text-red-700 text-center">{msg}</p>
          </div>
        </PanelBody>
      </Panel>
      <div className="w-full py-4 flex flex-col md:flex-row justify-between items-start space-x-0 md:space-x-4">

        <Panel>
          <PanelBody>
            <div className='w-full grid grid-cols-2 gap-4 my-4'>
              <DropdownEn Title="Staff Name *" Id="staff" Change={(e) => { setStaff(e.target.value) }} Value={staff}>
                <option value="">---</option>
                {
                  staffData.map((s, i) => {
                    return <option value={s.nm_bn} key={i}>{s.nm_en}</option>
                  })
                }
              </DropdownEn>
              <DropdownEn Title="Project *" Id="project" Data={projectData} Change={(e) => { setProject(e.target.value) }} Value={project}>
                <option value="">---</option>
                {
                  projectData.map((p, i) => {
                    return <option value={p.name} key={i}>{p.name}</option>
                  })
                }
              </DropdownEn>
              <TextDt Title="Advance Date" Id="dt1" Change={(e) => { setDt1(e.target.value) }} Value={dt1} />
              <TextDt Title="Executon Date *" Id="dt2" Change={(e) => { setDt2(e.target.value) }} Value={dt2} />
              <TextNum Title="Advance Taka *" Id="dt2" Change={(e) => { setAdvance(e.target.value) }} Value={advance} />
              <TextareaBn Title="Note" Id="note" Rows="1" Change={e => setNote(e.target.value)} Value={note} />

            </div>
            <BtnEn Title="Create" Click={createHandler} Class="bg-red-700 hover:bg-red-900 text-white" />
          </PanelBody>
        </Panel>

        <Panel>
          <PanelBody>
            <div className="w-full mt-4 md:mt-0">

              <div className="flex justify-between items-center">
                <div></div>
                <div className="w-full flex justify-end pr-1  mb-2">
                  <Download Msg={msgHandler} />
                  <Upload Msg={msgHandler} />
                </div>
              </div>


              <div className="w-full">
                <div>
                  <table className="w-full border border-gray-200">
                    <thead>
                      <tr className="w-full bg-gray-200">
                        <th className="text-center border-b border-gray-200 py-2">Item</th>
                        <th className="text-center border-b border-gray-200 py-2">Nos</th>
                        <th className="text-center border-b border-gray-200 py-2">Taka</th>
                        <th className="font-normal text-start flex justify-end mt-1">
                          <Add Msg={msgHandler} />
                          <Print Msg={msgHandler} />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        bayprostabexecutions.length ? bayprostabexecutions.map((bayprostabexecution) => {
                          return (
                            <tr className="border-b border-gray-200" key={bayprostabexecution.id}>
                              <td className={`text-center py-2 px-4 ${parseFloat(bayprostabexecution.taka) === 0 ? 'font-sans' : 'font-SutonnyMJ_Regular'}`}>{bayprostabexecution.item}</td>
                              <td className="text-center py-2 px-4">{bayprostabexecution.nos}</td>
                              <td className="text-center py-2 px-4">{bayprostabexecution.taka}</td>
                              <td className="flex justify-end items-center mt-1">
                                <Edit Msg={msgHandler} Id={bayprostabexecution.id} />
                                <Delete Msg={msgHandler} Id={bayprostabexecution.id} />
                              </td>
                            </tr>
                          )
                        })
                          : null
                      }
                      <tr className="border-b border-gray-200 font-bold">
                        <td className="text-center py-2 px-4"> Total</td>
                        <td className="text-center py-2 px-4"></td>
                        <td className="text-center py-2 px-4">{total}</td>
                        <td className="flex justify-end items-center mt-1">
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </PanelBody>
        </Panel>

      </div>
    </Layout>
  );


};
export default Bayprostabexecution;
