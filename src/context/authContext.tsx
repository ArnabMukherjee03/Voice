"use client"
import axios from "axios";
import React,{createContext,useState,useEffect,useContext} from "react";

interface me {
    _id: string,
    name: string,
    username: string,
    email: string,
    userimage: string,
    joindate: string,
    bio: string,
    following: string[],
    followers: string[] 
}


export interface AuthContextType {
    me: me|null;
    auth: boolean;
    setAuth: (boolean:any) => void;
    setMe: (me:any) => void;
  }
  

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useBlogContext must be used within a BlogProvider');
    }
    return context;
  };

export default function AuthProvider ({children}:{ children: React.ReactNode }){
    const [me, setMe] = useState<me | null>(null);
    const [auth,setAuth] = useState<boolean>(false);
   
   
      useEffect(()=>{
        const fetchPost = async ()=>{
            try {
               const response = await axios.get("api/user/isauth");
               setMe(response.data);
               setAuth(true);
            } catch (error:any) {
                setAuth(false);
                console.log(error);
            }
        }
        fetchPost();
      },[]);
     
    

    const contextValue: AuthContextType = {
        me,
        auth,
        setAuth,
        setMe
       };

    return(
       <AuthContext.Provider value={contextValue}>
        {children}
       </AuthContext.Provider>
    )
}


