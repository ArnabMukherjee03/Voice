import Blog from "@/components/Blog";
import { Sidebar } from "@/components/Sidebar";


export default function Home() {
  return (
  <div className=" flex ">
   <div className="h-[300vh]  w-[66%]">
       {/* Blog catagory */}
       <div className="px-[80px] mt-10 h-8 text-[#6B6B6B]">
          <div className="flex h-full gap-8 text-[13px] border-b-[1px] border-b-gray-300">
              <li className="border-b-black border-b-[1px] px-1 cursor-pointer">Home</li>
              <li className="px-1 cursor-pointer">Following</li>
              <li className="px-1 cursor-pointer">Freelancing</li>
          </div>
        </div>
       <Blog/>
   </div>
   <Sidebar/>
   </div>
  )
}
