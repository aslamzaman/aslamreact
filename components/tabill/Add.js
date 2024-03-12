import React, { useState } from "react";
import { TextDt, TextTm, TextBn, BtnEn, TextNum, BtnSubmit, DropdownBn, TextEnDisabled } from "../Form";
import { Close } from "../Icons";
import { addItem, getItems } from "../LocalDatabase";
import { Lib } from "@/utils/Lib";

const vehicles = [
    { id: 1, item: "evm" },
    { id: 2, item: "wmGbwR" },
    { id: 3, item: "wi·v" },
    { id: 4, item: "ûÛv" },
    { id: 5, item: "f¨vb" },
    { id: 6, item: "†bŠKv" },
    { id: 7, item: "UÖvK" },
    { id: 8, item: "†ijMvwo" },
    { id: 9, item: "evBmvB‡Kj" },
    { id: 10, item: "A‡UvwiKkv" },
    { id: 11, item: "wba©vwiZ" }
]


const Add = ({ Msg }) => {
    const [dt, setDt] = useState("");
    const [place1, setPlace1] = useState("");
    const [tm1, setTm1] = useState("");
    const [place2, setPlace2] = useState("");
    const [tm2, setTm2] = useState("")
    const [vehicle, setVehicle] = useState("");
    const [taka, setTaka] = useState("");
    const [cause, setCause] = useState("");

    const [show, setShow] = useState(false);

    const [takaOnOff, setTakaOnOff] = useState(false);

    const resetStateVariables = () => {
        Msg("Ready to add new");
        setDt(Lib.util.dateFormat(new Date(), "-"));
        setPlace1("");
        setTm1("");
        setPlace2("");
        setTm2("");
        setVehicle("wba©vwiZ");
        setTaka("");
        setCause("");
        setTakaOnOff(true);
    }


    const createLocaltaObject = () => {
        return {
            id: Date.now(),
            dt: dt,
            place1: place1,
            tm1: tm1,
            place2: place2,
            tm2: tm2,
            vehicle: vehicle,
            taka: taka,
            cause: cause
        }
    }


    const addtHandler = () => {
        setShow(true);
        resetStateVariables();
    }

    const saveHandler = (e) => {
        e.preventDefault();
        const data = getItems("tabill");
        if (data.length >= 26) {
            Msg("You can no longer enter new data.");
            setShow(false);
            return false;
        }
        try {
            const tabillObject = createLocaltaObject();
            const ta = addItem("tabill", tabillObject);
            Msg(ta.message);
        } catch (error) {
            console.log(`Error saveing houserent data: ${error}`);
            Msg(ta.message);
        }
        setShow(false);
    }


    const vehicleChange = (e) => {
        setVehicle(e.target.value);
        if (e.target.value === "wba©vwiZ") {
            setTakaOnOff(true);
            setTaka(0);
        } else {
            setTakaOnOff(false);
            setTaka(0);
        }
    }


    return (
        <>
            <div className={`fixed inset-0 py-16 bg-gray-900 ${show ? 'block' : 'hidden'}  bg-opacity-60 overflow-auto`}>
                <div className="w-11/12 md:w-8/12 mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                    <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                        <h1 className="text-xl font-bold text-blue-600">Add New</h1>
                        <Close Click={() => { setShow(false); Msg("Data ready") }} Size="w-9 h-9" />
                    </div>

                    <div className="px-6 pb-6 text-black overflow-hidden">
                        <form onSubmit={saveHandler}>
                            <div className="grid grid-cols-1 gap-4 my-4">
                                <TextDt Title="Date" Id="dt" Change={e => setDt(e.target.value)} Value={dt} />
                                <TextBn Title="Place1" Id="place1" Change={e => setPlace1(e.target.value)} Value={place1} Chr="50" />
                                <TextTm Title="Time1" Id="tm1" Change={e => setTm1(e.target.value)} Value={tm1} />
                                <TextBn Title="Place2" Id="place2" Change={e => setPlace2(e.target.value)} Value={place2} Chr="50" />
                                <TextTm Title="Time2" Id="tm2" Change={e => setTm2(e.target.value)} Value={tm2} />
                                <DropdownBn Title="Vehicle" Id="vehicle" Change={vehicleChange} Value={vehicle}>
                                    {
                                        vehicles.map((v, i) => {
                                            return <option value={v.item} key={i}>{v.item}</option>
                                        })
                                    }
                                </DropdownBn>
                                {
                                    takaOnOff
                                        ? <TextEnDisabled Title="Taka" Id="taka" Change={e => setTaka(e.target.value)} Value={taka} />
                                        : <TextNum Title="Taka" Id="taka" Change={e => setTaka(e.target.value)} Value={taka} />
                                }


                                <TextBn Title="Cause" Id="cause" Change={e => setCause(e.target.value)} Value={cause} Chr="100" />
                            </div>
                            <BtnEn Title="Close" Click={() => { setShow(false); Msg("Data ready") }} Class="bg-red-600 hover:bg-red-800 text-white" />
                            <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                        </form>
                    </div>
                </div>
            </div>
            <button onClick={addtHandler} className="w-7 h-7 mr-2 bg-indigo-700 hover:bg-indigo-900 text-white flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </>
    )
}
export default Add;
