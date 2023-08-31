"use client"
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
// Images
import Voicelogo from "../../../public/images/voicelogo.png";
import writer1 from "../../../public/images/writer1.jpg";
import writer2 from "../../../public/images/toni-koraza-BmhEzpGV36c-unsplash.jpg";

// Swiper
import { Autoplay,Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper} from 'swiper/react';

// Css Swiper

import 'swiper/css/navigation';
import 'swiper/css/autoplay'; 
import 'swiper/css';

// react icons
import {HiArrowLongRight,HiArrowLongLeft} from "react-icons/hi2";
import { RotatingLines } from 'react-loader-spinner';

// React-hot-toast
import toast from 'react-hot-toast';

export default function SignupPage(){
    const router = useRouter();
    const date = new Date();

    

    // usestate 
    const [data,setData] = React.useState({
        name: "",
        username: "",
        email: "",
        password: "",
        userimage: "",
        joindate: date.toDateString().slice(4,),
    })

    const [loader,setLoader] = React.useState(false);


    const onSignup = async ()=>{
        try {
            setLoader(true);
            const response = await axios.post("/api/user/signup",data);
            if(response.status === 201){
                toast.success(response.data.message);
            }
            router.push("/login");
        } catch (error: any) {
            toast.error(error.response.data.error);
        }finally{
            setLoader(false);
        }
    }

    return(
        <div className="">
             <div className="flex min-h-screen ">
                    {/* Sign Up Form */}
                    <div className="w-1/2 flex flex-col items-center mt-6">
                        {/* Heading and Subheading */}
                        <div className="text-center flex gap-2 flex-col items-center">
                        <Image priority={true} src={Voicelogo} className="w-14" alt="Voice"/>
                            <h1 className="text-2xl">Voice Your Passion</h1>
                            <p className="text-sm text-gray-500 tracking-wide">Be Part of Our Community: Sign up and Connect!</p>
                        </div>
                        {/* Form */}
                        <div className="flex flex-col w-1/2 gap-2">
                            <div className="mt-3">
                            <label htmlFor="name">Name</label>
                            <input className="h-[40px] rounded-md outline-none w-full border-[1px] border-gray-300 mt-1 ps-4" autoComplete="off"  placeholder="John Doe" type="text" name="name" id="name" value={data.name} onChange={(e)=> setData({...data,name:e.target.value})} />
                            </div>
                            <div className="">
                            <label htmlFor="username">Username</label>
                            <input className="h-[40px] rounded-md outline-none w-full border-[1px] border-gray-300 mt-1 ps-4" autoComplete="off" placeholder="username" type="name" name="username" id="username" value={data.username} onChange={(e)=> setData({...data,username:e.target.value})} />
                            </div>
                            <div className="">
                            <label htmlFor="email">Email</label>
                            <input className="h-[40px] rounded-md outline-none w-full border-[1px] border-gray-300 mt-1 ps-4" autoComplete="off" placeholder="you@awesome.com" type="email" name="email" id="email" value={data.email} onChange={(e)=> setData({...data,email:e.target.value})} />
                            </div>
                            <div className="">
                            <label htmlFor="password">Password</label>
                            <input className="h-[40px] rounded-md outline-none w-full border-[1px] border-gray-300 mt-1 ps-4" autoComplete="off" placeholder="Password" type="password" name="password" id="password" value={data.password} onChange={(e)=> setData({...data,password:e.target.value})} />
                            </div>
                            <div className={`w-full bg-black rounded-md text-white text-center py-2 mt-2  ${loader ? "cursor-not-allowed opacity-80":"cursor-pointer"}`} onClick={onSignup}>
                                {loader ? 
                                "loading..." : "Sign up"}
                            </div>
                        </div>
                        {/* Or */}
                        <div className="py-1 relative w-1/2 text-center text-sm orLine">
                          <span className="bg-white px-2 text-gray-400">Or</span>
                        </div>
                        {/* Google Option */}
                        <div className="w-1/2">
                            <div className="w-full flex justify-center gap-2  border-[1px] border-gray-300 rounded-md text-center py-2  cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true" fill="currentColor" fillRule="evenodd" focusable="false" role="img" viewBox="0 0 24 24"><path d="M21.324 12.23c0-.68-.054-1.363-.168-2.032h-9.165v3.851h5.249a4.631 4.631 0 01-1.943 3.038v2.499h3.132c1.838-1.741 2.895-4.314 2.895-7.356z" fill="#4285f4"></path><path d="M11.991 22c2.621 0 4.831-.885 6.441-2.414l-3.131-2.499c-.871.611-1.995.956-3.307.956-2.534 0-4.683-1.76-5.454-4.126H3.308v2.576C4.958 19.87 8.318 22 11.991 22z" fill="#34a853"></path><path d="M6.536 13.917a6.156 6.156 0 010-3.829V7.512H3.309a10.272 10.272 0 000 8.981l3.227-2.576z" fill="#fbbc04"></path><path d="M11.991 5.958a5.204 5.204 0 013.728 1.499l2.773-2.855A9.193 9.193 0 0011.991 2C8.318 2 4.958 4.132 3.308 7.512l3.228 2.576c.767-2.37 2.921-4.13 5.455-4.13z" fill="#ea4335"></path></svg>
                            <span>Sign up with Google</span>
                            </div>
                            <div className="text-center mt-2 flex justify-center gap-1">Already have an account? <p className="relative overflow-hidden Underline cursor-pointer"><Link href="/login">Log in</Link></p></div>
                        </div>
                    </div>
                    {/* Testimonial */}
                    <div className="w-1/2 flex items-center  p-8">
                            <Swiper
                            slidesPerView={1}
                            modules={[Autoplay,Navigation]}
                            navigation={{
                                prevEl: '.prev',
                                nextEl: '.next',
                              }}
                            autoplay={{
                                delay: 3000, // Delay between slides in milliseconds
                                disableOnInteraction: false, // Allow autoplay to continue even when user interacts with swiper
                              }}
                              loop={true}
                              >
                                <SwiperSlide>
                                   <div className="w-full relative ">
                                   <Image priority={true} src={writer1} className="w-full relative  " alt="writer1"/>
                                   <div className="">
                                       {/* Text  */}
                                        <p className="greatVibes pt-5">
                                        &quot; Absolutely love Voice! It&apos;s my go-to source for insightful content. The diverse topics keep me engaged, and the writing style is captivating. Highly recommended for anyone seeking enriching reads!                                        
                                        </p>
                                      {/* Writer */}
                                      <div className="text-sm  pt-2">
                                         <p className="text-[10px]">Sarah M.</p>
                                         <p className="text-[10px]">Senior Developer ~ Google</p>
                                      </div>
                                   </div>
                                   </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                   <div className="w-full">
                                   <Image priority={true} src={writer2} className="w-full" alt="writer2"/>
                                   <div className=""> 
                                       {/* Text  */}
                                        <p className="greatVibes pt-5">
                                        &quot; Kudos to the brilliant minds behind Voice! The articles are consistently thought-provoking and well-researched. I&apos;m constantly impressed by the quality of content. A must-visit platform for knowledge seekers
                                        </p>
                                      {/* Writer */}
                                      <div className="pt-2 text-sm">
                                         <p className="text-[10px]">John Doe</p>
                                         <p className="text-[10px]">CEO ~ Fashion</p>
                                      </div>
                                   </div>
                                   </div>
                                </SwiperSlide>
                                <div className="flex justify-end mr-4 gap-2">
                                <button className="prev text-2xl"><HiArrowLongLeft/></button>
                                <button className="next text-2xl"><HiArrowLongRight/></button>
                                </div>
                            </Swiper>
                    </div>
             </div>
        </div>
    )
}