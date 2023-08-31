"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef,useState,useEffect } from "react"; 
import userimage from "../../public/images/user3m.jpeg";

// Demos Start
const blog = [
  {
    username: "Christopher P Jones",
    userimage:
      "https://miro.medium.com/v2/resize:fill:66:66/1*egZ1JMZ13z2FYBEG6NgQyQ.jpeg",
    title: "The Art of Slowing Down",
  },
  {
    username: "Sophie Lucido Johnson",
    userimage:
      "https://miro.medium.com/v2/resize:fill:132:132/1*mPz8tqLnKbhlqbNSIRwOxw.jpeg",
    title: "Here’s One Small Pleasure for Every Day of the Week",
  },
  {
    username: "Robert Roy Britt",
    userimage:
      "https://miro.medium.com/v2/resize:fill:66:66/1*ouCzbS-UseghKFWeNjxphQ.jpeg",
    title: "My Stupid, Dangerous Run in 110-Degree Heat",
  },
];
const topic = [
  "LifeStyle",
  "Self Improvment",
  "Coding",
  "Business",
  "Productivity",
  "Typescript",
  "Ecmascript",
];
const author = [
  {
    name: "Juliet Ofoegbu",
    about: "Frontend developer and technical writer.",
    image:
      "https://miro.medium.com/v2/resize:fill:48:48/1*1bhGSXGdRdFGV9sUztZHRQ.jpeg",
  },
  {
    name: "Ben Lmsc",
    about: "Full Stack Software Engineer 🚀 Founder of Tech Brant,",
    image:
      "https://miro.medium.com/v2/resize:fill:48:48/1*rjraYtfht1nHrc_qHPdiHg.png",
  },
  {
    name: "Vineet Mishra",
    about: "Full Stack Developer at CCR Tech, I write about...",
    image:
      "https://miro.medium.com/v2/resize:fill:48:48/1*htomrpLtqAgvt5WFTnIang.jpeg",
  },
];

// Demos End


export function Sidebar() {
  
  return (
    <div  className="sticky w-[32%] top-[-500px] right-0  h-full border-l-[1px] border-l-gray-300 border-b-[1px] border-b-gray-300">
      {/* Editor Picks */}
      <div className="pt-9 pb-6 px-10">
        <h1 className="text-[16px]">Voice Top Picks</h1>
        <div className="flex flex-col  py-4 gap-4">
          {/* Maping Blogs  */}
          {blog.map((blog) => {
            return (
              <>
                <div className="">
                  {/* Blog author */}
                  <div className="flex gap-2 items-center">
                    <div className="h-[20px] w-[20px] rounded-[50%]">
                      <Image
                        className="w-full rounded-[50%]"
                        height="500"
                        width="500"
                        src={blog.userimage}
                        alt={blog.username}
                      />
                    </div>
                    <p className="text-[12px]">{blog.username}</p>
                  </div>
                  {/* Blog title */}
                  <h1 className="pt-1 text-[16px]">{blog.title}</h1>
                </div>
              </>
            );
          })}
        </div>
        <p className="text-red-500 text-[12px]  cursor-pointer">
          See the full list
        </p>
      </div>
      {/* Recommended topics */}
      <div className="pb-6 px-10">
        <h1 className="text-[16px]">Recommended topics</h1>
        <div className="py-5 flex gap-3  flex-wrap">
          {topic.map((topic) => {
            return (
              <>
                <div className="text-[12px] rounded-[20px] py-2 px-4 bg-[#F2F2F2]">
                  {topic}
                </div>
              </>
            );
          })}
        </div>
        <p className="text-[12px] text-red-500 cursor-pointer">
          See more topics
        </p>
      </div>
      {/* Whom to follow */}
      <div className="pb-6 px-10">
        <h1 className="text-[16px]">Whom to Follow</h1>
        <div className="py-4 flex flex-col gap-4">
          {author.map((author) => {
            return (
              <>
                <div className="flex items-center">
                  <div className="flex gap-4 ">
                    <div className="w-[40px] h-[40px] rounded-[50%] mt-1">
                      <Image
                        className="rounded-[50%]"
                        src={author.image}
                        width={50}
                        height={50}
                        alt={author.name}
                      />
                    </div>
                    <div className="pe-10">
                      <h1>{author.name}</h1>
                      <p className="text-[12px] pt-1">{author.about}</p>
                    </div>
                  </div>
                  <button className="text-[12px] px-4 py-1 h-[70%] text-center rounded-[20px] border-[1px] border-black">
                    Follow
                  </button>
                </div>
              </>
            );
          })}
        </div>
        <p className="text-[12px] text-red-500 cursor-pointer">
          See more suggestions
        </p>
      </div>
      {/* Recetly Saved */}
      <div className="pb-9 px-10">
      <h1 className="text-[16px]">Recently Saved</h1>
        <div className="flex flex-col gap-1 py-4">
          <div className="flex gap-3 items-center">
             <Image className="w-[30px] h-[30px] rounded-[50%]" src={userimage} alt="username"/>
             <h3 className="text-[12px]">Tapajyoti Bose</h3>
          </div>
          <h1 className="text-[14px] pt-1 ">7 Cool HTML Elements Nobody Uses</h1>
          <p className="text-[#6b6b6b]">oct 2 , 2022</p>
        </div>
        <p className="text-[12px] text-red-500 cursor-pointer">
          See all
        </p>
      </div> 
      </div>

  );
}
