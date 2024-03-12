import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { TextEn, TextNum, BtnSubmit, DropdownEn, TextDt } from "../../components/Form";
import { Panel, PanelBody, PanelHeader } from "../../components/Panel";
import { fetchAll } from "../../components/DexieDatabase";
import { Lib } from "../../utils/Lib";
import Layout from "../../components/Layout";



const CreateCertificateFormat = ({ doc }, data) => {
  const certify = data.certify;
  const nm = data.nm;
  const fnm = data.fnm;
  const address = data.address;
  const sal = data.sal;
  const dt = data.dt;

  var new_dt = new Date(dt);

  var n = certify.split(",");
  let nm_deg = nm.split(",");
  const fontStyleNormal = "font-size: 5px; font-weight: normal; font-family: 'Times New Roman', Times, serif;  line-height: 1.25;";

  const ss = `
<div style="width:225px; padding:105px 40px 10px 25px;">
          <p style="${fontStyleNormal} text-align: justify;">
            This is to certify that ${nm_deg[0]}, ${nm_deg[2] === "Male" ? 'son' : 'daughter'} of the ${fnm}, ${address}. ${nm_deg[2] === "Male" ? 'He' : 'She'} has been serving as the ${nm_deg[1]} in our organization, and ${nm_deg[2] === "Male" ? 'his' : 'her'} monthly gross salary amounts to Tk.${Lib.util.numberWithCommas(sal)}.
          </p>
<br />
<p style="${fontStyleNormal} text-align: left;">${n[0]}<br \>${n[1].trim()}</p>     
</div>
`;
  doc.addImage("/images/formats/salarycertificate.png", "PNG", 0, 0, 210, 297);
  doc.html(ss, {
    callback: function (doc) {
      doc.setFontSize(12.5);
      doc.setFont("times", "normal");
      doc.text(`${Lib.util.monthEnArr[new_dt.getMonth()]} ${new_dt.getDate()}, ${new_dt.getFullYear()}`, 185, 62, null, null, "right");
      doc.save(new Date().toISOString() + "_Salary_Certificate.pdf");
    }
  });
}




const Salarycertificate = () => {
  const [dt, setDt] = useState("");
  const [nm, setNm] = useState("");
  const [fnm, setFnm] = useState("");
  const [address, setAddress] = useState("");
  const [sal, setSal] = useState("");
  const [certify, setCertify] = useState("");

  const [staffs, setStaffs] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [msg, setMsg] = useState("");


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

  }, [])


  const doc = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4'
  });
  
  
  const createCertificate = (e) => {
    e.preventDefault();
    setMsg("Please wait...");
    var new_dt = new Date(dt);

    const data = {
      certify: certify,
      nm: nm,
      fnm: fnm,
      address: address,
      sal: sal,
      dt: dt
    }
    setTimeout(() => {
      CreateCertificateFormat({doc}, data);     
      setMsg("Salary certificate created.");    
    }, 0);
  }


  return (
    <Layout>
      <div className="w-full mt-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div></div>
          <div className="col-span-2">
            <Panel>
              <PanelHeader Class="bg-yellow-100">
                Salary Certificate
              </PanelHeader>
              <PanelBody>
                <p className="w-full py-2 text-md text-red-700 text-center">{msg}</p>
                <form onSubmit={createCertificate}>
                  <TextDt Title="Date" Id="dt" Change={(e) => setDt(e.target.value)} Value={dt} />

                  <div className="flex space-x-4 py-2">
                    <DropdownEn Title="Name" Id="nm" Change={(e) => { setNm(e.target.value) }} Value={nm}>
                      {
                        staffs.map((s, i) => {
                          const staff_query = s.nm_en + "," + s.post + "," + s.gender;
                          return <option value={staff_query} key={i}>{s.nm_en}</option>
                        })
                      }
                    </DropdownEn>
                    <TextEn Title="Father's Name" Id="fnm" Change={(e) => setFnm(e.target.value)} Value={fnm} Chr="50" />
                  </div>

                  <div className="py-2">
                    <TextEn Title="Full Address" Id="address" Change={(e) => setAddress(e.target.value)} Value={address} Chr="150" />
                  </div>

                  <div className="py-2">
                    <TextNum Title="Salary" Id="sal" Change={(e) => setSal(e.target.value)} Value={sal} Chr="12" />
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
                  <BtnSubmit Title="Create" Class="bg-slate-600 hover:bg-slate-800 text-white" />

                </form>
              </PanelBody>
            </Panel>
          </div>
          <div></div>
        </div>
      </div>


    </Layout>
  )
}

export default Salarycertificate;
