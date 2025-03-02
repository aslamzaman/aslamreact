const Excle = () => {

const ab = "`attachment; filename=${filename}`";
const api = "`${process.env.NEXT_PUBLIC_BASE_URL}/api/attendance`";


  const str = `npm install xlsx@0.18.5
// Upload an excel file and convert into JSON file ------------------------------------
import * as XLSX from 'xlsx';
// <input type="file" onChange={fileChangeHandler} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />

// Upload an excel file and convert into CSV file ------------------------------------

 const convertCsvToJson = (csv, headerArray) => {
        const lines = csv.split("\\n"); // Trim and split into rows
        const dataRows = lines.slice(1);  // Deduct first row
        return dataRows.map(item => {
            const values = item.split(";").map(value => value.trim());
            let result = {};
            for (let i = 0; i < headerArray.length; i++) {
                result = { ...result, [headerArray[i]]: values[i] }
            }
            return result;
        })
    }

const convertExcelToJson = (file, headerArray) => {
        return new Promise((result, rejec) => {
            try {
                const reader = new FileReader();
                reader.onload = () => {
                    const workbook = XLSX.read(reader.result, { type: "binary" });
                    const sheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[sheetName];
                    const csvFile = XLSX.utils.sheet_to_csv(worksheet, { FS: ";" });
                    const data = convertCsvToJson(csvFile, headerArray);
                    result(data);
                }
                reader.readAsArrayBuffer(file);
            } catch (error) {
                rejec(error);
            }
        })
    }


 const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        const data = await convertExcelToJson(file, ["sl", "name", "date", "mobile"]);
        console.log(data);
    }


//------------------------------------------------------------------------
//------------------------------------------------------------------------
//------------------------------------------------------------------------

// Create and Download as an excel file convert into JSON file ------------------------------------
const saveJsonToExcelSheet = (jsonData) => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1"); // Change "Sheet1" name
    XLSX.writeFile(workbook, "data.xlsx"); // Change "data.xlsx" filename
}

const downloadHandler = () => {
    let localStorageData = localStorage.getItem("registration");
    saveJsonToExcelSheet(JSON.parse(localStorageData)); // Pure JSON
}




//----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------



// npm install xlsx-populate@1.21.0
// Create and Download with server API as an excel file with styling convert into JSON file ---------
// Api route.js
import { NextResponse } from 'next/server';
import XlsxPopulate from 'xlsx-populate';

export const POST = async (Request) => {
    try {
        const data = await Request.json();
        const workbook = await XlsxPopulate.fromBlankAsync();
        const sheet = workbook.sheet("Sheet1").name("Worksheet");
        //----------------------------------------------------------------------------------------------
        const WorksheetOptions0 = workbook.addSheet("WorksheetOptions4");
        anyData.forEach((item, index) => {
            WorksheetOptions0.cell("A1").value("Md Jamal Uddin");
            WorksheetOptions0.cell("B1").value(item.num);
        });

        // Hide the sheet with the dropdown values
        WorksheetOptions0.hidden(true);

        sheet.range("B4:B50").dataValidation({
            type: 'list',
            formula1: 'WorksheetOptions4!$A$1:$A$12491',
            allowBlank: false,
            showInputMessage: false,
            showErrorMessage: false
        });

        sheet.range("A1:C1").merged(true);
        sheet.range("A3:C3").style({ fill: 'bfdbf5' });
        sheet.column("A").width(10);
        sheet.column("B").width(30);
        sheet.column("C").width(18);

        //Style
        sheet.cell("C1").formula("SUM(C1:C3)").style({numberFormat: '@', fill: 'bfdbf5', fontSize: 10, border: true, bold: true, horizontalAlignment: 'center', verticalAlignment: 'center' });
        // or
        sheet.cell('D1').value("Attendance sheet").style({numberFormat: '@', fill: '5b92e5', horizontalAlignment: 'center', verticalAlignment: 'center' });

        data.forEach((item, i) => {
            sheet.cell("A1").value("Md. Jamal");
            sheet.cell("B1").value("Md. Kamal");
            sheet.cell("C1").value(50);
        })

        // Generate the Excel file as a buffer
        const buffer = await workbook.outputAsync();

        // Set headers for file download
        const filename = "output.xlsx"; // Set your desired filename here
        const headers = new Headers();
        headers.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        headers.set('Content-Disposition', ${ab});

        // Return the buffer directly for download
        return new NextResponse(buffer, {
            status: 200,
            headers: headers
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Error generating Excel file", err }, { status: 500 });
    }
};



// Api call from front-end
const formSubmitHandler = async (e) => {
    setMsg("Please wait...");
    try {
        const newObject = createObject();
        const apiUrl = ${api};
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newObject)
        };

        const response = await fetch(apiUrl, requestOptions);

        if (response.ok) {
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = "Attendance.xlsx";
            document.body.appendChild(a);
            a.click();
            a.remove();
            console.log("Excel file created and downloaded.");
        } else {
            throw new Error("Failed to create Excel file");
        }
        setMsg("");
    } catch (error) {
        console.error("Error saving data:", error);
    }
};
      `;

  return str;

}

export default Excle;
