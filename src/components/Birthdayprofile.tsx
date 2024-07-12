import { useState, ChangeEvent } from "react";
//icons
import { RxCross2 } from "react-icons/rx";


interface BirthdayprofileProps {
    isBirthdayOpen: boolean;
    setBirthdayOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Birthdayprofile: React.FC<BirthdayprofileProps> = ({ isBirthdayOpen, setBirthdayOpen }) => {

    const [birthday, setBirthday] = useState<string | null>(null);
    const [anniversary, setAnniversary] = useState<string>('');
    const [isBirthdayFilled, setIsBirthdayFilled] = useState<boolean>(false);

    const handleBirthdayChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isBirthdayFilled) {
            setBirthday(event.target.value);
            setIsBirthdayFilled(true);
            console.log(`Birthday: ${event.target.value}`);
        }
    };

    const handleAnniversaryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAnniversary(event.target.value);
        console.log(`Anniversary: ${event.target.value}`);
    };
    return (
        <>
            <div className={`w-full h-[100vh] flex flex-col justify-end bg-black bg-opacity-50  fixed bottom-0 comment ${isBirthdayOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>

                <div className="w-full h-fit flex items-center justify-center ">
                    <div className="w-fit p-[1rem] rounded-full  bg-black mb-[1rem]">
                        <RxCross2 onClick={
                            () => {
                                setBirthdayOpen(false);
                            }
                        } className=" text-white text-[1.8rem]  " />
                    </div>
                </div>

                <div className='w-full h-fit bg-white py-[2rem]'>
                    <div className="w-full h-fit px-[1rem] ">
                        <p className=' flex font-[400] font-inter text-[24px] leading-[29.05px] text-[#120D26] '>Get special offers on your special days 🎉</p>
                        <p className="w-[100%]  my-[1rem] border-[1px] border-[#00000054]"></p>
                    </div>
                    <div className="w-[90%] mx-auto">
                        <label htmlFor="date" className='text-[18px] font-inter font-[500] leading-[27px] mb-[20px] text-[#000000CC]'>
                            Add Birthday
                        </label>
                        <input
                            className='w-full h-[60px]  focus:outline-none border-2 border-[#12121214]  rounded-md mb-[1rem] px-[1rem]'
                            type="date"
                            id="birthday"
                            name="birthday"
                            value={birthday || ''}
                            onChange={handleBirthdayChange}
                            placeholder="Birthday"
                            disabled={isBirthdayFilled}
                        />
                    </div>
                    <div className="w-[90%] mx-auto">
                        <label htmlFor="anniversary" className='text-[18px] font-inter font-[500] leading-[27px] text-[#000000CC] mb-[20px]'>
                            Add Anniversary
                        </label>
                        <input
                            className='w-full h-[60px]  focus:outline-none border-2 border-[#12121214]  rounded-md px-[1rem] mb-[1rem]'
                            type="date"
                            id="anniversary"
                            name="anniversary"
                            value={anniversary}
                            placeholder="Anniversary"
                            onChange={handleAnniversaryChange}
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Birthdayprofile
