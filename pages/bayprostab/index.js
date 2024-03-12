import React, { useState, useEffect } from 'react';
import { jsPDF } from "jspdf";
import { Lib } from "../../utils/Lib";
import Layout from "../../components/Layout";
import { BtnEn, DropdownEn, TextBn, TextDt, TextareaBn } from "../../components/Form";
import { Panel, PanelBody } from "../../components/Panel";

import Add from "../../components/bayprostab/Add";
import Edit from "../../components/bayprostab/Edit";
import Delete from "../../components/bayprostab/Delete";
import Download from "../../components/bayprostab/Download";
import Upload from "../../components/bayprostab/Upload";

import { fetchAll } from "../../components/DexieDatabase";
import { getItems } from "../../components/LocalDatabase";
require("../../utils/fonts/SUTOM_MJ-normal");
require("../../utils/fonts/SUTOM_MJ-bold");




const BayprostabFormat = ({ doc }, data) => {
  let m = data.db;
  let hd1 = "";
  let hd2 = "";
  for (let i = 0; i < m.length; i++) {
    if (parseFloat(m[i].taka) === 0) {
      hd1 = hd1 + m[i].item + ", ";
      hd2 = hd2 + m[i].item + "\n";
    }
  }
  hd1 = hd1.substring(0, hd1.length - 2);
  hd2 = hd2.substring(0, hd2.length - 1);

  doc.addImage("/images/formats/bayprostab1.png", "PNG", 0, 0, 210, 297);

  doc.setFont("SutonnyMJ", "normal");


  doc.setFont("times", "normal");
  doc.text(` ${data.project}`, 167, 26, null, null, "left");

  doc.setFont("SutonnyMJ", "normal");
  doc.setFontSize(14);

  doc.text(`${data.name}`, 50, 40.5, null, null, "left");
  doc.setFont("times", "normal");
  doc.text(` ${hd1}`, 22, 47, null, null, "left");

  doc.setFont("SutonnyMJ", "normal");
  doc.text(`${data.subject}`, 25, 53.5, null, null, "left");

  doc.text(`${Lib.util.dateFormat(data.dt, ".")}`, 160, 40.5, null, null, "left");

  let x1 = data.db;
  let y = 100;
  let dbTotal = 0;
  for (let i = 0; i < x1.length; i++) {

    let tk = parseFloat(x1[i].taka);
    if (tk === 0) {
      y = y + 2;
      doc.setFont("times", "normal");
      doc.text(`${x1[i].item}`, 16, y, null, null, "left");
    } else {
      doc.setFont("SutonnyMJ", "normal");
      doc.text(`${x1[i].item}`, 16, y, null, null, "left");
      doc.text(`${Lib.util.numberWithCommas(parseFloat(x1[i].taka))}/-`, 89, y, null, null, "right");
      doc.text(`${x1[i].nos}`, 101.641, y, null, null, "center");
      doc.text(`${Lib.util.numberWithCommas((parseFloat(x1[i].taka) * parseFloat(x1[i].nos)))}/-`, 131, y, null, null, "right");
      dbTotal = dbTotal + (parseFloat(x1[i].taka) * parseFloat(x1[i].nos));
    }
    y = y + 6;
  }

  doc.text(data.note, 174.347, 100, { maxWidth: 45, align: 'center' });
  doc.text(`${Lib.util.numberWithCommas(dbTotal)}/-`, 122.844, 218, null, null, "center");
  let inwordTak = Lib.util.inword.bn(parseInt(dbTotal));
  doc.text(`${inwordTak} UvKv gvÎ`, 60, 226.144, null, null, "left");


  /* ** ************************************************************************** */
  doc.addPage("a4", "p");

  doc.addImage("/images/formats/bayprostab3.png", "PNG", 0, 0, 210, 297);

  doc.setFont("times", "normal");
  doc.text(` ${data.project}`, 167, 26, null, null, "left");
  doc.setFont("SutonnyMJ", "normal");

  doc.setFontSize(14);
  doc.text(`${data.name}`, 42, 35.173, null, null, "left");
  doc.text(`${Lib.util.dateFormat(data.dt, ".")}`, 175, 35.173, null, null, "left");

  doc.setFont("times", "normal");
  doc.text(`${hd1}`, 23, 47.188, null, null, "left");
  doc.setFont("SutonnyMJ", "normal");
  doc.text(`${data.subject}`, 27, 53.246, null, null, "left");

  doc.text(`${Lib.util.dateFormat(data.dt, ".")}`, 47, 59.2, null, null, "left");
  doc.text(`${Lib.util.dateFormat(Lib.util.dateAdd(data.dt, 15), ".")}`, 145, 59.2, null, null, "center");


  y = 105;
  for (let i = 0; i < x1.length; i++) {

    let tk = parseFloat(x1[i].taka);
    if (tk === 0) {
      y = y + 2;
      doc.setFont("times", "normal");
      doc.text(`${x1[i].item}`, 16, y, null, null, "left");
    } else {
      doc.setFont("SutonnyMJ", "normal");
      doc.text(`${x1[i].item}`, 16, y, null, null, "left");
      doc.text(`${Lib.util.numberWithCommas(parseFloat(x1[i].taka))}/-`, 90, y, null, null, "right");
      doc.text(`${x1[i].nos}`, 101.641, y, null, null, "center");
      doc.text(`${Lib.util.numberWithCommas((parseFloat(x1[i].taka) * parseFloat(x1[i].nos)))}/-`, 131, y, null, null, "right");
    }
    y = y + 6;
  }


  doc.text(data.note, 167, 107, { maxWidth: 60, align: 'center' });
  doc.text(`${Lib.util.numberWithCommas(dbTotal)}/-`, 122.844, 226.803, null, null, "center");
  doc.text(`${inwordTak} UvKv gvÎ`, 38, 239.429, null, null, "left");


  /*************************** GO format ************************************************** */
  doc.addPage("a4", "p");
  doc.addImage("/images/formats/go.png", "PNG", 0, 0, 210, 297);

  doc.setFont("SutonnyMJ", "normal");
  doc.setFontSize(16);
  doc.text(`${Lib.util.dateFormat(data.dt, ".")}`, 175, 42, null, null, "left");

  doc.setFont("SutonnyMJ", "normal");
  doc.text(`${inwordTak} UvKv gvÎ`, 55, 196, null, null, "left");
  doc.text("**", 19, 68, null, null, "center");
  doc.text(`${data.subject}`, 28, 68, { maxWidth: 65, align: 'left' });
  doc.line(25, 76, 98, 76) // underline

  y = 82;
  let godata = x1.filter(g => parseFloat(g.taka) !== 0);
  for (let i = 0; i < godata.length; i++) {
    doc.setFont("SutonnyMJ", "normal");
    doc.text("-", 19, y, null, null, "center");
    doc.text(`${godata[i].item}`, 28, y, null, null, "left");
    doc.text(`${Lib.util.numberWithCommas((parseFloat(godata[i].taka) * parseFloat(godata[i].nos)))}/-`, 130, y, null, null, "right");
    y = y + 6;
  }

  doc.text(`${Lib.util.numberWithCommas(dbTotal)}/-`, 122, 187, null, null, "center");
  doc.setFont("times", "normal");
  doc.text(`${hd2}`, 145, 68, null, null, "center");
  doc.setFont("SutonnyMJ", "normal");
  doc.text(`${data.dpt}`, 180, 68, null, null, "center");


  /**************************** Bearer check ************************************************* */
  doc.addPage("a4", "p");
  doc.addImage("/images/formats/bearer.png", "PNG", 0, 0, 210, 297);

  doc.setFont("times", "normal");
  doc.setFontSize(13);
  doc.text(`${data.project}`, 103, 41.5, null, null, "left");

  doc.setFont("SutonnyMJ", "normal");
  doc.text(`${Lib.util.dateFormat(data.dt, ".")}`, 165, 49.5, null, null, "left");
  doc.setFont("times", "normal");


  doc.setFont("SutonnyMJ", "normal");

  doc.text("**", 25, 120, null, null, "center");
  doc.text(`${data.subject}`, 34, 120, { maxWidth: 64, align: 'left' });

  doc.line(30, 128, 105, 128) // underline

  y = 134;
  for (let i = 0; i < godata.length; i++) {

    doc.setFont("SutonnyMJ", "normal");
    doc.text("-", 25, y, null, null, "center");
    doc.text(`${godata[i].item}`, 34, y, null, null, "left");
    doc.text(`${Lib.util.numberWithCommas((parseFloat(godata[i].taka) * parseFloat(godata[i].nos)))}/-`, 129, y, null, null, "right");

    y = y + 6;
  }



  doc.setFont("times", "normal");
  doc.text(`${hd2}`, 162.5, 120, null, null, "center");

  doc.setFont("SutonnyMJ", "normal");
  doc.text(`${Lib.util.numberWithCommas(dbTotal)}/-`, 120, 248, null, null, "center");

  doc.text(`${inwordTak} UvKv gvÎ`, 40, 255, null, null, "left");

}




const Bayprostab = () => {
  const [bayprostabs, setBayprostabs] = useState([]);
  const [msg, setMsg] = useState("Data ready");


  const [staffData, setStaffData] = useState([]);
  const [projectData, setProjectData] = useState([]);


  const [taka, setTaka] = useState("130");
  const [staff, setStaff] = useState("Avmjvg Rvgvb");
  const [dt, setDt] = useState("2023-01-12");
  const [subject, setSubject] = useState("mvwf©m †m›Uv‡ii Mvwoi R¡vjvwb (AK‡Ub) µq");
  const [project, setProject] = useState("GO");
  const [item, setItem] = useState("Mvwoi R¡vjvwb (AK‡Ub) µq");
  const [nos, setNos] = useState("100");
  const [dpt, setDpt] = useState("ms¯’vcb");
  const [note, setNote] = useState(`Mvwoi R¡vjvwb (AK‡Ub) cÖ‡qvRb Abyhvqx wewfbœ cv¤ú †_‡K µq Kiv n‡e 






µq m¤úv\`‡Ki bvg †eqvivi †PK n‡e`);

  const [total, setTotal] = useState("");





  useEffect(() => {
    setDt(Lib.util.dateFormat(new Date(), "-"));

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

    const getLocalData = getItems("bayprostab");
    setBayprostabs(getLocalData);

    const result = getLocalData.reduce((total, data) => {
      const taka = parseFloat(data.taka);
      const nos = parseFloat(data.nos);
      return taka !== 0 ? total + taka * nos : total;
    }, 0);

    setTotal(result)

  }, [msg])


  const msgHandler = (data) => {
    setMsg(data);
  }

  const createHandler = () => {
    setMsg("Please wait...");

    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });

    let hd = bayprostabs.find(t => parseInt(t.taka) === 0);
    if (bayprostabs.length < 2 || hd === undefined) {
      setMsg("No data or budget head!");
      return false;
    }

    const data = {
      name: staff,
      dt: dt,
      subject: subject,
      project: project,
      item: item,
      nos: nos,
      taka: taka,
      dpt: dpt,
      db: bayprostabs,
      note: note
    }
    setTimeout(() => {
      BayprostabFormat({ doc }, data);
      doc.save(new Date().toISOString() + "-Bayprostab.pdf");
      setMsg("PDF file Created");
    }, 0);
  }




  return (
    <Layout Title="Bayprostab">
      <div className="w-full">


        <div className='w-full h-16 mx-auto mb-4 bg-gradient-to-r from-white via-blue-600 to-white text-white flex justify-center items-center'>
          <h1 className='text-2xl font-bold'>Bayprostab</h1>
        </div>
        <div className='w-full'>
          <p className='w-full text-red-600 text-center'>{msg}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Panel>
            <PanelBody>

              <div className='w-full grid grid-cols-4 gap-4'>
                <div className="w-full col-span-2 md:col-span-3">
                  <DropdownEn Title="Staff Name" Id="staff" Change={(e) => { setStaff(e.target.value) }} Value={staff}>
                    {
                      staffData.map((s, i) => {
                        return <option value={s.nm_bn} key={i}>{s.nm_en}</option>
                      })
                    }
                  </DropdownEn>
                </div>
                <div className="full col-span-2 md:col-span-1">
                  <DropdownEn Title="Project" Id="project" Change={(e) => { setProject(e.target.value) }} Value={project}>
                    {
                      projectData.map((p, i) => {
                        return <option value={p.name} key={i}>{p.name}</option>
                      })
                    }
                  </DropdownEn>
                </div>
                <div className="w-full col-span-2">
                  <TextDt Title="Date" Id="dt" Change={(e) => { setDt(e.target.value) }} Value={dt} />
                </div>

                <div className="w-full col-span-2">
                  <TextBn Title="Department" Id="dpt" Change={(e) => { setDpt(e.target.value) }} Value={dpt} Chr="50" />
                </div>


                <div className="w-full col-span-4">
                  <TextBn Title="Subject" Id="subject" Change={(e) => { setSubject(e.target.value) }} Value={subject} Chr="100" />
                </div>


                <div className="w-full col-span-4">
                  <TextareaBn Title="Notes" Id="note" Rows="2" Change={(e) => { setNote(e.target.value) }} Value={note} />
                </div>

                <div className="w-full col-span-4 md:col-span-2">
                  <BtnEn Title="Create" Click={createHandler} Class="w-full bg-gradient-to-r from-white via-red-800 to-white hover:bg-green-800 text-white" />
                </div>

              </div>



            </PanelBody>
          </Panel>



          <Panel>
            <PanelBody>
              <div className='w-full flex justify-end content-center'>
                <Download Msg={msgHandler} />
                <Upload Msg={msgHandler} />
              </div>
              <div className="w-full">

                <table className="w-full border border-gray-200">
                  <thead>
                    <tr className="w-full bg-gray-200">
                      <th className="text-start border-b border-gray-200 py-2 pl-6">Item</th>
                      <th className="text-center border-b border-gray-200 py-2">Nos</th>
                      <th className="text-center border-b border-gray-200 py-2">Taka</th>
                      <th className="text-normal flex justify-end mt-1 font-normal text-start">
                        <span className="w-full flex justify-end">
                          <Add Msg={msgHandler} />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      bayprostabs.length ? bayprostabs.map((bayprostab, i) => {
                        return (
                          <tr className="border-b border-gray-200 hover:bg-gray-100" key={bayprostab.id}>
                            <td className={`text-left py-2 pl-6 ${parseFloat(bayprostab.taka) === 0 ? 'font-sans' : 'font-SutonnyMJ_Regular'}`}>{i + 1}. {bayprostab.item}</td>
                            <td className="text-center py-2 px-4">{bayprostab.nos}</td>
                            <td className="text-center py-2 px-4">{bayprostab.taka}</td>
                            <td className="flex justify-end items-center space-x-1 mt-1">
                              <Edit Msg={msgHandler} Id={bayprostab.id} />
                              <Delete Msg={msgHandler} Id={bayprostab.id} />
                            </td>
                          </tr>
                        )
                      })
                        : null
                    }

                    <tr className="border-b border-gray-200 font-bold">
                      <td className="text-start py-2 px-4"> Total</td>
                      <td className="text-center py-2 px-4"></td>
                      <td className="text-center py-2 px-4">{total}</td>
                      <td className="flex justify-end items-center mt-1">
                      </td>
                    </tr>
                  </tbody>
                </table>

              </div>

            </PanelBody>
          </Panel>
        </div>

      </div>

    </Layout>
  )
}
export default Bayprostab;
