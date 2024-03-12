import React, { useState, useEffect } from 'react';
import { jsPDF } from "jspdf";
import { Lib } from "../../utils/Lib";
import Layout from "../../components/Layout";
import { BtnEn, DropdownEn, TextDt, TextBn } from "../../components/Form";
import { Panel, PanelBody } from "../../components/Panel";

import Add from "../../components/anybill/Add";

import Edit from "../../components/anybill/Edit";
import Delete from "../../components/anybill/Delete";

import { fetchAll } from "../../components/DexieDatabase";
import { getItems } from "../../components/LocalDatabase";
require("../../utils/fonts/SUTOM_MJ-normal");
require("../../utils/fonts/SUTOM_MJ-bold");


const SubjectBn = ({ Title, Id, Change, Value = "" }) => {
  return (
    <div className="w-full flex flex-col items-start">
      <label className='text-xs font-semibold mb-1' htmlFor={Id}>{Title}</label>
      <input onChange={Change} value={Value} type="text" id={Id} name={Id} required maxLength="200" className="w-full px-4 py-1.5 font-SutonnyMJ_Regular text-gray-600 ring-1 focus:ring-4 ring-blue-300 outline-none rounded duration-300" />
    </div>
  )
}



const AnyBillFormat = ({ doc }, data) => {
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

  doc.addImage("/images/formats/anybill.png", "PNG", 0, 0, 210, 297);

  doc.setFont("SutonnyMJ", "normal");
  doc.setFontSize(14);
  doc.text(`${Lib.util.dateFormat(data.dt, ".")}`, 100, 63, null, null, "left");
  doc.text(`${data.subject}`, 35, 75.75, { maxWidth: 162, align: 'left' });

  let x1 = data.db;
  let y = 103;

  let dbTotal = 0;

  for (let i = 0; i < x1.length; i++) {

    let tk = parseFloat(x1[i].taka);
    let subTotal = parseFloat(x1[i].taka) * parseFloat(x1[i].nos); 

    doc.text(`${i + 1}`, 30, y, null, null, "center");
    doc.text(`${x1[i].item}`, 42, y, null, null, "left");    
    doc.text(`${tk.toFixed(2)}`, 142, y, null, null, "right");
    doc.text(`${x1[i].nos}`, 155, y, null, null, "right");

    doc.text(`${subTotal.toFixed(2)}`, 183, y, null, null, "right");
    dbTotal = dbTotal + subTotal;

    y = y + 6;
  }

  doc.line(180, y - 3, 168, 188) // cross line

  let inwordTak = Lib.util.inword.bn(parseInt(dbTotal));
  doc.text(`${inwordTak} UvKv gvÎ`, 68, 203, null, null, "left");
  doc.text(`${dbTotal.toFixed(2)}`, 183, 196, null, null, "right");
  let nm = data.name;
  doc.text(`${nm.split(",")[0]}`, 24, 234, null, null, "left");
  doc.text(`${nm.split(",")[1]}`, 24, 240, null, null, "left");

}




const Anybill = () => {
  const [anybills, setAnybills] = useState([]);
  const [msg, setMsg] = useState("Data ready");


  const [staffData, setStaffData] = useState([]);
  const [projectData, setProjectData] = useState([]);


  const [taka, setTaka] = useState("130");
  const [staff, setStaff] = useState("");
  const [dt, setDt] = useState("");
  const [subject, setSubject] = useState("");
  const [project, setProject] = useState("");
  const [item, setItem] = useState("");
  const [nos, setNos] = useState("");

  const [total, setTotal] = useState("");



  useEffect(() => {
    setDt(Lib.util.dateFormat(new Date(), "-"));

    const getData = async () => {
      try {
        const [staffs, posts, projects] = await Promise.all([fetchAll("staff"), fetchAll("post"), fetchAll("project")]);
        const joinStaffs = staffs.map(s => {
          const matchPost = posts.find(ps => parseInt(ps.id) === parseInt(s.post_id));
          return {
            ...s,
            post: matchPost.nm_bn
          }
        })
        const result = joinStaffs.filter(s => parseInt(s.place_id) === 1699884047193);
        setStaffData(result);
        setProjectData(projects);
      } catch (err) {
        console.log(err);
      }
    }
    getData();

    const getLocalData = getItems("anybill");
    setAnybills(getLocalData);

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

    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });


  const createHandler = () => {
    setMsg("Please wait...");

    if (anybills.length < 1) {
      setMsg("No data found!");
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
      db: anybills
    }

    setTimeout(()=>{
      AnyBillFormat({ doc }, data);
      setMsg("PDF file Created");
      doc.save(new Date().toISOString() + "-BIll.pdf");
    },0);

  }


  return (
    <Layout Title="Any Bill">
      <div className="w-full">

        <div className='w-full h-16 mx-auto mb-4 bg-gradient-to-r from-white via-blue-600 to-white text-white flex justify-center items-center'>
          <h1 className='text-2xl font-bold'>Any Bill</h1>
        </div>
        <div className='w-full'>
          <p className='w-full text-md text-red-600 text-center'>{msg}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <Panel>
            <PanelBody>

              <div className='w-full grid grid-cols-3 gap-2'>

                <div className="w-full">
                  <DropdownEn Title="Staff Name" Id="staff" Change={(e) => { setStaff(e.target.value) }} Value={staff}>
                    {
                      staffData.length ?
                        staffData.map(s => {
                          let nm = s.nm_bn + "," + s.post;
                          return <option key={s.id} value={nm}>{s.nm_en}</option>
                        })
                        : null
                    }
                  </DropdownEn>
                </div>
                <div className="full">
                  <DropdownEn Title="Project" Id="project" Change={(e) => { setProject(e.target.value) }} Value={project}>
                    {
                      projectData.length
                        ? projectData.map((p, i) => {
                          return <option value={p.name} key={i}>{p.name}</option>
                        })
                        : null
                    }
                  </DropdownEn>
                </div>
                <div className="w-full">
                  <TextDt Title="Date" Id="dt" Change={(e) => { setDt(e.target.value) }} Value={dt} />
                </div>

                <div className="w-full col-span-3">
                  <TextBn Title="Subject" Id="subject" Change={(e) => { setSubject(e.target.value) }} Value={subject} Chr="100" />
                </div>

                <div className="w-full col-span-3">
                  <BtnEn Title="Create" Click={createHandler} Class="w-full bg-gradient-to-r from-white via-red-800 to-white hover:bg-green-800 text-white" />
                </div>

              </div>



            </PanelBody>
          </Panel>



          <Panel>
            <PanelBody>

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
                      anybills.length ? anybills.map((anybill, i) => {
                        return (
                          <tr className="border-b border-gray-200 hover:bg-gray-100" key={anybill.id}>
                            <td className="text-left py-2 pl-6 font-SutonnyMJ_Regular">{i + 1}. {anybill.item}</td>
                            <td className="text-center py-2 px-4">{anybill.nos}</td>
                            <td className="text-center py-2 px-4">{anybill.taka}</td>
                            <td className="flex justify-end items-center space-x-1 mt-1">
                              <Edit Msg={msgHandler} Id={anybill.id} />
                              <Delete Msg={msgHandler} Id={anybill.id} />
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
export default Anybill;
