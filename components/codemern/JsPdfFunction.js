
export const jsPDFFunction = ()=>{

let str =`
//-----------------------jspdf-autotable----------------------------------------------------------------------
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

        // Add new autoTable
        const newStarY = doc.lastAutoTable.finalY + 20;
        doc.autoTable({
            theme: 'grid',
            headStyles: {},
            columnStyles: {},
            startY: newStarY,
            tableWidth: 'auto',
            margin: { top: 20, botton: 20 },
            head: [],
            body: []

        })


        
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
