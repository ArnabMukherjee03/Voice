"use client"
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header';

import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import PostProvider from '@/context/postcontext';
import UserProvider from '@/context/usercontext';
import AuthProvider from '@/context/authContext';
import FollowProvider from '@/context/followContext';


export const metadata: Metadata = {
  title: 'Voice',
  description: '',
  
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  
  
  // Check if the current route is the login page
  const hideHeader = pathname === "/login" || pathname === "/signup";
  
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        <UserProvider>
        <PostProvider>
        <Toaster/>
        {!hideHeader && <Header/>}
        {children}
        </PostProvider>
        </UserProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
