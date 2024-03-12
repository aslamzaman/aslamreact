import React, { useState } from "react";
import {BtnEn, TextFile, Button, InputFile } from "../Form";
import { Close } from "../Icons";
import { fetchAll, fetchOne, updateOne } from "../DexieDatabase";


const Picture = ({ children, Msg, Id }) => {
    const [pidId, setPicId] = useState("");
    const [data, setData] = useState("");

    const [show, setShow] = useState(false);

    const [file, setFile] = useState("");
    const [imgTitle, setImgTitle] = useState("Picture (Max size: 100kb)");
    const [imgTitleColor, setImgTitleColor] = useState("text-gray-900");
    const [msg, setMsg] = useState("Data ready");

    const pictureShow = async () => {
        setShow(true);
        Msg("Ready to print");
        try {
            const staffData = await fetchOne("staff", Id);
            console.log(staffData.picture_id);
            setPicId(staffData.picture_id);
            setImgTitle(staffData.nm_en);
          
        } catch (error) {
            console.log(`Error fetching staff data: ${error}`);
        }
    }




    const createPictureData = async () => {
       const newObj =  {
            id: pidId,
            data: await convertImageToBase64(file)
        }

        try {

          //  const updatedPictureId = await updateOne("picture", pictureData);
          //  console.log(`Picture with id ${updatedPictureId} updated successfully.`);
            Msg("Picture updated successfully.");
        } catch (error) {
            console.log(`Error updating staff data: ${error}`);
            Msg("Picture updating error");
        }
        setShow(false);
    }

const updatePictureHandler = ()=>{
    if(!file){
        setMsg("Please select a jpg file");
        return false;
    }
    setShow(false);
}


    return (
        <>
            <div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>
                <div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                    <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                        <h1 className="text-xl font-bold text-blue-600">Change Picture</h1>
                        <Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-8 h-8" />
                    </div>

                    <div className="p-6 text-black">   
                    <p className="w-full text-start text-sm text-red-700">{msg}</p>                    
                        <img src={`images/staffs/${pidId}.jpg`} className="w-54 mx-auto" alt="staff pic"  />
                        <TextFile Title={imgTitle} Class={imgTitleColor} Id={pidId} Change={e => setFile(e.target.files[0])} Accept=".jpg" />
                    </div>

                    <div className="px-6 py-6 flex justify-end items-center border-t border-gray-300">
                        <BtnEn Title="Close" Click={() => { setShow(false); Msg("Data ready") }} Class="bg-red-600 hover:bg-red-800 text-white mr-1" />
                        <BtnEn Title="Save" Click={updatePictureHandler} Class="bg-blue-600 hover:bg-blue-800 text-white" />
                    </div>
                </div>
            </div>

            <button onClick={pictureShow} title="Print" className="w-8 h-8 rounded-full hover:bg-gray-50 mr-1 flex justify-center items-center">
                {children}
            </button>
        </>
    )
}
export default Picture;
