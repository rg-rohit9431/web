// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useSnackBae } from '../context/SnackBae';

import { Link, useLocation } from 'react-router-dom';

//image
import blogHero from '../assets/blogheader.png';
import blogsecondhero from '../assets/blogsecondhero.png';

//icons
import { FaAngleRight } from "react-icons/fa6";

//components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import Loader from '../components/Loader';




export interface Blog {
    _id: string;
    image: string;
    header: string;
    body: string;
    link: string;
    createdAt: string;
}

export interface BlogState {
    data: any | null,
    loading: boolean,
    error: string | null
}


const Blog = () => {


    const location = useLocation();
    const allBlogs = location.state.allBlogs as BlogState || {};

    // Function to handle scrolling to the referenced element
    const scrollToElement = () => {
        const element = document.getElementById("blogs");

        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className="w-full h-fit ">
            <Navbar />
            {/* hero section */}
            <div className="w-full h-[100vh] relative ">
                <img
                    src={blogHero}
                    alt="blogHero"
                    className="w-full h-[100vh] object-cover absolute z-[-1] brightness-75"
                    loading='lazy'
                />
                <div className="w-full sm:w-[80%] lg:w-[55%] h-fit relative top-[50%] translate-y-[-50%]  pl-[1rem] md:ml-[3rem] ">
                    <p className="w-full font-Sen text-[#FFFFFF] font-[700] text-[3.2rem] leading-[3.6rem] md:text-[3.6rem] md:leading-[4.8rem]">
                        Welcome to the Snackbae Blogs
                    </p>
                    <p className="w-[90%] font-inter text-[.9rem] text-[#e4e5ea] font-[400] leading-[1.4rem] mt-[.5rem]">
                        Discover insightful articles, actionable tips, and expert advice to
                        help eateries and retailers thrive in today's competitive landscape.
                        Explore topics such as customer retention, engagement strategies,
                        marketing tactics, and much more.
                    </p>
                    <button
                        onClick={scrollToElement}
                        className="bg-[#FFD628] px-[1.8rem] py-[.5rem] rounded-md  font-Sen font-[700] text-[1.1rem] leading-[1.8rem] mt-[1rem] flex items-center gap-[.2rem]"
                    >
                        Read blogs
                        <FaAngleRight />
                    </button>
                </div>
            </div>

            <div className="w-full h-fit lg:p-[3rem] flex lg:flex-row flex-col items-center justify-center py-[3rem]">
                <img
                    src={blogsecondhero}
                    alt="blogsecondhero"
                    className="w-[90%] sm:w-[80%] lg:w-[50%] aspect-auto"
                />
                <div className="bg-[#ffffff] rounded-lg w-[80%] sm:w-[60%] lg:w-[40%] h-fit py-[3rem] px-[2rem] shadow-lg relative top-[-50px] lg:top-0 lg:left-[-5%] ">
                    <p className=" font-inter text-[.9rem] text-[#232536] font-[400] leading-[1.4rem]">
                        At Snackbae, we understand the importance of staying ahead in
                        today's dynamic business landscape. Our blogs serve as a valuable
                        resource for merchants seeking to navigate challenges, capitalize on
                        opportunities, and achieve sustainable growth.
                    </p>
                    <p className=" font-inter text-[.8rem] text-[#6D6E76] font-[400] leading-[1.4rem] mt-[.5rem]">
                        By sharing insights, strategies, and success stories, we empower
                        merchants like you to thrive in an ever-evolving market. Stay
                        informed, inspired, and equipped for success with our blog – your
                        trusted companion on the journey to merchant excellence.
                    </p>
                </div>
            </div>

            {/* allblogs */}
            <div id="blogs" className="w-full h-fit">
                {allBlogs &&
                    allBlogs?.data.map((blog: Blog) => (
                        <Link
                            to={`/blogDetail/${blog?._id}`}
                            key={blog?._id}

                            className="w-[90%] my-[.5rem] mx-auto h-fit sm:p-[2rem] flex sm:flex-row flex-col items-center md:items-start justify-center gap-[2rem] border-2 sm:border-0 rounded-md"
                        >
                            <img
                                src={blog?.image}
                                alt="image1"
                                className="w-[360px] h-[240px] rounded-md sm:rounded-none"
                            />
                            <div className="md:w-[50%] p-[.5rem]">
                                <p className="text-[#232536] font-Sen font-[700] text-[2.4rem] leading-[3rem] tracking-tight">
                                    {blog?.header}
                                </p>
                                <p className="text-[#6D6E76] font-inter font-[400] text-[.9rem] leading-[1.2rem] tracking-tight my-[1rem]">
                                    {blog?.body.split(" ").slice(0, 25).join(" ") + "..."}
                                </p>
                                <p className="text-[#004AAD]">Posted On: {blog?.createdAt}</p>
                            </div>
                        </Link>
                    ))}
            </div>

            <Footer />
        </div>
    );
}

export default Blog;