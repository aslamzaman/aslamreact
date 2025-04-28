import React, { useState } from "react";
import { BtnSubmit, TextEn, TextareaEn } from "@/components/Form";
import { updateDataToIndexedDB } from "@/lib/DatabaseIndexedDB";

const Edit = ({ message, id, data }) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [pic, setPic] = useState('');
    const [trailer, setTrailer] = useState('');
    const [director, setDirector] = useState('');
    const [writer, setWriter] = useState('');
    const [cast, setCast] = useState('');
    const [show, setShow] = useState(false);

    const arrayToText = (arr) => {
        const result = arr.join("\n");
        return result;
    }

    const showEditForm = () => {
        message("Ready to edit");
        setShow(true);
        try {
            const { name, category, date, pic, trailer, director, writer, cast } = data;
            setName(name);
            setCategory(category);
            setDate(date);
            setPic(pic);
            setTrailer(trailer);
            setDirector(arrayToText(director));
            setWriter(arrayToText(writer));
            setCast(arrayToText(cast));
        } catch (err) {
            console.log(err);
        }
    };


    const closeEditForm = () => {
        setShow(false);
    };


    const createObject = () => {
        const directorArr = director.split("\n").map(item => item.trim()).filter(item => item);
        const writerArr = writer.split("\n").map(item => item.trim()).filter(item => item);
        const castArr = cast.split("\n").map(item => item.trim()).filter(item => item);
        return {
            id: id,
            name: name,
            category: category,
            date: date,
            pic: pic,
            trailer: trailer,
            director: directorArr,
            writer: writerArr,
            cast: castArr
        }
    }


    const updateHandler = async (e) => {
        e.preventDefault();
        try {
            const newObject = createObject();
            const msg = await updateDataToIndexedDB('movie', id, newObject);
            message(msg);
        } catch (error) {
            console.error("Error updating movie data:", error);
            message("Error updating movie data.");
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
                            <h1 className="text-xl font-bold text-blue-600">Edit Existing Data</h1>
                            <button onClick={closeEditForm} className="w-8 h-8 p-0.5 bg-gray-50 hover:bg-gray-300 rounded-md transition duration-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full stroke-black">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                        </div>

                        <div className="px-4 pb-6 text-black">
                            <form onSubmit={updateHandler} >
                                <div className="grid grid-cols-1 gap-4 my-4">
                                    <TextEn Title="Name" Id="name" Change={e => setName(e.target.value)} Value={name} Chr={150} />
                                    <TextEn Title="Category" Id="category" Change={e => setCategory(e.target.value)} Value={category} Chr={150} />
                                    <TextEn Title="Date" Id="date" Change={e => setDate(e.target.value)} Value={date} Chr={150} />
                                    <TextEn Title="Pic" Id="pic" Change={e => setPic(e.target.value)} Value={pic} Chr={350} />
                                    <TextEn Title="Trailer" Id="trailer" Change={e => setTrailer(e.target.value)} Value={trailer} Chr={350} />
                                    <TextareaEn Title="Director" Id="director" Rows="2" Change={e => setDirector(e.target.value)} Value={director} />
                                    <TextareaEn Title="Writer" Id="writer" Rows="2" Change={e => setWriter(e.target.value)} Value={writer} />
                                    <TextareaEn Title="Cast" Id="cast" Rows="5" Change={e => setCast(e.target.value)} Value={cast} />
                                </div>
                                <div className="w-full flex justify-start">
                                    <input type="button" onClick={closeEditForm} value="Close" className="bg-pink-600 hover:bg-pink-800 text-white text-center mt-3 mx-0.5 px-4 py-2 font-semibold rounded-md focus:ring-1 ring-blue-200 ring-offset-2 duration-300 cursor-pointer" />
                                    <BtnSubmit Title="Save" Class="bg-blue-600 hover:bg-blue-800 text-white" />
                                </div>
                            </form>
                        </div>


                    </div >
                </div >
            )}
            <button onClick={showEditForm} title="Edit" className="px-1 py-1 hover:bg-teal-300 rounded-md transition duration-500 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 stroke-black hover:stroke-blue-800 transition duration-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
            </button>
        </>
    )
}
export default Edit;

