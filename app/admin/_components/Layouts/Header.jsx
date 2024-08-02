"use client";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
const Header = () => {
  const { user } = useUser();
  const userFullName = user ? user.fullName : "Loading...";
  // const userImgeUrl = user ? user.imageUrl : "Loading...";
  return (
    <>
      <div className="items-center h-14 bg-accent text-white flex justify-between">
        <button className="flex items-center md:hidden ml-4">
          {/* Menu icon */}
          <AlignJustify />
          <div className="ml-2 mr-1 flex items-center">
            <UserButton afterSignOutUrl="/" />
          </div>
          {userFullName}
        </button>
        {/* Header content */}
        <div className="contents justify-between">
          <div className="ml-4 hidden md:block">
            <div className="flex items-center">
              <AlignJustify />
              <div className="ml-2 mr-1">
                <UserButton afterSignOutUrl="/" />
              </div>
              {userFullName}
            </div>
          </div>
          <div className="mr-4 flex items-center"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
