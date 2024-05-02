import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/author/Add";
import Edit from "../../components/author/Edit";
import Delete from "../../components/author/Delete";
import Print from "../../components/author/Print";
import { fetchAll } from "../../components/DexieDatabase";


const Author = () => {
    const [authors, setAuthors] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [user, setUser] = useState(false);

    useEffect(() => {
        const loadAuthorData = async () => {
            try {
                const authorData = await fetchAll("author");
                console.log(authorData);  
                setAuthors(authorData || []);
            } catch (error) {
                console.log(`Error loading author data: ${error}`);
            }
        };
        loadAuthorData();

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
        <Layout Title="Author">

            <div className="w-full mt-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Author</h1>
            </div>

            <div className="w-full overflow-auto">
                <div className="mt-6">
                    <p className="w-full text-sm text-red-700">{msg}</p>

                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">Name</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Deg</th>
                                <th className="font-normal text-start flex justify-end mt-1">
                                    <Add Msg={msgHandler} />
                                    <Print Msg={msgHandler} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                authors.length ? authors.map((author) => {
                                    return (
                                        <tr className="border-b border-gray-200" key={author.id}>
                                            <td className="text-center py-2 px-4">{author.name}</td>
                                            <td className="text-center py-2 px-4">{author.deg}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit Msg={msgHandler} Id={author.id} />
                                                
                                                {user ?<Delete Msg={msgHandler} Id={author.id} />: null}
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
export default Author;
