import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MenuItem } from './MainPage';

// components
import Menuprofile from '../components/Menuprofile';
import Menucard from '../components/Menucard';

//redux
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { fetchAllMenuDetails } from '../redux/slices/menuslice';
import { searchMenuDetails } from '../redux/slices/searchmenu';

// icons
import { FaSearch } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

//image
import searchIcon from '../assets/searchIcon.png';
import nothingfound from '../assets/no comments bubble.png';
//import Loader from '../components/Loader';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const Searchpage: React.FC<SearchBarProps> = () => {
    const { id } = useParams<{ id: string }>();

    //redux call
    const dispatch = useAppDispatch();
    const { data, error } = useAppSelector((state) => state.allMenuDetails);
    const searchmenu = useAppSelector((state) => state.searchMenu);
    const favoriteMenu = useAppSelector((state) => state.favoriteMenu)

    // normal const variable
    const [menuId, setMenuId] = useState<string>('');
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [modalData, setModalData] = useState<MenuItem | null>(null);
    console.log(data);


    console.log("search: ", searchmenu.data);



    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const menuId = event.target.value;
        setMenuId(menuId);
        if (id && menuId) {
            dispatch(searchMenuDetails({ id, menuId }));
        }
        console.log(menuId);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && id && menuId) {
            dispatch(searchMenuDetails({ id, menuId }));
            console.log(menuId);
        }
    };

    useEffect(() => {
        if (id) {
            dispatch(fetchAllMenuDetails({ id }))
        }
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else if (isMenuOpen === false) {
            document.body.style.overflow = 'unset';
        }
    }, [id, isMenuOpen]);

    //if (loading) return <Loader />
    if (error) return <div>Error: {error}</div>
    else
        return (
            <>
                <div className='w-full sticky top-0 z-[100] bg-white pb-[1rem]'>
                    <p className='font-inter font-[500] text-[1.4rem] leading-[2rem] m-[1rem]'>Search</p>
                    <div className='w-[90%] mx-auto px-[1rem] rounded-[8px] h-fit flex items-center justify-center mt-[1rem] border-[1px] relative'>
                        <FaSearch className="text-[1.2rem] text-[#FFD600]" />
                        <input
                            className='w-full h-[3rem] ml-[.5rem] focus:outline-none '
                            type="text"
                            value={menuId}
                            onChange={handleInputChange}
                            placeholder="Search your favourite dish"
                        />
                        {menuId.length > 0 &&
                            <RxCrossCircled
                                className="text-[1.4rem] text-[#FFD600] absolute right-[1rem] top-[50%] translate-y-[-50%]"
                                onClick={() => { setMenuId("") }} />}
                    </div>
                </div>

                {
                    menuId.length === 0 ?
                        (
                            <div className='w-full h-fit'>
                                {data?.menuItems?.map((menu: MenuItem[], menuIndex: number) => (
                                    <div key={`menu-${menuIndex}`}>

                                        {/* menu[0]?.image[0] && menu[1]?.image[0] && menu[2]?.image[0] && */}
                                        {
                                            menu[0]?.image[0] && menu[1]?.image[0] && menu[2]?.image[0] &&
                                            <div className='w-full h-fit flex gap-[.5rem] justify-between items-center px-[1rem] mt-[1rem]'>
                                                <div className='w-[50%] h-fit flex flex-col gap-[.5rem] items-center justify-center'>

                                                    <div onClick={() => {
                                                        setModalData(menu[0]);
                                                        setMenuOpen(true);
                                                    }} className='w-full h-fit relative '>
                                                        <img src={menu[0]?.image[0]} alt="image1" className='w-full aspect-square object-cover rounded-[8px] h-full' />
                                                        <div className='w-full absolute bottom-0 bg-[#0000008A] flex items-center gap-[.5rem] px-[.5rem] rounded-[8px]'>
                                                            <div className='flex items-center justify-center border-[1px] border-white p-[.3rem] rounded-[8px]'>
                                                                <div
                                                                    className={
                                                                        `${menu[0]?.type === "veg" ? "bg-[#67CE67]"
                                                                            :
                                                                            menu[0]?.type === "egg" ? "bg-[#FFC107]" : "bg-[#ED4F4F]"
                                                                        } rounded-full w-[8px] aspect-square `}
                                                                >
                                                                </div>
                                                            </div>
                                                            <p className='w-full text-white font-inter font-[400] text-[12px] leading-[24px] text-ellipsis text-nowrap overflow-hidden'>{menu[0]?.name}</p>
                                                        </div>
                                                    </div>


                                                    <div onClick={() => {
                                                        setModalData(menu[1]);
                                                        setMenuOpen(true);
                                                    }} className='w-full h-fit relative '>
                                                        <img src={menu[1]?.image[0]} alt="image2" className='w-full aspect-square object-cover rounded-[8px] h-full' />
                                                        <div className='w-full absolute bottom-0 bg-[#0000008A] flex items-center gap-[.5rem] px-[.5rem] rounded-[8px]'>
                                                            <div className='flex items-center justify-center border-[1px] border-white p-[.3rem] rounded-[8px]'>
                                                                <div
                                                                    className={
                                                                        `${menu[1]?.type === "veg" ? "bg-[#67CE67]"
                                                                            :
                                                                            menu[1]?.type === "egg" ? "bg-[#FFC107]" : "bg-[#ED4F4F]"
                                                                        } rounded-full w-[8px] aspect-square `}
                                                                >
                                                                </div>
                                                            </div>
                                                            <p className='text-white font-inter font-[400] text-[12px] leading-[24px] text-ellipsis text-nowrap overflow-hidden'>{menu[1]?.name}</p>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div onClick={() => {
                                                    setModalData(menu[2]);
                                                    setMenuOpen(true);
                                                }} className='w-full h-full relative '>
                                                    <img src={menu[2]?.image[0]} alt="image3" className='h-full aspect-square object-cover rounded-[8px]' />
                                                    <div className='w-full absolute bottom-0 bg-[#0000008A] flex  items-center gap-[.5rem] px-[.5rem] rounded-[8px]'>
                                                        <div className='flex items-center justify-center border-[1px] border-white p-[.3rem] rounded-[8px]'>
                                                            <div
                                                                className={
                                                                    `${menu[2]?.type === "veg" ? "bg-[#67CE67]"
                                                                        :
                                                                        menu[2]?.type === "egg" ? "bg-[#FFC107]" : "bg-[#ED4F4F]"
                                                                    } rounded-full w-[8px] aspect-square `}
                                                            >
                                                            </div>
                                                        </div>
                                                        <p className='text-white font-inter font-[400] text-[12px] leading-[24px] text-ellipsis text-nowrap overflow-hidden'>{menu[2]?.name}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        }
                                        {/* menu[3]?.image[0] && menu[4]?.image[0] && menu[5]?.image[0] && */}
                                        {
                                            menu[3]?.image[0] && menu[4]?.image[0] && menu[5]?.image[0] &&
                                            <div className='w-full h-fit flex gap-[.5rem] flex-row-reverse justify-between items-center px-[1rem] mt-[1rem]'>
                                                <div className='w-[50%] h-fit flex flex-col gap-[.5rem] items-center justify-center'>

                                                    <div onClick={() => {
                                                        setModalData(menu[3]);
                                                        setMenuOpen(true);
                                                    }} className='w-full h-fit relative'>
                                                        <img src={menu[3]?.image[0]} alt="image1" className='w-full aspect-square object-cover rounded-[8px] h-full' />
                                                        <div className='w-full absolute bottom-0 bg-[#0000008A] flex items-center gap-[.5rem] px-[.5rem] rounded-[8px]'>
                                                            <div className='flex items-center justify-center border-[1px] border-white p-[.3rem] rounded-[8px]'>
                                                                <div
                                                                    className={
                                                                        `${menu[3]?.type === "veg" ? "bg-[#67CE67]"
                                                                            :
                                                                            menu[3]?.type === "egg" ? "bg-[#FFC107]" : "bg-[#ED4F4F]"
                                                                        } rounded-full w-[8px] aspect-square `}
                                                                >
                                                                </div>
                                                            </div>
                                                            <p className='text-white font-inter font-[400] text-[12px] leading-[24px] text-ellipsis text-nowrap overflow-hidden'>{menu[3]?.name}</p>
                                                        </div>
                                                    </div>


                                                    <div onClick={() => {
                                                        setModalData(menu[4]);
                                                        setMenuOpen(true);
                                                    }} className='w-full h-fit relative'>
                                                        <img src={menu[4]?.image[0]} alt="image2" className='w-full aspect-square object-cover rounded-[8px] h-full' />
                                                        <div className='w-full absolute bottom-0 bg-[#0000008A] flex items-center gap-[.5rem] px-[.5rem] rounded-[8px]'>
                                                            <div className='flex items-center justify-center border-[1px] border-white p-[.3rem] rounded-[8px]'>
                                                                <div
                                                                    className={
                                                                        `${menu[4]?.type === "veg" ? "bg-[#67CE67]"
                                                                            :
                                                                            menu[4]?.type === "egg" ? "bg-[#FFC107]" : "bg-[#ED4F4F]"
                                                                        } rounded-full w-[8px] aspect-square `}
                                                                >
                                                                </div>
                                                            </div>
                                                            <p className='text-white font-inter font-[400] text-[12px] leading-[24px] text-ellipsis text-nowrap overflow-hidden'>{menu[4]?.name}</p>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div onClick={() => {
                                                    setModalData(menu[5]);
                                                    setMenuOpen(true);
                                                }} className='w-full h-full relative'>
                                                    <img src={menu[5]?.image[0]} alt="image3" className='h-full aspect-square object-cover rounded-[8px]' />
                                                    <div className='w-full absolute bottom-0 bg-[#0000008A] flex items-center gap-[.5rem] px-[.5rem] rounded-[8px]'>
                                                        <div className='flex items-center justify-center border-[1px] border-white p-[.3rem] rounded-[8px]'>
                                                            <div
                                                                className={
                                                                    `${menu[5]?.type === "veg" ? "bg-[#67CE67]"
                                                                        :
                                                                        menu[5]?.type === "egg" ? "bg-[#FFC107]" : "bg-[#ED4F4F]"
                                                                    } rounded-full w-[8px] aspect-square `}
                                                            >
                                                            </div>
                                                        </div>
                                                        <p className='text-white font-inter font-[400] text-[12px] leading-[24px] text-ellipsis text-nowrap overflow-hidden'>{menu[5]?.name}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        }

                                    </div>
                                ))}
                            </div>
                        )

                        :
                        (
                            <div className='w-full flex flex-col items-center gap-[1rem] py-[2rem]'>
                                <div className='w-full flex items-center gap-[1rem] px-[1rem]'>
                                    <p className='font-[500] font-inter text-[20px] leading-[30px] text-[#101828]'>Search Results </p>
                                    <img src={searchIcon} alt="searchIcon" className='w-[20px] aspect-auto' />
                                </div>
                                {
                                    searchmenu?.data?.menuItems?.length === 0 ?
                                        (
                                            <div className='w-full flex flex-col items-center gap-[1rem] py-[2rem]'>
                                                <p className='font-[500] font-Sen text-[20px] leading-[30px] text-[#101828]'>Nothing Found </p>
                                                <img src={nothingfound} alt="nothingfound" className='w-[90%] aspect-auto max-w-[400px]' />
                                            </div>
                                        )
                                        :

                                        (
                                            <div className='w-full flex flex-col items-center gap-[1rem] pb-[1rem]'>
                                                {
                                                    searchmenu?.data?.menuItems?.map((menu: MenuItem, index: number) => (
                                                        <div onClick={() => {
                                                            setModalData(menu);
                                                            setMenuOpen(true);
                                                        }} key={index} >
                                                            {
                                                                (() => {
                                                                    const isFavorite = favoriteMenu?.data?.some((item: any) => item._id === menu._id);
                                                                    return <Menucard item={menu} isFavorite={isFavorite} />
                                                                })()
                                                            }
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        )
                                }
                            </div>
                        )
                }



                {/*  popup for menuprofile */}

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



            </>
        )
}

export default Searchpage

