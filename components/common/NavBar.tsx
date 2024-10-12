"use client";

import { useState } from "react";
import { Button } from '@/components/ui/button'
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import {
  SignUpButton,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton
} from '@clerk/nextjs'

function NavBar() {
  const links: { route: string; name: string; badgeCount?: number }[] = [
    // {
    //   route: "/",
    //   name: "Home",
    //   badgeCount: 0,
    // },
    // {
    //   route: "/",
    //   name: "Pricing",
    //   badgeCount: 0,
    // },
  ];
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="top-0 md:shadow-none z-20 mt-0">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between mx-4 items-center">
          <Link className="flex gap-2 items-center" href="/">
            <img src="/images/logo.png" alt="Piltonet Logo" width={35} height={35} />
            <p className="font-[700] text-gray-700 hover:text-primary">
              PILTONET
            </p>
          </Link>
          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none px-4">
            {links.map((item, index) => (
              <div key={index} className="flex gap-2">
                <p
                  className={`hover:text-primary cursor-pointer flex items-center gap-2 font-[500] text-gray`}
                >
                  {item.name}
                </p>
                {item.badgeCount ? (
                  <div className="h-8 w-8 rounded-full bg-primary flex justify-center items-center font-semibold text-white">
                    {item.badgeCount}
                  </div>
                ) : (
                  <div />
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[20px] select-none">
            <SignedOut>
              <SignInButton>
                <Button
                  size='lg'
                  className="h-12 px-4 bg-white border text-gray-700 border-gray-200 rounded-3xl hover:bg-white hover:text-orange-500"
                >
                  Sign in
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button
                  size='lg'
                  className="h-12 px-4 border-none rounded-3xl hover:bg-orange-500"
                >
                  Get started
                </Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <SignOutButton>
                <Button
                  size='lg'
                  className="h-12 px-4 bg-white border text-gray-700 border-gray-200 rounded-3xl hover:bg-white hover:text-orange-500"
                >
                  Sign out
                </Button>
              </SignOutButton>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={`block lg:hidden ${"shadow-sm" /* "fixed" */} top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${menu ? " bg-primary py-2" : ""
          } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <img src="/images/logo.png" alt="Piltonet Logo" width={35} height={35} />
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <FiX
                size={30}
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            ) : (
              <FiMenu
                size={30}
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <p
                    className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                  >
                    {item.name}
                  </p>
                  {item.badgeCount ? (
                    <div className="h-8 w-8 rounded-full bg-primary flex justify-center items-center  font-semibold text-white">
                      {item.badgeCount}
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              ))}

              <div className="flex flex-col gap-[20px] select-none">
                <SignedOut>
                  <SignInButton>
                    <Button
                      size='lg'
                      className="h-12 px-4 bg-white border text-gray-700 border-gray-200 rounded-3xl hover:bg-white hover:text-orange-500"
                    >
                      Sign in
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button
                      size='lg'
                      className="h-12 px-4 border-none rounded-3xl hover:bg-orange-500"
                    >
                      Get started
                    </Button>
                  </SignUpButton>
                </SignedOut>

                <SignedIn>
                  <UserButton />
                  <SignOutButton>
                    <Button
                      size='lg'
                      className="h-12 px-4 bg-white border text-gray-700 border-gray-200 rounded-3xl hover:bg-white hover:text-orange-500"
                    >
                      Sign out
                    </Button>
                  </SignOutButton>
                </SignedIn>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
