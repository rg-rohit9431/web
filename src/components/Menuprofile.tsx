



import React, { useState } from 'react';
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

interface menuprofileProps {
  isMenuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalData: MenuItem | null;
}
interface MenuItem {
  _id: string;
  name: string;
  image: string[];
  description: string;
  price: string;
  category: string;
  subcategory: string;
  serves: string;
  tag: string | null;
  active: boolean;
  categoryActive: boolean;
  clicks: number;
  addone: any[]; // You can specify a type for addone based on its actual structure
  type: string;
  __v: number;
}


const Menuprofile: React.FC<menuprofileProps> = ({ isMenuOpen, setMenuOpen, modalData }) => {
  const [isFavorite, setFavorite] = useState<boolean>(false);


  return (
    <>
      <div
        onDoubleClick={() => { setFavorite(true); }} className={`w-full h-[100vh] flex flex-col justify-end bg-black bg-opacity-50 fixed bottom-0 comment overflow-y-scroll   ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>

        <div className="w-full h-fit flex items-center justify-center ">
          <div className="w-fit p-[1rem] rounded-full  bg-black mb-[1rem]">
            <RxCross2 onClick={
              () => {
                setMenuOpen(false);
              }
            } className=" text-white text-[1.8rem]  " />
          </div>
        </div>

        <div className='w-full h-[70vh] bg-[#E9E9EA] py-[1rem] overflow-y-scroll'>

          <div className='w-[95%] bg-white mx-auto p-[1rem]  rounded-[8px]'>
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
                    <div className='w-full h-full flex items-center justify-center'>
                      <img src={image} alt="image" className='w-full h-full rounded-[10px] object-center' />
                    </div>
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
                id="favorite"
                className={`text-[1.6rem] cursor-pointer  ${isFavorite ? "fill-[#ED4F4F] overflow-hidden" : "fill-gray-300"
                  } `}
                onClick={() => {
                  setFavorite(!isFavorite)
                }}
              />
            </div>

            {/* item name */}

            <div className='w-full  mt-[1rem]'>
              <p className=' font-[600]  overflow-hidden text-nowrap font-inter text-[1.1rem] leading-[30px] text-ellipsis'>{modalData?.name}</p>
              <p className=' font-[600] overflow-hidden text-nowrap font-inter text-[1.1rem] leading-[30px] text-ellipsis'>{modalData?.serves}</p>
              <div className='w-full flex items-center justify-between'>
                <p className=' font-[400] font-inter text-[1.1rem] leading-[30px]'>😍 <span className='text-[#000000A8]'>36 customer love this</span></p>
                <p className=' font-[400] font-inter text-[1.1rem] leading-[27px] bg-[#FFD600] px-[1rem] py-[.5rem] rounded-md'>₹{modalData?.price}</p>
              </div>

            </div>
          </div>

          {/* description */}
          <div className='w-[95%]  mt-[1rem] bg-white mx-auto p-[1rem]  rounded-[8px]'>
            <p className=' font-[500] font-inter text-[18px] leading-[30px] mb-[.5rem]'>Description</p>
            <p className=' font-[400] font-inter text-[18px] leading-[30px] text-[#64748B]'>{modalData?.description}</p>
          </div>


          {/* addone */}
          <div className='w-[95%]  mt-[1rem] bg-white mx-auto p-[1rem]  rounded-[8px] mb-[1rem]'>
            <p className=' font-[500] font-inter text-[18px] leading-[30px] mb-[.5rem]'>Add Ons</p>

            <div className='flex justify-between items-center'>
              <p className=' font-[400] font-inter text-[18px] leading-[30px]'>{modalData?.name}</p>
              <p className=' font-[400] font-inter text-[18px] leading-[30px]'>{modalData?.price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menuprofile
