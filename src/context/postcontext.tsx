"use client"
import axios from "axios";
import React,{createContext,useState,useEffect,useContext} from "react";

interface Blog {
    _id: string;
    title: string;
    subTitle: string;
    content: string;
    image: string;
    tags: string[];
    postedBy: {
      _id: string,
      name: string,
      userimage: string
    };
    writtenDate: string;
    likes: string[];
    __v: number;
}

export interface BlogContextType {
    blogs: Blog[];
  }
  
export const PostContext = createContext<BlogContextType | undefined>(undefined);

export const useBlogContext = () => {
    const context = useContext(PostContext);
    if (!context) {
      throw new Error('useBlogContext must be used within a BlogProvider');
    }
    return context;
  };

export default function PostProvider ({children}:{ children: React.ReactNode }){
    const [blogs, setBlogs] = useState<Blog[]>([]);
    
    useEffect(()=>{
        const fetchPost = async ()=>{
            try {
                const response = await axios.get("api/blogs/getpost");
                setBlogs(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPost();
    },[])

    const contextValue: BlogContextType = {
        blogs,
      };


    return(
       <PostContext.Provider value={contextValue}>
        {children}
       </PostContext.Provider>
    )
}


