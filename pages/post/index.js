import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/post/Add";
import Edit from "../../components/post/Edit";
import Delete from "../../components/post/Delete";
import Print from "../../components/post/Print";
import { fetchAll } from "../../components/DexieDatabase";


const Post = () => {
    const [posts, setPosts] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [user, setUser] = useState(false);

    useEffect(() => {
        const loadPostData = async () => {
            try {
                const postData = await fetchAll("post");
                console.log(postData);
                setPosts(postData || []);
            } catch (error) {
                console.log(`Error loading post data: ${error}`);
            }
        };
        loadPostData();

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
        <Layout Title="Post">

            <div className="w-full mt-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Post</h1>
            </div>

            <div className="w-full overflow-auto">
                <div className="mt-6">
                    <p className="w-full text-sm text-red-700">{msg}</p>

                    <table className="w-full border border-gray-200">
                        <thead>
                            <tr className="w-full bg-gray-200">
                                <th className="text-center border-b border-gray-200 px-4 py-2">Name</th>
                                <th className="text-center border-b border-gray-200 px-4 py-2">Name(Bangla)</th>
                                <th className="font-normal text-start flex justify-end mt-1">
                                    <Add Msg={msgHandler} />
                                    <Print Msg={msgHandler} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.length ? posts.map((post) => {
                                    return (
                                        <tr className="border-b border-gray-200" key={post.id}>
                                            <td className="text-center py-2 px-4">{post.nm_en}</td>
                                            <td className="text-center py-2 px-4 font-SutonnyMJ_Regular">{post.nm_bn}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit Msg={msgHandler} Id={post.id} />                                                
                                                {user?<Delete Msg={msgHandler} Id={post.id} />:null}
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
export default Post;
