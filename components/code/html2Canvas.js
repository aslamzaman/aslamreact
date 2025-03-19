const Html2Canvas = () => {

    const str = `
 /*
    "use client";
    import React, { useState, useEffect, useRef } from "react";
    import { Tiro_Bangla } from 'next/font/google';
    import jsPDF from "jspdf";
    import html2canvas from "html2canvas";
    const tiro = Tiro_Bangla({ subsets: ['bengali'], weight: "400" });
    const contentRef = useRef(null);
    // npm install html2canvas@1.4.1
    // npm install jspdf@2.5.1
    
 */


   const Page = () => {
    const createPrintPage1 = async (e) => {
        e.preventDefault();

        const doc = new jsPDF({
            orientation: 'p',
            unit: 'px',
            format: 'a4'
        });
        // setBusy(true);
        const htmlElement = contentRef.current;
        const pageW = doc.internal.pageSize.getWidth();
        const pageH = doc.internal.pageSize.getHeight();

        for (let i = 0; i < increments.length; i++) {
            // all state
            setRef(increments[i].name);
            await delay(50);
            //-----------------------------
            const canvas = await html2canvas(htmlElement);
            const url = canvas.toDataURL('images/png');
            doc.addImage(url, 'PNG', 0, 0, pageW, pageH);
            doc.addPage('p');
        }

        doc.deletePage(increments.length + 1);
        doc.save("increement.pdf");
        //setBusy(false);
    }

    return (
        <>
            <div className="w-full mb-3 mt-8">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Increment</h1>
                {busy ? (
                    <div>
                        <div className="w-[20px] h-[20px] mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000ff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full p-0.5 stroke-black animate-ping">
                                <circle cx="12" cy="12" r="8" />
                            </svg>

                        </div>
                        <p className="text-center">Please wait..</p>
                    </div>
                ) : null}
            </div>

            <div className="w-[10px] h-[10px] overflow-auto">
                <div ref={contentRef} className="w-[2480px] h-[3508px] px-[300px] pt-[675px] pb-[300px] mx-auto">
                    <div className={\`w-full h-auto text-[50px] \${tiro.className}\`} >
                        <p>স্মারক নং-সিএমইএস/এইচআরডি/{convertDigitToUnicode('2025')}-{convertDigitToUnicode(ref)}<br />{formatedDateUnicode(dt)}</p>
                    </div>
                </div>
            </div>
        </>
        )
    };

    export default Page;
      `;

    return str;

}

export default Html2Canvas;
