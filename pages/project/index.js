import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/project/Add";
import Edit from "../../components/project/Edit";
import Delete from "../../components/project/Delete";
import Print from "../../components/project/Print";
import { fetchAll } from "../../components/DexieDatabase";


const Project = () => {
    const [projects, setProjects] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [user, setUser] = useState(false);

    useEffect(() => {
        const loadProjectData = async () => {
            try {
                const projectData = await fetchAll("project");
                setProjects(projectData || []);
                console.log(projectData);
            } catch (error) {
                console.log(`Error loading project data: ${error}`);
            }
        };
        loadProjectData();


        let log = sessionStorage.getItem("login");
        if (log === "login") {
            setUser(true);
        } else {
            setUser(false);
        }

    }, [msg]);


    const msgHandler = (data) => {
        setMsg(data);
    }


    return (
        <Layout Title="Project">

            <div className="w-full mt-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Project</h1>
            </div>

            <div className="w-full overflow-auto">
                <div className="mt-6">
                    <p className="w-full text-sm text-red-700">{msg}</p>


                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">Name</th>
                                <th className="font-normal text-start flex justify-end mt-1">
                                    <Add Msg={msgHandler} />
                                    <Print Msg={msgHandler} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                projects.length ? projects.map((project) => {
                                    return (
                                        <tr className="border-b border-gray-200" key={project.id}>
                                            <td className="text-center py-2 px-4">{project.name}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit Msg={msgHandler} Id={project.id} />
                                                {user ? <Delete Msg={msgHandler} Id={project.id} /> : null}
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
export default Project;
