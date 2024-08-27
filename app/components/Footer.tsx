import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="border-t p-10 flex flex-col gap-7">
      <div className="flex flex-col gap-5 justify-between items-center lg:flex-row ">
        <div>
          <div className="flex flex-col gap-4 items-center md:flex-row">
            <img src="/rafiki.svg" alt="" />
            <div className="gap-5 flex flex-col">
              <p className="font-semibold">
                Get involved in improving tech <br /> education in Africa!
              </p>
              <button className="bg-[#264FAD] py-3 px-5 rounded-lg text-sm text-white hover:bg-[#4764a8] md:text-base">
                Support Us
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-16 md:flex-row">
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Links</p>
            <Link href="" className="font-light">
              Home
            </Link>
            <Link href="" className="font-light">
              Success Stories
            </Link>
            <Link href="" className="font-light">
              About us
            </Link>
            <Link href="" className="font-light">
              Get Invoved
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Teams</p>
            <Link href="" className="font-light">
              Board Members
            </Link>
            <Link href="" className="font-light">
              Advisors/Mentors
            </Link>
            <Link href="" className="font-light">
              Executives
            </Link>
            <Link href="" className="font-light">
              Staffs
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold">Blogs</p>

            <Link href="" className="font-light">
              Recent Blogs
            </Link>
            <Link href="" className="font-light">
              New Blog
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-t w-full" />
      <div className="flex justify-between gap-4 items-center flex-col md:flex-row">
        <p>&copy; 2020 Africa to Silicon Valley, Inc. All right reserved.</p>
        <div className="flex gap-3">
          <FaTwitter size={20} color="#9CA3AF" />
          <FaFacebook size={20} color="#9CA3AF" />
          <FaYoutube size={20} color="#9CA3AF" />
          <FaLinkedin size={20} color="#9CA3AF" />
          <FaInstagram size={20} color="#9CA3AF" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
