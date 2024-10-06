"use client";
import React, { useState, useEffect } from "react";
import Add from "@/components/staff/Add";
import Edit from "@/components/staff/Edit";
import Delete from "@/components/staff/Delete";
const date_format = dt => new Date(dt).toISOString().split('T')[0];
import Image from "next/image";
import { Tiro_Bangla } from 'next/font/google';
const tiro = Tiro_Bangla({ subsets: ['bengali'], weight: "400" });
import { getDataFromFirebase } from "@/lib/utils";





const Staff = () => {
    const [staffs, setStaffs] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [waitMsg, setWaitMsg] = useState("");


    useEffect(() => {
        const getData = async () => {
            setWaitMsg('Please Wait...');
            try {
                const [staffs, projects, genders, units, posts, places] = await Promise.all([
                    getDataFromFirebase("staff"),
                    getDataFromFirebase("project"),
                    getDataFromFirebase("gender"),
                    getDataFromFirebase("unit"),
                    getDataFromFirebase("post"),
                    getDataFromFirebase("place")
                ]);

                const joinCollection = staffs.map(staff => {
                    return {
                        ...staff,
                        project: projects.find(project => project.id === staff.projectId) || {},
                        gender: genders.find(gender => gender.id === staff.genderId) || {},
                        unit: units.find(unit => unit.id === staff.unitId) || {},
                        post: posts.find(post => post.id === staff.postId) || {},
                        place: places.find(place => place.id === staff.placeId) || {}
                    }
                })
                console.log(joinCollection);

                const sortedStaffs = joinCollection.sort((a, b) => parseInt(a.empId) - parseInt(b.empId));
                setStaffs(sortedStaffs);
                setWaitMsg('');
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();

        // 20-15 =5
        // hgf
    }, [msg]);


    const messageHandler = (data) => {
        setMsg(data);
    }



    return (
        <>
            <div className="w-full mb-3 mt-8">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Staff</h1>
                <p className="w-full text-center text-blue-300">&nbsp;{waitMsg}&nbsp;</p>
            </div>

            <div className="px-4 lg:px-6">
                <p className="w-full text-sm text-red-700">{msg}</p>
                <div className="p-2 overflow-auto">
                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2"></th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Name</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Project</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Salary</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Unit</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Remarks</th>
                                <th className="w-[100px] font-normal">
                                    <div className="w-full flex justify-end py-0.5 pr-4">
                                        <Add message={messageHandler} />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffs.length ? (
                                staffs.map(staff => (
                                    <tr className="border-b border-gray-200 hover:bg-gray-100" key={staff.id}>

                                        <td className="min-w-40 text-center py-2 px-4">
                                            <div className="p-1 w-fit bg-blue-500">
                                                <Image src={staff.pictureUrl} alt={`${staff.nmEn} picture`} width={300} height={400} className="w-[100px] h-auto" />
                                            </div>
                                        </td>

                                        <td className="text-center py-2 px-4">
                                            <span className="font-bold"> Employee ID: {staff.empId}</span><br />
                                            <span className={tiro.className}> {staff.nmUn}</span><br />
                                            {staff.nmEn} - {staff.post.nmEn}<br />
                                            ({staff.gender.name})<br />
                                            Joining Date: {date_format(staff.joinDt)}<br />
                                            SC/Field: {staff.place.name} - Mobile: {staff.mobile}<br />
                                            Remarks: {staff.remarks}<br />
                                        </td>
                                        <td className="text-center py-2 px-4">{staff.project.name}</td>
                                        <td className="text-center py-2 px-4">{staff.salary}</td>
                                        <td className={`text-center py-2 px-4 ${tiro.className}`}>{staff.unit.nmUn}</td>
                                        <td className="text-center py-2 px-4">{staff.remarks}</td>
                                        <td className="h-44 flex justify-end items-center space-x-1 mt-1 mr-2">
                                            <Edit message={messageHandler} id={staff.id} data={staff} />
                                            <Delete message={messageHandler} id={staff.id} data={staff} />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={16} className="text-center py-10 px-4">
                                        Data not available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

};

export default Staff;


