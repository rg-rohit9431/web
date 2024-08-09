
import { useState } from 'react';

//image
import Logo1 from '../assets/logo1.png';


//icons
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";



function Footer() {
    const [email, setEmail] = useState<string>("");
    function emailHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
    }
    function submitEmailHandler() {
        console.log(email);
        setEmail("");
    }

    //scroll-smooth
    function scrollSmooth() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div>
            {/* section */}
            <div className="w-full h-fit bg-[#0F172A] text-gray-200 pb-[1rem]">
                <div className="w-[95%] sm:w-[80%] mx-auto">
                    <div className="">
                        <div className="w-[90%] mx-auto text-[.9rem] flex-row  flex justify-between items-center ">
                            <img src={Logo1} alt="logo" width={120} className="py-[2rem]" />
                            <p className='mt-[1.8rem]'>Made with 💛 in the city of Joy</p>
                        </div>

                        <p className="bg-gray-400 w-[100%] mx-auto h-[.08px] mb-[1rem] "></p>
                    </div>

                    <div className="w-full py-[2rem] flex lg:flex-row flex-col justify-between items-center">
                        <div className="w-[100%] lg:w-[30%] flex flex-col justify-center items-center lg:items-start mb-[1rem] lg:mb-0">
                            <p className="text-[1.4rem] leading-tight mb-[1rem]">
                                Subscribe to our
                                <br className="lg:block hidden" /> newsletter
                            </p>
                            <div className="w-fit flex flex-nowrap ">
                                <input
                                    className="h-[3rem] sm:w-[300px] md:w-[250px] mx-auto bg-transparent border-b-2 focus:outline-none"
                                    type="email"
                                    value={email}
                                    onChange={emailHandler}
                                    placeholder="Email Address"
                                    required
                                />
                                <button
                                    onClick={submitEmailHandler}
                                    className="bg-[#EAB308] h-[3rem] px-2 rounded-t-md text-black font-semibold"
                                >
                                    <MdOutlineKeyboardArrowRight className='size-8' />
                                </button>
                            </div>
                        </div>
                        <div className="flex sm:justify-around justify-between w-[98%] lg:w-[70%] sm:gap-[.5rem] gap-[.3rem]">
                            <div className="flex flex-col gap-[.5rem]">
                                <p className="text-[#8b7430]">Services</p>
                                <Link onClick={scrollSmooth} to="/joinAsPartner">
                                    <div className="text-[.7rem] sm:text-[.9rem]">
                                        Interactive Digital Menu
                                    </div>
                                </Link>
                                <Link onClick={scrollSmooth} to="/joinAsPartner">
                                    <div className="text-[.7rem] sm:text-[.9rem]">
                                        Smart CRM
                                    </div>
                                </Link>
                                <Link onClick={scrollSmooth} to="/joinAsPartner">
                                    <div className="text-[.7rem] sm:text-[.9rem]">
                                        WhatsApp Business API
                                    </div>
                                </Link>
                            </div>
                            <div className="flex flex-col gap-[.5rem]">
                                <p className="text-[#8b7430]">About</p>
                                <Link onClick={scrollSmooth} to="/blogs">
                                    <div className="text-[.7rem] sm:text-[.9rem]">Our Blogs</div>
                                </Link>
                                <Link onClick={scrollSmooth} to="/privacyPolicy">
                                    <div className="text-[.7rem] sm:text-[.9rem]">Privacy Policy</div>
                                </Link>
                                <Link onClick={scrollSmooth} to="/termsCondition">
                                    <div className="text-[.7rem] sm:text-[.9rem]">Terms & condition</div>
                                </Link>
                            </div>
                            <div className="flex flex-col gap-[.5rem]">
                                <p className="text-[#8b7430] text-nowrap">For Restaurants</p>
                                <Link onClick={scrollSmooth} to="/joinAsPartner">
                                    <div className="text-[.7rem] sm:text-[.9rem]">
                                        Start for Free
                                    </div>
                                </Link>
                                <Link
                                    onClick={scrollSmooth}
                                    to="https://snackbaeuser-snackbaes-projects.vercel.app/"
                                >
                                    <div className="text-[.7rem] sm:text-[.9rem]">
                                        Partner Login
                                    </div>
                                </Link>
                                <Link
                                    onClick={scrollSmooth}
                                    to="https://snackbaeuser-snackbaes-projects.vercel.app/"
                                >
                                    <div className="text-[.7rem] sm:text-[.9rem]">
                                        Contact Us
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="w-full flex md:flex-row flex-col justify-between items-center ">

                        <div className="flex gap-[1rem] my-[1rem]">
                            <Link to="https://www.linkedin.com/company/snackbae/">
                                <FaLinkedin className='size-8 rounded-lg  text-sky-800 bg-white' />
                            </Link>

                        </div>
                    </div>
                </div>
                <p className="bg-gray-400 w-[90%] mx-auto h-[.08px] mb-[1rem] "></p>

                <div className="w-[90%] mx-auto text-[.9rem] flex justify-center items-center text-center">
                    <p>All Rights Reserved © SNACKBAE PRIVATE LIMITED,2024</p>

                </div>
            </div>
        </div>
    );
}

export default Footer