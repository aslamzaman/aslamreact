const Help_code = (tbl) => {
  const titleCase = (str) => {
    return str
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

const url_1 = "`${process.env.NEXT_PUBLIC_URL}/employee/read_all`";
const url_2 = "`${process.env.NEXT_PUBLIC_URL}/gender/read_all`";
const returnCode = "`+${image.name}`";



  const str = `
    *** Server:-
    app.use('/${tbl}', require('./src/routes/${titleCase(tbl)}Route'));


    *** Menu:-
    <MenuItem Click={() => setMenu(false)} Href="/${tbl}" Title="${titleCase(tbl)}" />


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

      
 *** Delay:-
 const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

      
 *** Filter1:-
 const result = staffs.filter(staff => parseInt(staff.place_id) === 1699884047193); // return array    
 
 
 *** Filter2:- (some)
 const result = customers.filter(customer=> payments.some(payment =>payment.customer._id === customer._id));
 const result = orders.filter(order=> !delivery.some(delivery =>delivery.orderNo === order.orderNo));
 

 *** Filter3:- (Range)
 const filteredValue = data.filter(item => item.Price >= 230 && item.Price <= 800);

 
 *** Find:-
 const result = staffs.find(s => parseInt(s.place_id) === 1699884047193); // return object


*** Sort:
/**
 * Sort array function
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
export const sortArray = (a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}



*** Unique Array:-
const uniqueArray = [...new Set(arrayData)];


*** Six falsey values:-
undefined, null, NaN, 0, "", false



*** Create PDF Page From Canvas:-
const createPdfHandler = async (e) => {
  e.preventDefault();

  const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 16 // or "smart", default is 16
  });

  try {
      const canvas = await html2canvas(pageRef.current,{
            scale:4,
            useCORS:true
        });
      const dataUrl = canvas.toDataURL('images/png',1.0);
 
      doc.addImage(dataUrl, "PNG", 0, 0, 210, 297);
      doc.save(new Date().toISOString() + "-Bayprostab.pdf");
      /*
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'hello.png';
        document.body.appendChild(a);
        a.click();
        a.remove();
      */

 /*
    const button = document.createElement('button');
    button.type = 'reset';
    document.forms[0].appendChild(button);
    button.click();
    button.remove();
    */

  }
  catch (err) {
      console.log(err);
  }
}


*** Components Arrays:-
export const MyComponents = [
  () => {
      return <h1>Component</h1>;
  },
  () => {
      return (
          <>
             <h1>Header</h1>;
             <p>Paragraph</p>;
          </>
      );
  }
]


*** Object:-
export const Lib = {
  url:"Some thing",
  dateFormatBn(dt) {   
    return 'Some thing';
  }, 
  price: {
    some:some;
  }
}

*** Date checking
export const isDate = (value) => {
    const timestamp = Date.parse(value);
    return !isNaN(timestamp);
}


*** Formated date
export const formatedDate = (dt) => {
    const initialDate = isDate(dt);
    let d = "";
    if (initialDate) {
        d = new Date(dt);
    } else {
        d = new Date("1970-01-01");
    }
    const d1 = d.getFullYear();
    const d2 = d.getMonth();
    const d3 = d.getDate();
    const utcDate = new Date(Date.UTC(d1, d2, d3));
    return utcDate.toISOString().split('T')[0];
}

*** Age Calculate
export const myAge = (dt) => {
    const d = isDate(dt);
    let d1 = 0;
    if (d) {
        d1 = new Date(dt).getTime();
    } else {
        d1 = Date.now();
    }

    let d2 = Date.now();
    let d3 = d2 - d1;

    return Math.round(d3 / (1000 * 31556952));
}



*** Interval:-
let x = [];
let i = 0;
const myTimer = setInterval(() => {
  console.log(data[i].name);
  x.push({id: Date.now(), name: data[i].name});
  i = i + 1;
  if (i >= data.length) {
      clearInterval(myTimer);
      console.log(x);
  }
}, 100)


*** evaluate
import { evaluate } from 'mathjs';
//npm install mathjs@14.0.0
const str = evaluate('12 + (2 * 7)');
console.log(str); // 26



*** Imagees
const getImageWidthHeight = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            const imgWidth = img.width;
            const imgHeight = img.height;
            resolve({ imgWidth, imgHeight });
        };
        img.onerror = (error) => reject(error);
    });
};

const fileChangeHandlerImage = async (e) => {
    try {
        const files = e.target.files;
        const imageDataPromises = Array.from(files).map(async (file) => {
            const imagBlobUrl = URL.createObjectURL(file);
            const { imgWidth, imgHeight } = await getImageWidthHeight(imagBlobUrl);
            return {
                url: imagBlobUrl,
                width: imgWidth,
                height: imgHeight,
                name: file.name,
                type: file.type,
                size: file.size,
            };
        });

        const imageData = await Promise.all(imageDataPromises);
        setImageDatas(imageData);

        const reduceName = imageData.reduce((acc, image) => acc + \${returnCode}, '');
        const subStringText = reduceName.substring(1);
        setBrakeup(subStringText);

    } catch (error) {
        console.error("Error processing images:", error);
    }
};



  *** Upload 
  const uploadHandler = (e) => {
	  try{
			// const file = e.target.files[0];
			if (!file) {
				console.log("No file selected.");
			  return;
			}

			const reader = new FileReader();
			reader.onload = () => {
				try{
					const result = JSON.parse(reader.result);
					console.log(result);
				}catch(parseError){
					console.error('Error parsing JSON:', parseError);
				}
			}
			reader.readAsText(file);
		} catch(error) {
			console.error('Error reading file:', error);
		}
	}



   *** Download 
    const clickHandler = () => {
        const obj = { hello: "world" };
        const blob = new Blob([JSON.stringify(obj)], { type: "application/json"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'hello.json';
        document.body.appendChild(a);
        a.click();
        a.remove();
    }


    *** compressed binary
    const encodedData = btoa("Hello, world"); // encode a string
    const decodedData = atob(encodedData); // decode the string



    *** storage size monitor
    function getSessionStorageSize() {
        let totalSize = 0;
        for (let key in sessionStorage) {
            if (sessionStorage.hasOwnProperty(key)) {
                totalSize += sessionStorage.getItem(key).length;
            }
        }
        return totalSize; // Returns size in characters (bytes)
    }

    // Helper function to convert characters (bytes) to MB
    function bytesToMB(bytes) {
        return bytes / (1024 * 1024);
}


 *** Excel
 // import * as XLSX from 'xlsx';
 /**
 * Get json data from an excel file
 * @param {string} file - From input file
 * @param {Array} headerArray - Excel sheet table header
 * @returns
 */
  const jsonDataFromExcelSheet = (file, headerArray) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            const workbook = XLSX.read(event.target.result, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: headerArray });
            resolve(jsonData.slice(1));
        }
        reader.onerror = (error) => reject(error);
        reader.readAsArrayBuffer(file);
    })
  }


/**
 * Exports JSON data to an Excel sheet.
 * @param {Array} jsonData - The JSON data to export.
 * @param {String} sheetName - The name of the sheet.
 * @param {Array} columnWidthArray - The columns width in character. Say [20, 10, 15, ...]
 * @param {String} fileName - The desired file name (without extension).
 */
  const excelSheetFromJsonData = (jsonData, sheetName, columnWidthArray, fileName) => {
      try {
          let cols = columnWidthArray.map(item => ({ wch: item }));
          const workbook = XLSX.utils.book_new();
          const worksheet = XLSX.utils.json_to_sheet(jsonData);
          worksheet["!cols"] = cols; // set column width
          XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
          XLSX.writeFile(workbook, \`\${fileName}.xlsx\`);
          return \`Excel file has been successfully created.\`;
      } catch (error) {
          console.error('Error exporting data to Excel:', error);
      }
  }

***------react-to-print -------- 
npm install react-to-print@3.0.2
import { useReactToPrint } from "react-to-print";


const pageStyle = \`@media print {
        @page {
            size: A4 portrait;
            margin: 1in;
        }
        footer{
            page-break-after: always;
        }    
        #noPrint{
            display:none;
        }  
        #page{
            font-size: 16px;
            font-family: Arial, Helvetica, sans-serif;
        }
    }\`;

 const componentRef = useRef(null);
 const handleAfterPrint = useCallback(() => {
        console.log("\`onAfterPrint\` called");
    }, []);

    const handleBeforePrint = useCallback(() => {
        console.log("\`onBeforePrint\` called");
        return Promise.resolve();
    }, []);

    const printHandler = useReactToPrint({
        contentRef: componentRef,
        documentTitle: "AwesomeFileName",
        onAfterPrint: handleAfterPrint,
        onBeforePrint: handleBeforePrint,
        pageStyle: pageStyle,
        documentTitle: "Sample report from react print",
    });

return(
    <>
        <button id="noPrint" onClick={printHandler}>Print</button>
        <div id="page" ref={componentRef}>Print Content</div>
    </>
)

*** Unique Id
export const customIdForFirebase = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let customId = '';
    for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        customId += chars[randomIndex];
    }
    return customId;
}


*** Excel Num Date to Real Date 
export const excelDateToJSDate = (excelDate)=> {
    const epochDate = new Date(1900, 0, 1);
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day
    if (excelDate > 60) {
      excelDate--;
    }
    const milliseconds = (excelDate - 1) * oneDay;
    return new Date(epochDate.getTime() + milliseconds);
  }



      `;

  return str;

}

export default Help_code;
