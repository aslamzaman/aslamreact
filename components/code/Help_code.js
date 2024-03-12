const Help_code = (tbl) => {
  const titleCase = (str) => {
    return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

const url_1 = "`${Lib.url}/employee/read_all`";
const url_2 = "`${Lib.url}/gender/read_all`";

  const str = `
    *** Server:-
    app.use('/${tbl}', require('./src/routes/${titleCase(tbl)}Route'));
    


    *** Menu:-
    <MenuItem Href="/${tbl}" Title="${titleCase(tbl)}" />



    *** Promise.all:-
    const [employee, gender] = await Promise.all([
      axios.get(${url_1}),
      axios.get(${url_2})
    ]);
  
    const employeeData = employee.data;
    const genderData = gender.data;
  
    const result = employeeData.map(employee => {
      const matchGender  = genderData.find(gender => parseInt(gender.id) === parseInt(employee.gender_id));
      return {
        ...employee,
        gender: matchGender  ? matchGender .name : 'Error!'
      }
    })
  
    console.log(employeeData, genderData, result);  
    setEmployees(result);
  


    *** Reduce:-
    const result = datas.reduce((total, data) => {
        const taka = parseFloat(data.taka);
        const nos = parseFloat(data.nos);
        return total + (taka * nos) ;
      }, 0);
      
   
      
 *** Filter:-
 const result = staffs.filter(s => parseInt(s.place_id) === 1699884047193); // return array    
  
 
 *** Find:-
 const result = staffs.find(s => parseInt(s.place_id) === 1699884047193); // return object


*** Sort:-
const SortResult = datas.sort((a, b) => {
    if (parseInt(a.id) < parseInt(b.id)) {
      return -1;
    } else {
      return 1;
    }
  });



  *** Print Multiple Page:-
  const printMultiplePageHandler = async () => {
    const doc = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4",
        putOnlyUsedFonts: true,
        floatPrecision: 16
    });

    const margin = 15;
    const itemsPerPage = 12;
    let y = margin;

    doc.setFontSize(12);
    for (let i = 0; i < staffs.length; i++) {
        doc.text(\`Employee Id: \${staffs[i].emp_id}\`, 105, y, null, null, "center");
        doc.text(\`\${staffs[i].nm_en}\`, 105, y + 6, null, null, "center");
        doc.text(\`\${staffs[i].post}\`, 105, y + 12, null, null, "center");   
        y = y + 23;
        console.log(i, i % itemsPerPage, itemsPerPage - 1)
        if (i % itemsPerPage === itemsPerPage - 1) {               
            doc.addPage();                
            y = margin;
        }
    }

    doc.save(\`\${Date.now()}-staff.pdf\`);
    Msg("Print completed.");
    setShow(false);
}



*** Create PDF Page:-
const createPdfHandler = async (e) => {
  e.preventDefault();
  const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
  });

  const pageText = pageRef.current;
  try {
      const canvas = await html2canvas(pageText);
      const dataUrl = canvas.toDataURL('images/png');
      console.log(dataUrl);
      doc.addImage(dataUrl, "PNG", 0, 0, 210, 297);
      doc.save(new Date().toISOString() + "-Bayprostab.pdf");
  }
  catch (err) {
      console.log(err);
  }
}


*** White HTML 300 DPI A4 Page:-
export const Htmlpage = ({ children, Ref }) => {
  return (
      <div ref={Ref} className="w-[2480px] h-[3508px] bg-white mx-auto font-SutonnyMJ_Regular text-[64.75px] leading-tight text-justify" >
          {children}
      </div>
  )
}


*** Components Arrays:-
export const MyComponents = [
  () => {
      return <>Abywjwc:< br />GBPAviwW/wcGd</>;
  },
  () => {
      return (
          <>
              Abywjwc:< br />
              1. GBPAviwW/wcGd <br />
              2. GKvD›Um
          </>
      );
  }
]



*** Object:-
export const Lib = {
  url:"http://localhost:3000/code/",
  dateFormatBn(dt) {
    var d = new Date(dt);
    return this.daysArray[d.getDate()] + " " + this.monthBnArr[d.getMonth()] + ", " + d.getFullYear();
  },
  dateTimeFormat(dt) {
    var d = new Date(dt);
    return d.getFullYear() + "-" + this.daysArray[d.getMonth() + 1] + "-" + this.daysArray[d.getDate()] + " | " + this.daysArray[d.getHours() + 1] + ":" + this.daysArray[d.getMinutes() + 1] + ":" + this.daysArray[d.getSeconds() + 1];
  },
  price: {
    brick: 12.0,
    cement: 550.0,
    sand: 25.0,
    khoa: 115.0,
    rod: 100.0,
    paint: 1500.0,
    tiles: 80.0,
    flatbar: 105.0,
    anglebar: 105.0,
    mason: 550.0,
    labour: 400.0
  }
}


*** Looping:-
for (let i = 0; i < data.length; i++) {
  console.log(data[i].name);
}

----------------------------------
let i = 0;
const myTimer = setInterval(() => {
  console.log(data[i].name);
  i = i + 1;
  if (i >= data.length) {
      clearInterval(myTimer);
  }
}, 1000)



      `;

  return str;

}

export default Help_code;