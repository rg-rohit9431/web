import React, { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../main';
import { MenuItem } from '../pages/MainPage';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


//icons
import { RxCross2 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa6";

//image
import blackstar from '../assets/blackstar.png';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

interface menuprofileProps {
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalData: MenuItem | null;
  isFavorite: boolean;
}

const Menuprofile: React.FC<menuprofileProps> = ({ isMenuOpen, setMenuOpen, modalData, isFavorite }) => {
  const [isFavoriteMenu, setFavoriteMenu] = useState<boolean>(isFavorite);
  const resId = useParams().id;

  //user
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;
  console.log(user)

  const toggleFavoriteMenu = async () => {
    try {

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${baseUrl}/api/favourites/${user._id}/${modalData?._id}/${resId}`,
        headers: {}
      };

      axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setFavoriteMenu(!isFavoriteMenu);
          isFavoriteMenu ? toast.success('Menu removed from favourites') : toast.success('Menu added to favourites');
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.message);
        });

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div
        className={`w-full max-w-[500px] left-[50%] translate-x-[-50%] h-[100vh] z-[1001] flex flex-col justify-end bg-black bg-opacity-50 fixed bottom-0 hideScroller  overflow-y-scroll transition duration-700 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>

        <div className="w-full h-fit flex items-center justify-center ">
          <div className="w-fit p-[1rem] rounded-full  bg-black mb-[1rem]">
            <RxCross2 onClick={
              () => {
                setMenuOpen(false);
              }
            } className=" text-white text-[1.8rem]  " />
          </div>
        </div>

        <div className='w-full h-[70vh] bg-[#E9E9EA] py-[1rem] overflow-y-scroll hideScroller rounded-t-[6px]'>
          {/* image */}
          <div className='w-[95%] bg-white mx-auto p-[1rem]  rounded-[8px] '>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {
                modalData?.image.map((image, index) => (
                  <SwiperSlide key={index}>
                    {/* <div className='w-full h-[320px] flex items-center justify-center'> */}
                    <img src={image} alt="image" className='w-full h-[220px] object-cover rounded-[10px]' />
                    {/* </div> */}
                  </SwiperSlide>
                ))
              }
            </Swiper>

            <div className=' w-full flex items-center justify-between px-[1rem] mt-[1rem]'>
              <div className='flex items-center gap-[1rem]' >
                <div className="p-[.5rem] rounded-md flex items-center justify-start w-fit h-fit bg-white border-2">
                  <div
                    className={
                      `${modalData?.type === "veg" ? "bg-[#67CE67]"
                        :
                        modalData?.type === "egg" ? "bg-[#FFC107]" : "bg-[#ED4F4F]"
                      } rounded-full w-[10px] aspect-square `}
                  >
                  </div>
                </div>
                {
                  modalData?.tag &&
                  <div className='w-fit h-fit flex items-center px-[1.2rem] bg-[#FFC107] py-[.5rem] rounded-[8px]'>
                    <img src={blackstar} alt="blackstar" className='w-[20px] aspect-auto' />
                    <p className=' font-[500] font-inter text-[15px] leading-[20px] text-[#101828] ml-[.5rem]'>{modalData?.tag}</p>
                  </div>
                }
              </div>
              <FaHeart
                onClick={() => {
                  toggleFavoriteMenu();
                }}
                id="favorite"
                className={`text-[1.6rem] cursor-pointer  ${isFavoriteMenu ? "fill-[#ED4F4F] overflow-hidden" : "fill-gray-300"
                  } `}
              />
            </div>

            {/* item name */}

            <div className='w-full  mt-[1rem]'>
              <p className=' font-[600]  overflow-hidden text-nowrap font-inter text-[1.1rem] leading-[30px] text-ellipsis'>{modalData?.name}</p>
              <p className=' font-[600] overflow-hidden text-nowrap font-inter text-[1.1rem] leading-[30px] text-ellipsis'>Serve for {modalData?.serves}</p>
              <div className='w-full flex items-center justify-between'>
                <p className=' font-[400] font-inter text-[1.1rem] leading-[30px]'>😍
                  <span className='text-[#000000A8]'> {modalData?.likes} customer love this</span></p>
                <p className=' font-[400] font-inter text-[1.1rem] leading-[27px] bg-[#FFD600] px-[1rem] py-[.5rem] rounded-md'>₹{modalData?.price}</p>
              </div>

            </div>
          </div>

          {/* description */}
          {
            modalData?.description &&
            <div className='w-[95%]  mt-[1rem] bg-white mx-auto p-[1rem]  rounded-[8px]'>
              <p className=' font-[500] font-inter text-[18px] leading-[30px] mb-[.5rem]'>Description</p>
              <p className=' font-[400] font-inter text-[18px] leading-[30px] text-[#64748B]'>{modalData?.description}</p>
            </div>
          }


          {/* addone */}
          {
            modalData?.addone?.length != null && modalData?.addone.length > 0 &&
            <div className='w-[95%] mt-[1rem] bg-white mx-auto p-[1rem]  rounded-[8px] mb-[1rem]'>
              <p className=' font-[500] font-inter text-[18px] leading-[30px] mb-[.5rem]'>Add Ons</p>
              {
                modalData?.addone.map((addone) => (
                  <div key={addone?._id} className='flex items-center justify-between w-full mt-[.5rem]'>
                    <p className=' font-[400] font-inter text-[18px] leading-[30px] capitalize'>{addone.name}</p>
                    <p className=' font-[400] font-inter text-[18px] leading-[30px]'>₹{addone.price}</p>
                  </div>
                ))
              }
            </div>
          }

        </div>
      </div >
    </>
  )
}

export default Menuprofile
