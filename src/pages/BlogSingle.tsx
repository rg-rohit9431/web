import { Link, useParams } from "react-router-dom";
import { Blog } from "./Blogs";
import { useEffect } from "react";

//components
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

//redux
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { getSingleBlogById } from '../redux/slices/singleblogslice';


const BlogSingle = () => {

  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const singleBlog = useAppSelector((state) => state.singleBlog).data;
  // console.log(singleBlog);

  const allBlogs = useAppSelector((state) => state.blog);
  // console.log(allBlogs);

  useEffect(() => {
    if (id) {
      dispatch(getSingleBlogById(id));
    }
  }, [id]);

  return (
    <div className="w-full h-fit">

      <Navbar />
      <div className="w-full h-[70px] bg-[#004AAD]"></div>
      {singleBlog && (
        <div className=" w-[90%] sm:w-[70%] mx-auto h-fit py-[2rem] ">
          <p className="text-[#004AAD] my-[1rem]">
            Posted On: {singleBlog?.createdAt}
          </p>
          <p className="text-[#232536] font-Sen font-[700] text-[1.8rem] leading-[2.4rem] md:text-[2.4rem] md:leading-[3rem] tracking-tight my-[1rem]">
            {singleBlog?.header}
          </p>
          <img
            src={singleBlog?.image}
            alt="image1"
            className="w-full aspect-auto object-contain my-[2rem]"
          />
          <pre
            className="w-full text-wrap text-[#6D6E76] font-inter font-[400] text-[.9rem] leading-[1.4rem] tracking-tight my-[1rem] first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
  first-letter:mr-3 first-letter:float-left"
          >
            {singleBlog?.body}
          </pre>
          {
            singleBlog?.link &&
            <p className="text-green-400 font-Sen font-[400] text-[1.3rem] leading-[2rem] md:text-[2rem] md:leading-[2.5rem] tracking-tight capitalize">
              you must visit here:
            </p>
          }
          <Link to={singleBlog?.link} className="text-blue-500 ">
            {singleBlog?.link}
          </Link>
        </div>
      )}

      <p className="text-[#004AAD] text-[2.4rem] font-[700] font-Roboto text-center my-[1rem]">
        What to read next
      </p>

      <div className="w-full max-w-[1200px] mx-auto h-fit flex flex-wrap justify-center items-center my-[1rem]">
        {allBlogs &&
          allBlogs?.data.map(
            (blog: Blog) =>
              blog?._id !== id && (
                <div
                  className="w-[90%] max-w-[320px] mx-auto h-fit py-[1rem] "
                  key={blog._id}
                >
                  <Link to={`/blogDetail/${blog._id}`}>
                    <img
                      src={blog.image}
                      alt="image1"
                      className="w-full h-[240px] object-contain"
                    />
                  </Link>
                  <div className="py-[1rem]">
                    <p className="text-[#232536] font-Sen font-[700] text-[2.4rem] leading-[3rem] tracking-tight text-nowrap overflow-hidden text-ellipsis">
                      {blog.header}
                    </p>
                    <p className="text-[#6D6E76] font-inter font-[400] text-[.9rem] leading-[1.2rem] tracking-tight my-[1rem] ">
                      {blog.body.split(" ").slice(0, 25).join(" ") + "..."}
                    </p>
                    <p className="text-[#004AAD]">
                      Posted On: {blog.createdAt}
                    </p>
                  </div>
                </div>
              )
          )}
      </div>

      <Footer />
    </div>
  );
};

export default BlogSingle;
