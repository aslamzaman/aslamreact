"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const MenuData = [
    {
        title: 'Bayprostab',
        group: [
            {
                label: 'House Rent **',
                url: '/rent'
            },
            {
                label: 'Sewerage Bill **',
                url: '/sewerage'
            },
            {
                label: 'Bayprostab *',
                url: '/bayprostab'
            },
            {
                label: 'Unit Salary *',
                url: '/unitsalary'
            },
            {
                label: 'Unit Bonus',
                url: '/unitbonus'
            },
            {
                label: 'Bayprostab Execution *',
                url: '/bayprostabexecution'
            }
        ]
    },
    {
        title: 'Bills',
        group: [
            {
                label: 'Electric Bill **',
                url: '/electric'
            },
            {
                label: 'Mobile Bill **',
                url: '/mobilebill'
            },
            {
                label: 'Link3 Bill **',
                url: '/link3'
            },
            {
                label: 'Bkash Bill *',
                url: '/bkash'
            },
            {
                label: 'Any Bill',
                url: '/anybill'
            },
            {
                label: 'Local TA',
                url: '/localta'
            },
            {
                label: 'TA Bill',
                url: '/tabill'
            }
        ]
    },
    {
        title: 'Settings(Basic)',
        group: [
            {
                label: 'Author',
                url: '/author'
            },
            {
                label: 'Post',
                url: '/post'
            },
            {
                label: 'Project',
                url: '/project'
            },
            {
                label: 'Unit',
                url: '/unit'
            },
            {
                label: 'Place',
                url: '/place'
            },
            {
                label: 'Gender',
                url: '/gender'
            },
            {
                label: 'District',
                url: '/district'
            }

        ]
    },
    {
        title: 'Setting(Advance)',
        group: [
            {
                label: 'TA',
                url: '/ta'
            },
            {
                label: 'DA',
                url: '/da'
            },
            {
                label: 'Price',
                url: '/price'
            },
            {
                label: 'Honda',
                url: '/honda'
            },
            {
                label: 'Honda History',
                url: '/hondahistory'
            },
            {
                label: 'Staff',
                url: '/staff'
            },
            {
                label: 'Staff Resign',
                url: '/staffresign'
            },
            {
                label: 'Land',
                url: '/land'
            }
        ]
    },
    {
        title: 'Constructions',
        group: [
            {
                label: 'Brick Flat Solling',
                url: '/construction/bfs'
            },
            {
                label: 'Brick Works',
                url: '/construction/bw'
            },
            {
                label: 'CC Works',
                url: '/construction/cc'
            },
            {
                label: 'Plaster Works',
                url: '/construction/plaster'
            },
            {
                label: 'RCC Works',
                url: '/construction/rcc'
            },
            {
                label: 'Property Works',
                url: '/construction/property'
            },
            {
                label: 'Land Area Converter',
                url: '/construction/landareaconverter'
            },
            {
                label: 'Documents',
                url: '/doc'
            }


        ]
    },
    {
        title: 'Generate',
        group: [
            {
                label: 'Code',
                url: '/code'
            },
            {
                label: 'Local Storage Code',
                url: '/codelocal'
            },
            {
                label: 'Unique Id',
                url: '/unique'
            },
            {
                label: 'Inword Converter',
                url: '/inwordconverter'
            },
            {
                label: 'Formats',
                url: '/format'
            }
        ]
    },
    {
        title: 'Calculations',
        group: [
            {
                label: 'Octen',
                url: '/octen'
            },
            {
                label: 'Bkash Send Money',
                url: '/bkashsend'
            },
            {
                label: 'VAT & TAX Calculator',
                url: '/vattax'
            },
            {
                label: 'Staff Benefit Calculator',
                url: '/benefit'
            },
            {
                label: 'Leave Calculator',
                url: '/leavecalculation'
            }
        ]
    },
    {
        title: 'Letter/Application',
        group: [
            {
                label: 'Leave Application',
                url: '/leave'
            },
            {
                label: '5% Increment',
                url: '/increment'
            },
            {
                label: 'Appointment Letter',
                url: '/appointment'
            },
            {
                label: 'CTNG Appointment',
                url: '/ctngtransfer'
            },
            {
                label: 'Experience Certificate',
                url: '/experiencecertificate'
            },
            {
                label: 'Mobile Phone',
                url: '/mobile'
            }
        ]
    },
    {
        title: 'Certificate',
        group: [
            {
                label: 'First Phase',
                url: '/certificate/first'
            },
            {
                label: 'General Certifcate',
                url: '/certificate/general'
            }

        ]
    }

]




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
                        <MenuBar click={menuCloseHander} />
                    </div>
                    <Link href="/dashboard" className='flex items-center justify-start space-x-3'>
                        <Image src='/images/logo/logo.png' alt='Logo' width={256} height={256} className='w-8 h-auto' />
                        <h1 className='text-start pb-1.5 text-2xl text-blue-600 font-bold uppercase'>aslam zaman</h1>
                    </Link>
                </div>
                <div className='flex items-center justify-end space-x-4'>
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





const LeftMenu = () => {
    return (
        <>
            { MenuData.map((data, i) => {
                const menuTitle = data.title;
                const menus = data.group;
                return (
                    <div className='flex flex-col' key={i}>
                        <label className='pl-4 pt-4 pb-0.5 text-xl text-gray-400 font-semibold border-b-2 border-gray-200'>{menuTitle}</label>
                        { menus.map((item, index) => (<Link href={item.url} className='pl-8 py-[1px] hover:bg-gray-300 transition-all duration-500' key={index}>{item.label}</Link>))}
                    </div>
                )
            }) }

        </>
    )
}




const MenuBar = ({ click }) => {
    return <button onClick={click}><svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 8 L28 8 M2 15 L28 15 M2 22 L28 22"
            className="fill-none stroke-gray-500" style={{ strokeWidth: '4px' }} />
    </svg></button>
}
