"use client"
import React, { useEffect, useRef, useState } from "react";
import { BtnEn, TextEn } from "@/components/Form";
import { Bree_Serif } from "next/font/google";

import { Page } from "@/components/codelocal/Page";
import { LayoutPage } from "@/components/codelocal/LayoutPage";
import { Add } from "@/components/codelocal/Add";
import { Edit } from "@/components/codelocal/Edit";
import { Delete } from "@/components/codelocal/Delete";
import { Upload } from "@/components/codelocal/Upload";
import { Download } from "@/components/codelocal/Download";
import { Database } from "@/components/codelocal/Database";



const saira = Bree_Serif({
    subsets: ['latin'],
    weight: ['400']
})



const CodeLocal = () => {
    const [tbl, setTbl] = useState("");
    const [fld, setFld] = useState("");

    const [pageText, setPageText] = useState("");
    const [titleTxt, setTitleTxt] = useState("");

    const [isCopied, setIsCopied] = useState(false);
    const [check, setCheck] = useState(false);

    useEffect(() => {
        const newTbl = localStorage.getItem('localTbl');
        const newFld = localStorage.getItem('localFld');
        setTbl(newTbl ? newTbl : "post");
        setFld(newFld ? newFld : "id, name, fname, age");
    }, []);

    const local = () => {
        localStorage.setItem('localTbl', tbl);
        localStorage.setItem('localFld', fld);
    }


    const pageCreateHandler = () => {
        local();
        setPageText(Page(tbl, fld, check));
        setTitleTxt(`app/${tbl}/page.js`);
    }

    const layoutCreateHandler = () => {
        local();
        setPageText(LayoutPage(tbl, fld));
        setTitleTxt(`app/${tbl}/layout.js`);
    }

    const addCreateHandler = () => {
        local();
        setPageText(Add(tbl, fld, check));
        setTitleTxt(`components/${tbl}/Add.js`);
    }


    const editCreateHandler = () => {
        local();
        setPageText(Edit(tbl, fld, check));
        setTitleTxt(`components/${tbl}/Edit.js`);
    }


    const deleteCreateHandler = () => {
        local();
        setPageText(Delete(tbl, fld, check));
        setTitleTxt(`components/${tbl}/Delete.js`);
    }



    const uploadCreateHandler = () => {
        local();
        setPageText(Upload(tbl, check));
        setTitleTxt(`components/${tbl}/Upload.js`);
    }
    const downloadCreateHandler = () => {
        local();
        setPageText(Download(tbl, check));
        setTitleTxt(`components/${tbl}/Download.js`);
    }

    const databaseHandler = () => {
        local();
        setPageText(Database(check));
        setTitleTxt(`lib/${check?'DatabaseLocalStorage':'DatabaseIndexedDB'}.js`);
    }



    const copyPageHandler = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(pageText);
        setTimeout(() => { setIsCopied(false) }, 500);
    }


    return (
        <div className="pb-10">
            <h1 className="w-full text-center text-3xl text-gray-500 font-bold py-4">Local Storage Code</h1>

            <div className="px-4 flex justify-start space-x-2">
                    <input onChange={e => setCheck(e.target.checked)} type="checkbox" checked={check} /> <span>localStorage</span>
                </div>
            <div className="w-full px-4 grid grid-cols-5 gap-4 mt-6">
                <div>
                    <TextEn Title="Table (staff)" Id="tbl" Change={e => setTbl(e.target.value)} Value={tbl} Chr={20} />
                </div>

                <div className="col-span-4">
                    <TextEn Title="Column (id,  name, address)" Id="fld" Change={e => setFld(e.target.value)} Value={fld} Chr={500} />
                </div>
            </div>
            <div className="w-full px-4 mt-2 flex space-x-2">
                <BtnEn Title="Page" Click={pageCreateHandler} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-sm" />
                <BtnEn Title="Layout" Click={layoutCreateHandler} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-sm" />
                <BtnEn Title="Add" Click={addCreateHandler} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-sm" />
                <BtnEn Title="Edit" Click={editCreateHandler} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-sm" />
                <BtnEn Title="Delete" Click={deleteCreateHandler} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-sm" />
                <BtnEn Title="Upload" Click={uploadCreateHandler} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-sm" />
                <BtnEn Title="Download" Click={downloadCreateHandler} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-sm" />
                <BtnEn Title="Database" Click={databaseHandler} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-sm" />
            </div>

            <div className="w-full p-4 overflow-auto">

                <div className="w-full mx-auto my-4 border border-gray-300 rounded-md">
                    <div className="w-full p-4 bg-gray-200 flex justify-between">
                        <div className="flex">
                            <h1 className="w-4 h-4 p-0 mt-1 text-xs bg-gray-500 text-white">JS</h1>
                            <h1 className="ml-3">{titleTxt}</h1>
                        </div>
                        <div className="relative">
                            {isCopied ? <h3 className="absolute top-[-10px] text-xs text-gray-600">Copied!</h3> : null}
                            <button className="ml-1 hover:font-bold" onClick={copyPageHandler}>Copy</button>
                        </div>
                    </div>
                    <pre className="p-4 bg-gray-100 overflow-auto">
                        <code className={saira.className}>
                            {pageText}
                        </code>
                    </pre>
                </div>

            </div>
        </div>
    )

}
export default CodeLocal;