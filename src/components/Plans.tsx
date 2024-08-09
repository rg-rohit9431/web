
import { useState } from 'react';

// icons
// import { TbChessQueenFilled } from "react-icons/tb";
import { GrFormCheckmark } from "react-icons/gr";
// import { LuAsterisk } from "react-icons/lu";
// import { IoIosCloseCircleOutline, IoMdCloseCircle } from "react-icons/io";
// import { MdVerified } from "react-icons/md";


const Plans = () => {

     const PlansData = {
        quarterly: [
          {
            name: "Free trial",
            desc: "Kickstart your journey with our free trial without any credit card",
            price: 0,
            validity: "(15 days free trial)",
            features: [
              "Digital QR menu with 5 tables",
              "Social media integration",
              "Automated customer data collection",
              "Automated feedback collection",
              "Partial Customer insights",
            ],
            button: {
              btn: "Lets get started",
              start: true,
            },
          },
          {
            name: "Starter Plan",
            desc: "Unleash the Power of Your Business with Starter Plan.",
            price: 765,
            validity: "/month/outlet",
            features: [
              "Digital QR menu with 10 tables",
              "Social media integration",
              "Automated customer data collection",
              "Automated feedback collection",
              "Customer insights ",
              "Automated marketing",
            ],
            button: {
              btn: "Lets get started",
              start: true,
            },
          },
          {
            name: "Premium Enterprise",
            desc: "Unleash the Power of Your Business with Premium Enterprise Plan.",
            price: 1215,
            validity: "/month/Outlet",
            features: [
              "All of Starter plan with unlimited tables",
              "Detailed customer insights",
              "WhatsApp Business Api",
              "Readymade Marketing template",
              "Personalised targeted marketing",
              "Dedicated 24/7 support",
            ],
            button: {
              btn: "Contact Sales",
              start: false,
            },
          },
        ],
        annually: [
          {
            name: "Free trial",
            desc: "Kickstart your journey with our free trial without any credit card",
            price: 0,
            validity: "(15 days free trial)",
            features: [
              "Digital QR menu with 5 tables",
              "Social media integration",
              "Automated customer data collection",
              "Automated feedback collection",
              "Partial Customer insights",
            ],
            button: {
              btn: "Lets get started",
              start: true,
            },
          },
          {
            name: "Starter Plan",
            desc: "Unleash the Power of Your Business with Starter Plan.",
            price: 465,
            validity: "/month/outlet",
            features: [
              "Digital QR menu with 10 tables",
              "Social media integration",
              "Automated customer data collection",
              "Automated feedback collection",
              "Customer insights ",
              "Automated marketing",
            ],
            button: {
              btn: "Lets get started",
              start: true,
            },
          },
          {
            name: "Premium Enterprise",
            desc: "Unleash the Power of Your Business with Premium Enterprise Plan.",
            price: 845,
            validity: "/month/Outlet",
            features: [
              "All of Starter plan with unlimited tables",
              "Detailed customer insights",
              "WhatsApp Business Api",
              "Readymade Marketing template",
              "Personalised targeted marketing",
              "Dedicated 24/7 support",
            ],
            button: {
              btn: "Contact Sales",
              start: false,
            },
          },
        ],
      };

      

    const [switchTab, setSwitchTab] = useState("quarterly");
  return (
    
    
        <div className="w-full flex flex-col items-center">
            <div className="px-[1rem] md:px-[5rem] w-full mt-5 flex flex-row flex-wrap ">
              <div className="w-full flex flex-row justify-center items-center ">
                <div className="w-fit h-fit flex flex-row rounded-[40px] border border-1 my-[2rem] bg-white border-[#000000CC]">
                  <button
                    className={`w-fit px-[2rem] sm:text-[] text-[.9rem] py-2 font-[500] rounded-[40px] transition-colors duration-500 ${
                      switchTab === "quarterly"
                        ? "bg-[#004AAD] text-white"
                        : "bg-white text-black"
                    } sm:text-[22px] text-[.9rem]`}
                    onClick={() => setSwitchTab("quarterly")}
                  >
                    Quarterly
                  </button>
                  <button
                    className={`w-fit px-[1rem] sm:text-[] text-[.9rem] font-[500] rounded-[40px] text-nowrap transition-colors duration-500 ${
                      switchTab === "annual"
                        ? "bg-[#004AAD] text-white"
                        : "bg-white text-black"
                    } sm:text-[22px] text-[.9rem]`}
                    onClick={() => setSwitchTab("annual")}
                  >
                    Annually (save 44%)
                  </button>
                </div>
              </div>
            </div>
            <div className="flex  w-full items-center justify-center flex-wrap px-[1rem] gap-x-[1.2rem] gap-y-[1.2rem] sm:mt-14">
          {switchTab === "quarterly" &&
            PlansData.quarterly.map((plan,index) => (
              <div key={index} className="group  sm:w-[30%] flex flex-col  gap-3 shadow-2xl border rounded-3xl p-[1.5rem] bg-[#FFFFFF] hover:bg-[#004AAD] hover:text-white transition-all">
                <h1 className="text-[1.7rem] text-[#1B223C] font-semibold flex flex-row items-center gap-2 text-nowrap group-hover:text-white">
                  {plan.name}
                  {plan.name === "Starter Plan" && (
                    <span className="w-fit h-fit text-[.8rem] rounded-[8px] border border-[#004AAD] px-4 py-2 bg-[#FFDD66] ml-3 group-hover:text-black">
                      Recommended
                    </span>
                  )}
                </h1>
                <p className="text-[1.1rem] text-[#797878] group-hover:text-white">
                  {plan.desc}
                </p>
                <p className="text-[24px] text-[#797878] flex flex-row items-center gap-2 border-b border-b-[#E7EBFF] pb-2 group-hover:text-white">
                  <span className="text-[2rem] text-[#1B223C] font-bold group-hover:text-white">
                    ₹{plan.price}
                  </span>
                  <span className='text-[1.2rem] text-nowrap'>{plan.validity}</span>
                </p>
                <div className="w-full sm:h-[250px] flex flex-col gap-2 mt-2">
                  {plan.features.map((feature,index) => (
                    <p key={index} className="flex flex-row items-center text-nowrap gap-1 text-[18px]">
                      <GrFormCheckmark className="text-2xl" />
                      <span className='text-[0.95rem]'> {feature}</span>
                      
                    </p>
                  ))}
                </div>
                {plan.button.start ? (
                  <button className="bg-[#004AAD] border-2 h-15 text-[1.1rem] rounded-[8px] text-white border-[#004AAD] font-semibold text-richblack-900 px-[12px] py-2 flex items-center justify-center  group-hover:border-white">
                    {plan.button.btn}
                  </button>
                ) : (
                  <button className="h-10 text-[1.1rem] bg-white rounded-[8px] text-black border-2 font-semibold text-richblack-900 px-[12px]  py-2 flex items-center justify-center  group-hover:text-[#004AAD]">
                    {plan.button.btn}
                  </button>
                )}
              </div>
            ))}
          {switchTab === "annual" &&
            PlansData.annually.map((plan) => (
                <div className="group  sm:w-[30%] flex flex-col gap-3 shadow-2xl border rounded-3xl p-[1.5rem] bg-[#FFFFFF] hover:bg-[#004AAD] hover:text-white transition-all">
                <h1 className="text-[1.7rem] text-[#1B223C] font-semibold flex flex-row items-center gap-2 text-nowrap group-hover:text-white">
                  {plan.name}
                  {plan.name === "Starter Plan" && (
                    <span className="w-fit h-fit text-[.8rem] rounded-[8px] border border-[#004AAD] px-4 py-2 bg-[#FFDD66] ml-3 group-hover:text-black">
                      Recommended
                    </span>
                  )}
                </h1>
                <p className="text-[1.1rem] text-[#797878] group-hover:text-white">
                  {plan.desc}
                </p>
                <p className="text-[24px] text-[#797878] flex flex-row items-center gap-2 border-b border-b-[#E7EBFF] pb-2 group-hover:text-white">
                  <span className="text-[2rem] text-[#1B223C] font-bold group-hover:text-white">
                    ₹{plan.price}
                  </span>
                  <span className='text-[1.2rem] text-nowrap'>{plan.validity}</span>
                </p>
                <div className="w-full sm:h-[250px] flex flex-col gap-2 mt-2">
                  {plan.features.map((feature) => (
                    <p className="flex flex-row items-center gap-1 text-nowrap text-[18px]">
                      <GrFormCheckmark className="text-2xl" />
                      <span className='text-[0.95rem]'> {feature}</span>
                      
                    </p>
                  ))}
                </div>
                {plan.button.start ? (
                  <button className="bg-[#004AAD] border-2 h-15 text-[1.1rem] rounded-[8px] text-white border-[#004AAD] font-semibold text-richblack-900 px-[12px] py-2 flex items-center justify-center  group-hover:border-white">
                    {plan.button.btn}
                  </button>
                ) : (
                  <button className="h-10 text-[1.1rem] bg-white rounded-[8px] text-black border-2 font-semibold text-richblack-900 px-[12px]  py-2 flex items-center justify-center  group-hover:text-[#004AAD]">
                    {plan.button.btn}
                  </button>
                )}
              </div>
            ))}
            </div>

            
            
          </div>
    
  )
}

export default Plans