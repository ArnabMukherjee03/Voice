"use client"

import noUser from "../../public/images/userno.png";
import Image from "next/image";
import { useBlogContext} from "@/context/postcontext";



export default function Blog(){
    const {blogs} = useBlogContext();
    return(
        <div className="px-[80px] py-[30px]">
            <div className="flex flex-col gap-8">
                {
                    blogs.map(post=>{
                        return(
                               <div key={post._id}  className="flex gap-2 flex-col border-b-[1px] border-b-gray-200 pb-1">
                                     <div className="flex gap-2 items-center">
                                         <Image className="w-7 h-7 rounded-[50%]" src={post.postedBy.userimage?post.postedBy.userimage:noUser} width={500} height={500} alt={post.title}/>
                                         <p className="text-[13px]">{post.postedBy.name}</p>
                                         <p className="text-[13px] roboto">{post.writtenDate}</p>
                                     </div>
                                     {/* Blog details */}
                                     <div className="flex">
                                     <div className="w-[80%]">
                                     <h1 className="text-[20px]">{post.title}</h1>
                                     <p className="text-[14px] pr-4 pt-2">{post.content.slice(0,204)}...</p>
                                     </div>
                                     <Image className="w-[18%] h-[18%]"  src={post.image? post.image : ""} height={500} width={500} alt=""/>
                                     </div>
                                     <div className="w-[80%] py-6 flex justify-between">
                                        <p className="text-[11px] rounded-[20px] py-1 px-3 text-center bg-[#F2F2F2] w-auto">{post.tags[0]}</p>
                                        <div className="flex gap-2 mr-16">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" fill="#000"></path></svg>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M4.39 12c0 .55.2 1.02.59 1.41.39.4.86.59 1.4.59.56 0 1.03-.2 1.42-.59.4-.39.59-.86.59-1.41 0-.55-.2-1.02-.6-1.41A1.93 1.93 0 0 0 6.4 10c-.55 0-1.02.2-1.41.59-.4.39-.6.86-.6 1.41zM10 12c0 .55.2 1.02.58 1.41.4.4.87.59 1.42.59.54 0 1.02-.2 1.4-.59.4-.39.6-.86.6-1.41 0-.55-.2-1.02-.6-1.41a1.93 1.93 0 0 0-1.4-.59c-.55 0-1.04.2-1.42.59-.4.39-.58.86-.58 1.41zm5.6 0c0 .55.2 1.02.57 1.41.4.4.88.59 1.43.59.57 0 1.04-.2 1.43-.59.39-.39.57-.86.57-1.41 0-.55-.2-1.02-.57-1.41A1.93 1.93 0 0 0 17.6 10c-.55 0-1.04.2-1.43.59-.38.39-.57.86-.57 1.41z" fill="currentColor"></path></svg>
                                        </div>
                                     </div>
                               </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}