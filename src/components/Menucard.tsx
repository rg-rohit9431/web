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


import { useState } from 'react';
//image
import blackstar from '../assets/blackstar.png';

//icons
import { FaHeart } from "react-icons/fa6";

const Menucard = () => {
    const [isFavorite, setFavorite] = useState<boolean>(false);
    return (
        <>
            <div onClick={() => {
                setFavorite(true)
            }} className="w-[330px] h-fit border-[.5px] border-[#00000080] rounded-[8px]">
                <div className='w-full h-fit flex justify-between'>
                    <div className="p-[.5rem] rounded-md flex items-center justify-start w-fit h-fit bg-white border-2 relative top-[1rem] left-[1rem]">
                        <div
                            className={
                                `${item?.type === "veg" ? "bg-[#67CE67]"
                                    :
                                    item?.type === "egg" ? "bg-[#FFC107]" : "bg-[#ED4F4F]"
                                } rounded-full w-[10px] aspect-square `}
                        >
                        </div>
                    </div>

                    <div className='w-fit h-fit flex items-center px-[1rem] bg-[#FFC107] py-[.5rem] rounded-bl-[8px] rounded-tr-[8px]'>
                        <img src={blackstar} alt="blackstar" className='w-[20px] aspect-auto' />
                        <p className=' font-[500] font-inter text-[15px] leading-[20px] text-[#101828] ml-[.5rem]'>Chef’s choice</p>
                    </div>
                </div>


                <div className='w-[90%] mx-auto mt-[1rem] flex justify-between'>
                    <div className='w-[65%] h-fit '>
                        <p className=' font-[600] h-[30px] overflow-hidden text-nowrap font-inter text-[18px] leading-[30px] text-ellipsis'>{item?.name}</p>
                        <p className=' font-[600] font-inter text-[17px] leading-[30px] text-ellipsis text-[#0F172A]'>₹ {item?.price}</p>
                        <p className=' font-[400] h-[50px] overflow-hidden font-inter text-[12px] leading-[19.36px] text-ellipsis text-[#64748B]'>{item?.description}</p>
                    </div>
                    <img src={item?.image[0].url} alt="image" className='w-[30%] aspect-auto object-contain' />
                </div>

                <p className='border-[1.3px] border-[#00000033] w-[90%] mx-auto mt-[.5rem]'></p>


                <div className='w-[90%] mx-auto flex gap-[2rem] items-center py-[.5rem] px-[.5rem]'>
                    <FaHeart
                        id="favorite"
                        className={`text-[1.6rem] cursor-pointer  ${isFavorite ? "fill-[#ED4F4F] overflow-hidden" : "fill-gray-300"
                            } `}
                        onClick={() => {
                            setFavorite(!isFavorite)
                        }}
                    />
                    <p className='font-[500] font-inter text-[16px] leading-[30px] text-[#0F172A]'>36k+ recommendation</p>
                </div>
            </div>
        </>
    )
}

export default Menucard
