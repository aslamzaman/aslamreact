"use client";

import Image from "next/image";




const Contact = () => {

    return (
        <>
            <div className="w-full lg:w-3/4 mx-auto py-10">

                <h1 className="py-4 text-center text-3xl font-bold text-gray-500">Contact</h1>
                <p className="text-center text-gray-500">Please contact with me for any suggestions/feedback about the website.</p>
                <hr className="my-4 border border-gray-300" />
                <p className="text-center">
                    <span className="font-bold">Aslam Zaman</span><br />
                    Centre for Mass Eduction in Science (CMES)<br />
                    (CMES Head Office)<br />
                    House# 5/4, Block - F<br />
                    Lalmatia, Dhaka -1207<br />
                    Email Address: aslamcmes@gmail.com<br />
                </p>

                <Image src="/images/google_map/cmes_head_office.PNG" alt="locatin map" width={1343} height={636} className="w-full h-auto border-2 border-gray-400" />
            </div>
        </>
    );
};

export default Contact;

