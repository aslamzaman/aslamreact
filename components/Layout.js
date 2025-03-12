"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import MenuBarIcon from './MenuBarIcon';
import LeftMenu from './LeftMenu';


const Home = ({ children }) => {
    const [menuPos, setMenuPos] = useState("left-[-100vw]");
    const router = useRouter(null);

    const posFull = "left-0 right-0";
    const posLeft = "left-[-100vw]";



    useEffect(() => {
        window.addEventListener("resize", () => setMenuPos(posLeft));
        return () => {
            window.removeEventListener("resize", () => setMenuPos(posLeft));
        };
    }, [])



    const menuCloseHander = () => {
        if (menuPos === posFull) {
            setMenuPos(posLeft);
        } else {
            setMenuPos(posFull);
        }
    }



    const menuHideHandler = (e) => {
        if (e.target.id === 'leftMenu') {
            setMenuPos(posLeft);
        }
    }


    
    const cmesManualClickHandler = () => {
        const pw = prompt("Enter password!");
        if (pw !== 'aslam') return false;
        router.push("/cmesmanual");
    }



    return (
        <>
            <div id="header" className="fixed h-[60px] left-0 top-0 right-0 px-4 lg:p-6 flex items-center justify-between bg-white border-b-2 border-gray-300 drop-shadow-lg z-50">
                <div className='flex items-center space-x-3 lg:space-x-0'>
                    <div className='block lg:hidden'>
                        <MenuBarIcon click={menuCloseHander} />
                    </div>
                    <Link href="/dashboard" className='flex items-center justify-start space-x-2'>
                        <Image src='/images/logo/logo.png' alt='Logo' width={256} height={256} className='w-7 lg:w-8 h-auto' />
                        <h1 className='lg:mt-0.5 text-start text-base lg:text-2xl text-blue-600 font-bold uppercase scale-y-125'>aslam zaman</h1>
                    </Link>
                </div>
                <div className='flex items-center justify-end space-x-2 lg:space-x-4'>
                    <Link href='/about' className='hover:underline underline-offset-2 decoration-2'>About</Link>
                    <Link href='/contact' className='hover:underline underline-offset-2 decoration-2'>Contact</Link>
                </div>
            </div>



            <div id="leftMenu" onClick={menuHideHandler} className={`fixed ${menuPos} top-[60px] bottom-0 transition-all duration-500 z-40`}>
                <div className='w-[250px] h-[calc(100vh-60px)] pb-[100px] flex flex-col text-sm md:text-base bg-gray-100 border-r-2 border-gray-200 drop-shadow-xl overflow-auto'>
                    <LeftMenu />
                    <button onClick={cmesManualClickHandler} className='w-full text-start pl-8 hover:bg-gray-300 transition-all duration-500'>CMES Manual</button>
                </div>
            </div>



            <div id="container" className='fixed left-0 top-[60px] right-0 bottom-0 flex'>
                <div id="leftBar" className="hidden lg:block w-[300px] h-[calc(100vh-60px)] pb-[100px] flex flex-col bg-gray-100 border-r-2 border-gray-200 drop-shadow-xl overflow-auto">
                    <LeftMenu />
                    <button onClick={cmesManualClickHandler} className='w-full text-start pl-8 hover:bg-gray-300 transition-all duration-500'>CMES Manual</button>
                </div>



                <div className='w-full h-[calc(100vh-60px)] px-4 pt-4 pb-[100px] bg-white overflow-auto'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Home

