import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


//image
import Hand from '../assets/Hand.png';
import foodoos from '../assets/foodoos.png';
import Facebook from '../assets/Facebook.png';
import instagram from '../assets/instagram.png';
import Star from '../assets/Star.png';
import Fork from '../assets/Fork and Spoon.png';
import zomato from '../assets/zomato.png';
import google from '../assets/google.png';
import like from '../assets/like.png';

//icons
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { RiShareForwardLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";

//components
import Menucard from '../components/Menucard';
import Menuprofile from '../components/Menuprofile';
import Shareprofile from '../components/Shareprofile';
import Birthdayprofile from '../components/Birthdayprofile';


const MainPage = () => {
    const navigate = useNavigate();
    const [isFeedbackOpen, setFeedbackOpen] = useState<boolean>(false);
    const [isLogoutOpen, setLogoutOpen] = useState<boolean>(false);
    const [isShareOpen, setShareOpen] = useState<boolean>(false);
    const [isBirthdayOpen, setBirthdayOpen] = useState<boolean>(false);
    const [isMenuOpen, setMenuOpen] = useState<boolean>(true);

    useEffect(() => {
        setBirthdayOpen(true);
    }, [])
    useEffect(() => {

        if (isFeedbackOpen || isShareOpen || isBirthdayOpen || isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

    }, [isFeedbackOpen, isShareOpen, isBirthdayOpen, isMenuOpen]);

    return (
        <>
            <div className="w-full min-h-[200px] h-fit bg-[#FFD628] rounded-b-[30px]">
                {/* section1 */}
                <div className='w-full h-fit flex justify-between items-center px-[1rem] py-[1rem] relative'>
                    <div className='w-fit flex items-start justify-between px-[1rem] py-[1rem]'>
                        <div className='mr-[.5rem]'>
                            <p className=' font-[700] font-Sen text-[21px] leading-[25.27px]'>Hello Souptik</p>
                            <p className='text-[#444343] font-[700] font-Sen text-[17px] leading-[16.94px]'>Its Lunch time</p>
                        </div>
                        <img src={Hand} alt="Hand" className='w-[25px] aspect-auto' />
                    </div>
                    <HiOutlineDotsVertical
                        onClick={
                            () => {
                                setLogoutOpen(!isLogoutOpen);
                            }
                        } className='text-[1.6rem] font-bold' />

                    {/* share and logout popup */}

                    {
                        isLogoutOpen &&

                        <div className='w-fit absolute top-[5rem] right-[16px] bg-white rounded-[10px] flex flex-col items-start justify-center  shadow-lg'>
                            <div
                                onClick={
                                    () => {
                                        setLogoutOpen(!isLogoutOpen);
                                        setShareOpen(!isShareOpen);
                                    }
                                } className='flex items-center gap-[.5rem] p-[1.5rem] pb-0'>
                                <RiShareForwardLine className='text-[1.4rem] font-bold text-[#64748B]' />
                                <p className='text-[#64748B] font-[400] font-Roboto text-[18px] leading-[21.09px]'>Share</p>
                            </div>
                            <div className='flex items-center gap-[.5rem] p-[1.5rem]'>
                                <IoLogOutOutline className='text-[1.4rem] font-bold text-[#C62828]' />
                                <p className='text-[#C62828] font-[400] font-Roboto text-[18px] leading-[21.09px]'>Log Out</p>
                            </div>
                        </div>
                    }


                </div>
                {/* section2 */}
                <div className='w-[90%] h-fit mx-auto rounded-[20px] bg-[#FFFFFF] flex flex-wrap gap-[.5rem] justify-between items-center px-[1rem] py-[.5rem] shadow-lg'>
                    <div className='h-full w-fit flex items-center gap-[.5rem]'>
                        <img src={foodoos} alt="foodoos" className='h-[60px] aspect-auto rounded-full' />
                        <div className='w-fit flex flex-col gap-[.5rem]'>
                            <p className=' font-[600] font-inter text-[24px] leading-[23px] text-wrap'>Foodoos</p>
                            <div className='flex'>
                                <IoLocationOutline className='text-[1.1rem]' />
                                <p className=' font-[500] font-Roboto text-[16px] leading-[20px]'>Salt Lake</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-fit flex items-center gap-[10px]'>
                        <img src={Facebook} alt="Facebook" className='w-[32px]' />
                        <img src={instagram} alt="instagram" className='w-[32px]' />
                    </div>
                </div>
            </div>


            {/* section3 search bar and menu */}
            <div className='w-full h-fit flex justify-between items-center px-[1rem] py-[1rem]'>
                <div
                    onClick={() => {
                        navigate('search');
                    }} className=' w-[60%] border-2 border-[#12121214] h-[50px] flex items-center px-[1rem] py-[1rem] rounded-[10px] bg-[#FFFFFF] '>
                    <FaSearch className='text-[1.4rem] font-bold text-[#FFD600]' />
                    <p className=' font-[500] font-inter text-[16px] leading-[19.36px] text-[#787878] ml-[.5rem]'>Search for dish</p>
                </div>
                <div className='w-fit flex items-center gap-[10px] bg-[#000000] px-[1rem] py-[.5rem] rounded-[10px]'>
                    <img src={Fork} alt="Fork and Spoon" className='w-[32px] aspect-auto' />
                    <p className=' font-[500] font-inter text-[18px] leading-[21.78px] text-[#FFFFFF]'>Menu</p>
                </div>
            </div>


            {/* section4 */}
            <div className='w-full h-fit flex justify-between items-center px-[1rem] py-[1rem]'>

            </div>

            {/* section 5  most recommand */}

            <div className='w-full h-fit px-[1rem] py-[1rem]'>
                <div className='flex gap-[1rem] items-center'>
                    <img src={Star} alt="Star" className='w-[32px] aspect-auto' />
                    <p className=' font-[500] font-inter text-[18px] leading-[30px] text-[#101828]'>Most Recommended <span>(12)</span></p>
                </div>

                {/* all menu items which are most recommended by users will be shown here */}
                <div className='w-full h-fit overflow-x-hidden mt-[1rem] '>
                    <div className='w-full h-fit'>
                        <Menucard />
                    </div>

                </div>
            </div>

            {/* section 6  favorite */}

            <div className='w-full h-fit px-[1rem] py-[1rem]'>
                <div className='flex gap-[1rem] items-center'>
                    <img src={like} alt="like" className='w-[32px] aspect-auto' />
                    <p className=' font-[500] font-inter text-[18px] leading-[30px] text-[#101828]'>Your Favourite <span>(12)</span></p>
                </div>

                {/* all menu items which are most recommended by users will be shown here */}
                <div className='w-full h-fit overflow-x-hidden mt-[1rem] '>
                    <div className='w-full h-fit'>
                        <Menucard />
                    </div>
                </div>
            </div>

            {/* section 6  Noodles */}

            <div className='w-full h-fit px-[1rem] py-[1rem]'>
                <div className='flex gap-[1rem] items-center'>
                    <img src={Star} alt="Star" className='w-[32px] aspect-auto' />
                    <p className=' font-[500] font-inter text-[18px] leading-[30px] text-[#101828]'>Noodles <span>(12)</span></p>
                </div>

                {/* all menu items which are most recommended by users will be shown here */}
                <div className='w-full h-fit overflow-x-hidden mt-[1rem] '>
                    <div className='w-full h-fit'>
                        <Menucard />
                    </div>
                </div>
            </div>

            {/* section 7  feedback */}

            <div onClick={() => {
                setFeedbackOpen(true);
            }}
                className='w-fit h-fit flex items-center px-[1rem] py-[1rem] fixed top-[85vh] right-0 bg-black text-white rounded-l-[10px]'>
                <FaPlus className='text-[1.1rem] mr-[.5rem]' /> Feedback
            </div>



            {/* section 8  popup for menuprofile */}

            {
                isMenuOpen &&
                <div className='w-full h-0 relative '>
                    <Menuprofile isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
                </div>
            }

            {/* section 9  popup for feedback */}

            {
                isFeedbackOpen &&
                <div className='w-full h-[100vh] fixed bottom-0 left-0 flex justify-center items-center bg-black bg-opacity-50'>
                    <div className='w-[80%] h-fit bg-[#FFFFFF] rounded-[8px] p-[1rem]'>
                        <div className='w-full h-fit flex justify-between items-center  pb-[1rem] border-b-[1.5px] border-[#939393CC]'>
                            <p className=' font-[500] font-inter text-[18px] leading-[30px] text-[#101828] ml-[.5rem]'>Write feedback</p>
                            <RxCross2
                                onClick={() => {
                                    setFeedbackOpen(false);
                                }} className='text-[1.2rem] cursor-pointer' />
                        </div>

                        <Link to='' className='w-[100%]  h-fit px-[1rem] py-[1.5rem] bg-[#E23744] rounded-[8px] flex items-center justify-center mt-[1rem]'>
                            <img src={zomato} alt="zomato" className='w-[100px] aspect-auto' />
                        </Link>
                        <Link to='' className='w-[100%]  h-fit mt-[1rem] px-[1rem] py-[1rem] bg-[#F0EFEF] rounded-[8px] flex items-center justify-center'>
                            <img src={google} alt="google" className='w-[100px] aspect-auto' />
                        </Link>
                    </div>
                </div>
            }

            {/* section 10  popup for share */}
            {
                isShareOpen &&
                <div className='w-full h-0 relative '>
                    <Shareprofile isShareOpen={isShareOpen} setShareOpen={setShareOpen} />
                </div>
            }

            {/* section 11  popup for birthday and anniversary */}

            {
                isBirthdayOpen &&
                <div className='w-full h-0 relative '>
                    <Birthdayprofile isBirthdayOpen={isBirthdayOpen} setBirthdayOpen={setBirthdayOpen} />
                </div>
            }


        </>
    )
}

export default MainPage
