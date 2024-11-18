
export const jsPDFFunction = ()=>{

let str =`
// Function to print the first page
const jsPDFPrintFirstPage = ({ doc }, data, dataFormat, margin) => {
    data.forEach(element => {
        dataFormat.forEach(item => {
            doc.text(
                \`\${element[item.fld]}\`, // Dynamic field value
                item.pos,              // X-position
                margin,                // Y-position
                item.aln               // Alignment
            );
        });
        margin += 5; // Increment margin for next row
    });
};

// Function to print subsequent pages
const jsPDFPrintOtherPage = ({ doc }, data, dataFormat, margin, linesPerPage) => {
    let currentY = margin;

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
            currentY = margin; // Reset Y-position for new page
        }
    });

    // Remove the last empty page if it was added unnecessarily
    const totalPages = doc.internal.getNumberOfPages();
    const remainingLines = data.length % linesPerPage;
    if (remainingLines === 0) {
        doc.deletePage(totalPages);
    }
};

// Print handler
const printHandler = () => {
    const doc = new jsPDF({
        orientation: 'p',    // Portrait orientation
        unit: 'mm',          // Unit of measurement in millimeters
        format: 'a4',        // A4 paper size
        putOnlyUsedFonts: true,
        floatPrecision: 16   // High precision for measurements
    });

    // Define how data fields will be positioned and aligned
    const dataFormat = [
        { fld: 'nmEn', pos: 20, aln: 'left' },
        { fld: 'salary', pos: 140, aln: 'right' },
        { fld: 'mobile', pos: 180, aln: 'center' }
    ];

    const firstPageData = staffs.slice(0, 20);  // First 20 rows
    const otherPageData = staffs.slice(20);     // Remaining rows

    // Print the first page
    jsPDFPrintFirstPage({ doc }, firstPageData, dataFormat, 20);

    // Add a new page and print subsequent pages
    if (otherPageData.length > 0) {
        doc.addPage();
        jsPDFPrintOtherPage({ doc }, otherPageData, dataFormat, 12, 40);
    }

    // Save the PDF with a timestamped filename
    doc.save(\`\${new Date().toISOString()}.pdf\`);
};
`;
return str;

}