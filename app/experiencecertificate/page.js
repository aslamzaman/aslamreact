"use client"
import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { TextEn, BtnSubmit, DropdownEn, TextDt, TextareaEn } from "../../components/Form";
import { getDataFromFirebase } from "@/lib/firebaseFunction";
import { formatedDate, sortArray } from "@/lib/utils";
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];




const Experiencecertificate = () => {
  const [msg, setMsg] = useState("");
  const [dt, setDt] = useState("");
  const [dt1, setDt1] = useState("");
  const [dt2, setDt2] = useState("");
  const [nm, setNm] = useState("");
  const [present, setPresent] = useState('');
  const [fnm, setFnm] = useState("");
  const [address, setAddress] = useState("");
  const [certify, setCertify] = useState("");

  const [staffs, setStaffs] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [singleStaff, setSingleStaff] = useState({});
  const [singleAutor, setSingleAutor] = useState({});




  useEffect(() => {

    const getData = async () => {
      try {
        const [staffs, posts, genders, authors] = await Promise.all([
          getDataFromFirebase("staff"),
          getDataFromFirebase("post"),
          getDataFromFirebase("gender"),
          getDataFromFirebase("author")
        ]);


        const joinCollection = staffs.map(staff => {
          return {
            ...staff,
            post: posts.find(post => post.id === staff.postId) || {},
            gender: genders.find(gender => gender.id === staff.genderId) || {}
          }
        });

        const sortedData = joinCollection.sort((a, b) => sortArray(a.empId, b.empId));

        const joinAuthor = authors.map(author=>{
          return {
             ...author,
             post : posts.find(post => post.id ===author.postId) || {}
          }
      });



        console.log("author", authors)
        setStaffs(sortedData);
        setAuthors(joinAuthor);
      } catch (err) {
        console.log(err);
      }
    }
    getData();

    setDt(formatedDate(new Date()));
    setDt1(formatedDate(new Date()));
  }, [])





  const createCertificate = (e) => {
    e.preventDefault();
    setMsg("Please wait...");
    const data = {
      dt: dt,
      dt1: dt1,
      dt2: dt2,
      certify: certify,
      present: present,
      fnm: fnm,
      address: address,
      singleStaff, singleStaff,
      singleAutor, singleAutor
    }

    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
    });


    const txt1 = `This is to certify that ${singleStaff.nmEn}, ${singleStaff.gender.id === "6plsNNKixui6qJW7tIpK" ? 'son' : 'daughter'} of ${fnm}, residing at ${address}, has been an invaluable member of our organization, serving as the ${singleStaff.post.nmEn} since ${formatedDate(dt1)}, and continuing to excel in her role to date.`;

    const txt2 = `This is to certify that ${singleStaff.nmEn}, ${singleStaff.gender.id === "6plsNNKixui6qJW7tIpK" ? 'son' : 'daughter'} of ${fnm}, residing at ${address}, served as the ${singleStaff.post.nmEn} in our organization from ${formatedDate(dt1)}, to ${formatedDate(dt2)}.`

    const lastPara = `We acknowledge ${singleStaff.gender.id === "6plsNNKixui6qJW7tIpK" ? 'his' : 'her'} valuable contributions to our organization and wish ${singleStaff.gender.id === "6plsNNKixui6qJW7tIpK" ? 'his' : 'her'} continued success in ${singleStaff.gender.id === "6plsNNKixui6qJW7tIpK" ? 'his' : 'her'} professional endeavors.`;
    const fontStyleNormal = "font-size: 5px; font-weight: normal; font-family: 'Times New Roman', Times, serif;  line-height: 1.25;";




    setTimeout(() => {


      const ss = `
      <div style="width:225px; padding:88px 40px 10px 25px;">
                <p style="${fontStyleNormal} text-align: justify;">${present === '1' ? txt1 : txt2}<br /><br />${lastPara}</p>
    <br />
    <p style="${fontStyleNormal} text-align: left;">${singleAutor.name}<br \>${singleAutor.post.nmEn}</p>     
    </div>
    `;

      doc.addImage("/images/formats/experiencecertificate.png", "PNG", 0, 0, 210, 297);
      doc.html(ss, {
        callback: function (dc) {
          dc.setFont("times", "normal");
          dc.setFontSize(12);
          dc.setFont("times", "normal");
          dc.text(`${formatedDate(dt)}`, 185, 62, null, null, "right");

          dc.setFontSize(16);
          dc.setFont("times", "normal");
          dc.save(new Date().toISOString() + "-experience-certificate.pdf");;
        }
      });

      setMsg("Experience dertificate create completed")
    }, 0);
  }


  const staffChangeHandler = (e) => {
    const event = e.target.value;
    setNm(event);
    const findStaff = staffs.find(staff => staff.id === event);
    console.log(findStaff);
    setSingleStaff(findStaff);
  }


  const authorChangeHandler = (e) => {
    const event = e.target.value;
    setCertify(event);
    const findAuthor = authors.find(author => author.id === event);
    console.log(findAuthor);
    setSingleAutor(findAuthor);
  }


  return (
    <>
      <div className="w-full mb-3 mt-8">
        <div className="w-full mb-3 mt-8">
          <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Experience Certificate</h1>
        </div>
        <div className="w-11/12 lg:w-9/12 mx-auto mt-10 p-4 border shadow-lg">
          <form onSubmit={createCertificate}>
            <div className="grid grid-col-3 gap-4">
              <TextDt Title="Certificate Issue Date" Id="dt" Change={e => setDt(e.target.value)} Value={dt} />
              <TextDt Title="Joining Date" Id="dt1" Change={e => setDt1(e.target.value)} Value={dt1} />
              <TextDt Title="End Date" Id="dt2" Change={e => setDt2(e.target.value)} Value={dt2} />

              <DropdownEn Title="Name" Id="nm" Change={staffChangeHandler} Value={nm}>
                {staffs.length ? staffs.map(staff => <option value={staff.id} key={staff.id}>{staff.nmEn}-{staff.empId}</option>) : null}
              </DropdownEn>
              <TextEn Title="Father's Name" Id="fnm" Change={(e) => setFnm(e.target.value)} Value={fnm} Chr="50" />
              <DropdownEn Title="Status" Id="present" Change={e => setPresent(e.target.value)} Value={present}>
                <option value="1">Present Staff</option>
                <option value="2">Terminate Staff</option>
              </DropdownEn>

              <div className="col-span-3">
                <TextEn Title="Full Address" Id="address" Change={(e) => setAddress(e.target.value)} Value={address} Chr="150" />
              </div>

              <div className="col-span-3">
                <DropdownEn Title="Certifying Person" Id="certify" Change={authorChangeHandler} Value={certify}>
                  {authors.map(author => <option value={author.id} key={author.id}>{author.name}</option>)}
                </DropdownEn>

              </div>
            </div>
            <p className="text-sm font-semibold text-red-800 mt-4">{msg}</p>
            <BtnSubmit Title="Create" Class="bg-slate-600 hover:bg-slate-800 text-white" />
          </form >
        </div>
      </div >
    </>
  )
}

export default Experiencecertificate;
