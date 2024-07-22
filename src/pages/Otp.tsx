import React, { useState, useRef, useCallback } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Palmrecognition from '../assets/Palm recognition.png';
import toast from 'react-hot-toast';

interface FormData {
    name: string;
    gender: string;
    phone: string;
    orderId: string;
}

interface LocationState {
    formData: FormData;
}

const Otp: React.FC = () => {
    const location = useLocation();
    const { formData } = location.state as LocationState || {};
    const { id: newId } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);
    const [seconds, setSeconds] = useState<number>(60);
    const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startTimer = useCallback(() => {
        timerRef.current = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds > 0) {
                    return prevSeconds - 1;
                } else {
                    clearInterval(timerRef.current!);
                    setIsResendDisabled(false);
                    return 0;
                }
            });
        }, 1000);
    }, []);

    // const clearTimer = useCallback(() => {
    //     if (timerRef.current) {
    //         clearInterval(timerRef.current);
    //     }
    // }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        if (/^\d$/.test(value) || value === '') {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value !== '' && index < 5) {
                inputsRef.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        if (/^\d{6}$/.test(pastedData)) {
            setOtp(pastedData.split(''));
            inputsRef.current[5]?.focus();
        }
    };

    const otpVerify = async () => {
        try {
            const data = JSON.stringify({
                orderId: formData.orderId,
                otp: otp.join(''),
                phoneNumber: `91${formData.phone}`
            });

            const config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://auth.otpless.app/auth/otp/v1/verify',
                headers: {
                    clientId: 'I11NELHRNXTHQQEUGNVLQXS41T2L7UDZ',
                    clientSecret: '68g5e567j63kv3h7ahz976xj2sk7k46j',
                    'Content-Type': 'application/json'
                },
                data
            };

            const response = await axios.request(config);
            console.log(JSON.stringify(response.data));
            response.data.isOTPVerified ?
                (
                    toast.success('Login successful'),
                    navigate(`/restaurant/${newId}`)
                ) :
                (toast.error('OTP is not valid'))
        } catch (error) {
            console.log(error);
            toast.error((error as Error).message);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        otpVerify();
        
    };

    const handleResendOTP = async() => {

        try {
            let data = JSON.stringify({
                "orderId": formData.orderId,
            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://auth.otpless.app/auth/otp/v1/resend',
                headers: {
                    'clientId': 'I11NELHRNXTHQQEUGNVLQXS41T2L7UDZ',
                    'clientSecret': '68g5e567j63kv3h7ahz976xj2sk7k46j',
                    'Content-Type': 'application/json'
                },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    toast.success('OTP has been sent to your phone number');
                    console.log('Resend OTP');
                    setSeconds(60);
                    setIsResendDisabled(true);
                    startTimer();
                })
                .catch((error) => {
                    console.log(error);
                    toast.error((error as Error).message);
                });


        } catch (err) {
            console.log(err);
        }
    };

    if (!timerRef.current) {
        startTimer();
    }

    return (
        <>
            <div className='w-full h-[160px] bg-[#FFD600] flex items-end justify-between px-[1rem] py-[1rem]'>
                <div className='py-[1rem]'>
                    <p className=' font-[600] font-inter text-[21px] leading-[27.3px]'>Verify Details</p>
                    <p className='text-[#5C5C5C] font-[600] font-inter text-[12px] leading-[15.6px]'>OTP SENT TO +91 {formData.phone}</p>
                </div>
                <img src={Palmrecognition} alt="Palmrecognition" className='w-[40%] aspect-auto' />
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
                                ref={(el) => (inputsRef.current[index] = el)}
                                className="w-12 h-12 text-center border-b-2 border-blue-500 text-xl focus:border-blue-700 focus:outline-none"
                            />
                        ))}
                    </div>

                    <div className='w-full flex flex-row flex-wrap gap-[.7rem] mt-[1rem]'>
                        <p>Didn’t receive OTP? <span>{isResendDisabled ? `Resend in 00:${seconds < 10 ? `0${seconds}` : seconds}` : <button type="button" onClick={handleResendOTP} disabled={isResendDisabled} className="text-blue-500">Resend OTP</button>}</span></p>
                    </div>
                    <button
                        type="submit"
                        className='w-full h-[54px] mx-auto bg-[#FFD600] my-[1rem] rounded-md font-Roboto font-[500] leading-[30px] text-[20px]'
                    >Continue</button>
                </form>
            </div>
        </>
    );
};

export default Otp;
