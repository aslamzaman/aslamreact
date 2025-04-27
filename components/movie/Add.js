import React, { useState } from "react";
import { BtnSubmit, TextareaEn, TextEn } from "@/components/Form";
import { addDataToIndexedDB } from "@/lib/DatabaseIndexedDB";

const Add = ({ message }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [pic, setPic] = useState('');
    const [director, setDirector] = useState('');
    const [writer, setWriter] = useState('');
    const [cast, setCast] = useState('');
    const [show, setShow] = useState(false);
    


    const resetVariables = () => {
        setName('');
        setCategory('');
        setDate('');
        setPic('');
        setDirector('');
        setWriter('');
        setCast('');
    }


    const showAddForm = () => {
        setShow(true);
        resetVariables();
    }


    const closeAddForm = () => {
        setShow(false);
    }


    const createObject = () => {
        const directorArr = director.split("\n").map(item => item.trim()).filter(item => item);
        const writerArr = writer.split("\n").map(item => item.trim()).filter(item => item);
        const castArr = cast.split("\n").map(item => item.trim()).filter(item => item);
        return {
            id: Date.now(),
            name: name,
            category: category,
            date: date,
            pic: pic,
            director: directorArr,
            writer: writerArr,
            cast: castArr
        }
    }


    const saveHandler = async (e) => {
        e.preventDefault();
        try {
            const newObject = createObject();
            const msg = await addDataToIndexedDB('movie', newObject);
            message(msg);
        } catch (error) {
            console.error("Error saving movie data:", error);
            message("Error saving movie data.");
        } finally {
            setShow(false);
        }
    }


    return (
        <>
            {show && (
                <div className="fixed inset-0 px-2 py-16 bg-gray-500/50 z-10 overflow-auto">
                    <div className="w-full md:w-[500px] lg:w-[800px] mx-auto mb-10 bg-white border-2 border-gray-300 rounded-md shadow-md duration-300">
                        <div className="px-6 md:px-6 py-2 flex justify-between items-center border-b border-gray-300">
                            <h1 className="text-xl font-bold text-blue-600">Add New Data</h1>
                            <button onClick={closeAddForm} className="w-8 h-8 p-0.5 bg-gray-50 hover:bg-gray-300 rounded-md transition duration-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full stroke-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="px-4 pb-6 text-black">
                            <form onSubmit={saveHandler}>
                                <div className="grid grid-cols-1 gap-4 my-4">
                                    <TextEn Title="Name" Id="name" Change={e => setName(e.target.value)} Value={name} Chr={150} />
                                    <TextEn Title="Category" Id="category" Change={e => setCategory(e.target.value)} Value={category} Chr={150} />
                                    <TextEn Title="Date" Id="date" Change={e => setDate(e.target.value)} Value={date} Chr={150} />
                                    <TextEn Title="Pic" Id="pic" Change={e => setPic(e.target.value)} Value={pic} Chr={150} />
                                    <TextareaEn Title="Director" Id="director" Rows="2" Change={e => setDirector(e.target.value)} Value={director} />
                                    <TextareaEn Title="Writer" Id="writer" Rows="2" Change={e => setWriter(e.target.value)} Value={writer} />
                                    <TextareaEn Title="Cast" Id="cast" Rows="14" Change={e => setCast(e.target.value)} Value={cast} />
                                </div>
                                <div className="w-full flex justify-start">
                                    <input type="button" onClick={closeAddForm} value="Close" className="bg-pink-600 hover:bg-pink-800 text-white text-center mt-3 mx-0.5 px-4 py-2 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 cursor-pointer" />
                                    <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
            <button onClick={showAddForm} className="px-1 py-1 bg-blue-500 hover:bg-blue-700 rounded-md transition duration-500 cursor-pointer" title="Add New">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-7 h-7 stroke-white hover:stroke-gray-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </>
    )
}
export default Add;

