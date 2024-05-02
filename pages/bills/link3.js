import React, { useEffect, useState } from 'react'
import { jsPDF } from 'jspdf';
import { Lib } from '../../utils/Lib';
import { TextNum, TextDt, BtnSubmit, DropdownEn } from "../../components/Form";
import Layout from "../../components/Layout";
import { fetchAll } from "../../components/DexieDatabase";

const titleCase = (str) => {
  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}


const Link2BillCreation = ({ doc }, data) => {
  const project = data.project;
  const dt = data.dt;
  const months = data.months;
  const taka = data.taka;
  const staff = data.staff;
  const yr = data.yr;

  doc.addImage("/images/formats/link3internetbill.png", "PNG", 0, 0, 210, 297);
  doc.setFontSize(13);
  doc.setFont("times", "normal");
  doc.text(`${project}`, 102, 48, null, null, "left");
  doc.text(`${Lib.util.dateFormat(dt, ".")}`, 102, 54, null, null, "left");

  doc.setFont("times", "normal");
  doc.text(`${months} ${yr}`, 113, 77, null, null, "left");
  doc.text(`${taka}/-`, 180, 77, null, null, "right");
  //-------------------------------------------------------------
  let b = taka / 1.15;
  doc.text(`${b.toFixed(2)}`, 100, 82, null, null, "right");
  doc.text(`${(b * 0.05).toFixed(2)}`, 100, 87, null, null, "right");
  doc.text(`${(b * 0.1).toFixed(2)}`, 100, 92, null, null, "right");
  //-------------------------------------------------------------

  doc.setFont("times", "bold");
  doc.text(`${taka}/-`, 180, 180, null, null, "right"); // Total Taka
  let total = parseInt(taka);
  doc.setFont("times", "normal");
  let t = Lib.util.inword.en(total).trim();
  doc.text(`${titleCase(t)} Taka Only`, 45, 188, null, null, "left"); // Inword
  doc.line(175, 82, 160, 170);

  doc.text(`${staff.split(",")[0]}`, 25, 216, null, null, "left");
  doc.text(`${staff.split(",")[1]}`, 25, 222, null, null, "left");

}




export default function Link3() {
  const [projects, setProjects] = useState([]);
  const [months, setMonths] = useState("");
  const [dt, setDt] = useState("");
  const [project, setProject] = useState("GO");
  const [taka, setTaka] = useState("1932");
  const [yr, setYr] = useState("2024");
  const [staff, setStaff] = useState("Aslam Zaman,Senior Program Organizer");

  const [monthDropdown, setMonthDropdown] = useState([]);
  const [yearDropdown, setYearDropdown] = useState([]);
  const [staffs, setStaffs] = useState([]);

  const [msg, setMsg] = useState("Data ready");


  useEffect(() => {

    const getRemoteData = async () => {
      try {
        const [staff, posts, project] = await Promise.all([fetchAll("staff"), fetchAll("post"), fetchAll("project")]);

        const joinStaffs = staff.map(s => {
          const matchPost = posts.find(ps => parseInt(ps.id) === parseInt(s.post_id));
          return {
            ...s,
            post: matchPost.nm_en
          }
        })

        const result = joinStaffs.filter(s => parseInt(s.place_id) === 1699884047193);
        setStaffs(result)
        setProjects(project);
      } catch (err) {
        console.log(err);
      }
    }
    getRemoteData();

    setMonthDropdown(Lib.util.monthsObj);
    setYearDropdown(Lib.util.yearObj);
    setDt(Lib.util.dateFormat(new Date(), "-"));

  }, [])

  const doc = new jsPDF(
    {
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    }
  )

  const printHandler = (e) => {
    e.preventDefault();
    setMsg("Please wait...");

    const data = {
      project: project,
      months: months,
      dt: dt,
      taka: taka,
      staff: staff,
      yr: yr
    }

    setTimeout(() => {
      Link2BillCreation({ doc }, data);
      setMsg("PDF create completed.");
      doc.save(new Date().toISOString() + "_Link3_bill.pdf");
    }, 0);

  }


  return (
    <Layout Title="Electric Bill">
      <div className="w-full lg:w-3/4 mx-auto border-2 border-gray-300 rounded-lg shadow-lg">
        <div className="w-full bg-violet-100">
          <h1 className="text-center text-xl font-bold py-3">Link3 Internet Bill</h1>
        </div>
        <p className="w-full py-2 text-md text-red-700 text-center">{msg}</p>
        <div className='p-6'>
          <form onSubmit={printHandler} >

            <TextDt Title="Date" Id="dt" Change={(e) => { setDt(e.target.value) }} Value={dt} />
            <DropdownEn Title="Staff" Id="staff" Change={(e) => { setStaff(e.target.value) }} Value={staff}>
              {
                staffs.length ?
                  staffs.map(p => {
                    let nm = p.nm_en + "," + p.post;
                    return <option key={p.id} value={nm}>{p.nm_en}</option>
                  })
                  : null
              }
            </DropdownEn>
            <DropdownEn Title="Project" Id="project" Change={(e) => { setProject(e.target.value) }} Value={project}>
              {projects.length ? projects.map((p) => <option key={p.id} value={p.name}>{p.name}</option>) : null}
            </DropdownEn>

            <DropdownEn Title="Month" Id="months" Change={(e) => { setMonths(e.target.value) }} Value={months}>
              {monthDropdown.map((m, i) => <option key={i} value={m.en}>{m.en}</option>)}
            </DropdownEn>

            <DropdownEn Title="Year" Id="yr" Change={(e) => { setYr(e.target.value) }} Value={yr}>
              {yearDropdown.map((y, i) => <option key={i} value={y.yr}>{y.yr}</option>)}
            </DropdownEn>

            <TextNum Title="Taka" Id="taka" Change={(e) => { setTaka(e.target.value) }} Value={taka} />

            <BtnSubmit Title="Print" Class="bg-indigo-700 hover:bg-violet-900 text-white" />
          </form>
        </div>
      </div>
    </Layout>
  )
}







