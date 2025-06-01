"use client"
import React, { useEffect, useState } from "react";
import { TextEn } from "@/components/Form";

import Page from "@/components/codemern/Page";
import Add from "@/components/codemern/Add";
import Edit from "@/components/codemern/Edit";
import Delete from "@/components/codemern/Delete";
import LayoutPage from "@/components/codemern/LayoutPage";
import MongooseDB from "@/components/codemern/MongooseDB";
import MongooseModels from "@/components/codemern/MongooseModels";
import MongooseRoute from "@/components/codemern/MongooseRoute";
import MongooseRouteDynamic from "@/components/codemern/MongooseRouteDynamic";
import { MongodbFunction } from "@/components/codemern/MongodbFetch";
import { Form } from "@/components/codemern/Form";
import { LoadingDot } from "@/components/codemern/LodingForm";



const titleCase = (str) => {
    return str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}



const FirstCap = (str) => {
    const firstLetter = str.substr(0, 1);
    const restLetter = str.substr(1, str.length - 1);
    const firstLetterCap = firstLetter.toUpperCase();
    const joinToOne = firstLetterCap + restLetter;
    return joinToOne
}



const BtnEn = ({ Title, Click, Class }) => {
    return (
        <button onClick={Click} className={`text-center p-1 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 ${Class} cursor-pointer`}>{Title}</button>

    )
}







const Codemern = () => {
    const [tbl, setTbl] = useState("");
    const [fld, setFld] = useState("");
    const [titleText, setTitleText] = useState("Result");
    const [result, setResult] = useState("");



    useEffect(() => {
        const newTbl = localStorage.getItem('tbl');
        const newFld = localStorage.getItem('fld');
        setTbl(newTbl ? newTbl : "post");
        setFld(newFld ? newFld : "name, address");
    }, []);




    const PageGenerate = () => {
        localStorage.setItem('tbl', tbl);
        localStorage.setItem('fld', fld);
        setTitleText(`app/${tbl}/page.js`);
        setResult(Page(tbl, fld));
    }


    const AddGenerate = () => {
        setTitleText(`components/${tbl}/Add.js`);
        setResult(Add(tbl, fld));
    }

    const EditGenerate = () => {
        setTitleText(`components/${tbl}/Edit.js`);
        setResult(Edit(tbl, fld));
    }

    const DeleteGenerate = () => {
        setTitleText(`components/${tbl}/Delete.js`);
        setResult(Delete(tbl, fld));
    }

    const LayoutPageGenerate = () => {
        setTitleText(`app/${tbl}/layout.js`);
        setResult(LayoutPage(tbl, fld));
    }

    const MongooseHandle = () => {
        setTitleText(`lib/db.js`);
        setResult(MongooseDB());
    }

    const MongooseModelHandle = () => {
        setTitleText(`lib/models.js`);
        setResult(MongooseModels(tbl, fld));
    }

    const MongooseRouteHandle = () => {
        setTitleText(`api/${tbl}/route.js`);
        setResult(MongooseRoute(tbl, fld));
    }

    const MongooseRouteDynamicHandle = () => {
        setTitleText(`api/${tbl}/[id]/route.js`);
        setResult(MongooseRouteDynamic(tbl, fld));
    }

    const MongooseFunctionHandle = () => {
        setTitleText(`lib/fetchData.js`);
        setResult(MongodbFunction());
    }


    const FormGenerate = () => {
        setTitleText(`components/Form.js`);
        setResult(Form());
    }


    const LoadingFormGenerate = () => {
        setTitleText(`components/LoadingDot.js`);
        setResult(LoadingDot());
    }


    const resultChangeHander = (e) => {
        setResult(e.target.value);
    }


    const copyPageHandler = () => {
        navigator.clipboard.writeText(result);
    }



    return (
        <div className="pb-10">
            <h1 className="w-full text-center text-3xl text-gray-500 font-bold pt-7">MERN Code Generator</h1>
            <p className="w-full text-center text-gray-400 text-xs">
                npx create-next-app@14.1.3<br />
                npm install idb-keyval@6.2.1<br />
                npm install mongoose@8.6.4
            </p>

            <div className="w-full px-4 grid grid-cols-5 gap-4 mt-8">
                <div>
                    <TextEn Title="Table (staff)" Id="tbl" Change={e => setTbl(e.target.value)} Value={tbl} Chr={20} />
                </div>

                <div className="col-span-4">
                    <TextEn Title="Column (name, address)" Id="fld" Change={e => setFld(e.target.value)} Value={fld} Chr={500} />
                </div>
            </div>


            <div className="w-full grid grid-cols-5 gap-2">
                <div className="w-full col-span-2 py-6">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 overflow-auto">

                        <BtnEn Title="Page" Click={PageGenerate} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                        <BtnEn Title="LayoutPage" Click={LayoutPageGenerate} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                        <BtnEn Title="Add" Click={AddGenerate} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                        <BtnEn Title="Edit" Click={EditGenerate} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                        <BtnEn Title="Delete" Click={DeleteGenerate} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                        <BtnEn Title="MongooseDB" Click={MongooseHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                        <BtnEn Title="Model" Click={MongooseModelHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                        <BtnEn Title="Route" Click={MongooseRouteHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                        <BtnEn Title="Dynamic Route" Click={MongooseRouteDynamicHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                        <BtnEn Title="FetchFunctions" Click={MongooseFunctionHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                        <BtnEn Title="Form" Click={FormGenerate} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                        <BtnEn Title="LoadingForm" Click={LoadingFormGenerate} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />

                    </div>
                </div>

                <div className="col-span-3 py-4 max-h-[800px] overflow-auto">
                    <div className="w-full flex justify-between">
                        <p>{titleText}</p>
                        <button className="px-3 py-0.5 border border-gray-300 rounded-full hover:font-bold" onClick={copyPageHandler}>Copy</button>
                    </div>
                    <textarea rows={20} id="result" name="result" onChange={resultChangeHander} value={result} required maxLength={2500} className="w-full px-4 my-1.5 text-gray-600 ring-1 focus:ring-4 ring-blue-300 outline-none rounded duration-300" />

                </div>


            </div>
        </div>
    )

}
export default Codemern;
