import React, { useState } from "react";
import Layout from "../../components/Layout";
import { BtnEn, TextEn, TextareaEn } from "../../components/Form";


import MongoIndex from "../../components/code/Mongo_index";
import MongoAdd from "../../components/code/Mongo_add";
import MongoEdit from "../../components/code/Mongo_edit";
import MongoDelete from "../../components/code/Mongo_delete";
import MongoPrint from "../../components/code/Mongo_print";

import Dexie_localIndex from "../../components/code/Dexie_local_index";
import Dexie_localAdd from "../../components/code/Dexie_local_add";
import Dexie_localEdit from "../../components/code/Dexie_local_edit";
import Dexie_localDelete from "../../components/code/Dexie_local_delete";
import Dexie_localPrint from "../../components/code/Dexie_local_print";

import LocalIndex from "../../components/code/Local_index";
import LocalAdd from "../../components/code/Local_add";
import LocalEdit from "../../components/code/Local_edit";
import LocalDelete from "../../components/code/Local_delete";
import LocalPrint from "../../components/code/Local_print";
import LocalUpload from "../../components/code/Local_upload";
import LocalDownload from "../../components/code/Local_download";

import LocalDatabase from "@/components/code/Local_database";
import MongoDatabase from "@/components/code/Mongo_database";
import DexieDatabase from "@/components/code/Dexie_database";
import FormCode from "@/components/code/Form_code";
import HelpCode from "@/components/code/Help_code";

import MysqlIndex from "../../components/code/Mysql_index";
import MysqlAdd from "../../components/code/Mysql_add";
import MysqlEdit from "../../components/code/Mysql_edit";
import MysqlDelete from "../../components/code/Mysql_delete";
import MysqlPrint from "../../components/code/Mysql_print";
import MysqlRoute from "../../components/code/Mysql_route";
import MysqlServer from "../../components/code/Mysql_server";
import MysqlDatabase from "../../components/code/Mysql_database";
import { titleCase } from "@/components/code/Fnc";


const CodeIndex = () => {
  const [tbl, setTbl] = useState("bayprostab");
  const [fld, setFld] = useState("id, name, project, dt, dept, subject, tor, bearer, data");
  const [result, setResult] = useState("");
  const [fileName, setFileName] = useState("");


  const MongoIndexHandler = () => {
    const regex = /`/g;
    setResult(MongoIndex(tbl, fld.replace(regex, "")));
    setFileName(tbl + '/index.js');
  }

  const MongoAddHandler = () => {
    const regex = /`/g;
    setResult(MongoAdd(tbl, fld.replace(regex, "")));
    setFileName(tbl + '/Add.js');
  }

  const MongoEditHandler = () => {
    const regex = /`/g;
    setResult(MongoEdit(tbl, fld.replace(regex, "")));
    setFileName('Edit.js');
  }

  const MongoDeleteHandler = () => {
    const regex = /`/g;
    setResult(MongoDelete(tbl, fld.replace(regex, "")));
    setFileName('Delete.js');
  }

  const MongoPrintHandler = () => {
    const regex = /`/g;
    setResult(MongoPrint(tbl, fld.replace(regex, "")));
    setFileName('Print.js');
  }



  //------------------------------------------------------------------------------------------

  const Dexie_localIndexHandler = () => {
    const regex = /`/g;
    setResult(Dexie_localIndex(tbl, fld.replace(regex, "")));
    setFileName(tbl + '/index.js');
  }

  const Dexie_localAddHandler = () => {
    const regex = /`/g;
    setResult(Dexie_localAdd(tbl, fld.replace(regex, "")));
    setFileName(tbl + '/Add.js');
  }

  const Dexie_localEditHandler = () => {
    const regex = /`/g;
    setResult(Dexie_localEdit(tbl, fld.replace(regex, "")));
    setFileName('Edit.js');
  }

  const Dexie_localDeleteHandler = () => {
    const regex = /`/g;
    setResult(Dexie_localDelete(tbl, fld.replace(regex, "")));
    setFileName('Delete.js');
  }

  const Dexie_localPrintHandler = () => {
    const regex = /`/g;
    setResult(Dexie_localPrint(tbl, fld.replace(regex, "")));
    setFileName('Print.js');
  }

  const UniqueHandlerIso = () => {
    setResult(new Date().toISOString());
    setFileName('Unique Id');
  }


  //------------------------------------------------------------------------------------------

  const LocalIndexHandler = () => {
    const regex = /`/g;
    setResult(LocalIndex(tbl, fld.replace(regex, "")));
    setFileName(tbl + '/index.js');
  }

  const LocalAddHandler = () => {
    const regex = /`/g;
    setResult(LocalAdd(tbl, fld.replace(regex, "")));
    setFileName(tbl + '/Add.js');
  }

  const LocalEditHandler = () => {
    const regex = /`/g;
    setResult(LocalEdit(tbl, fld.replace(regex, "")));
    setFileName('Edit.js');
  }

  const LocalDeleteHandler = () => {
    const regex = /`/g;
    setResult(LocalDelete(tbl, fld.replace(regex, "")));
    setFileName('Delete.js');
  }

  const LocalPrintHandler = () => {
    const regex = /`/g;
    setResult(LocalPrint(tbl, fld.replace(regex, "")));
    setFileName('Print.js');
  }


  const LocalUploadHandler = () => {
    const regex = /`/g;
    setResult(LocalUpload(tbl, fld.replace(regex, "")));
    setFileName('Upload.js');
  }

  const LocalDownloadHandler = () => {
    const regex = /`/g;
    setResult(LocalDownload(tbl, fld.replace(regex, "")));
    setFileName('Download.js');
  }


  //------------------------------------------------------------------------------------------

  const LocalDatabaseHandler = () => {
    setResult(LocalDatabase());
    setFileName('LocalDatabase.js');
  }

  const MongoDatabaseHandler = () => {
    setResult(MongoDatabase());
    setFileName('MongoDatabase.js');
  }

  const DexieDatabaseHandler = () => {
    setResult(DexieDatabase());
    setFileName('DexieDatabase.js');
  }


  const FormCodeHandler = () => {
    setResult(FormCode());
    setFileName('Form.js');
  }

  const ResultHelpHandler = () => {
    setResult(HelpCode(tbl));    
  }

  
  //----------------------------------------------------------


  const ResultMysqlIndex = () => {
    const regex = /`/g;
    setResult(MysqlIndex(tbl, fld.replace(regex, "")));
    setFileName(tbl + '/index.js');
  }

  const ResultMysqlAddHandler = () => {
    const regex = /`/g;
    setResult(MysqlAdd(tbl, fld.replace(regex, "")));
    setFileName(tbl + '/Add.js');
  }


  const ResultMysqlEditHandler = () => {
    const regex = /`/g;
    setResult(MysqlEdit(tbl, fld.replace(regex, "")));
    setFileName('Edit.js');
  }


  const ResultMysqlDeleteHandler = () => {
    const regex = /`/g;
    setResult(MysqlDelete(tbl, fld.replace(regex, "")));
    setFileName('Delete.js');
  }


  const ResultMysqlPrintHandler = () => {
    const regex = /`/g;
    setResult(MysqlPrint(tbl, fld.replace(regex, "")));
    setFileName('Print.js');
  }


  const ResultMysqlDatabaseHandler = () => {
    setResult(MysqlDatabase());
    setFileName('src/utils/Database.js');
  }



  const ResultMysqlServerHandler = () => {
    setResult(MysqlServer(tbl, fld));
    setFileName('index.js');
  };



  const ResultMysqlRouterHandler = () => {
    const regex = /`/g;
    setResult(MysqlRoute(tbl, fld.replace(regex, "")));
    setFileName('src/routes/' + titleCase(tbl) + 'Route.js');
  };



  return (
    <Layout Title="Code">
      <div className="w-full">
        <div className="w-full flex flex-col md:flex-row md:space-x-3">
          <div className="w-full md:w-3/12">
            <TextEn Title="Table Name" Id="tbl" Change={(e) => { setTbl(e.target.value); }} Value={tbl} Chr="50" />
          </div>
          <div className="w-full md:w-9/12">
            <TextEn Title="Fields" Id="fld" Change={(e) => { setFld(e.target.value); }} Value={fld} Chr="200" />
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row space-y-4 md:space-x-4 pb-10 overflow-auto">
          <div className="w-full md:w-4/12">

            <h1 className="text-blue-600 text-sm font-semibold p-2 mt-4">Dexie :-</h1>
            <div className="grid grid-cols-2 gap-x-2">
              <BtnEn Title="LocalPage" Click={Dexie_localIndexHandler} Class="bg-slate-500 hover:bg-slate-800 text-white w-full" />
              <BtnEn Title="LocalAdd" Click={Dexie_localAddHandler} Class="bg-blue-500 hover:bg-blue-800 text-white w-full" />
              <BtnEn Title="LocalEdit" Click={Dexie_localEditHandler} Class="bg-green-500 hover:bg-green-800 text-white w-full" />
              <BtnEn Title="LocalDelete" Click={Dexie_localDeleteHandler} Class="bg-pink-500 hover:bg-pink-800 text-white w-full" />
              <BtnEn Title="LocalPrint" Click={Dexie_localPrintHandler} Class="bg-gray-500 hover:bg-gray-800 text-white w-full" />
              <BtnEn Title="DexieDatabase" Click={DexieDatabaseHandler} Class="bg-green-500 hover:bg-green-800 text-white w-full" />
            </div>


            <h1 className="text-blue-600 text-sm font-semibold p-2 mt-4">Local :-</h1>
            <div className="grid grid-cols-2 gap-x-2">
              <BtnEn Title="LocalPage" Click={LocalIndexHandler} Class="bg-slate-500 hover:bg-slate-800 text-white w-full" />
              <BtnEn Title="LocalAdd" Click={LocalAddHandler} Class="bg-blue-500 hover:bg-blue-800 text-white w-full" />
              <BtnEn Title="LocalEdit" Click={LocalEditHandler} Class="bg-green-500 hover:bg-green-800 text-white w-full" />
              <BtnEn Title="LocalDelete" Click={LocalDeleteHandler} Class="bg-pink-500 hover:bg-pink-800 text-white w-full" />
              <BtnEn Title="LocalPrint" Click={LocalPrintHandler} Class="bg-gray-500 hover:bg-gray-800 text-white w-full" />
              <BtnEn Title="Upload" Click={LocalUploadHandler} Class="bg-red-500 hover:bg-red-800 text-white w-full" />
              <BtnEn Title="Download" Click={LocalDownloadHandler} Class="bg-red-500 hover:bg-red-800 text-white w-full" />
              <BtnEn Title="LocalDatabase" Click={LocalDatabaseHandler} Class="bg-slate-500 hover:bg-slate-800 text-white w-full" />
            </div>

            <h1 className="text-blue-600 text-sm font-semibold p-2 mt-4">Mysql :-</h1>
            <div className="grid grid-cols-2 gap-x-2">
              <BtnEn Title="MysqlIndex" Click={ResultMysqlIndex} Class="bg-slate-500 hover:bg-slate-800 text-white w-full" />
              <BtnEn Title="MysqlAdd" Click={ResultMysqlAddHandler} Class="bg-blue-500 hover:bg-blue-800 text-white w-full" />
              <BtnEn Title="MysqlEdit" Click={ResultMysqlEditHandler} Class="bg-green-500 hover:bg-green-800 text-white w-full" />
              <BtnEn Title="MysqlDelete" Click={ResultMysqlDeleteHandler} Class="bg-pink-500 hover:bg-pink-800 text-white w-full" />
              <BtnEn Title="MysqlPrint" Click={ResultMysqlPrintHandler} Class="bg-pink-500 hover:bg-pink-800 text-white w-full" />
              <BtnEn Title="MysqlDatabase" Click={ResultMysqlDatabaseHandler} Class="bg-gray-500 hover:bg-gray-800 text-white w-full" />
              <BtnEn Title="MysqlServer" Click={ResultMysqlServerHandler} Class="bg-blue-500 hover:bg-blue-800 text-white w-full" />
              <BtnEn Title="MysqlRouter" Click={ResultMysqlRouterHandler} Class="bg-red-500 hover:bg-red-800 text-white w-full" />
            </div>

            <h1 className="text-blue-600 text-sm font-semibold p-2 mt-4">Mongodb Realm:-</h1>
            <div className="grid grid-cols-2 gap-x-2">
              <BtnEn Title="MongoPage" Click={MongoIndexHandler} Class="bg-slate-500 hover:bg-slate-800 text-white w-full" />
              <BtnEn Title="MongoAdd" Click={MongoAddHandler} Class="bg-blue-500 hover:bg-blue-800 text-white w-full" />
              <BtnEn Title="MongoEdit" Click={MongoEditHandler} Class="bg-green-500 hover:bg-green-800 text-white w-full" />
              <BtnEn Title="MongoDelete" Click={MongoDeleteHandler} Class="bg-pink-500 hover:bg-pink-800 text-white w-full" />
              <BtnEn Title="MongoPrint" Click={MongoPrintHandler} Class="bg-gray-500 hover:bg-gray-800 text-white w-full" />
              <BtnEn Title="MongoDatabase" Click={MongoDatabaseHandler} Class="bg-blue-500 hover:bg-blue-800 text-white w-full" />
            </div>


            <h1 className="text-blue-600 text-sm font-semibold p-2 mt-4">Misc :-</h1>
            <div className="grid grid-cols-2 gap-x-2">
              <BtnEn Title="Forms" Click={FormCodeHandler} Class="bg-red-500 hover:bg-red-800 text-white w-full" />
              <BtnEn Title="Helper" Click={ResultHelpHandler} Class="bg-gray-500 hover:bg-gray-800 text-white w-full" />
            </div>
          </div>
          <div className="w-full md:w-8/12">
            <TextareaEn Title={fileName} Rows="41" Change={(e) => { setResult(e.target.value); }} Value={result} />

          </div>



        </div>


      </div>
    </Layout>
  )
}

export default CodeIndex
