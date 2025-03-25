
const LoadingDot = ({ message }) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-white cursor-auto z-10'>
            <div>
                <div className="w-5 h-5 mx-auto animate-spin">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000ff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full p-0.5 stroke-black animate-ping">
                        <circle cx="12" cy="12" r="8" />
                    </svg>
                </div>
                <p className='w-fit text-center text-sx'>{message}</p>
            </div>
        </div>
    )
}
export default LoadingDot;