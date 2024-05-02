
export const Htmlpage = ({ children, Ref }) => {
    return (
        <div ref={Ref} className={`w-[2480px] h-[3508px] bg-white mx-auto font-SutonnyMJ_Regular`}>
            {children}
        </div>
    )
}


export const Dropdown = ({ children, Title, Id, Change, Value }) => {
    return (
        <div className="w-full flex flex-col items-start">
            <label className='text-xs font-semibold mb-1' htmlFor={Id}>{Title}</label>
            <select onChange={Change} value={Value} id={Id} name={Id} required className="w-full px-4 py-1.5  text-gray-600 ring-1 focus:ring-4 ring-blue-300 outline-none rounded duration-300">
                {children}
            </select>
        </div>
    )
}


export const TextAreaBody= ({Change, Value }) => {
    return (
      <div className="w-full flex flex-col items-start">
        <label className='text-xs font-semibold mb-1' htmlFor="txt">Letter Body</label>
        <textarea rows="6" onChange={Change} value={Value} id="txt" name="txt" maxLength="950" className="w-full px-4 py-1.5 font-SutonnyMJ_Regular text-gray-600 ring-1 focus:ring-4 ring-blue-300 outline-none rounded duration-300" />
      </div>
    )
  }
  
  export const TextAreaPara= ({Change, Value }) => {
    return (
      <div className="w-full flex flex-col items-start">
        <label className='text-xs font-semibold mb-1' htmlFor="txt"></label>
        <textarea rows="2" onChange={Change} value={Value} id="txt" name="txt" maxLength="950" className="w-full px-4 py-1.5 font-SutonnyMJ_Regular text-gray-600 ring-1 focus:ring-4 ring-blue-300 outline-none rounded duration-300" />
      </div>
    )
  }


export const MyComponents = [
    () => {
        // 0
        // অনুলিপি:
        // এইচআরডি/পিএফ
        return <>Abywjwc:< br />GBPAviwW/wcGd</>;
    },
    () => {
        // 1
        // অনুলিপি:
        // ১. এইচআরডি/পিএফ 
        // ২. একাউন্টস
        return (
            <>
                Abywjwc:< br />
                1. GBPAviwW/wcGd <br />
                2. GKvD›Um
            </>
        );
    },
    (srk) => {
        // 2
        // স্মারক নং-
        return (<>¯§viK bs-wmGgBGm/{srk}<br /></>);
    },
    () => {
        // 3
        // CMES Text header
        return (<p className="w-full pt-[130px] text-center text-[80px] leading-tight">
            †m›Uvi di g¨vm GWz‡Kkb Bb mv‡qÝ (wmGgBGm)<br />
            <span className="text-[63px]">evwo- 5/4, eøK-Gd, jvjgvwUqv, XvKv-1207</span>
        </p>);
    },
    () => {
        // 4
        // Letter head pad
        return <p className="w-full pt-[584px] text-center text-[80px] leading-tight"></p>;
    },
    () => {
        // 5
        // 1" margin page
        return <p className="w-full pt-[250px] text-center text-[80px] leading-tight"></p>;
    },
    () => {
        // 6
        // Digital header
        return <div className="w-[2480px] h-[430px] m-0 p-0"> <img className="w-full h-full" src="/images/cmes_logo/letter_head_pad.png" alt="letter head pad" /></div>

    },
    () => {
        // 7
        // blank
        return <></>
    }
]

