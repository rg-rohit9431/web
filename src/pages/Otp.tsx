import { useState, useRef } from 'react';

import { useNavigate } from 'react-router-dom';


//image
import Palmrecognition from '../assets/Palm recognition.png';


const Otp = () => {
    const navigate = useNavigate();
    const goBackTwoSteps = () => {
        navigate(-1);
    };


    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const inputsRef = useRef<HTMLInputElement[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        if (/^\d$/.test(value) || value === '') {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value !== '' && index < 5) {
                inputsRef.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        if (/^\d{6}$/.test(pastedData)) {
            setOtp(pastedData.split(''));
            inputsRef.current[5].focus();
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Perform further processing, e.g., API call
        console.log('OTP Submitted:', otp.join(''));


        goBackTwoSteps(); // navigate to home page
    };
    return (
        <>
            <div className='w-full h-[160px] bg-[#FFD600] flex items-end justify-between px-[1rem] py-[1rem]'>
                <div className='py-[1rem]'>
                    <p className=' font-[600] font-inter text-[21px] leading-[27.3px]'>Verify Details</p>
                    <p className='text-[#5C5C5C] font-[600] font-inter text-[12px] leading-[15.6px]'>OTP SENT TO +91 7603037718</p>
                </div>
                <img src={Palmrecognition} alt={Palmrecognition} className='w-[40%] aspect-auto' />
            </div>
            <div className='w-full h-fit px-[1rem]'>
                <p className=' font-[600] font-inter text-[18px] leading-[23.4px] mt-[1rem] uppercase'>Enter OTP</p>
                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-[1rem]">
                    <div className='w-full flex flex-row flex-wrap gap-[.7rem] mt-[1rem]'>
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onPaste={handlePaste}
                                ref={(el) => (inputsRef.current[index] = el!)}
                                className="w-12 h-12 text-center border-b-2 border-blue-500 text-xl focus:border-blue-700 focus:outline-none"
                            />
                        ))}
                    </div>
                    <button
                        type="submit"
                        className='w-full h-[54px] mx-auto bg-[#FFD600] my-[1rem] rounded-md font-Roboto font-[500] leading-[30px] text-[20px] '
                    >Continue</button>
                </form>
            </div>
        </>
    )
}

export default Otp
