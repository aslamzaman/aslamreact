
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



`;
return str;

}
