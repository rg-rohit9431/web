import { useNavigate, Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import axios from 'axios';

//redux
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { fetchRestaurantDetails } from '../redux/slices/restaurentslice';
import { fetchMostRecommandItemsDetails } from '../redux/slices/mostrecommandslice';
import { favoriteMenuDetails } from '../redux/slices/favoriteslice';

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
// import { baseUrl } from '../main';

export interface Addone {
    _id: string;
    name: string;
    price: string;
    __v: number;
}

export interface MenuItem {
    likes: number;
    likedBy: string[];
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
    subcategoryActive: boolean;
    clicks: number; // Added this field as it is not in the JSON data but might be needed
    addone: Addone[]; // Adjusted this to be an array of strings (IDs), not Addone objects
    type: string;
    __v: number;
}

export interface Subcategory {
    _id: string;
    name: string;
    image: string;
    menuItems: MenuItem[];
    active: boolean;
    __v: number;
}

export interface Category {
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

interface Filters {
    veg: boolean;
    nonVeg: boolean;
    egg: boolean;
    bestSeller: boolean;
    chefsChoice: boolean;
}


const MainPage = () => {
    const { id } = useParams<{ id: string }>();
    //redux
    const dispatch = useAppDispatch()
    const { data, loading, error } = useAppSelector((state) => state.restaurant)
    const mostRecommand = useAppSelector((state) => state.mostRecommand)
    const favoriteMenu = useAppSelector((state) => state.favoriteMenu)
    console.log("favoriteMenu ", favoriteMenu);

    // const userString = localStorage.getItem("user");
    // const user = userString ? JSON.parse(userString) : null;
    const user =
    {
        "name": "snacckbae", // temporary user name
    };

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
    const [meal, setMeal] = useState<string>('');

    const [filters, setFilters] = useState<Filters>({
        veg: false,
        nonVeg: false,
        egg: false,
        bestSeller: false,
        chefsChoice: false
    });
    const handleFilterToggle = (filter: keyof Filters) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filter]: !prevFilters[filter]
        }));
    };

    const filterMenuItems = (menuItems: MenuItem[]) => {
        return menuItems.filter((menu) => {
            const vegMatch = filters.veg && menu.type === 'veg';
            const nonVegMatch = filters.nonVeg && menu.type === 'nonveg';
            const eggMatch = filters.egg && menu.type === 'egg';

            const chefChoiceMatch = filters.chefsChoice && menu.tag === 'chefchoice';
            const bestSellerMatch = filters.bestSeller && menu.tag === 'bestseller';

            const typeMatch = filters.veg || filters.nonVeg || filters.egg
                ? vegMatch || nonVegMatch || eggMatch
                : true;

            const tagMatch = filters.chefsChoice || filters.bestSeller
                ? chefChoiceMatch || bestSellerMatch
                : true;

            return typeMatch && tagMatch;
        });
    };

    const scrollToElement = (id: string) => {
        const element = document.getElementById(id);
        const headerOffset = 180; // Adjust this value to match the height of your fixed header

        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        } else {
            console.warn(`Element with ID "${id}" not found.`);
        }
    };

    const filteredData = data?.category?.filter((item: Category) => item?.name === selectedCategory)[0];
    console.log(filteredData);


    const getCurrentMeal = (): string => {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();

        if (currentHour >= 5 && currentHour < 10) {
            return 'Breakfast';
        } else if (currentHour >= 10 && currentHour < 14) {
            return 'Lunch';
        } else if (currentHour >= 14 && currentHour < 18) {
            return 'Snacks';
        } else if (currentHour >= 18 && currentHour < 22) {
            return 'Dinner';
        } else {
            return 'Late Night Snack';
        }
    };


    useEffect(() => {
        setBirthdayOpen(true);


        //get update meal as breakfast, lunch and dinner and more...
        const currentMeal = getCurrentMeal();
        setMeal(currentMeal);

        if (id) {
            dispatch(fetchRestaurantDetails({ id }));
            dispatch(fetchMostRecommandItemsDetails({ id }));
        }


        //for user visits
        // const storedValue = localStorage.getItem("snackBae_code");
        // let isValueStored = storedValue ? JSON.parse(storedValue) : null;
        // if (isValueStored) {
        //     const now = new Date().getTime();
        //     const twelveHours = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

        //     // we check if the item has expired
        //     if (now - isValueStored.timestamp > twelveHours) {
        //         localStorage.removeItem("snackBae_code");
        //         isValueStored = null;
        //     }
        // }
        // if (!isValueStored) {
        //     const userString = localStorage.getItem("user");

        //     if (userString) {
        //         const user = JSON.parse(userString);

        //         const userId = user?._id;

        //         let data = '';

        //         let config = {
        //             method: 'post',
        //             maxBodyLength: Infinity,
        //             url: `${baseUrl}/api/updateCustomerInfo/${userId}/${id}`,
        //             headers: {},
        //             data: data
        //         };

        //         axios.request(config)
        //             .then((response) => {
        //                 console.log(JSON.stringify(response.data));
        //                 const item = {
        //                     value: "for visitors data",
        //                     timestamp: new Date().getTime() // current time in milliseconds
        //                   };
        //                   localStorage.setItem("snackBae_code", JSON.stringify(item));
        //             })
        //             .catch((error) => {
        //                 console.log(error);
        //             });
        //     }
        // }
    }, []);

    console.log(data);

    useEffect(() => {
        if (user && id) {
            const userId = '6693c7f4ab15d62273c90f83';
            dispatch(favoriteMenuDetails({ id, userId }));
        }
        if (isFeedbackOpen || isShareOpen || isBirthdayOpen || isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else if (isFeedbackOpen === false || isShareOpen === false || isBirthdayOpen === false || isMenuOpen === false) {
            document.body.style.overflow = 'unset';
        }

    }, [isFeedbackOpen, isShareOpen, isBirthdayOpen, isMenuOpen]);

    if (loading) return <Loader />
    else if (error) return <div className='w-full h-[100vh] flex items-center justify-center'>Error</div>
    else
        return (
            <>
                <div className="w-full min-h-[200px] h-fit bg-[#FFD628] rounded-b-[30px]">
                    {/* section1 */}
                    <div className='w-full h-fit flex justify-between items-center px-[1rem] py-[1rem] relative'>
                        <div className='w-fit flex items-start justify-between px-[1rem] py-[1rem]'>
                            <div className='mr-[.5rem]'>
                                <p className=' font-[700] font-Sen text-[21px] leading-[25.27px]'>Hello {user?.name}</p>
                                <p className='text-[#444343] font-[700] font-Sen text-[17px] leading-[16.94px]'>Its {meal} time</p>
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
                            {
                                data?.additionalDetails?.facebook &&
                                <Link target='_blank' to={`${data?.additionalDetails?.facebook}`}>
                                    <img src={Facebook} alt="Facebook" className='w-[32px]' />
                                </Link>
                            }

                            {
                                data?.additionalDetails?.instagram &&
                                <Link target='_blank' to={`${data?.additionalDetails?.instagram}`}>
                                    <img src={instagram} alt="instagram" className='w-[32px]' />
                                </Link>
                            }
                        </div>
                    </div>
                </div>

                {/* sticky elements */}
                <div className='w-full h-fit sticky top-0 bg-white border-b-[1px] z-[100]'>
                    {/* section3 search bar and menu */}
                    <div className='w-full h-fit flex justify-between items-center px-[1rem] pt-[1rem] relative'>
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
                            <img src={Fork} alt="Fork and Spoon" className='w-[25px] aspect-auto' />
                            <p className=' font-[500] font-inter text-[18px] leading-[21.78px] text-[#FFFFFF]'>Menu</p>
                        </div>

                        {
                            isCategoryOpen &&
                            <div className=' absolute top-[5rem] right-[1rem]  py-[1rem] px-[1.5rem] bg-white max-h-[200px] overflow-y-scroll rounded-[8px] hideScroller border-[1px] shadow-md border-[#12121214]'>
                                {
                                    filteredData?.subcategory.filter((subcategory: Subcategory) => subcategory.active == true).map((item: Subcategory) => (
                                        <p onClick={() => {
                                            scrollToElement(item?.name);
                                            setCategoryOpen(!isCategoryOpen);
                                        }} key={item?._id} className=' font-[500] font-inter text-[19px] leading-[21.78px] text-[#101828] pt-[1.2rem]'>
                                            {item?.name} ({item?.menuItems.filter(
                                                (menu: MenuItem) => menu?.active === true && menu?.subcategoryActive === true
                                            ).length})
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
                            } className='px-[.5rem] py-[.7rem]  border-[1px] border-[#00000099] flex justify-between gap-[.5rem] items-center rounded-[8px] relative'>
                            <p className=' font-[400] font-inter text-[16px] leading-[19.36px] text-[#101828] text-nowrap'>{selectedCategory}</p>
                            <IoChevronDown className='text-[16px]' />
                            <div>
                                {
                                    showCategory &&
                                    <div className='absolute top-[3rem] left-0  p-[1rem] bg-white max-h-[200px] overflow-y-scroll rounded-[8px] hideScroller  py-[.5rem] z-[100] border-[1px] border-[#00000099] text-nowrap w-fit'>
                                        {
                                            data?.category?.map((item: Category) => (
                                                <p onClick={() => {
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

                        {/* filter */}
                        <div className='w-full overflow-hidden'>
                            <div className='w-full flex items-center gap-[.5rem] overflow-scroll hideScroller'>
                                {/* veg */}
                                <div
                                    onClick={() => {
                                        scrollToElement("menu");
                                        handleFilterToggle('veg');
                                    }}
                                    className={`border-2 rounded-[8px] px-[.7rem] py-[.4rem] flex gap-[.3rem] items-center ${filters.veg === true ? 'border-[#2CAF29]' : 'border-[#12121214]'}`}>
                                    <div className='w-[10px] h-[10px] rounded-full bg-[#2CAF29]'></div>
                                    <p className=' font-[500] font-inter text-[18px] leading-[21.78px] text-[#101828] text-nowrap'>veg</p>
                                    <RxCross2 className={`text-[19px] font-[700]  ${filters.veg === true ? 'text-[#2CAF29] ' : 'text-[#12121214] hidden'} `} />
                                </div>
                                {/* nonVeg */}
                                <div
                                    onClick={() => {
                                        scrollToElement("menu");
                                        handleFilterToggle('nonVeg');
                                    }} className={`border-2 rounded-[8px] px-[.7rem] py-[.4rem] flex gap-[.3rem] items-center ${filters.nonVeg === true ? 'border-[#F44336]' : 'border-[#12121214]'}`}>
                                    <div className='w-[10px] h-[10px] rounded-full bg-[#F44336]'></div>
                                    <p className=' font-[500] font-inter text-[18px] leading-[21.78px] text-[#101828] text-nowrap'>Non-veg</p>
                                    <RxCross2 className={`text-[19px] font-[700]  ${filters.nonVeg === true ? 'text-[#F44336] ' : 'text-[#12121214] hidden'} `} />
                                </div>

                                {/* Egg */}
                                <div onClick={() => {
                                    scrollToElement("menu");
                                    handleFilterToggle('egg');
                                }} className={`border-2 rounded-[8px] px-[.7rem] py-[.4rem] flex gap-[.3rem] items-center ${filters.egg === true ? 'border-[#FFC107]' : 'border-[#12121214]'}`}>
                                    <div className='w-[10px] h-[10px] rounded-full bg-[#FFC107]'></div>
                                    <p className=' font-[500] font-inter text-[18px] leading-[21.78px] text-[#101828] text-nowrap'>Egg</p>
                                    <RxCross2 className={`text-[19px] font-[700]  ${filters.egg === true ? 'text-[#FFC107] ' : 'text-[#12121214] hidden'} `} />
                                </div>

                                {/* bestSeller */}
                                <div
                                    onClick={() => {
                                        scrollToElement("menu");
                                        handleFilterToggle('bestSeller');
                                    }} className={`border-2 rounded-[8px] px-[.7rem] py-[.4rem] flex gap-[.3rem] items-center ${filters.bestSeller === true ? 'border-[#FFC107]' : 'border-[#12121214]'}`}>
                                    <p className=' font-[500] font-inter text-[18px] leading-[21.78px] text-[#101828] text-nowrap'>Best Seller</p>
                                    <RxCross2 className={`text-[19px] font-[700]  ${filters.bestSeller === true ? 'text-[#FFC107] ' : 'text-[#12121214] hidden'} `} />
                                </div>

                                {/* chefsChoice */}
                                <div onClick={() => {
                                    scrollToElement("menu");
                                    handleFilterToggle('chefsChoice');
                                }} className={`border-2 rounded-[8px] px-[.7rem] py-[.4rem] flex gap-[.3rem] items-center ${filters.chefsChoice === true ? 'border-[#FFC107]' : 'border-[#12121214]'}`}>
                                    <p className=' font-[500] font-inter text-[18px] leading-[21.78px] text-[#101828] text-nowrap'>Chef's Choice</p>
                                    <RxCross2 className={`text-[19px] font-[700]  ${filters.chefsChoice === true ? 'text-[#FFC107] ' : 'text-[#12121214] hidden'} `} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* section 5  MostRecommandItems */}
                <div className='w-full h-fit px-[1rem] mt-[1rem]'>
                    <div className='py-[.5rem] px-[1rem] flex gap-[1rem] items-center border-b-[1px] '>
                        <img src={Star} alt='star' className='w-[32px] aspect-auto' />
                        <p className='font-[500] font-inter text-[18px] leading-[30px] text-[#101828]'>Most Recommended <span>({mostRecommand?.data?.menuItems?.length})</span></p>
                    </div>
                    <div className='w-full h-fit overflow-x-hidden my-[1rem]'>
                        <div className={`w-[${mostRecommand?.data?.menuItems?.length * 330}px] h-fit flex gap-[1rem] overflow-x-scroll scroller hideScroller`}>
                            {mostRecommand?.data?.menuItems?.map((menuItem: MenuItem) => (
                                <div key={menuItem._id} onClick={() => {
                                    setMenuOpen(true);
                                    setModalData(menuItem);
                                }}>
                                    {
                                        (() => {
                                            const isFavorite = favoriteMenu?.data?.some((item: any) => item._id === menuItem._id);
                                            return <Menucard item={menuItem} isFavorite={isFavorite} />
                                        })()
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* section 5  favoutite */}

                {
                    favoriteMenu?.data?.length > 0 &&
                    <div className='w-full h-fit px-[1rem] mt-[1rem]'>
                        <div className='py-[.5rem] px-[1rem] flex gap-[1rem] items-center border-b-[1px] '>
                            <img src={like} alt='like' className='w-[32px] aspect-auto' />
                            <p className='font-[500] font-inter text-[18px] leading-[30px] text-[#101828]'>Your Favourite <span>({favoriteMenu?.data?.length})</span></p>
                        </div>
                        <div className='w-full h-fit overflow-x-hidden mt-[1rem]'>
                            <div className={`w-[${favoriteMenu?.data?.length * 330}px] flex gap-[1rem] overflow-x-scroll scroller hideScroller`}>
                                {favoriteMenu?.data?.map((menuItem: MenuItem) => (
                                    <div key={menuItem._id} onClick={() => {
                                        setMenuOpen(true);
                                        setModalData(menuItem);
                                    }}>
                                        <Menucard item={menuItem} isFavorite={true} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }

                {/* section 6  MenuItems */}
                <div id='menu' className='w-full h-fit mb-[15vh] mt-[1rem]'>
                    {
                        filteredData?.subcategory.filter((subcategory: Subcategory) => subcategory.active).map((item: Subcategory) => (
                            <div id={item.name} className='w-full h-fit px-[1rem] py-[1rem] ' key={item._id}>
                                <div className='py-[.5rem] px-[1rem] flex gap-[1rem] items-center border-b-[1px] '>
                                    <img src={item.image} alt={item.name} className='w-[32px] aspect-auto' />
                                    <p className='font-[500] font-inter text-[18px] leading-[30px] text-[#101828]'>{item.name} <span>({item.menuItems.filter(
                                        (menu: MenuItem) => menu?.active === true && menu?.subcategoryActive === true
                                    ).length})</span></p>
                                </div>

                                <div className='w-full h-fit overflow-x-hidden mt-[1rem]'>
                                    {(() => {
                                        const filteredMenuItems = filterMenuItems(item.menuItems).filter(
                                            (menu: MenuItem) => menu.active === true && menu.subcategoryActive === true
                                        );
                                        console.log(filteredMenuItems);

                                        return filteredMenuItems.length === 0 ? (
                                            <div className='w-full h-fit flex flex-col justify-center items-center gap-[1rem]'>
                                                <img src={nocomments} alt="nocomments" className='w-[100px] aspect-auto' />
                                                <p className='font-[500] font-Sen text-[14px] leading-[20px] text-[#101828]'>No items available</p>
                                            </div>
                                        ) : (
                                            <div className={`w-[${filteredMenuItems.length * 330}px] flex gap-[1rem] overflow-x-scroll scroller hideScroller`}>
                                                {filteredMenuItems.map((menuItem: MenuItem) => (
                                                    <div key={menuItem._id} onClick={() => {
                                                        setMenuOpen(true);
                                                        setModalData(menuItem);
                                                    }}>
                                                        {
                                                            (() => {
                                                                const isFavorite = favoriteMenu?.data?.some((item: any) => item._id === menuItem._id);
                                                                return <Menucard item={menuItem} isFavorite={isFavorite} />
                                                            })()
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                    })()}
                                </div>

                            </div>
                        ))
                    }
                </div>

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
                        {
                            (() => {
                                const isFavorite = favoriteMenu?.data?.some((item: any) => item._id === modalData?._id);
                                return <Menuprofile isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} modalData={modalData} isFavorite={isFavorite} />
                            })()
                        }
                    </div>
                }

                {/* section 9  popup for feedback */}

                {
                    isFeedbackOpen &&
                    <div className='w-full h-[100vh] fixed bottom-0 left-0 flex justify-center items-center bg-black bg-opacity-50 z-[1000]'>
                        <div className='w-[80%] max-w-[400px] h-fit bg-[#FFFFFF] rounded-[8px] p-[1rem]'>
                            <div className='w-full h-fit flex justify-between items-center  pb-[1rem] border-b-[1.5px] border-[#939393CC]'>
                                <p className=' font-[500] font-inter text-[18px] leading-[30px] text-[#101828] ml-[.5rem]'>Write feedback</p>
                                <RxCross2
                                    onClick={() => {
                                        setFeedbackOpen(false);
                                    }} className='text-[1.2rem] cursor-pointer' />
                            </div>

                            <Link target='_blank' to={`${data?.additionalDetails?.zomato}`} className='w-[100%]  h-fit px-[1rem] py-[1.5rem] bg-[#E23744] rounded-[8px] flex items-center justify-center mt-[1rem]'>
                                <img src={zomato} alt="zomato" className='w-[100px] aspect-auto' />
                            </Link>
                            <Link target='_blank' to={`${data?.additionalDetails?.google}`} className='w-[100%]  h-fit mt-[1rem] px-[1rem] py-[1rem] bg-[#F0EFEF] rounded-[8px] flex items-center justify-center'>
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
