import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Add from "../../components/place/Add";
import Edit from "../../components/place/Edit";
import Delete from "../../components/place/Delete";
import Print from "../../components/place/Print";
import { fetchAll } from "../../components/DexieDatabase";


const Place = () => {
    const [places, setPlaces] = useState([]);
    const [msg, setMsg] = useState("Data ready");
    const [user, setUser] = useState(false);

    useEffect(() => {
        const loadPlaceData = async () => {
            try {
                const placeData = await fetchAll("place");
                console.log(placeData)
                setPlaces(placeData || []);
            } catch (error) {
                console.log(`Error loading place data: ${error}`);
            }
        };
        loadPlaceData();

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
        <Layout Title="Place">

            <div className="w-full mt-4">
                <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-gray-500">Place</h1>
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
                                places.length ? places.map((place) => {
                                    return (
                                        <tr className="border-b border-gray-200" key={place.id}>
                                            <td className="text-center py-2 px-4">{place.name}</td>
                                            <td className="flex justify-end items-center mt-1">
                                                <Edit Msg={msgHandler} Id={place.id} />                                                
                                                {user?<Delete Msg={msgHandler} Id={place.id} />:null}
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
export default Place;
