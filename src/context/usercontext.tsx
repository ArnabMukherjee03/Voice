
"use client"
import axios from "axios";
import React,{createContext,useState,useEffect,useContext} from "react";

interface following{
  _id: string,
  name: string,
  userimage: string
}

interface follower{
  _id: string,
  name: string,
  userimage: string
}


interface user {
    _id: string,
    name: string,
    username: string,
    email: string,
    userimage: string,
    joindate: string,
    bio: string
}


export interface UserContextType {
    user: user|null;
    following: following[];
    follower: follower[];
    loading: boolean;
    setId: (id: string) => void;
  }
  
export const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useBlogContext must be used within a BlogProvider');
    }
    return context;
  };

export default function UserProvider ({children}:{ children: React.ReactNode }){
    const [user, setUser] = useState<user | null>(null);
    const [following,setfollowing] = useState<following[]>([]);
    const [follower,setfollower] = useState<follower[]>([]);
    const [loading,setLoading] = useState<boolean>(true)
    const [id,setId] = useState<string>("")
    useEffect(()=>{
        const fetchPost = async ()=>{
            try {
                const response = await axios.get(`api/user/getuser/${id}`);
                setUser(response.data);
                setfollowing(response.data.following);
                setfollower(response.data.followers);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPost();
    },[id,setUser,setfollowing])

   
  const contextValue: UserContextType = {
   user,
   setId,
   following,
   follower,
   loading
  };


    return(
       <UserContext.Provider value={contextValue}>
        {children}
       </UserContext.Provider>
    )
}


