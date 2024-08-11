import { PopupButton } from "react-calendly";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link, NavLink } from 'react-router-dom';
import './LandingPage.css';

//components
import Plans from '../components/Plans';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

//icons
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";



//image
import mobile from '../assets/mobile.png';
import birthday from '../assets/birthday.png';
import image2 from '../assets/cake.png';
import image3 from '../assets/feedback.png';
import image4 from '../assets/welcome.png';
import image5 from '../assets/ministry.png';
import image6 from '../assets/startup.png';
import image7 from '../assets/government.png';
import arrow from '../assets/arrow.png';

const LandingPage = () => {
    return (
        <div className='w-full h-git '>
            {/* Navbar */}
            <Navbar />
            {/* hero-section */}
            <div className="bg-[#14213E] w-full h-fit flex flex-col  items-center justify-center z-[100]">
                {/* content */}
                <div className="w-full sm:w-[90%] mx-auto h-fit min-h-[80vh] relative flex sm:flex-row flex-col justify-evenly sm:justify-between items-center sm:mt-[.2rem] mt-[5rem]">
                    <div className="flex flex-col w-[90%] mx-auto md:w-[70%] h-full gap-[1rem] sm:gap-[2rem] justify-center">
                        <p className="text-[#E5E7EB] font-[700] text-[3.2rem] md:text-[3rem] lg:text-[3.8rem] leading-[3.6rem] md:leading-[4rem] lg:leading-[4.5rem]">
                            It’s not just food,
                            <br className="lg:block hidden" />
                            it’s an <span className="text-[#FFD628]">Experience</span>
                        </p>
                        <p className="md:w-[70%] font-[400] text-[.8rem] sm:text-[1.1rem] text-[#D1D5DB]">
                            Our QR based interactive digital menu makes ordering a breeze,
                            ensuring your patrons spend less time waiting and more time in
                            indulging in delicious dishes.
                        </p>
                        <div className="flex  gap-[1rem] justify-start my-[.5rem] items-center">
                            <Link
                                to="https://snackbaeuser-snackbaes-projects.vercel.app/register"
                                className="bg-[#FFD628] px-[1.5rem] py-[.5rem] rounded-3xl font-[500]"
                            >
                                Get Started
                            </Link>
                            <div className="text-[#FFD628] border-2 border-[#FFD628] px-[1.5rem] py-[.5rem] rounded-3xl no-scrollbar">
                                <PopupButton
                                    url="https://calendly.com/connect-snackbae/free_demo"
                                    rootElement={document.getElementById("root") as HTMLElement}
                                    text="Request Demo"
                                />
                                {/* Request Demo */}
                            </div>

                        </div>
                        <p className="md:w-[70%] font-[400] text-[.8rem] sm:text-[1.1rem] text-[#D1D5DB]">*No Credit Card required</p>
                    </div>
                    {/* gif */}
                    {/* <img src={gifhero} alt='gif-hero' className='w-[80%] md:w-[40%] aspect-auto' /> */}
                    {/* large-screeen */}
                    <div className="sm:block hidden">
                        <DotLottieReact
                            src="https://lottie.host/28c3766f-e323-4fbf-b3eb-ee88d5b17317/450ZeXA8KZ.json"
                            autoplay
                            loop
                            style={{ width: "400px", height: "400px" }}
                        />
                    </div>
                    {/* small-screen */}
                    <div className="block sm:hidden">
                        <DotLottieReact
                            src="https://lottie.host/28c3766f-e323-4fbf-b3eb-ee88d5b17317/450ZeXA8KZ.json"
                            autoplay
                            loop
                            style={{ width: "280px", height: "280px" }}
                        />
                    </div>
                </div>

                <div className="w-full h-[200px] overflow-hidden flex items-center justify-center">
                    <div className='w-full font-inter flex  text-nowrap gap-6 px-8 items-center justify-evenly text-[#004AAD]  sm:h-[60px] h-[40px] bg-gradient-to-l from-[#8EBEFF] to-[#FDE030] -rotate-3 -mt-2  mb-10 text-[1rem]'>
                        <p>Start your free trial</p>
                        <IoIosArrowRoundForward />
                        <p>Start your free trial</p>
                        <IoIosArrowRoundForward />
                        <p>Start your free trial</p>
                        <IoIosArrowRoundForward />
                        <p>Start your free trial</p>
                        <IoIosArrowRoundForward />
                        <p>Start your free trial</p>
                        <IoIosArrowRoundForward />
                    </div>
                </div>

                {/* content1 */}
                <div className='w-[100%]  sm:w-[90%] h-fit mt-[4rem] px-4  '>
                    <div className='flex relative w-full h-fit sm:px-1 px-1.5  '>
                        <div className='font-inter text-[2.2rem] text-white sm:w-[65%] w-[90%]'>
                            <p className='text-[1.1rem] italic font-normal'>(India's Food-service Sector )</p>
                            <p className='font-medium'>India's Food service market set to nearly double to <span className='text-yellow-400 font-semibold'> ₹ 9 trillion by 2030</span> </p>
                        </div>
                        <div className='  sm:flex absolute sm:right-0 left-[75%]  items-center justify-center'>
                            <div className="sm:block hidden">
                                <DotLottieReact
                                    src="https://lottie.host/b05944d8-6e3d-40f8-9ca2-4e25cd7605ec/uK2OSefSKy.json"
                                    autoplay
                                    loop
                                    style={{ width: "250px", height: "150px" }}
                                />
                            </div>
                            {/* small-screen */}
                            <div className="block sm:hidden">
                                <DotLottieReact
                                    src="https://lottie.host/b05944d8-6e3d-40f8-9ca2-4e25cd7605ec/uK2OSefSKy.json"
                                    autoplay
                                    loop
                                    style={{ width: "80px", height: "60px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* total report */}
                <div className='w-[95%]  sm:w-[90%] mx-auto h-fit my-[2rem]  relative flex gap-5 flex-col justify-evenly sm:justify-between items-center'>
                    <div className='w-full h-fit flex sm:flex-row gap-4 flex-col'>
                        <div className=' sm:w-[42%] p-[1.5rem] text-[1.2rem] font-light bg-[#C084FC1A] rounded-2xl text-white'>
                            <p>Food service Market Size in </p>
                            <p>india</p>
                            <div className='flex gap-2 items-center '>
                                <p className='text-[#FDE030] font-semibold text-[2.2rem]'>$69 billion+ <span className='text-[1.15rem] font-light'>in 2023</span></p>

                            </div>
                        </div>
                        <div className=' sm:w-[57%] p-[1.5rem] flex flex-col gap-4  text-[1.2rem] font-light bg-[#C084FC1A] rounded-2xl text-[#FDE030]'>
                            <div className='flex gap-2 items-center'>
                                <p className='text-[#FDE030] font-semibold text-[2.2rem]'>$2 billion+ <span className='text-[1.15rem] font-light'>in 2024</span></p>
                            </div>
                            <p className='text-white'>Restaurant CRM Market size in India</p>


                        </div>
                    </div>
                    <div className='w-full h-fit flex sm:flex-row gap-4 flex-col'>
                        <div className=' sm:w-[40%] p-[1.5rem] text-[1.2rem] font-normal bg-[#C084FC1A] rounded-2xl text-white'>
                            <p className='text-[#FDE030] font-semibold text-[2.2rem]'>30% </p>
                            <p>The addressable customer base for the Indian food services market is expected to  grow from  <span className='text-[#FDE030]'>340 million to 450 million by 2030</span></p>

                        </div>
                        <div className=' sm:w-[30%] p-[1.5rem] text-[1.2rem] font-normal bg-[#C084FC1A] rounded-2xl text-white'>
                            <p className='text-[#FDE030] font-semibold text-[2.2rem]'>32% </p>
                            <p>Market Share of whatsApp Business in communication market</p>

                        </div>
                        <div className=' sm:w-[30%] p-[1.5rem] text-[1.2rem] font-normal bg-[#C084FC1A] rounded-2xl text-white'>
                            <p className='text-[#FDE030] font-semibold text-[2.2rem]'>$2.5 billion</p>
                            <p>Marketing spend per year by eateries</p>

                        </div>
                    </div>

                </div>

                <div className='flex flex-col w-[90%] h-fit font-Roboto text-white'>
                    <p className='font-[400] text-[1.7rem] font-inter text-white'>And our vision is to</p>
                    <div className='flex my-[2rem]'>
                        <img src={arrow} alt="" className='sm:h-[200px] h-[70px] aspect-auto' />
                        <div className='flex flex-col gap-2 items-center justify-center sm:leading-[9rem] leading-[7rem]'>
                            <p className='font-semibold   sm:text-[4.5rem] text-[3rem] leading-[3rem]'>Accelerate industry</p>
                            <p className='font-semibold  text-nowrap sm:left-0 left-4   text-[4.5rem]'>by <span className='text-[#FDE030] font-semibold sm:text-[8rem] text-[6rem]'>10x</span></p>

                        </div>
                    </div>
                </div>

                {/* Our products */}
                <div id='product' className='w-full h-fit text-[#121D2F] bg-[#DFEDFF] flex flex-col justify-center items-center rounded-t-3xl sm:px-0 px-2'>
                    <div className='my-[2rem] flex flex-col justify-center items-center '>
                        <p className=' text-[3rem] font-semibold '>Our Products</p>
                        <p className='text-[1.1rem] sm:w-full w-[97%]'>Choose our  all in one Restaurant CRM solution</p>
                    </div>

                    <div className='w-[98%] sm:w-[90%] mx-auto h-fit my-[1rem] sm:gap-0 gap-10   flex sm:flex-row flex-col justify-between   '>
                        <div className='md:w-[33%]  font-plus h-fit px-[2rem]  text-[#121D2F]   '>
                            <div className=' flex items-center  p-1'>
                                <p className=' bg-white text-[#2878FF] px-[1rem] text-[.9rem] py-1 rounded-lg'>Digital Interactive Menu</p>
                            </div  >
                            <p className='text[#121D2F] text-[2rem] font-[600] font-plus mb-[1rem] leading-[2.5rem] mt-2'>India’s first digital interactive Menu</p>
                            <p className='text-[1rem] my-1 font-[500] leading-[1.5rem] text-[#121D2F] w-[95%]'>  Enhance customer experience and boost sales with our interactive QR menu. Enjoy instant menu updates and seamless integration with your social media handles.
                            </p>

                        </div>
                        <div className='md:w-[33%] font-plus h-fit px-[2rem]  text-[#121D2F]   '>
                            <div className=' flex items-center  p-1'>
                                <p className=' bg-white text-[#2878FF] px-[1rem] text-[.9rem] py-1 rounded-lg'>Next-Gen Restaurant CRM</p>
                            </div>
                            <p className='text[#121D2F] text-[1.8rem] font-[600] font-plus mb-[1rem] leading-[2.2rem] mt-2'>Smart CRM tailored for Eateries</p>
                            <p className='text-[1rem] my-1 font-[500] leading-[1.5rem] text-[#121D2F] w-[95%]'> Automate customer information collection and segment your customers according to their visit. Leverage customer data  and analytics to drive growth.

                            </p>

                        </div>
                        <div className='md:w-[33%] font-plus h-fit px-[2rem]  text-[#121D2F]   '>
                            <div className=' flex items-center  p-1'>
                                <p className=' bg-white text-[#2878FF] px-[1rem] text-[.9rem] py-1 rounded-lg'>Official WhatsApp api</p>
                            </div>
                            <p className='text[#121D2F] text-[1.8rem] font-[600] font-plus mb-[1rem] leading-[2.2rem] mt-2'>Official WhatApp Business API</p>
                            <p className='text-[1rem] my-1 font-[500] leading-[1.5rem] text-[#121D2F] w-[95%]'>  Elevate your marketing with personalized WhatsApp campaigns. Target specific customer segments to increase repeat visits and loyalty, ensuring your business runs smoother and more efficiently.
                            </p>

                        </div>
                    </div>
                    <div className='w-full h-[4px] mt-[4rem] bg-[#D9D9D9]'></div>

                    {/* utilise whatsapp */}
                    <div className=' bg-gradient-to-b from-[#DFEDFF] to-white sm:w-full  flex flex-col justify-center items-center sm:leading-[2.8rem] '>
                        <div className=' sm:w-full mt-[4rem] w-[90%] flex flex-col justify-center items-center sm:leading-[2.8rem] '>
                            <p className=' sm:text-[3rem] text-[1.5rem] font-inter font-[600]  text-[#004AAD] flex  '>Utilise WhatsApp Business Api</p>
                            <p className='sm:text-[2.1rem] text-[1.4rem] font-inter font-[600]'>& connect with your customers like never before</p>
                            <p className='font-Roboto font-[400] text-[1rem] text-[#697777]'>Select a template, Edit Details, Customise your way, and Never miss a chance to Engage your customers!</p>
                            <NavLink to="https://snackbaeuser-snackbaes-projects.vercel.app/" className='sm:px-10 px-5 sm:py-0  py-1 mt-4 bg-[#004AAD] text-white rounded-md'>Start for free</NavLink>
                        </div>


                        <div className='w-full  sm:px-4 px-2 flex items-center sm:mt-[4rem] mt-[2rem]  gap-2 '>

                            <div className='w-[20%] h-[300px] relative sm:block hidden'>
                                {/* bgimage */}
                                <img
                                    src={birthday}
                                    alt="bg-effect"
                                    className="absolute  top-0 w-full h-full "
                                />

                                <p className='font-Roboto absolute z-10 font-[600] text-[1.5rem] leading-[2.2rem] text-white p-4'>Happy Birthday! Treat yourself with a flat 25% discount from us.</p>
                                <button className='absolute size-8 bg-white left-5 bottom-9  rounded-full  text-green-500'><RiWhatsappFill className='size-6 ml-1 z-50' /></button>
                                <button className='absolute size-8 bg-white left-16 bottom-9  rounded-full  text-slate-700'><HiOutlineSpeakerphone className='size-6 ml-1 z-50' /></button>
                            </div>

                            <div className='sm:w-[20%] w-[30%] sm:h-[300px] h-[150px] relative '>
                                {/* bgimage */}
                                <img
                                    src={image2}
                                    alt="bg-effect"
                                    className="absolute  top-0 w-full h-full "
                                />

                                <p className='font-Roboto absolute z-10 font-[600] sm:text-[1.5rem] text-[.8rem] sm:leading-[2.2rem] text-white sm:p-4 p-1'>Happy Birthday! Enjoy a FREE starter on us!</p>
                                <button className='absolute sm:size-8 size-6 bg-white sm:left-5 left-2 sm:bottom-9 bottom-5  rounded-full  text-green-500'><RiWhatsappFill className='sm:size-6 ml-1 z-50' /></button>
                                <button className='absolute sm:size-8 size-6 bg-white sm:left-16 left-9 sm:bottom-9 bottom-5  rounded-full  text-slate-700'><HiOutlineSpeakerphone className='sm:size-6 ml-1 z-50' /></button>
                            </div>
                            <div className='sm:w-[25%] w-[40%] sm:h-[450px] h-[220px] relative '>
                                {/* bgimage */}
                                <img
                                    src={mobile}
                                    alt="bg-effect"
                                    className="absolute  top-0 w-full h-full "
                                />
                            </div>
                            <div className='sm:w-[20%] w-[30%]  sm:h-[300px] h-[150px] relative '>
                                {/* bgimage */}
                                <img
                                    src={image3}
                                    alt="bg-effect"
                                    className="absolute  top-0 w-full h-full "
                                />

                                <p className='font-Roboto absolute z-10 font-[600] sm:text-[1.5rem] text-[.8rem] sm:leading-[2.2rem] text-white sm:p-4 p-1'>Feedback Campaign for Google reviews</p>
                                <button className='absolute sm:size-8 size-6 bg-white sm:left-5 left-2 sm:bottom-9 bottom-5  rounded-full  text-green-500'><RiWhatsappFill className='sm:size-6 ml-1 z-50' /></button>
                                <button className='absolute sm:size-8 size-6 bg-white sm:left-16 left-9 sm:bottom-9 bottom-5  rounded-full  text-slate-700'><IoIosNotificationsOutline className='sm:size-6 ml-1 z-50' /></button>
                            </div>
                            <div className='w-[20%] h-[300px] relative sm:block hidden'>
                                {/* bgimage */}
                                <img
                                    src={image4}
                                    alt="bg-effect"
                                    className="absolute  top-0 w-full h-full "
                                />

                                <p className='font-Roboto absolute z-10 font-[600] text-[1.5rem] leading-[2.2rem] text-white p-4'>Thank you greetings post visit.</p>
                                <button className='absolute size-8 bg-white left-5 bottom-9  rounded-full  text-green-500'><RiWhatsappFill className='size-6 ml-1 z-50' /></button>
                                <button className='absolute size-8 bg-white left-16 bottom-9  rounded-full  text-slate-700'><IoIosNotificationsOutline className='size-6 ml-1 z-50' /></button>
                            </div>

                        </div>
                    </div>



                    {/* plans */}

                    <div className='sm:w-full w-[95%] h-fit bg-[#DFEDFF] flex items-center justify-center flex-col py-[3rem] sm:px-3 px-2 '>
                        <p className='font-inter font-[500] sm:text-[2.2rem] text-[1.5rem]'>Plans that are <span className='text-[#004AAD]'>carefully crafted</span>  to suit your business.</p>
                        <Plans />
                    </div>

                </div>




                {/* Recognised */}
                <div className='w-full  h-fit  flex flex-col justify-center items-center'>
                    <p className='font-Roboto font-[500] sm:text-[2.5rem] text-[2rem] my-[4rem] text-white'>We are Recognised by</p>

                    <div className='flex sm:flex-row flex-col gap-4 h-fit mb-[4rem] sm:px-2 px-4 justify-center '>
                        <img src={image5} alt="image" className=' sm:w-[20%] aspect-auto' />
                        <img src={image6} alt="image" className=' sm:w-[30%] aspect-auto' />
                        <img src={image7} alt="image" className=' sm:w-[20%] aspect-auto' />
                    </div>
                </div>

                {/* let snackbae */}
                <div className='w-[96%] sm:w-[100%] h-fit text-center bg-[#DFEDFF] flex items-center justify-center flex-col py-[3rem] sm:px-2 mx-2'>
                    <div className='flex flex-col sm:w-full w-[95%] items-center justify-center'>
                        <p className='font-semibold sm:text-[2.1rem] text-[1.5rem] text-[#121D2F] mt-[2rem] mb-4'>Let SnackBAE  boost your business!</p>
                        <p>Join 250+ restaurants and cafes that are already using Platform and growing their reach, revenue and sales</p>
                        <p className='hidden'>Platform and growing their reach, revenue and sales</p>
                    </div>


                    <div className='flex mt-[2rem] gap-5'>
                        <div className='px-5 py-2 bg-[#F1F6FF] text-[#2878FF] rounded-md'>
                            <PopupButton
                                url="https://calendly.com/connect-snackbae/free_demo"
                                rootElement={document.getElementById("root") as HTMLElement}
                                text="Contact us"
                            />
                        </div>
                        <NavLink to="https://snackbaeuser-snackbaes-projects.vercel.app/" className='px-5 py-2 bg-[#2878FF] text-white rounded-md'> Start for free</NavLink>
                    </div>

                </div>

            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default LandingPage