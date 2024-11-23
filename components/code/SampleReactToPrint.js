export const SampleReactToPrint = ()=>{
let str =`
// npm install react-to-print@3.0.2
import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { formatedDateDot } from "@/lib/utils";
import { Tiro_Bangla } from 'next/font/google';
import { BtnEn } from "../Form";
const tiro = Tiro_Bangla({ subsets: ['bengali'], weight: "400" });


const PrintPage = ({ data }) => {
    const [show, setShow] = useState(false);
    const componentRef = useRef(null);
    
    const showPrintForm = async () => {
        setShow(true);
    }

    const closePrintForm = () => {
        setShow(false);
    }

    const pageStyle = \`@media print {
            @page {
                size: A4 portrait;
                margin: .75in;
            }
            footer{
                page-break-after: always;
            }    
            #noPrint{
                display:none;
            }  
            #page{
                font-size: 10px;
                font-family: Arial, Helvetica, sans-serif;
            }
        }\`;


    const printHandler = useReactToPrint({
        contentRef: componentRef,
        pageStyle: pageStyle,
        documentTitle: \`\${new Date().toISOString()}_Invoice\`,
    });



    return (
        <>
            {show && (
                <div className="fixed inset-0 py-16 bg-black bg-opacity-30 backdrop-blur-sm z-10 overflow-auto">
                    <div className="w-[794px] mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                        <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">

                            <h1 className="text-xl font-bold text-blue-600">Print Process Form</h1>
                            <div className="w-auto flex items-center space-x-4">
                                <button onClick={printHandler} className="w-8 h-8 p-0.5 bg-gray-50 hover:bg-gray-300 rounded-md ring-1 ring-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full p-[2px] stroke-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                                    </svg>
                                </button>

                                <button onClick={closePrintForm} className="w-8 h-8 p-0.5 bg-gray-50 hover:bg-gray-300 rounded-md ring-1 ring-gray-30">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full stroke-black">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                        <div className="w-full h-auto p-16">
                            <div ref={componentRef} className="w-full h-full text-black">

                                <div className="w-full flex justify-between items-center">
                                    <h1 className="text-2xl text-start font-bold leading-5 uppercase"><span className="text-red-700">your</span><br /><span className="text-blue-700">logo</span></h1>
                                    <p>No: 012121211</p>
                                </div>


                                <div className="mt-[48px] font-bold uppercase text-6xl bg-no-repeat bg-center bg-cover">invoice</div>


                                <p><span className="font-bold">Date: </span>{formatedDateDot(new Date(), true)}</p>

                                <br />
                                <br />


                                <div className="w-full grid grid-cols-2 gap-4">
                                    <p className="leading-none"><span className="font-bold">Billed to: </span><br />
                                        Sumona Haque Traders<br />
                                        56, Elephant Road<br />
                                        Dhaka - 1005<br />
                                        sumonatraders@gmail.com
                                    </p>


                                    <p className="leading-none text-end"><span className="font-bold">Billed from: </span><br />
                                        Sumona Haque Traders<br />
                                        56, Elephant Road<br />
                                        Dhaka - 1005<br />
                                        sumonatraders@gmail.com
                                    </p>
                                </div>
                                <br />
                                <table className="w-full border border-bray-500">
                                    <thead>
                                        <tr className="border border-bray-500 bg-gray-200">
                                            <th className="text-start pl-2">Name</th>
                                            <th className="text-start">Name</th>
                                            <th className="text-center">Id</th>
                                            <th className="text-end pr-2">Mobile</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length ? data.map(staff => (
                                            <tr className="border border-bray-500" key={staff.id}>
                                                <td className="text-start pl-2">{staff.nmEn}</td>
                                                <td className={\`text-start \${tiro.className}\`}>{staff.nmUn}</td>
                                                <td className="text-center">{staff.empId}</td>
                                                <td className="text-end pr-2">{staff.mobile}</td>
                                            </tr>
                                        )) : null}

                                    </tbody>
                                </table>


                                <br />
                                <p><span className="font-bold">Payment Method: </span>Cash</p>


                                <br />
                                <p><span className="font-bold">Note: </span>Thank you for choosing us</p>


                            </div>
                        </div>

                    </div>
                </div>
            )}
            <BtnEn Click={showPrintForm} Title="Print Form" Class="bg-blue-600 hover:bg-blue-800 text-white" />
        </>
    )
}
export default PrintPage;
`

return str'
}
