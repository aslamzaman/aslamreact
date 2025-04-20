"use client";
import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { delay } from "@/lib/utils";
import LoadingDot from '@/components/LoadingDot';
import { BtnSubmit } from "@/components/Form";



const ImageResizer = () => {
  const [data, setData] = useState([]);
  const [msg, setMsg] = useState("");
  const [waitPage, setWaitPage] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const contentRef = useRef("");

  const getImageWidthHeight = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        const imgWidth = img.width;
        const imgHeight = img.height;
        const orientation = imgWidth / imgHeight > 1 ? 'landscape' : 'portrait';
        const iamgeRatio = (imgWidth / imgHeight);
        const ratio = `1:${iamgeRatio.toFixed(2)}`;
        resolve({ imgWidth, imgHeight, orientation, ratio });
      };
      img.onerror = (error) => reject(error);
    });
  };

  const getFileUrl = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const result = reader.result;
          resolve(result);
        } catch (parseError) {
          reject(parseError);
        }
      }
      reader.readAsDataURL(file);
    })
  }

  const fileChangeHandlerImage = async (e) => {

    try {
      const files = e.target.files;

      const imageDataPromises = Array.from(files).map(async (file) => {
        const dataUrl = await getFileUrl(file);
        const { imgWidth, imgHeight, orientation, ratio } = await getImageWidthHeight(dataUrl);
        const type2 = file.type
          .split("/")[1]
          .toUpperCase();
        console.log(type2);

        return {
          url: dataUrl,
          width: imgWidth,
          height: imgHeight,
          name: file.name,
          type: file.type,
          size: file.size,
          fileType: type2,
          orientation: orientation,
          ratio
        };
      });

      const imageData = await Promise.all(imageDataPromises);
      console.log(imageData);
      setData(imageData);

    } catch (error) {
      console.error("Error processing images:", error);
    }
  };


  const resizeHandler = async (e) => {
    e.preventDefault();

    // Screen shot---------------
    if (data.length < 1) {
      setMsg("No data!");
      return false;
    }
    setWaitPage(true);
    setMsg("Please wait...");
    const obj = [];
    for (let i = 0; i < data.length; i++) {
      setImgUrl(data[i].url);
      await delay(1000);
      const htmlElement = contentRef.current;
      const canvas = await html2canvas(htmlElement, { scale: 1 });
      const imageUrl = canvas.toDataURL('images/jpg');
      // console.log(imageUrl)
      obj.push({ id: i + 1, url: `${process.env.NEXT_PUBLIC_HOST_NAME}/images/fish/image_${i + 1}.jpg` });
      const a = document.createElement('a');
      a.href = imageUrl;
      a.download = `image_${i + 1}.jpg`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setMsg(`Please wait, Image creating: ${i + 1}`);
    }
    setWaitPage(false)
    setMsg("Image creating completed!.");
    setData([]);


    const button = document.createElement('button');
    button.type = 'reset';
    document.forms[0].appendChild(button);
    button.click();
    button.remove();
  }



  return (
    <>
      {waitPage ? (
        <LoadingDot message={msg} />
      ) : null}


      <div className="w-full py-4">
        <h1 className="w-full text-xl lg:text-3xl font-bold text-center text-blue-700">Image Resizer (600x600) px</h1>
        <p className="w-full text-center text-blue-300">&nbsp;{msg}&nbsp;</p>
      </div>


      <div className="w-full">

        <div className="w-full border-2 p-4 shadow-md rounded-md">

          <form onSubmit={resizeHandler}>
            <div className="w-full flex items-center justify-between space-x-4">
              <div className="w-full">
              <input type="file" onChange={fileChangeHandlerImage} accept=".jpg, .jpeg, .png, .bmp, .webp" multiple className="w-full px-4 text-gray-600 ring-1 focus:ring-4 ring-blue-300 outline-none rounded duration-300" />
              </div>
              <div className="w-[260px] lg:w-[180px] pb-3 bg-gray flex justify-start">
                <BtnSubmit Title="Image Resize" Class="bg-blue-600 hover:bg-blue-800 text-white" />
              </div>
            </div>
          </form>

        </div>


        <div ref={contentRef} className="w-[600px] h-[600px] mx-auto flex items-center justify-center border border-black" >
          <div className="w-full h-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url("${imgUrl}")` }}></div>
        </div>


      </div>

    </>
  );


};
export default ImageResizer;
