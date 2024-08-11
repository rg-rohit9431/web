import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { consoleUrl } from "../main";

//image
import logo from '../assets/logo1.png';
import logo1 from '../assets/logo2.png';

//icons
import { IoMdMenu, IoMdClose } from "react-icons/io";


//redux
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { getAllBlogs } from '../redux/slices/blogslice';

const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const allBlogs = useAppSelector((state) => state.blog);

    //handle toggle for menu for small screen
    const [isToggled, setIsToggled] = useState(false);
    const handleToggle = () => {
        setIsToggled(!isToggled);
    };
    // Function to handle link click
    const handleLinkClick = () => {
        if (isToggled) {
            setIsToggled(false);
        }
    };


    // Function to handle scrolling to the referenced element
    const scrollToElement = () => {
        const element = document.getElementById('product');

        // Scroll to the element if found
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        dispatch(getAllBlogs());
    }, [])

    // console.log(allBlogs);

    return (
        <div className=" absolute bg-transparent z-[1000] w-[100%] h-[70px] flex justify-between items-center px-[1rem]">
            {/* logo */}
            <img
                onClick={() => {
                    navigate("/");
                }}
                src={logo}
                alt="logo"
                className="h-full aspect-auto p-[.5rem] cursor-pointer mix-blend-multiply sm:block hidden"
            />

            {/* logo */}
            <img
                onClick={() => {
                    navigate("/");
                }}
                src={logo1}
                alt="logo"
                className="h-full aspect-auto p-[.5rem] cursor-pointer mix-blend-multiply sm:hidden block"
            />

            {/* links */}
            <div
                className={`sm:relative sm:top-0 sm:right-0 absolute top-[75px] right-[1rem] ${isToggled ? "flex" : "hidden sm:flex"
                    } sm:flex-row flex-col-reverse justify-between items-center shadow-lg sm:rounded-none rounded-lg sm:shadow-none p-[2rem] sm:p-0 gap-[1rem] sm:bg-transparent bg-white sm:gap-0 z-[999] `}
            >
                <div className="flex sm:flex-row flex-col justify-between items-center sm:gap-[2rem] gap-[.5rem]">
                    <button

                        onClick={() => {
                            handleLinkClick();
                            scrollToElement();
                        }}
                        className=" font-[600] text-[.9rem] leading-[1.6rem] sm:text-white"
                    >
                        Our Products
                    </button>
                    <NavLink
                        onClick={handleLinkClick}
                        className=" font-[600] text-[.9rem] leading-[1.6rem] sm:text-white"
                        to="/blogs"
                        state={{ allBlogs }}
                    >
                        Our Blogs
                    </NavLink>
                </div>
                <NavLink
                    onClick={handleLinkClick}
                    className="sm:ml-[2rem] bg-[#FFD628] px-[1.4rem] py-[.5rem] rounded-md font-[500] text-[1rem] leading-[1.15rem]"
                    to={consoleUrl}
                    target='_blank'
                >
                    Get Started
                </NavLink>
            </div>

            {/* menu-icons */}
            {isToggled ? (
                <IoMdClose
                    className="sm:hidden block text-[1.6rem] text-white"
                    onClick={handleToggle}
                />
            ) : (
                <IoMdMenu
                    className="sm:hidden block text-[1.6rem] text-white"
                    onClick={handleToggle}
                />
            )}
        </div>

    );
}

export default Navbar;