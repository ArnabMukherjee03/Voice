"use client";
import Blog from "@/components/Blog";
import Usersidebar from "@/components/Usersidebar";
import { useUserContext } from "@/context/usercontext";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";

export default function User() {
  const params = useParams();
  const { user, setId, loading } = useUserContext();
  useEffect(() => {
    setId(params.name.toString());
  }, [params, setId]);
  return (
    <>
      {loading ? (
        <div className="flex w-full h-[80vh] justify-center items-center">
          <RotatingLines
            strokeColor="#ef4444"
            strokeWidth="2"
            animationDuration="0.75"
            width="70"
            visible={true}
          />
        </div>
      ) : (
        <div className="flex">
          <div className="w-[68%]">
            <div className=" py-[70px]">
              {/* Dynamic Heading */}
              <h1 className="px-[80px] text-4xl">{user?.name}</h1>
              {/* Profile Header */}
              <div className="px-[80px] mt-10 h-8 text-[#6B6B6B]">
                <div className="flex h-full gap-5 text-[13px] border-b-[1px] border-b-gray-300">
                  <li className="border-b-black border-b-[1px] px-1 cursor-pointer">
                    Home
                  </li>
                  <li className="px-1 cursor-pointer">Lists</li>
                  <li className="px-1 cursor-pointer">About</li>
                </div>
              </div>
              <Blog />
            </div>
          </div>
          <Usersidebar />
        </div>
      )}
    </>
  );
}
