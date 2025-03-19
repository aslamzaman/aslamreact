"use client"
import React, { useEffect, useState } from "react";
import { TextEn } from "@/components/Form";

import Page from "@/components/code/Page";
import Add from "@/components/code/Add";
import Edit from "@/components/code/Edit";
import Delete from "@/components/code/Delete";
import LayoutPage from "@/components/code/LayoutPage";
import Help_code from "@/components/code/HelpCode";
import Helper_code from "@/components/code/Helper";
import TwoPart from "@/components/code/TowPart";
import OnePage from "@/components/code/OnePage";
import Excle from "@/components/code/Excel";
import FirebaseConfig from "@/components/code/FirebaseConfig";
import FirebaseFunction from "@/components/code/FirebaseFunction";
import MongooseDB from "@/components/code/MongooseDB";
import MongooseModels from "@/components/code/MongooseModels";
import MongooseRoute from "@/components/code/MongooseRoute";
import MongooseRouteDynamic from "@/components/code/MongooseRouteDynamic";
import FetchData from "@/components/code/FetchData";
import Server from "@/components/code/Server";
import LoadImages from "@/components/code/LoadImages";
import { SampleReactToPrint } from "@/components/code/SampleReactToPrint";
import { jsPDFFunction } from "@/components/code/JsPdfFunction";
import { Utilities } from "@/components/code/Utilities";
import { titleCamelCase } from "@/lib/utils";
import Html2Canvas from "@/components/code/html2Canvas";




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






const Code = () => {
    const [tbl, setTbl] = useState("");
    const [fld, setFld] = useState("");
    const [titleText, setTitleText] = useState("Result");
    const [result, setResult] = useState("");



    useEffect(() => {
        const newTbl = localStorage.getItem('tbl');
        const newFld = localStorage.getItem('fld');
        setTbl(newTbl ? newTbl : "post");
        setFld(newFld ? newFld : "name, address, createdAt");
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

    const HelpPageGenerate = () => {
        setTitleText(`Help`);
        setResult(Help_code(tbl));
    }


    const TwoPartHandle = () => {
        setTitleText(`app/${tbl}/page.js`);
        setResult(TwoPart(tbl, fld));
    }

    const OnePartHandle = () => {
        setTitleText(`app/${tbl}/page.js`);
        setResult(OnePage(tbl, fld));
    }

    const FirebaseConfigHandle = () => {
        setTitleText(`lib/firebaseConfig.js`);
        setResult(FirebaseConfig());
    }
    const FirebaseFunctionsHandle = () => {
        setTitleText(`lib/firebaseFunction.js`);
        setResult(FirebaseFunction());
    }


    const MongooseHandle = () => {
        setTitleText(`lib/DB.js`);
        setResult(MongooseDB());
    }

    const MongooseModelHandle = () => {
        setTitleText(`lib/Models.js`);
        setResult(MongooseModels(tbl, fld));
    }

    const MongooseRouteHandle = () => {
        setTitleText(`api/post/route.js`);
        setResult(MongooseRoute(tbl, fld));
    }

    const MongooseRouteDynamicHandle = () => {
        setTitleText(`api/post/[id]/route.js`);
        setResult(MongooseRouteDynamic(tbl, fld));
    }

    const SampleReactToPrintHandle = () => {
        setTitleText(`components/${tbl}/PrintPage.js`);
        setResult(SampleReactToPrint());
    }

    const Html2CanvasHandler = () => {
        setResult(Html2Canvas());
    }


    const DropdownById = () => {
        const tblName = prompt("Collection Name, Referance Id(say: post, postId)");
        if (tblName === null || tblName === '') return false;

        const tbl = tblName.split(",").map(p => p.trim());
        console.log("a" + tbl[0] + ' n' + tbl[1]);
        if (tbl.length < 2) return false;
        console.log(tbl.length);
        let url = '`${process.env.NEXT_PUBLIC_BASE_URL}/api/' + tbl[0] + '`';

        let str = 'import { TextEn, BtnSubmit, DropdownEn } from "@/components/Form";\n';
        str = str + 'import {getDataFromFirebase} from "@/lib/utils";\n';
        str = str + "\n";
        str = str + `const [${tbl[0]}s, set${titleCase(tbl[0])}s] = useState([]);\n`;
        str = str + "\n";
        str = str + "\n";

        str = str + "try {\n";
        str = str + "    const response" + titleCase(tbl[0]) + ' = await getDataFromFirebase("' + tbl[0] + '");\n';
        str = str + "   set" + titleCase(tbl[0]) + "s(response" + titleCase(tbl[0]) + ");\n";
        str = str + "} catch (error) {\n";
        str = str + "    console.error('Failed to fetch delivery data:', error);\n";
        str = str + "}\n";

        str = str + "\n";
        str = str + "\n";


        str = str + `                                    <DropdownEn Title="${titleCase(tbl[0])}" Id="${tbl[1]}" Change={e=> set${FirstCap(tbl[1])}(e.target.value)} Value={${tbl[1]}}>\n`;
        str = str + `                                        {${tbl[0]}s.length?${tbl[0]}s.map(${tbl[0]}=><option value={${tbl[0]}.id} key={${tbl[0]}.id}>{${tbl[0]}.id}</option>):null}\n`;

        str = str + `                                    </DropdownEn>\n`;


        setResult(str);
    }


    const JoinCollections = () => {
        const tbls = prompt("Collections name");
        if (tbls === null || tbls === '') return false;
        const sp = tbls.split(',');


        const tbName = sp.map(t => ' ' + t.trim() + 's').toString();

        let str = "";
        str = str + 'import React, { useState, useEffect } from "react";\n';
        str = str + 'import {getDataFromFirebase, sortArray} from "@/lib/utils";\n';
        str = str + "\n";

        str = str + `    const [${sp[0].trim()}s, set${titleCase(sp[0].trim())}s] = useState([]);\n`;

        str = str + "\n";


        str = str + "    const fetchData = async () => {\n";
        str = str + "        setWaitMsg('Please Wait...');\n";
        str = str + "        try {\n";
        str = str + "            const [" + tbName + " ] = await Promise.all([\n";
        let s1 = "";
        for (let i = 0; i < sp.length - 1; i++) {
            s1 = s1 + '                getDataFromFirebase("' + sp[i].trim() + '"),\n';
        }

        s1 = s1 + '                getDataFromFirebase("' + sp[sp.length - 1].trim() + '")\n';
        str = str + s1;
        str = str + "            ]);\n\n"


        str = str + "\n";
        str = str + `            const joinCollection = ${sp[0].trim()}s.map(${sp[0].trim()}=>{\n`;
        str = str + `                return {\n`;
        str = str + '                   ...' + sp[0].trim() + ',\n';

        let m3 = "";
        for (let i = 1; i < sp.length - 1; i++) {
            m3 = m3 + '                   ' + sp[i].trim() + ' : ' + sp[i].trim() + 's.find(' + sp[i].trim() + ' => ' + sp[i].trim() + '.id === ' + sp[0].trim() + '.' + sp[i].trim() + 'Id) || {},\n';;
        }

        m3 = m3 + '                   ' + sp[sp.length - 1].trim() + ' : ' + sp[sp.length - 1].trim() + 's.find(' + sp[sp.length - 1].trim() + ' => ' + sp[sp.length - 1].trim() + '.id ===' + sp[0].trim() + '.' + sp[sp.length - 1].trim() + 'Id) || {}\n';;

        str = str + m3;
        str = str + `                }\n`;
        str = str + `            });\n`;
        str = str + "\n";
        str = str + "            const sortedData = joinCollection.sort((a, b) => sortArray(new Date(b.createdAt), new Date(a.createdAt)));\n";
        str = str + "            set" + titleCase(sp[0]) + "s(sortedData);\n";
        str = str + "            setWaitMsg('');\n";
        str = str + "        } catch (error) {\n";
        str = str + '            console.error("Error fetching data:", error);\n';
        str = str + "            setWaitMsg('Failed to fetch data. Please try again.');\n";
        str = str + "        }\n";

        str = str + "    };\n";

        str = str + "\n";
        str = str + "    fetchData();\n";
        setResult(str);

    }


    const resultChangeHander = (e) => {
        setResult(e.target.value);
    }


    const ExcelGenerate = () => {
        setTitleText(`components/${tbl}/Excel.js`);
        setResult(Excle());
    }


    const copyPageHandler = () => {
        navigator.clipboard.writeText(result);
    }

    const helpJsPdf = () => {
        setTitleText(`lib.js & page.js`);
        setResult(jsPDFFunction());
    }

    const fetchData = () => {
        setTitleText(``);
        setResult(FetchData());
    }

    const serverData = () => {
        setTitleText(``);
        setResult(Server());
    }

    const UtilitiesPageGenerate = () => {
        setTitleText(``);
        setResult(Utilities());
    }

    const LoadImagesHandle = () => {
        setTitleText(``);
        setResult(LoadImages());
    }

    const HelperGenerate = () => {
        setTitleText(`helpers/${titleCamelCase(tbl)}Helpers.js`);
        setResult(Helper_code(tbl));
    }



    return (
        <div className="pb-10">
            <h1 className="w-full text-center text-3xl text-gray-500 font-bold py-7">Nextjs Code Generator</h1>
            <p className="w-full text-center text-gray-400">npx create-next-app@14.1.3</p>

            <div className="w-full px-4 grid grid-cols-5 gap-4 mt-12">
                <div>
                    <TextEn Title="Table (staff)" Id="tbl" Change={e => setTbl(e.target.value)} Value={tbl} Chr={20} />
                </div>

                <div className="col-span-4">
                    <TextEn Title="Column (name, address, createdAt)" Id="fld" Change={e => setFld(e.target.value)} Value={fld} Chr={500} />
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
                    <BtnEn Title="Helpers" Click={HelperGenerate} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="Two Part" Click={TwoPartHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="One Page" Click={OnePartHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="DropdownById" Click={DropdownById} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="Joint Table" Click={JoinCollections} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="Excel" Click={ExcelGenerate} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="FirebaseConfig" Click={FirebaseConfigHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="FirebaseFunctions" Click={FirebaseFunctionsHandle} Class="px-1 bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="MongooseDB" Click={MongooseHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="MongooseModel" Click={MongooseModelHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="MongooseRoute" Click={MongooseRouteHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="DynamicRoute" Click={MongooseRouteDynamicHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="FetchData" Click={fetchData} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="Server" Click={serverData} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="Help" Click={HelpPageGenerate} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="Utils" Click={UtilitiesPageGenerate} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="Help-jsPDF" Click={helpJsPdf} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="ReactToPrint" Click={SampleReactToPrintHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="MergeImages" Click={LoadImagesHandle} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
                    <BtnEn Title="Html2Canvas" Click={Html2CanvasHandler} Class="bg-indigo-700 hover:bg-indigo-900 text-white mr-1 text-xs" />
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
export default Code;
