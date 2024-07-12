const item = {
  "name": "Vegetarian Pizza",
  "image": [
    {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoep7rIvqP4e8R1TPIP3rUu2KXee6Sp_9enQ&s"
    },
    {
      "url": "https://i0.wp.com/www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-overhead-sliced.png?resize=720%2C900&ssl=1"
    }
  ],
  "description": "A delightful pizza topped with fresh vegetables and cheese.",
  "price": "10.99",
  "category": "668f88097556ccd1b81d5e48",
  "subcategory": "668fc3d0dc73d3a79a45dde5",
  "serves": "2-3",
  "tag": "Vegetarian",
  "type": "egg",
  "addone": [
    "668fb1414fdc8ce88605d3e4",
    "668fb1654fdc8ce88605d3e6"
  ]
}



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
}


const Menuprofile: React.FC<menuprofileProps> = ({ isMenuOpen, setMenuOpen }) => {

  const [isFavorite, setFavorite] = useState<boolean>(false);


  return (
    <>
      <div className={`w-full h-[100vh] flex flex-col justify-end bg-black bg-opacity-50 fixed bottom-0 comment overflow-y-scroll ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>

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
                delay: 5000,
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
                item.image.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className='w-full h-fit flex items-center justify-center'>
                      <img src={image.url} alt="image" className='w-[330px] h-[200px] object-cover' />
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
                      `${item?.type === "veg" ? "bg-[#67CE67]"
                        :
                        item?.type === "egg" ? "bg-[#FFC107]" : "bg-[#ED4F4F]"
                      } rounded-full w-[10px] aspect-square `}
                  >
                  </div>
                </div>
                <div className='w-fit h-fit flex items-center px-[1rem] bg-[#FFC107] py-[.5rem] rounded-[8px] '>
                  <img src={blackstar} alt="blackstar" className='w-[20px] aspect-auto' />
                  <p className=' font-[500] font-inter text-[15px] leading-[20px] text-[#101828] ml-[.5rem]'>Chef’s choice</p>
                </div>
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
              <p className=' font-[600]  overflow-hidden text-nowrap font-inter text-[1.1rem] leading-[30px] text-ellipsis'>{item?.name}</p>
              <p className=' font-[600] overflow-hidden text-nowrap font-inter text-[1.1rem] leading-[30px] text-ellipsis'>{item?.serves}</p>
              <div className='w-full flex items-center justify-between'>
                <p className=' font-[400] font-inter text-[1.1rem] leading-[30px]'>😍 <span className='text-[#000000A8]'>36 customer love this</span></p>
                <p className=' font-[400] font-inter text-[1.1rem] leading-[27px] bg-[#FFD600] px-[1rem] py-[.5rem] rounded-md'>₹{item?.price}</p>
              </div>

            </div>
          </div>

          {/* description */}
          <div className='w-[95%]  mt-[1rem] bg-white mx-auto p-[1rem]  rounded-[8px]'>
            <p className=' font-[500] font-inter text-[18px] leading-[30px] mb-[.5rem]'>Description</p>
            <p className=' font-[400] font-inter text-[18px] leading-[30px] text-[#64748B]'>{item?.description}</p>
          </div>


          {/* addone */}
          <div className='w-[95%]  mt-[1rem] bg-white mx-auto p-[1rem]  rounded-[8px] mb-[1rem]'>
            <p className=' font-[500] font-inter text-[18px] leading-[30px] mb-[.5rem]'>Add Ons</p>

            <div className='flex justify-between items-center'>
              <p className=' font-[400] font-inter text-[18px] leading-[30px]'>{item?.name}</p>
              <p className=' font-[400] font-inter text-[18px] leading-[30px]'>{item?.price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menuprofile
