import { editPageInputText } from "./Fnc";
import { titleCamelCase } from "@/lib/utils"

const Edit = (tbl, datas) => {


    const replaceQutation = datas.replaceAll('`', '');
    const splitData = replaceQutation.split(",");
    const data = splitData.map(s => s.trim());

    //----------------------------------------------------------------

    const creatData = data.join(", ");
    const setData = data.map(item => (`                setName(${item});`));
    const setFinal = setData.join("\n");
    const createStateVarialble = data.map(item =>(`    const [${item}, set${titleCamelCase(item)}] = useState('');`));
    const createStateVarialbleFinal = createStateVarialble.join("\n");

    const str = `import React, { useState } from "react";
import { TextEn, BtnSubmit } from "@/components/Form";
import LoadingDot from "../LoadingDot";
import { getSingleDataFromMongoDB, updateDataToMongoDB } from "@/lib/fetchData";



const Edit = ({ message, id }) => {
${createStateVarialbleFinal}

    const [show, setShow] = useState(false);
    const [busy, setBusy] = useState(false);
    const [waitMsg, setWaitMsg] = useState("");


    const showEditForm = async () => {
            setShow(true);
            setWaitMsg("Please wait...");
            try{
                const url = \`\${process.env.NEXT_PUBLIC_BASE_URL}/api/${tbl}/\${id}\`;
                const { ${creatData} } = await getSingleDataFromMongoDB(url, '${tbl}', id);
${setFinal}              
            }catch(err){
                console.error(err);
            }finally{
                setWaitMsg("");
            }
    };


    const closeEditForm = () => {
        setShow(false);
		};


    const createObject = () => {
        return {${creatData}};
    }


    const saveHandler = async (e) => {
        e.preventDefault();
		setBusy(true);
        try {            
            const newObject = createObject();
            const url = \`\${process.env.NEXT_PUBLIC_BASE_URL}/api/${tbl}/\${id}\`;
            const msg = await updateDataToMongoDB(url, '${tbl}', newObject, id);
            message(msg);
        } catch (error) {
            console.error("Error saving ${tbl} data:", error);
            message("Error saving ${tbl} data.");
        }finally {
            setBusy(false);
            setShow(false);
        }
    }


    return (
        <>
            {busy ? <LoadingDot message="Please wait" /> : null}
            {show && (
                <div className="fixed left-0 top-[60px] right-0 bottom-0 p-4 bg-gray-500/50 z-10 overflow-auto">
                    <div className="w-full sm:w-11/12 md:w-9/12 lg:w-7/12 xl:w-1/2 mx-auto my-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-500">
                        <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                            <h1 className="text-xl font-bold text-blue-600">Edit Existing Data</h1>
                            <button onClick={closeEditForm} className="w-8 h-8 p-0.5 bg-gray-50 hover:bg-gray-300 rounded-md transition duration-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full stroke-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                        </div>
                        <div className="px-6 pb-6 text-black">
                            <p className="text-center">{waitMsg}</p>
                            <form onSubmit={saveHandler} >
                                <div className="grid grid-cols-1 gap-4 my-4">
${editPageInputText(data)}                                    
                                </div>
                                <div className="w-full mt-4 flex justify-start pointer-events-auto">
                                    <input type="button" onClick={closeEditForm} value="Close" className="bg-pink-600 hover:bg-pink-800 text-white text-center mt-3 mx-0.5 px-4 py-2 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 cursor-pointer" />
                                    <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={showEditForm} title="Edit" className="px-1 py-1 hover:bg-teal-300 rounded-md transition duration-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 stroke-black hover:stroke-blue-800 transition duration-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
            </button>
        </>
    )
}
export default Edit;






    `;

    return str;
}

export default Edit;
