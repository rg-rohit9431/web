import { useState, ChangeEvent } from "react";
import { baseUrl } from "../main";
import axios from "axios";
//icons
import { RxCross2 } from "react-icons/rx";

//image
import Calendar from "../assets/Calendar.png";

interface BirthdayprofileProps {
    isBirthdayOpen: boolean;
    setBirthdayOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Birthdayprofile: React.FC<BirthdayprofileProps> = ({ isBirthdayOpen, setBirthdayOpen }) => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const [birthday, setBirthday] = useState<string>(user?.birthday);
    const [anniversary, setAnniversary] = useState<string>(user?.anniversary);
    const [isBirthdayFilled, setIsBirthdayFilled] = useState<boolean>(user?.birthday ? true : false);

    const updateUserLocalStorage = (newData: object) => {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        const updatedUser = { ...user, ...newData };
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    const handleBirthdayChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newBirthday = event.target.value;
        if (!isBirthdayFilled) {
            setBirthday(newBirthday);
            setIsBirthdayFilled(true);

            const data = JSON.stringify({ birthday: newBirthday });

            let config = {
                method: 'put',
                maxBodyLength: Infinity,
                url: `${baseUrl}/api/user/${user._id}`,
                headers: { 'Content-Type': 'application/json' },
                data: data
            };

            axios.request(config)
                .then((response) => {
                    console.log(response.data);
                    updateUserLocalStorage({ birthday: newBirthday });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const handleAnniversaryChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newAnniversary = event.target.value;
        setAnniversary(newAnniversary);

        const data = JSON.stringify({ anniversary: newAnniversary });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `${baseUrl}/api/user/${user._id}`,
            headers: { 'Content-Type': 'application/json' },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(response.data);
                updateUserLocalStorage({ anniversary: newAnniversary });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className={`w-full h-[100vh] flex flex-col justify-end bg-black bg-opacity-50 fixed bottom-0 comment ${isBirthdayOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} z-[1005]`}>
                <div className="w-full h-fit flex items-center justify-center">
                    <div className="w-fit p-[1rem] rounded-full bg-black mb-[1rem]">
                        <RxCross2 onClick={() => setBirthdayOpen(false)} className="text-white text-[1.8rem]" />
                    </div>
                </div>

                <div className='w-full h-fit bg-white py-[2rem] rounded-t-[6px]'>
                    <div className="w-full h-fit px-[1rem]">
                        <p className='flex font-[400] font-inter text-[24px] leading-[29.05px] text-[#120D26]'>Get special offers on your special days 🎉</p>
                        <p className="w-[100%] my-[1rem] border-[1px] border-[#00000054]"></p>
                    </div>
                    <div className="w-[90%] mx-auto">
                        <label htmlFor="birthday" className='text-[18px] font-inter font-[500] leading-[27px] mb-[20px] text-[#000000CC]'>
                            Add Birthday
                        </label>
                        <div className="w-full h-[60px] focus:outline-none border-2 border-[#00000080] rounded-md px-[1rem] flex justify-between items-center relative mb-[1rem]">
                            <p className='text-[18px] font-inter font-[500] leading-[27px] text-[#000000CC]'>
                                {birthday ? `${birthday}` : "Select date"}
                            </p>
                            <img src={Calendar} alt="Calendar" className='w-[20px] aspect-auto' />
                            <input
                                className='w-full h-[60px] focus:outline-none border-2 border-[#00000080] rounded-md px-[1rem] absolute top-0 left-0 opacity-0'
                                type="date"
                                id="birthday"
                                name="birthday"
                                value={birthday}
                                onChange={handleBirthdayChange}
                                placeholder="Birthday"
                                disabled={isBirthdayFilled}
                            />
                        </div>
                    </div>
                    <div className="w-[90%] mx-auto">
                        <label htmlFor="anniversary" className='text-[18px] font-inter font-[500] leading-[27px] text-[#000000CC] mb-[20px]'>
                            Add Anniversary
                        </label>
                        <div className="w-full h-[60px] focus:outline-none border-2 border-[#00000080] rounded-md px-[1rem] flex justify-between items-center relative">
                            <p className='text-[18px] font-inter font-[500] leading-[27px] text-[#000000CC]'>
                                {anniversary ? `${anniversary}` : "Select date"}
                            </p>
                            <img src={Calendar} alt="Calendar" className='w-[20px] aspect-auto' />
                            <input
                                className='w-full h-[60px] focus:outline-none border-2 border-[#00000080] rounded-md px-[1rem] absolute top-0 left-0 opacity-0'
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
            </div>
        </>
    );
}

export default Birthdayprofile;
