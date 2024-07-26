
import {
    FacebookIcon,
    FacebookShareButton,
    TelegramShareButton,
    TelegramIcon,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    TwitterShareButton,
    TwitterIcon,
    InstapaperShareButton,
    InstapaperIcon,
    EmailShareButton,
    EmailIcon,
} from 'react-share';
import toast from 'react-hot-toast';


//icons
import { RxCross2 } from "react-icons/rx";


//image
import copyurl from '../assets/copyurl.png';

interface ShareprofileProps {
    isShareOpen: boolean;
    setShareOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const Shareprofile: React.FC<ShareprofileProps> = ({ isShareOpen, setShareOpen }) => {
    const shareUrl = window.location.href;

    const copyUrl = () => {
        navigator.clipboard.writeText(shareUrl)
            .then(() => {
                console.log('URL copied successfully');
                toast.success('URL copied successfully');
                // You can add additional UI feedback here if needed
            })
            .catch(err => {
                console.error('Failed to copy URL: ', err);
                toast.error(err);
                // You can add error handling or UI feedback here if needed
            });
    };


    return (
        <>
            <div className={`w-full h-[100vh] z-[1002] flex flex-col  justify-end bg-black bg-opacity-50  fixed bottom-0 comment ${isShareOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>

                <div className="w-full h-fit flex items-center justify-center ">
                    <div className="w-fit p-[1rem] rounded-full  bg-black mb-[1rem]">
                        <RxCross2 onClick={
                            () => {
                                setShareOpen(false);
                            }
                        } className=" text-white text-[1.8rem]  " />
                    </div>
                </div>

                <div className='w-full h-fit bg-white py-[2rem] rounded-t-[6px] '>
                    <div className="w-full h-fit px-[1rem]  border-tl-[8px]">
                        <p className=' font-[400] font-inter text-[24px] leading-[29.05px] text-[#120D26] '>Share with friends</p>
                        <p className="w-[100%]  my-[1rem] border-[1px] border-[#00000054]"></p>
                    </div>

                    {/* all custome share button */}
                    <div className="w-full h-fit px-[1rem] flex flex-wrap justify-center items-center gap-[1.5rem]">
                        <div onClick={copyUrl}>
                            <div className="w-fit p-[1rem] rounded-full  bg-[#3B3B3B30] ">
                                <img src={copyurl} alt="copyurl" className="w-[20px] aspect-auto" />
                            </div>
                            <p className='text-[#0B0B0B] font-[400] font-Monda text-[13.01px] leading-[21.19px] mt-[.5rem]'>Copy url</p>
                        </div>
                        <FacebookShareButton url={shareUrl} className='flex flex-col items-center'>
                            <FacebookIcon size={48} className='rounded-full' />
                            <p className='text-[#0B0B0B] font-[400] font-Monda text-[13.01px] leading-[21.19px] mt-[.5rem]'>Facebook</p>
                        </FacebookShareButton>
                        <WhatsappShareButton url={shareUrl} className='flex flex-col items-center'>
                            <WhatsappIcon size={48} className='rounded-full' />
                            <p className='text-[#0B0B0B] font-[400] font-Monda text-[13.01px] leading-[21.19px] mt-[.5rem]'>WhatsAap</p>
                        </WhatsappShareButton>
                        <TelegramShareButton url={shareUrl} className='flex flex-col items-center'>
                            <TelegramIcon size={48} className='rounded-full' />
                            <p className='text-[#0B0B0B] font-[400] font-Monda text-[13.01px] leading-[21.19px] mt-[.5rem]'>Telegram</p>
                        </TelegramShareButton>
                        <FacebookMessengerShareButton appId='' url={shareUrl} className='flex flex-col items-center'>
                            <FacebookMessengerIcon size={48} className='rounded-full' />
                            <p className='text-[#0B0B0B] font-[400] font-Monda text-[13.01px] leading-[21.19px] mt-[.5rem]'>Messenger</p>
                        </FacebookMessengerShareButton>
                        <TwitterShareButton url={shareUrl} className='flex flex-col items-center'>
                            <TwitterIcon size={48} className='rounded-full' />
                            <p className='text-[#0B0B0B] font-[400] font-Monda text-[13.01px] leading-[21.19px] mt-[.5rem]'>Twitter</p>
                        </TwitterShareButton>
                        <InstapaperShareButton url={shareUrl} className='flex flex-col items-center'>
                            <InstapaperIcon size={48} className='rounded-full' />
                            <p className='text-[#0B0B0B] font-[400] font-Monda text-[13.01px] leading-[21.19px] mt-[.5rem]'>Instapaper</p>
                        </InstapaperShareButton>
                        <EmailShareButton url={shareUrl} className='flex flex-col items-center'>
                            <EmailIcon size={48} className='rounded-full' />
                            <p className='text-[#0B0B0B] font-[400] font-Monda text-[13.01px] leading-[21.19px] mt-[.5rem]'>Email</p>
                        </EmailShareButton>
                    </div>

                    {/* <div className='w-[90%] mx-auto h-fit p-[1rem] border-2 border-[#00000054] mt-[2rem] rounded-[8px]'>
                        <p className='text-[#0B0B0B] font-[400] font-Monda text-[18px] leading-[21.19px] mt-[.5rem] text-nowrap text-ellipsis overflow-hidden'>{shareUrl}</p>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Shareprofile
