"use client";
import { useUserContext } from "@/context/usercontext";
import { useParams } from "next/navigation";
import Image from "next/image";
import nouser from "../../public/images/nouser.webp";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuthContext } from "@/context/authContext";
import axios from "axios";


export default function Usersidebar() {
  const { user, following, follower } = useUserContext();
  const { me } = useAuthContext();
  // Follow or Not
  const [isFollow, setIsFollow] = useState(false);

  console.log(follower);

  useEffect(() => {
    if (
      follower &&
      follower.some((f) => {
        return f._id === me?._id;
      })
    ) {
      setIsFollow(true);
    }
  }, [follower, me]);


    async function follow(followId:any) {
       try {
          console.log(followId);
          const response = axios.put("api/user/follow",JSON.stringify(followId));
          console.log("Follow Response",response);
       } catch (error:any) {
          console.log("Follow Error::- ",error)
       }
    }
  

  return (
    <div className="w-[32%] sticky top-0 right-0 h-screen border-l-[1px] border-l-gray-300">
      <div className="px-10 pt-4">
        <Image
          src={user?.userimage ? user.userimage : nouser}
          width={500}
          height={500}
          alt={user ? "userImage" : "no image"}
          className="w-[90px] h-[90px] rounded-[50%]"
        />
        <h1 className="py-4 text-[14px]">{user?.name}</h1>
        <p className="text-[13px]">{user?.bio}</p>
        {/* Only for logged in user  */}
        {me?.username === user?.username ? (
          <p className="text-[13px] text-red-500 py-4">Edit Profile</p>
        ) : isFollow ? (
          <button className="my-4 text-red-500 border-[1px] border-red-500 text-[12px] px-4 py-2 rounded-3xl">
            Following
          </button>
        ) : (
          <button className="my-4 bg-red-500 text-white text-[12px] px-4 hover:bg-red-700 py-2 rounded-3xl" onClick={e=>follow(me?._id)} >
            Follow
          </button>
        )}
      </div> 
      <div className="px-10">
        <h1 className="text-[14px] py-4">Following</h1>
        <div className="flex flex-col gap-3 py-4">
          {following &&
            following.map((following) => {
              return (
                <div key={following._id} className="flex justify-between ">
                  <div className="flex gap-4">
                    <Image
                      className="w-6 h-6 rounded-[50%]"
                      src={following.userimage}
                      width={500}
                      height={400}
                      alt={following.name}
                    ></Image>
                    <p className="text-[12px]">{following.name}</p>
                  </div>
                  <div className="">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </div>
              );
            })}
        </div>
        <Link href="#">
          <p className="text-[13px] text-red-500 py-3">
            See all
            <span className="roboto pl-1">
              ( {following && following.length} )
            </span>
          </p>
        </Link>
      </div>
    </div>
  );
}
