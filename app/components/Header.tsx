"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";

const links = [
  { linkUrl: "/", textContent: "Home" },
  { linkUrl: "/", textContent: "Teams" },
  { linkUrl: "/", textContent: "Success Stories" },
  { linkUrl: "/", textContent: "About Us" },
  { linkUrl: "/blogs-page", textContent: "Blogs" },
  { linkUrl: "/", textContent: "Get Involved" },
];
const Header = () => {
  const map = new Map();
  map.set("/", 0);
  map.set("/b", 4);
  const pathName = usePathname();
  const [activeIndex, setActiveIndex] = useState(
    map.get(pathName.slice(0, 2)) != undefined
      ? map.get(pathName.slice(0, 2))
      : 0
  );

  return (
    <div className="flex justify-between items-center p-5 md:shadow top-0 sticky bg-white">
      <div>
        <Image src="/a2svlogo.svg" alt="" width={127} height={30} />
      </div>
      <div className="hidden lg:flex lg:gap-12">
        {links.map((link, index) => {
          return (
            <Link
              href={link.linkUrl}
              className={`${
                activeIndex == index ? "text-[#264FAD]" : "text-[#565656]"
              } font-semibold`}
              key={index}
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              {link.textContent}
              <div
                className={`h-1 w-full ${
                  activeIndex == index ? "bg-[#264FAD]" : "bg-white"
                }  rounded-lg `}
              ></div>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-8 items-center">
        <Link className="font-bold hidden md:block" href={""}>
          Login
        </Link>
        <button className="bg-[#264FAD] py-2 px-4 rounded-lg text-white hover:bg-[#4764a8] hidden md:block">
          Donate
        </button>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <RxHamburgerMenu size={25} />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-5">
                {links.map((link, index) => {
                  return (
                    <Link
                      href={link.linkUrl}
                      className={`${
                        activeIndex == index
                          ? "text-[#264FAD]"
                          : "text-[#565656]"
                      } font-semibold`}
                      key={index}
                      onClick={() => {
                        setActiveIndex(index);
                      }}
                    >
                      {link.textContent}
                      <div
                        className={`h-1 w-2/12 ${
                          activeIndex == index ? "bg-[#264FAD]" : "bg-white"
                        }  rounded-lg `}
                      ></div>
                    </Link>
                  );
                })}

                <Link className="font-bold md:hidden" href={""}>
                  Login
                </Link>
                <button className="bg-[#264FAD] py-2 px-4 rounded-lg text-white hover:bg-[#4764a8] md:hidden">
                  Donate
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
