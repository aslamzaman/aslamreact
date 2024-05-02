import React, { useState, useEffect } from "react";
import Layout from '../../components/Layout';
import {TextNum, BtnEn,DropdownEn } from "../../components/Form";
import { Panel, PanelHeader, PanelBody, PanelFooter } from "../../components/Panel";



const Octen = () => {
  const [preBalance, setPreBalance] = useState(156);
  const [octenUse, setOctenUse] = useState(20);
  const [currenMeter, setCurrenMeter] = useState(197);
  const [preMeter, setPreMeter] = useState(95);
  const [opt, setOpt] = useState("microbus");
  const [result, setResult] = useState("");
  const [resultColor, setResultColor] = useState({ color: "blue" });


  useEffect(() => {
    setResult("Result");
  }, [])

  const calculateHandler = (e) => {
    e.preventDefault();
    let km = 0;
    if (opt === 'microbus') {
      km = 4.5;
    }
    else {
      km = 4.3;
    }

    let ret = (parseFloat(preBalance) + (parseFloat(octenUse) * km)) - (parseFloat(currenMeter) - parseFloat(preMeter));


    if (parseFloat(currenMeter) < parseFloat(preMeter)) {
      setResultColor({ color: "red" });
      setResult("Current meter is smaller !");
    }
    else if (parseFloat(ret) < 0) {
      setResultColor({ color: "red" });
      setResult("Result is smaller !  [" + ret.toFixed(2) + "]");
    }
    else {
      setResultColor({ color: "blue" });
      setResult(ret.toFixed(2));
    }


  }

  return (

    <Layout>

      <div className="w-full md:w-10/12 lg:w-8/12 mx-auto py-6">
        <Panel>
          <PanelHeader Class="bg-gray-100">
            Octen (Fuel) Calculation
           </PanelHeader>
          <PanelBody>
            <h3 className="py-1 text-lg text-center font-semibold" style={resultColor}>{result}</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="w-full col-span-1 md:col-span-2">
                  <DropdownEn Title="Vehicle" Id="opt" Change={(e) => { setOpt(e.target.value) }} Value={opt}>
                    <option value="microbus">Microbus</option>
                    <option value="pajero">Pajero Jeep</option>
                  </DropdownEn>
                </div>

                <TextNum Title="Previous Balance (KM):" Id="preBalance" Change={(e) => { setPreBalance(e.target.value) }} Value={preBalance} />
                <TextNum Title="Octen Used:" Id="octenUse" Change={(e) => { setOctenUse(e.target.value) }} Value={octenUse} />



                <TextNum Title="Current Meter Reading:" Id="currenMeter" Change={(e) => { setCurrenMeter(e.target.value) }} Value={currenMeter} />
                <TextNum Title="Previous Meter Reading:" Id="preMeter" Change={(e) => { setPreMeter(e.target.value) }} Value={preMeter} />

              </div>
            </form>


          </PanelBody>
          <PanelFooter>
            <BtnEn Click={calculateHandler} Title="Calculate" Class="bg-indigo-800 hover:bg-indigo-900 text-white" />
          </PanelFooter>
        </Panel>
      </div>


    </Layout>
  );
};
export default Octen;

