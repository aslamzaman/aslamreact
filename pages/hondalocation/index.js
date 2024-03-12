import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/hondalocation/Add";
import Edit from "../../components/hondalocation/Edit";
import Delete from "../../components/hondalocation/Delete";
import { fetchAll, fetchOne } from "../../components/DexieDatabase";
import { Lib } from "../../utils/Lib";
import { Left } from "../../components/Icons";
import { useRouter } from "next/router";




const Hondalocation = () => {
  const [hondalocations, setHondalocations] = useState([]);
  const [honda, setHonda] = useState("");
  const [msg, setMsg] = useState("Data ready");

  const router = useRouter();

  const [user, setUser] = useState("");


  useEffect(() => {
    const loadHondalocationData = async () => {
      try {
        
        const hondaId = sessionStorage.getItem("hondaId");
        const [hondalocationData, hondas, projects, units] = await Promise.all([
          fetchAll("hondalocation"),
          fetchAll("honda"),
          fetchAll("project"),
          fetchAll("unit")
        ]);

        const result = hondalocationData.filter(l => parseInt(l.honda_id) === parseInt(hondaId));
        setHondalocations(result?result:[]);

        const searchHonda = hondas.map(h=>{
          const matchProject = projects.find(p=>parseInt(p.id)===parseInt(h.project_id));
          const matchUnit = units.find(u=>parseInt(u.id)===parseInt(h.unit_id));
          return{
            ...h,
            project: matchProject.name,
            unit: matchUnit.nm_en
          }
        })
        const oneHonde = searchHonda.find(h => parseInt(h.id) === parseInt(hondaId));
        setHonda(oneHonde);
       

      } catch (error) {
        console.log(`Error loading hondalocation data: ${error}`);
      }
    };
    loadHondalocationData();

  }, [msg]);


  const msgHandler = (data) => {
    setMsg(data);
  }

const backHandler = ()=>{
  router.push("/honda");
}


  return (
    <Layout Title="Hondalocation">

      <div className="w-full mt-4">
        <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Honda Location</h1>
        <p>
          Registration: {honda.registration}<br />
          Unit: {honda.unit}<br />
          Project: {honda.project}<br />
          Registration Date: {honda.reg_dt}<br />
          Age: {Lib.util.Age(honda.reg_dt)}yrs.
        </p>
      </div>

      <div className="w-full overflow-auto">
        <div className="mt-6">
          <p className="w-full text-sm text-red-700">{msg}</p>
          <div className="pl-1 flex items-center space-x-1">
            <Left Click={backHandler} Size="w-7 h-7" />
            <p>Back</p>
          </div>

          <table className="w-full border border-gray-200">
            <thead>
              <tr className="w-full bg-gray-200">
                <th className="text-center border-b border-gray-200 px-4 py-2">Date</th>
                <th className="text-center border-b border-gray-200 px-4 py-2">Name</th>
                <th className="text-center border-b border-gray-200 px-4 py-2">Desig</th>
                <th className="text-center border-b border-gray-200 px-4 py-2">Mobile</th>
                <th className="text-center border-b border-gray-200 px-4 py-2">Location</th>
                <th className="text-center border-b border-gray-200 px-4 py-2">Project</th>
                <th className="text-center border-b border-gray-200 px-4 py-2">Remarks</th>
                <th className="font-normal text-start flex justify-end mt-1">
                  <Add Msg={msgHandler} />
                </th>
              </tr>
            </thead>
            <tbody>
              {
                hondalocations.length ? hondalocations.map((hondalocation) => {
                  return (
                    <tr className="border-b border-gray-200" key={hondalocation.id}>
                      <td className="text-center py-2 px-4">{hondalocation.dt}</td>
                      <td className="text-center py-2 px-4">{hondalocation.name}</td>
                      <td className="text-center py-2 px-4">{hondalocation.desig}</td>
                      <td className="text-center py-2 px-4">{hondalocation.mobile}</td>
                      <td className="text-center py-2 px-4">{hondalocation.location}</td>
                      <td className="text-center py-2 px-4">{hondalocation.project}</td>
                      <td className="text-center py-2 px-4">{hondalocation.remarks}</td>
                      <td className="flex justify-end items-center mt-1">
                        <Edit Msg={msgHandler} Id={hondalocation.id} />
                        <Delete Msg={msgHandler} Id={hondalocation.id} />
                      </td>
                    </tr>
                  )
                })
                  : null
              }
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );

};
export default Hondalocation;
