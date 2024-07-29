import { MenuItem } from '../pages/MainPage';
//image
import blackstar from '../assets/blackstar.png';

//icons
import { FaHeart } from "react-icons/fa6";


const Menucard = ({ item, isFavorite }: { item: MenuItem; isFavorite: boolean }) => {

    return (
        <>
            <div className="w-[330px] min-w-[280px] h-fit border-[.5px] border-[#00000080] rounded-[8px]">
                <div className='w-full h-[30px] flex justify-between'>
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

                    {
                        item.tag &&
                        <div className='w-fit h-fit flex items-center px-[1rem] bg-[#FFC107] py-[.5rem] rounded-bl-[8px] rounded-tr-[8px]'>
                            <img src={blackstar} alt="blackstar" className='w-[20px] aspect-auto' />
                            <p className=' font-[500] font-inter text-[15px] leading-[20px] text-[#101828] ml-[.5rem]'>{item?.tag}</p>
                        </div>
                    }
                </div>


                <div className='w-[90%] mx-auto mt-[1rem] flex justify-between'>
                    <div className='w-[65%] h-fit '>
                        <p className=' font-[600] h-[30px] overflow-hidden text-nowrap font-inter text-[18px] leading-[30px] text-ellipsis'>{item?.name}</p>
                        <p className=' font-[600] font-inter text-[17px] leading-[30px] text-ellipsis text-[#0F172A]'>₹ {item?.price}</p>
                        <p className=' font-[400]  overflow-hidden font-inter text-[12px] leading-[19.36px] text-ellipsis text-[#64748B]'>
                            {
                                item?.description.length < 60 ? item?.description :
                                    item?.description.slice(0, 60) + "..."
                            }

                        </p>
                    </div>
                    <img src={item?.image[0]} alt="image" className='h-[80px] w-[80px] object-cover  rounded-[5px]' />
                </div>

                <p className='border-[1.3px] border-[#00000033] w-[90%] mx-auto mt-[.5rem]'></p>


                <div className='w-[90%] mx-auto flex gap-[1rem] items-center py-[.5rem] px-[.5rem]'>
                    <FaHeart
                        id="favorite"
                        className={`text-[1.6rem] cursor-pointer  ${isFavorite ? "fill-[#ED4F4F] overflow-hidden" : "fill-gray-300"
                            } `}
                    />
                    <p className='font-[500] font-inter text-[17px] leading-[30px] text-[#0F172A]'>
                        {item?.likes > 1000 ? `${(item?.likes / 1000).toFixed(1)}k+` : item?.likes} 
                        <span> recommendation</span></p>
                </div>
            </div>
        </>
    )
}

export default Menucard
