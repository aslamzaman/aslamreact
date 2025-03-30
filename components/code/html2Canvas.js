const Html2Canvas = () => {

    const str = `"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import html2canvas from "html2canvas";
import { delay } from "@/lib/utils";
import { jsPDF } from "jspdf";

//-------------- From Helper Page --------------------
const getImageDimensions = (url) => {
    return new Promise((resolve, reject) => {
        try {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                const imgWidth = img.width;
                const imgHeight = img.height;
                resolve({ imgWidth, imgHeight });
            }
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}


export const getImageInfo = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async () => {
            try {
                const dataUrl = reader.result;
                const { imgWidth, imgHeight } = await getImageDimensions(dataUrl);
                resolve({ dataUrl, imgWidth, imgHeight });
            } catch (error) {
                console.log(error);
                reject(error);
            }
        }
        reader.onerror = () => {
            reject('Failed to read file!')
        }
        reader.readAsDataURL(file);
    })
}

//----------------------------------------------

const Home = () => {
    const [files, setFiles] = useState([]);
    const [logoUrl, setLogoUrl] = useState("");
    const [w, setW] = useState("256");
    const [h, setH] = useState("256");

    const contentRef = useRef(null);

    const fileChangeHandlerImage = async (e) => {
        try {
            const files = e.target.files;
            const getImageData = Array.from(files).map(async (file) => {
                const data = await getImageInfo(file);
                return {
                    url: data.dataUrl,
                    imgWidth: data.imgWidth,
                    imgHeight: data.imgHeight
                }
            });
            const data = await Promise.all(getImageData);
            setFiles(data);
        } catch (error) {
            console.error("Error processing images:", error);
        }
    };

    const createPdfHandler = async () => {
        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true
        });

        //-----------------------------------------------
        for (let i = 0; i < files.length; i++) {
            const url = files[i].url;
            const width = files[i].imgWidth;
            const height = files[i].imgHeight;
            // For change ui ------
            setLogoUrl(url);
            setW(width);
            setH(height);
            await delay(200);

            // Screen shot---------------
            const htmlElement = contentRef.current;
            const canvas = await html2canvas(htmlElement);
            const imageUrl = canvas.toDataURL('images/png');
            // Create PDF file
            doc.addImage(`\$\{imageUrl}`\, "PNG", 0, 0, 210, 297);
            doc.addPage('a4', 'p');
        }
        // Delete extra pdf page----
        doc.deletePage(files.length + 1);
        doc.save("picture.pdf");
    }




    return (
        <section className="w-full p-4 mt-10 border border-gray-400 rounded-lg">
            <input type="file" onChange={fileChangeHandlerImage} accept=".jpg, .jpeg, .png, .bmp" multiple />

            <div ref={contentRef} className="w-[1240px] h-[1754px] p-[75px] flex items-center justify-center" >
                <Image src={logoUrl} alt="pdf imagees" width={w} height={h} />
            </div>
            <button onClick={createPdfHandler}>Create PDF</button>
        </section>
    )
}
export default Home; `;

    return str;

}

export default Html2Canvas;
