import './loader.css'
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Loader = () => {
    return (
        <>
            <div className='w-full h-[100vh] flex items-center justify-center'>
                <DotLottieReact
                    src="https://lottie.host/7907d323-8b0e-43fb-aaa7-e0d9b60dcce4/IRRXEb2y42.json"
                    autoplay
                    loop
                    style={{ width: "300px", height: "300px" }}
                />
            </div>
        </>
    )
}

export default Loader
