import { useNavigate, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


//redux
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { fetchRestaurantDetails } from '../redux/slices/restaurentslice';

//image
import Hand from '../assets/Hand.png';
import foodoos from '../assets/foodoos.png';
import Facebook from '../assets/Facebook.png';
import instagram from '../assets/instagram.png';
// import Star from '../assets/Star.png';
import Fork from '../assets/Fork and Spoon.png';
import zomato from '../assets/zomato.png';
import google from '../assets/google.png';
// import like from '../assets/like.png';
import nocomments from '../assets/no comments bubble.png';


//icons
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { RiShareForwardLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";

//components
import Menucard from '../components/Menucard';
import Menuprofile from '../components/Menuprofile';
import Shareprofile from '../components/Shareprofile';
import Birthdayprofile from '../components/Birthdayprofile';
import Loader from '../components/Loader';

interface MenuItem {
    _id: string;
    name: string;
    image: string[];
    description: string;
    price: string;
    category: string;
    subcategory: string;
    serves: string;
    tag: string;
    active: boolean;
    categoryActive: boolean;
    clicks: number;
    addone: any[]; // You can specify a type for addone based on its actual structure
    type: string;
    __v: number;
}

interface Subcategory {
    _id: string;
    name: string;
    image: string;
    menuItems: MenuItem[];
    active: boolean;
    __v: number;
}

interface Category {
    _id: string;
    name: string;
    subcategory: Subcategory[];
    __v: number;
}

// interface Restaurant {
//     _id: string;
//     resName: string;
//     email: string;
//     businessType: string;
//     __v: number;
//     subscriptionDetails: any; // You can define a more specific interface for subscription details
//     category: Category[];
// }
const MainPage = () => {
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch()
    const { data, loading, error } = useAppSelector((state) => state.restaurant)


    const navigate = useNavigate();
    const [isFeedbackOpen, setFeedbackOpen] = useState<boolean>(false);
    const [isLogoutOpen, setLogoutOpen] = useState<boolean>(false);
    const [isShareOpen, setShareOpen] = useState<boolean>(false);
    const [isBirthdayOpen, setBirthdayOpen] = useState<boolean>(false);
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [isCategoryOpen, setCategoryOpen] = useState<boolean>(false);
    const [showCategory, setShowCategory] = useState<boolean>(false);
    const [modalData, setModalData] = useState<MenuItem | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("food menu");
    const filteredData = data?.category?.filter((item: Category) => item?.name === selectedCategory)[0];
    console.log(filteredData);


    useEffect(() => {
        // setBirthdayOpen(true);
        if (id) {
            dispatch(fetchRestaurantDetails({ id }))
        }
    }, []);

    console.log(data);

    useEffect(() => {
        if (isFeedbackOpen || isShareOpen || isBirthdayOpen || isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

    }, [isFeedbackOpen, isShareOpen, isBirthdayOpen, isMenuOpen]);

    if (loading) return <Loader />
    if (error) return <div>Error: {error}</div>
    else
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
                                <p className=' font-[600] font-inter text-[24px] leading-[23px] text-wrap'>{data?.resName}</p>
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
                <div className='w-full h-fit flex justify-between items-center px-[1rem] py-[1rem] relative'>
                    <div
                        onClick={() => {
                            navigate('search');
                        }} className=' w-[60%] border-2 border-[#12121214] h-[50px] flex items-center px-[1rem] py-[1rem] rounded-[10px] bg-[#FFFFFF] '>
                        <FaSearch className='text-[1.4rem] font-bold text-[#FFD600]' />
                        <p className=' font-[500] font-inter text-[16px] leading-[19.36px] text-[#787878] ml-[.5rem]'>Search for dish</p>
                    </div>
                    <div
                        onClick={() => {
                            setCategoryOpen(!isCategoryOpen);
                        }} className='w-fit flex items-center gap-[10px] bg-[#000000] px-[1rem] py-[.5rem] rounded-[10px]'>
                        <img src={Fork} alt="Fork and Spoon" className='w-[32px] aspect-auto' />
                        <p className=' font-[500] font-inter text-[18px] leading-[21.78px] text-[#FFFFFF]'>Menu</p>
                    </div>

                    {
                        isCategoryOpen &&
                        <div className=' absolute top-[5rem] right-[1rem]  px-[1rem] bg-white max-h-[200px] overflow-y-scroll rounded-[8px] hideScroller py-[.5rem]'>
                            {
                                filteredData?.subcategory.filter((subcategory: Subcategory) => subcategory.active == true).map((item: Category) => (
                                    <p key={item?._id} className=' font-[500] font-inter text-[18px] leading-[21.78px] text-[#101828] pt-[1rem]'>
                                        {item?.name}
                                    </p>
                                ))
                            }
                        </div>
                    }
                </div>



                {/* section4 */}
                <div className='w-full h-fit flex gap-[1rem] items-center px-[1rem] py-[1rem]'>
                    {/* drop down for category */}
                    <div
                        onClick={
                            () => {
                                setShowCategory(!showCategory);
                            }
                        } className='px-[.5rem] py-[.7rem]  border-[2px] border-[#101828] flex justify-between gap-[.5rem] items-center rounded-[8px] relative'>
                        <p className=' font-[400] font-inter text-[16px] leading-[19.36px] text-[#101828]'>{selectedCategory}</p>
                        <IoChevronDown className='text-[16px]'/>
                        <div>
                            {
                                showCategory &&
                                <div className='absolute top-[3rem] right-[1rem]  p-[1rem] bg-white max-h-[200px] overflow-y-scroll rounded-[8px] hideScroller py-[.5rem] z-[100] border-2 border-[#101828]'>
                                    {
                                        data?.category?.map((item: Category) => (
                                            <p onClick={()=>{
                                                setSelectedCategory(item.name);
                                            }} key={item?._id} className=' font-[500] font-inter text-[18px] leading-[21.78px] text-[#101828] pt-[1rem] text-nowrap'>
                                                {item?.name}
                                            </p>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    </div>
                    <div>
                            <div className=' border-2 rounded-[8px] px-[.7rem] py-[.2rem]'> 
                                <div></div>
                                <p>veg</p>
                            </div>
                    </div>

                </div>

                {/* section 6  MenuItems */}

                <div className='w-full h-fit'>
                    {
                        filteredData?.subcategory.filter((subcategory: Subcategory) => subcategory.active == true).map((item: Subcategory) => (
                            //  {item?.name}
                            <div className='w-full h-fit px-[1rem] py-[1rem]' key={item?._id}>
                                <div className='flex gap-[1rem] items-center'>
                                    <img src={item?.image} alt={item?.name} className='w-[32px] aspect-auto' />
                                    <p className=' font-[500] font-inter text-[18px] leading-[30px] text-[#101828]'>{item?.name} <span>({item.menuItems.length})</span></p>
                                </div>

                                <div className='w-full h-fit overflow-x-hidden mt-[1rem]'>
                                    <div >
                                        {
                                            item?.menuItems?.filter((menu: MenuItem) => menu.active === true && menu.categoryActive === true).length === 0 ? (
                                                <div className='w-full h-fit flex flex-col justify-center items-center gap-[1rem]'>
                                                    <img src={nocomments} alt="nocomments" className='w-[100px] aspect-auto' />
                                                    <p className=' font-[500] font-Sen text-[14px] leading-[20px] text-[#101828]'>No items available</p>
                                                </div>
                                            )
                                                :
                                                (
                                                    <div className={`w-[${item?.menuItems.filter((menu: MenuItem) => menu.active == true && menu.categoryActive == true).length * 330
                                                        }px] flex gap-[1rem] overflow-x-scroll scroller hideScroller`}
                                                    >
                                                        {
                                                            item?.menuItems.filter((menu: MenuItem) => menu.active == true && menu.categoryActive == true).map((item: MenuItem) => (
                                                                <div key={item?._id} onClick={
                                                                    () => {
                                                                        setMenuOpen(true);
                                                                        setModalData(item);
                                                                    }
                                                                }>
                                                                    <Menucard
                                                                        item={item} />

                                                                </div>
                                                            ))

                                                        }
                                                    </div>
                                                )
                                        }

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div >

                {/* section 7  feedback */}

                <div onClick={() => {
                    setFeedbackOpen(true);
                }}
                    className='w-fit h-fit flex items-center px-[1rem] py-[1rem] fixed top-[85vh] right-0 bg-black text-white rounded-l-[10px]' >
                    <FaPlus className='text-[1.1rem] mr-[.5rem]' /> Feedback
                </div >

                {/* section 8  popup for menuprofile */}

                {
                    isMenuOpen &&
                    <div className='w-full h-0 relative '>
                        <Menuprofile isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} modalData={modalData} />
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
