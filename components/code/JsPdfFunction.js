
export const jsPDFFunction = ()=>{

let str =`// npm install jspdf@2.5.1
// doc.addFont("fonts/TiroBangla-Regular.ttf", "Tiro Bangla", "normal");
// doc.setFont("Tiro Bangla", "normal"); // set font
// Function to print the header each pages
const printHeader = ({ doc }, dataFormat, margin) => {
    doc.setFont("times", "bold");
    dataFormat.forEach(item => {
        doc.text(
            \`\${item.head}\`, // Dynamic field value
            item.pos,              // X-position
            margin,                // Y-position
            item.aln               // Alignment
        );
    });
    doc.setFont("times", "normal");
}


// Function to print the first page
export const jsPDFPrintFirstPage = ({ doc }, data, dataFormat, margin) => {
    printHeader({ doc }, dataFormat, margin);
    let y = margin + 5
    doc.setFont("times", "normal");
    data.forEach(element => {
        dataFormat.forEach(item => {
            doc.text(
                \`\${element[item.fld]}\`, // Dynamic field value
                item.pos,              // X-position
                y,                // Y-position
                item.aln               // Alignment
            );
        });
        y += 5; // Increment margin for next row
    });
};

// Function to print subsequent pages
export const jsPDFPrintOtherPage = ({ doc }, data, dataFormat, margin, linesPerPage) => {
    printHeader({ doc }, dataFormat, margin);
    let currentY = margin + 5;
    doc.setFont("times", "normal");
    data.forEach((element, index) => {
        dataFormat.forEach(item => {
            doc.text(
                \`\${element[item.fld]}\`,
                item.pos,
                currentY,
                item.aln
            );
        });

        currentY += 5; // Increment for next row

        // Check if the current page limit is reached
        if ((index + 1) % linesPerPage === 0) {
            doc.addPage(); // Add a new page
            printHeader({ doc }, dataFormat, margin);
            currentY = margin + 5; // Reset Y-position for new page
        }
    });

    // Remove the last empty page if it was added unnecessarily
    const totalPages = doc.internal.getNumberOfPages();
    const remainingLines = data.length % linesPerPage;
    if (remainingLines === 0) {
        doc.deletePage(totalPages);
    }
};


// npm install jspdf@2.5.1
// import { jsPDFPrintFirstPage, jsPDFPrintOtherPage } from "@/lib/JspdfPrintPage";



    // Print handler
    const printMultiplePageHandler = () => {
        const doc = new jsPDF({
            orientation: 'p',    // Portrait orientation
            unit: 'mm',          // Unit of measurement in millimeters
            format: 'a4',        // A4 paper size
            putOnlyUsedFonts: true,
            floatPrecision: 16   // High precision for measurements
        });


        const salesNormalize = sales.map(sale => {
            const dt = formatedDateDot(sale.dt, true);
            const wgt = parseFloat(sale.weight).toFixed(2);
            const rte = parseFloat(sale.rate).toFixed(2);
            const rate = \`\${wgt}@\${rte}\`;
            const total = numberWithComma(sale.total, true);
            const nm = sale.customer;
            const itm = sale.item;
            const customer = nm.length >= 25 ? nm.substring(0, 23) + "..." : nm;
            const item = itm.length >= 15 ? itm.substring(0, 15) + "..." : itm;
            return {
                ...sale,
                customer, item, dt, rate, total
            }
        })


        const withTotal = [...salesNormalize, { dt: "", customer: 'Total', item: "", shipment: "", rate: "", total: numberWithComma(totalTaka, true) }];


        const dataFormat = [
            {
                head: 'Date',
                fld: 'dt',
                pos: 26,
                aln: 'center'
            },
            {
                head: 'Customer',
                fld: 'customer',
                pos: 43,
                aln: 'left'
            },
            {
                head: 'Item',
                fld: 'item',
                pos: 100,
                aln: 'left'
            },
            {
                head: 'Ship.',
                fld: 'shipment',
                pos: 135,
                aln: 'center'
            },
            {
                head: 'Rate',
                fld: 'rate',
                pos: 155,
                aln: 'center'
            },
            {
                head: 'Total',
                fld: 'total',
                pos: 194,
                aln: 'right'
            }
        ]

        doc.setFontSize(16);
        doc.setFont("times", "bold");
        doc.text("SALES REPORT", 105, 15, 'center');
        doc.setFontSize(10);
        doc.setFont("times", "normal");
        doc.text(\`Period: \${formatedDateDot(dt1)}-\${formatedDateDot(dt2)}\`, 105, 20, 'center');
        doc.text(\`Print Date: \${formatedDateDot(new Date())}\`, 194, 30, 'right');



        const firstPageData = withTotal.slice(0, 49);  // First 20 rows
        const otherPageData = withTotal.slice(49);     // Remaining rows

        // Print the first page
        jsPDFPrintFirstPage({ doc }, firstPageData, dataFormat, 35);
        // Add a new page and print subsequent pages
        if (otherPageData.length > 0) {
            doc.addPage();
            jsPDFPrintOtherPage({ doc }, otherPageData, dataFormat, 15, 54);
        }

        // Save the PDF with a timestamped filename
        doc.save(\`\${new Date().toISOString()}.pdf\`);
    };

//---------------------------------------------------------------------------------------------
//-----------------------jspdf-autotable----------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
    const dd = () => {
        // npm i jspdf-autotable@3.8.4
        // npm i jspdf@2.5.1
        // import jsPDF from 'jspdf'
        // import 'jspdf-autotable';
        const doc = new jsPDF();
        doc.autoTable({
            theme: 'grid',
            headStyles: {
                fillColor: 'white',
                textColor: "black"
            },            
            columnStyles: { 2: { halign: 'right', cellWidth: 20 } },  // 0, 1, 2, ...
            startY: 40, // Start position of the table
            tableWidth: 'auto',
            margin: { top: 20, botton: 20 },
           head: [
                [{ content: 'Name', styles: { halign: 'left', lineWidth: 0.1, } },
                { content: 'NameBn', styles: { halign: 'left', lineWidth: 0.1, } },
                { content: 'Join Date', styles: { halign: 'right', lineWidth: 0.1, } }],
            ], // Table headers           
            body: data.map(row => [row.id, row.mobile, row.salary]), // Table data
        });
        // Save the PDF
        const numOfPages = doc.internal.getNumberOfPages();
        const pageHeight = doc.internal.pageSize.getHeight();
        doc.setFontSize(10);
        for (let i = 1; i <= numOfPages; i++) {
            doc.setPage(i);
            doc.text(\`Page \${i}  of \${numOfPages}\`, 15, pageHeight - 10);
        }
        doc.save('database_information.pdf');
    }


------------------------------------------------------------------------------------
------------------------ Display on iframe -------------------------------------------------------

      // import { jsPDF } from "jspdf";
              const doc = new jsPDF({
                  orientation: 'p',
                  unit: 'mm',
                  format: 'a4',
                  putOnlyUsedFonts: true,
                  floatPrecision: 16 
              });
      
              doc.setFont("SutonnyMJ", "normal");
              doc.setFontSize(14);
              doc.text("Avmjvg Rvgvb", 10, 10, null, null, "left");
      
              doc.setDocumentProperties({ title: "Leave Calculator", subject:"Leave entry calculation", author: "Aslam Zaman", keywords:"leave, calculator, aslam", creator:"aslamreact.web.app" });
              const dataUrlString = doc.output('bloburl');
              console.log(dataUrlString);
      
              const iframe = document.createElement('iframe');
              iframe.setAttribute('src', dataUrlString);
              iframe.setAttribute('style', 'width:100%; height:400px; border:2px solid red; zoom: 0.70')
      
              const divRef = pageRef.current;
              divRef.appendChild(iframe);
  

`;
return str;

}
