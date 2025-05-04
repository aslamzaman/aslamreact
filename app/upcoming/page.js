"use client"
import React, { useState, useEffect } from "react";



export default function Upcoming() {
    const [msg, setMsg] = useState("");
    const [url, setUrl] = useState("");



    const myFunction = async () => {
        if (url === "") {
            setMsg("No Data!");
            return false;
        }
        const data = url.split("\n").map(item => item.trim()).filter(item => item);
        console.log(data);

        try {
            setMsg("Please wait...");
            const apiUrl = `${process.env.NEXT_PUBLIC_HOST_NAME}/api/upcoming`;
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            };
            const response = await fetch(apiUrl, requestOptions);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setMsg("Data loaded successfully.")
            } else {
                throw new Error("Failed to create POST");
            }
        } catch (error) {
            console.error("Error POST data:", error);
        }
    }


    return (
        <div className="p-4">
            <p className="w-full text-center text-2xl text-gray-600">{msg}</p>
            <textarea rows="5" onChange={(e) => setUrl(e.target.value)} value={url} className="w-full px-2 py-1.5 text-gray-600 ring-1 focus:ring-4 ring-blue-300 outline-none rounded duration-300" />
            <button
                onClick={myFunction}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer"
            >
                Click Me
            </button>
        </div>
    );
}
