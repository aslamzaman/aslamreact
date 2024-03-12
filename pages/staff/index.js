import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/staff/Add";
import Edit from "../../components/staff/Edit";
import Delete from "../../components/staff/Delete";
import Print from "../../components/staff/Print";
import { fetchAll } from "../../components/DexieDatabase";
import { Lib } from "@/utils/Lib";
import { DropdownEn, BtnSubmit } from "../../components/Form";



const Staff = () => {
  const [staffs, setStaffs] = useState([]);
  const [msg, setMsg] = useState("Data ready");

  const [info, setInfo] = useState("");


  useEffect(() => {
    const loadStaffData = async () => {
      try {
        const [staffData, genderData, postData, projectData, placeData, unitData] = await Promise.all([
          fetchAll("staff"),
          fetchAll("gender"),
          fetchAll("post"),
          fetchAll("project"),
          fetchAll("place"),
          fetchAll("unit")
        ]);

        const filterData = staffData.filter(s => parseInt(s.status) === 1);

        const joinData = filterData.map(s => {
          const matchGender = genderData.find(g => parseInt(g.id) === parseInt(s.gender_id));
          const matchPost = postData.find(p => parseInt(p.id) === parseInt(s.post_id));
          const matchProject = projectData.find(pr => parseInt(pr.id) === parseInt(s.project_id));
          const matchPlace = placeData.find(pl => parseInt(pl.id) === parseInt(s.place_id));
          const matchUnit = unitData.find(u => parseInt(u.id) === parseInt(s.unit_id));
          return {
            ...s,
            gender: matchGender.name,
            post: matchPost.nm_en,
            project: matchProject.name,
            place: matchPlace.name,
            unit: matchUnit.nm_en
          }
        })

        const SortByEmpId = joinData.sort((a, b) => {
          if (parseInt(a.emp_id) < parseInt(b.emp_id)) {
            return -1;
          } else {
            return 1;
          }
        });

        setStaffs(SortByEmpId || []);

        const totalTaka = filterData.reduce((a, c) => a + parseFloat(c.sal), 0,);
        const maleStaff = filterData.filter(s => parseInt(s.gender_id) === 1699883968522);
        const femaleStaff = filterData.filter(s => parseInt(s.gender_id) === 1699884011250);
        const malePercent = (maleStaff.length / filterData.length) * 100;
        const femalePercent = (femaleStaff.length / filterData.length) * 100;

        setInfo(`Total staff = ${filterData.length}; Male=${malePercent.toFixed(2)}%, Female=${femalePercent.toFixed(2)}%, Monthly salary=${Lib.util.numberWithCommas(totalTaka.toFixed(2))}`)

      } catch (error) {
        console.log(`Error loading staff data: ${error}`);
      }
    };
    loadStaffData();



  }, [msg]);


  const msgHandler = (data) => {
    setMsg(data);
  }





  return (
    <Layout Title="Staff">

      <div className="w-full mt-4">
        <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Staff</h1>
      </div>

      <div className="w-full overflow-auto">
        <div className="mt-6">
          <p className="w-full text-sm text-red-700">{msg}</p>
          <p className="py-2 text-purple-600">{info}</p>

          <table className="w-full border border-gray-200">
            <thead>
              <tr className="w-full bg-gray-200">
                <th className="text-center border-b border-gray-200 px-4 py-2"></th>
                <th className="text-center border-b border-gray-200 px-4 py-2">Name</th>
                <th className="text-center border-b border-gray-200 px-4 py-2">NameBangla</th>
                <th className="text-center border-b border-gray-200 px-4 py-2">Project</th>
                <th className="text-center border-b border-gray-200 px-4 py-2">Unit</th>
                <th className="text-center border-b border-gray-200 px-4 py-2">Age</th>
                <th className="font-normal text-start flex justify-end mt-1">
                  <Add Msg={msgHandler} />
                  <Print Msg={msgHandler} />
                </th>
              </tr>
            </thead>
            <tbody>
              {
                staffs.length ? staffs.map((staff) => {

                  return (
                    <tr className="border-b border-gray-200" key={staff.id}>
                      <td className="text-center py-2 px-4">
                        <img src={`/images/staffs/${staff.picture_id}.jpg`} alt={staff.nm_en} className="w-20  min-w-16 p-1 border-2" />
                      </td>
                      <td className="text-center py-2 px-4">
                        <span className="font-bold">Employee ID: {staff.emp_id}</span><br />
                        {staff.nm_un}<br />
                        {staff.nm_en}-{staff.post} <br />
                        ({staff.gender})<br />
                        {staff.dt}<br />

                      </td>

                      <td className="text-center py-2 px-4 font-SutonnyMJ_Regular">{staff.nm_bn}</td>
                      <td className="text-center py-2 px-4">{staff.project}</td>
                      <td className="text-center py-2 px-4">{staff.unit}</td>
                      <td className="text-center py-2 px-4">{Lib.util.Age(staff.dt)}</td>
                      <td className="flex justify-end items-center mt-1">
                        <Edit Msg={msgHandler} Id={staff.id} />
                        <Delete Msg={msgHandler} Id={staff.id} />
                      </td>
                    </tr>
                  )
                })
                  : null
              }
              <tr className="w-full bg-gray-200 font-bold">
                <td className="text-center py-2 px-4">Total</td>
                <td className="text-center py-2 px-4"></td>
                <td className="text-center py-2 px-4"></td>
                <td className="text-center py-2 px-4"></td>
                <td className="text-center py-2 px-4"></td>
                <td className="text-center py-2 px-4"></td>
                <td className="text-center py-2 px-4"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );

};
export default Staff;
