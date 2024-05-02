import React, { useState } from "react";
import { TextEn, TextBn, TextNum, BtnEn } from "../../components/Form";
import Layout from "@/components/Layout";
import { Lib } from "@/utils/Lib";


const Uni = ({ Msg }) => {
    const [tk, setTk] = useState("12345");
    const [inword_en, setInword_en] = useState("");
    const [inword_bn, setInword_bn] = useState("");


    const resultHandler = () => {
        setInword_bn(Lib.util.inword.bn(tk));
        setInword_en(Lib.util.inword.en(tk));
    }


    return (
        <Layout Title="Inword">
            <div className="w-full lg:w-3/4 mx-auto p-4 mt-10 border-2 border-gray-300 rounded-md shadow-md">
                <div className="w-full mt-4">
                    <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Inword</h1>
                </div>

                <div className="w-full overflow-auto">
                    <div className="grid grid-col-1 gap-y-2 mt-6">
                        <TextNum Title="Number" Id="tk" Change={e => setTk(e.target.value)} Value={tk} />
                        <TextBn Title="Inword Bangla" Id="inword_bn" Change={e => setInword_bn(e.target.value)} Value={inword_bn} Chr="100" />
                        <TextEn Title="Inword English" Id="inword_en" Change={e => setInword_en(e.target.value)} Value={inword_en} Chr="100" />
                        <BtnEn Title="Result" Click={resultHandler} Class="w-36 bg-gray-600 hover:bg-gray-800 text-white" />
                    </div>
                </div>
            </div>
        </Layout>
    );

};
export default Uni;
