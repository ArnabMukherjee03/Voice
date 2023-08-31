"use client";
import Link from "next/link";
import Image from "next/image";
import voicelogo from "../../public/images/voicelogo.png";
import nouser from "../../public/images/userno.png";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState} from "react";
import { useAuthContext } from "@/context/authContext";


export default function Header() {
    const [toggle,setToggle]=useState(false);

    const{me,auth,setAuth} = useAuthContext();


    const logout = async ()=>{
        try {
            const response = await axios.get('/api/user/logout')
              setAuth(false)
              setToggle(false);
              toast.success('Logout Sucessfully');
        } catch (error: any) {
            toast.error("Not logged in")
        }
    }

  return (
    <>
      {/* Navigation Bar */}
      <nav className="border-b-[1px] border-gray-300">
        <div className="flex justify-between items-center mx-[50px] h-16">
          {/* Logo */}
          <div className="flex gap-4 h-full items-center">
            <div className="">
              <Image src={voicelogo} alt="Voice" className="w-[70px]" />
            </div>
            {/* Search Bar */}
            <div className="flex bg-[#F9F9F9] rounded-[20px] px-2">
              <div className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search Voice"
                className="bg-[#F9F9F9] ms-2  outline-none h-[40px] py-[10px]"
              />
            </div>
          </div>
          {/* Nav-Menus */}
          <div className="text-[#6B6B6B]">
            <ul className="flex gap-6">
              <li className="flex items-center cursor-pointer ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-label="Write"
                >
                  <path
                    d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                    stroke="currentColor"
                  ></path>
                </svg>
                <span className="ps-1">Write</span>
              </li>
              {/* Auth Buttons */}
              <Link href="/login" className={`items-center ${!auth?"flex":"hidden"}`}>
                {" "}
                <li>login</li>
              </Link>
              <Link
                href="/signup"
                className={`px-3 py-2 rounded-[20px] w-[120px] text-center bg-black text-white ${!auth?"":"hidden"}`}
              >
                Get Started
              </Link>
              {/* User  profile*/}
              <div className={`items-center gap-1 cursor-pointer ${auth?"flex":"hidden"}`} onClick={e => {!toggle?setToggle(true):setToggle(false)}}>
                <div className="w-[40px] h-[40px] ml-4">
                  <Image
                    src={me && me.userimage? me.userimage : nouser}
                    width={500}
                    height={500}
                    className="w-full  rounded-[50%]"
                    alt={me && me.username? me.username: ""}
                  />
                </div>
                <svg width="12px" height="12px" viewBox="0 0 15 15">
                  <path
                    d="M3.85 5.15a.5.5 0 0 0-.7.7l4.35 4.36 4.35-4.36a.5.5 0 1 0-.7-.7L7.5 8.79 3.85 5.15z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {/* Side Bar */}
      <div  className={`z-10 shadow w-[22%] absolute flex-col  right-0 text-[#7d7d7d] bg-white h-auto top-[60px] transition-all  ${toggle ? "flex" : "hidden"}`}>
        {/* User Profile Section */}
        <div className="flex flex-col gap-3 py-8 px-8 border-b-[1px] border-b-gray-200">
          <Link href={`/${me && me.username}`} onClick={e=> setToggle(false)}>
            <li className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Profile"><circle cx="12" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.75"></circle><path d="M3.5 21.5v-4.34C3.5 15.4 7.3 14 12 14s8.5 1.41 8.5 3.16v4.34" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"></path></svg>
              <p className="pt-1">Profile</p>
            </li>
          </Link>
          <Link href="#">
            <li className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Lists"><path d="M6.44 6.69h0a1.5 1.5 0 0 1 1.06-.44h9c.4 0 .78.16 1.06.44l.35-.35-.35.35c.28.28.44.66.44 1.06v14l-5.7-4.4-.3-.23-.3.23-5.7 4.4v-14c0-.4.16-.78.44-1.06z" stroke="currentColor"></path><path d="M12.5 2.75h-8a2 2 0 0 0-2 2v11.5" stroke="currentColor" strokeLinecap="round"></path></svg>
              <p className="pt-1">Library</p>
            </li>
          </Link>
          <Link href="#">
            <li className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Stories"><path d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z" stroke="currentColor"></path><path d="M8 8.5h8M8 15.5h5M8 12h8" stroke="currentColor" strokeLinecap="round"></path></svg>
              <p className="pt-1">Stories</p>
            </li>
          </Link>
        </div>
        {/* Settings */}
        <div className="flex flex-col gap-3 py-8 px-8 border-b-[1px] border-b-gray-200">
            <Link href="#"><li>Settings</li></Link>
            <Link href="#"><li>Refine Recommendations</li></Link>
            <Link href="#"><li>Become a Member</li></Link>
        </div>
        {/* Sign Out */}
        <div className="flex p-8 gap-3 flex-col">
            <div className="cursor-pointer" onClick={e => {logout()}}>Sign out</div>
            <p className="text-[10px]">a****@gmail.com</p>
        </div>
      </div>
    </>
  );
}
