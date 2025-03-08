
const Loading = () => {
    return (
        <div className='fixed inset-0 bg-gray-100 bg-opacity-10 z-10'>
            <div className='w-[175px] h-16 mt-48 mx-auto flex flex-col items-center justify-center space-y-1'>
                <div className='w-8 h-8 mx-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" strokeWidth="1.5" stroke="currentColor" className='stroke-2 stroke-black' >
                        <circle cx="15" cy="15" r="10"></circle>
                        <circle cx="25" cy="15" r="3" fill='black' className='origin-center animate-spin'></circle>
                    </svg>
                </div>
                <p className='w-fit text-center text-xl'>Please wait <span className='animate-ping'>...</span></p>
            </div>
        </div>
    )
}
export default Loading;