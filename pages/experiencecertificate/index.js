import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { TextEn, BtnSubmit, DropdownEn, TextDt } from "../../components/Form";
import { Panel, PanelBody, PanelHeader } from "../../components/Panel";

import { fetchAll } from "../../components/DexieDatabase";


import { Lib } from "../../utils/Lib";
import Layout from "../../components/Layout";

const CreateCertificateFormat = ({ doc }, data) => {

  const dt = data.dt;
  const dt1 = data.dt1;
  const certify = data.certify;
  const nm = data.nm;
  const fnm = data.fnm;
  const address = data.address;

  var new_dt = new Date(dt);
  var new_dt1 = new Date(dt1);

  var n = certify.split(",");
  let nm_deg = nm.split(",");

  const fontStyleNormal = "font-size: 5px; font-weight: normal; font-family: 'Times New Roman', Times, serif;  line-height: 1.25;";

  const ss = `
  <div style="width:225px; padding:88px 40px 10px 25px;">
            <p style="${fontStyleNormal} text-align: justify;">
            This is to certify that ${nm_deg[0]}, ${nm_deg[2] === "Male" ? 'son' : 'daughter'} of the ${fnm}, ${address}. ${nm_deg[2] === "Male" ? 'He' : 'She'} has been serving as the ${nm_deg[1]} in our organization since ${Lib.util.monthEnArr[new_dt1.getMonth()]} ${new_dt1.getDate()}, ${new_dt1.getFullYear()} to till now.
           <br /><br />
           
            ${nm_deg[2] === "Male" ? "His" : "Her"} diligence and sincerity in ${nm_deg[2] === "Male" ? "his" : "her"} every performance is commendable. I found ${nm_deg[2] === "Male" ? "his" : "her"} a person with keen interest and willingness to learn.
            </p>
<br />
<p style="${fontStyleNormal} text-align: left;">${n[0]}<br \>${n[1].trim()}</p>     
</div>
`;


  doc.addImage("/images/formats/experiencecertificate.png", "PNG", 0, 0, 210, 297);
  doc.html(ss, {
    callback: function (dc) {
      dc.setFont("times", "normal");
      dc.setFontSize(12);
      dc.setFont("times", "normal");
      dc.text(`${Lib.util.monthEnArr[new_dt.getMonth()]} ${new_dt.getDate()}, ${new_dt.getFullYear()}`, 185, 62, null, null, "right");

      dc.setFontSize(16);
      dc.setFont("times", "normal");
      dc.save(new Date().toISOString() + "-experience-certificate.pdf");;
    }
  });

}


const Experiencecertificate = () => {
  const [msg, setMsg] = useState("");
  const [dt, setDt] = useState("");
  const [dt1, setDt1] = useState("");
  const [nm, setNm] = useState("");
  const [fnm, setFnm] = useState("");
  const [address, setAddress] = useState("");
  const [certify, setCertify] = useState("");

  const [staffs, setStaffs] = useState([]);
  const [authors, setAuthors] = useState([]);


  useEffect(() => {

    const getData = async () => {
      try {
        const [staff, author, posts, genders] = await Promise.all([fetchAll("staff"), fetchAll("author"), fetchAll("post"), fetchAll("gender")]);

        const joinStaffs = staff.map(s => {
          const matchPost = posts.find(ps => parseInt(ps.id) === parseInt(s.post_id));
          const matchGender = genders.find(gen => parseInt(gen.id) === parseInt(s.gender_id));
          return {
            ...s,
            post: matchPost.nm_en,
            gender: matchGender.name
          }
        })

        setStaffs(joinStaffs);
        setAuthors(author);
      } catch (err) {
        console.log(err);
      }
    }
    getData();

    setDt(Lib.util.dateFormat(new Date(), "-"));
    setDt1(Lib.util.dateFormat(new Date(), "-"));
  }, [])


  const doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
    putOnlyUsedFonts: true,
    floatPrecision: 16 // or "smart", default is 16
  });


  const createCertificate = (e) => {
    e.preventDefault();
    setMsg("Please wait...");
    const data = {
      dt: dt,
      dt1: dt1,
      certify: certify,
      nm: nm,
      fnm: fnm,
      address: address
    }

    setTimeout(() => {
      CreateCertificateFormat({ doc }, data);
      setMsg("Experience dertificate create completed")
    }, 0);
  }


  return (
    <Layout>
      <div className="w-full md:w-10/12 mx-auto mt-6">
        <Panel>
          <PanelHeader Class="bg-yellow-100">
            Experience Certificate
          </PanelHeader>
          <PanelBody>
            <form onSubmit={createCertificate}>
              <div className="flex space-x-4 py-2">
                <TextDt Title="Certificate Issue Date" Id="dt" Change={(e) => setDt(e.target.value)} Value={dt} />
                <TextDt Title="Joining Date" Id="dt1" Change={(e) => setDt1(e.target.value)} Value={dt1} />
              </div>
              <div className="flex space-x-4 py-2">
                <DropdownEn Title="Name" Id="nm" Change={(e) => { setNm(e.target.value) }} Value={nm}>
                  {
                    staffs.length ? staffs.map((s, i) => {
                      const staff_query = s.nm_en + "," + s.post + "," + s.gender;
                      return <option value={staff_query} key={i}>{s.nm_en}</option>
                    }) : null
                  }
                </DropdownEn>
                <TextEn Title="Father's Name" Id="fnm" Change={(e) => setFnm(e.target.value)} Value={fnm} Chr="50" />
              </div>
              <div className="py-2">
                <TextEn Title="Full Address" Id="address" Change={(e) => setAddress(e.target.value)} Value={address} Chr="150" />
              </div>

              <div className="pt-2">
                <DropdownEn Title="Certifying Person" Id="certify" Change={(e) => { setCertify(e.target.value) }} Value={certify}>
                  {
                    authors.map((s, i) => {
                      var nm_deg = s.name + "," + s.deg;
                      return <option value={nm_deg} key={i}>{s.name}</option>
                    })
                  }
                </DropdownEn>
              </div>
              <p className="text-sm font-semibold text-red-800 mt-4">{msg}</p>
              <BtnSubmit Title="Create" Class="bg-slate-600 hover:bg-slate-800 text-white" />
            </form>
          </PanelBody>
        </Panel>
      </div>
    </Layout>
  )
}

export default Experiencecertificate;
