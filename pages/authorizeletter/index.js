import React, { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { TextEn, BtnSubmit, DropdownEn, TextDt } from "../../components/Form";
import { Panel, PanelBody, PanelHeader } from "../../components/Panel";

import { fetchAll } from "../../components/DexieDatabase";

import { Lib } from "../../utils/Lib";
import Layout from "../../components/Layout";
import { data } from "autoprefixer";


const CreateLeterFormat = ({ doc }, data) => {
  const dt = data.dt;
  const dt1 = data.dt1;
  const certify = data.certify;
  const nm = data.nm;
  const received = data.received;

  var new_dt = new Date(dt);
  var new_dt1 = new Date(dt1);

  var n = certify.split(",");
  let nm_deg = nm.split(",");
  const fontStyleNormal = "font-size: 5px; font-weight: normal; font-family: 'Times New Roman', Times, serif;  line-height: 1.25;";

  const ss = `
  <div style="width:225px; padding:88px 40px 10px 25px;">
        <p style="${fontStyleNormal} text-align: justify;">
        I, hereby, authorize ${nm_deg[2] === "Male" ? 'Mr.' : 'Ms.'} ${nm_deg[0]}, ${nm_deg[1]}, Centre for Mass Education in Science (CMES), whose signature I attest here, to receive on my behalf my ${received}. 
        <br /><br />
        I am attesting his signature below:
        <br /><br />
        </p>    
      
        <div style="display: flex;align-items: stretch; padding:0px; ${fontStyleNormal}">
        <div style="flex-grow: 5;">Name<br /><br />${nm_deg[0]}</div>
        <div style="flex-grow: 1">Signature</div>
        <div style="flex-grow: 1; text-align:right">Attested</div>  
        </div>  
         
<br />
<p style="${fontStyleNormal} text-align: left;">${n[0]}<br \>${n[1].trim()}</p>     
</div>
`;

  doc.addImage("/images/formats/authorizeletter.png", "PNG", 0, 0, 210, 297);
  doc.html(ss, {
    callback: function (dc) {
      dc.setFont("times", "normal");
      dc.setFontSize(12);
      dc.setFont("times", "normal");
      dc.text(`${Lib.util.monthEnArr[new_dt.getMonth()]} ${new_dt.getDate()}, ${new_dt.getFullYear()}`, 185, 62, null, null, "right");
      dc.save(new Date().toISOString() + "-authorize-letter.pdf");;
    }
  });
}


const Experiencecertificate = () => {
  const [msg, setMsg] = useState("");
  const [dt, setDt] = useState("");
  const [dt1, setDt1] = useState("");
  const [nm, setNm] = useState("Md. Mofigul Huq");
  const [received, setReceived] = useState("Indian Visa. My passport No. BJ0945089 and visa token No");
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
      received: received
    }

    setTimeout(() => {
      CreateLeterFormat({ doc }, data);
      setMsg("PDF created successfully.");
    }, 0);
  }



  return (
    <Layout Title="Authorization Letter">
      <div className="w-full md:w-10/12 mx-auto mt-6">
        <Panel>
          <PanelHeader Class="bg-yellow-100">
            Authorize Letter
          </PanelHeader>
          <PanelBody>
            <form onSubmit={createCertificate}>
              <div className="flex space-x-4 py-2">
                <TextDt Title="Date" Id="dt" Change={(e) => setDt(e.target.value)} Value={dt} />
              </div>
              <div className="flex space-x-4 py-2">
                <DropdownEn Title="Authorized Person Name" Id="nm" Change={(e) => { setNm(e.target.value) }} Value={nm}>
                  {
                    staffs.map((s, i) => {
                      const staff_query = s.nm_en + "," + s.post + "," + s.gender;
                      return <option value={staff_query} key={i}>{s.nm_en}</option>
                    })
                  }
                </DropdownEn>
              </div>
              <div className="py-2">
                <TextEn Title="What Received" Id="received" Change={(e) => setReceived(e.target.value)} Value={received} Chr="150" />
              </div>

              <div className="pt-2">
                <DropdownEn Title="Authorized By" Id="certify" Change={(e) => { setCertify(e.target.value) }} Value={certify}>
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
