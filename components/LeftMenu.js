import React from 'react';
import Link from 'next/link';



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
        title: 'Settings',
        group: [
            {
                label: 'Author',
                url: '/author'
            },
            {
                label: 'Staff',
                url: '/staff'
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
            },
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
                label: 'Code Models',
                url: '/codemodels'
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
            },
            {
                label: 'Image Resizer',
                url: '/imagesizer'
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



const LeftMenu = () => {
    return (
        <>
            {MenuData.map((data, i) => {
                const menuTitle = data.title;
                const menus = data.group;
                return (
                    <div className='flex flex-col' key={i}>
                        <label className='pl-4 pt-4 pb-0.5 font-SegoeN text-xl text-gray-400 font-semibold border-b-2 border-gray-200'>{menuTitle}</label>
                        {menus.map((item, index) => (<Link href={item.url} className='pl-8 py-[1px] hover:bg-gray-300 transition-all duration-500 font-SegoeN' key={index}>{item.label}</Link>))}
                    </div>
                )
            })}

        </>
    )
}

export default LeftMenu;




