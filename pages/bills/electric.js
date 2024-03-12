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

const ElectricbillCreation = ({ doc }, data) => {
  const dt = data.dt;
  const project = data.project;
  const taka = data.taka;
  const months = data.months;
  const yr = data.yr;
  const nm = data.nm;

  doc.addImage("/images/formats/electricbill.png", "PNG", 0, 0, 210, 297);
  doc.setFontSize(13);
  doc.setFont("times", "normal");
  doc.text(`${project}`, 100, 48, null, null, "left");
  doc.text(`${Lib.util.dateFormat(dt, ".")}`, 100, 54, null, null, "left");

  doc.text(`Electric bill for the month of ${months} ${yr}`, 47, 77, null, null, "left");
  doc.text(`${taka}/-`, 180, 77, null, null, "right");

  doc.setFont("times", "bold");
  doc.text(`${taka}/-`, 180, 207, null, null, "right");
  let total = parseInt(taka);
  doc.setFont("times", "normal");
  let t = Lib.util.inword.en(total).trim();
  doc.text(`${titleCase(t)} Taka Only`, 45, 215, null, null, "left");

  doc.text(`${nm.split(",")[0]}`, 25, 241, null, null, "left");
  doc.text(`${nm.split(",")[1]}`, 25, 247, null, null, "left");
}



export default function Electric() {
  const [projects, setProjects] = useState([]);
  const [months, setMonths] = useState([]);
  const [dt, setDt] = useState("");
  const [project, setProject] = useState("");
  const [taka, setTaka] = useState("5000");
  const [yr, setYr] = useState("2024");
  const [nm, setNm] = useState("Aslam Zaman,Senior Program Organizer");

  const [monthDropdown, setMonthDropdown] = useState([]);
  const [yearDropdown, setYearDropdown] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [msg, setMsg] = useState("Data ready");



  useEffect(() => {

    const getRemoteData = async () => {
      try {
        const [staff, posts, projects] = await Promise.all([fetchAll("staff"), fetchAll("post"), fetchAll("project")]);
        const joinStaffs = staff.map(s => {
          const matchPost = posts.find(ps => parseInt(ps.id) === parseInt(s.post_id));
          return {
            ...s,
            post: matchPost.nm_en
          }
        })
        const result = joinStaffs.filter(s => parseInt(s.place_id) === 1699884047193);
        setStaffs(result);
        setProjects(projects);

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
      dt: dt,
      project: project,
      taka: taka,
      months: months,
      yr: yr,
      nm: nm
    }


    setTimeout(() => {
      ElectricbillCreation({ doc }, data);
      doc.save(new Date().toISOString() + "-Electric_bill.pdf");
      setMsg("Print completed.");
    }, 0);

  }



  return (
    <Layout Title="Electric Bill">
      <div className="w-full lg:w-3/4 mx-auto border-2 border-gray-300 rounded-lg shadow-lg">
        <div className="w-full bg-violet-100">
          <h1 className="text-center text-xl font-bold py-3">Electric Bill</h1>
        </div>
        <div className='w-full'>
          <p className='w-full text-red-600 text-center'>{msg}</p>
        </div>

        <div className='px-6'>
          <div className="pb-6">
            <h3 className='text-sm font-bold py-2'>Utilities bill out of 12 months</h3>
            <p className='pt-1'>
              a. January- April  of utilities bill will be payee from IDCOL<br />
              b. May- June  of utilities bill will be payee from GO and COL<br />
              c. July- October  of utilities bill will be payee from Microcredit<br />
              d. November- December  of utilities bill will be payee from GO and COL</p>
          </div>
          <form onSubmit={printHandler} >

            <TextDt Title="Date" Id="dt" Change={e => setDt(e.target.value)} Value={dt} />
            <DropdownEn Title="Staff Name" Id="nm" Change={e => setNm(e.target.value)} Value={nm}>
              {
                staffs.length ? staffs.map((s, i) => {

                  let vl = s.nm_en + "," + s.post;
                  return <option value={vl} key={i}>{s.nm_en}</option>
                }) : null
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

            <BtnSubmit Title="Print" Class="bg-indigo-700 hover:bg-violet-900 text-white mb-4" />
          </form>
        </div>
      </div>
    </Layout>
  )
}







