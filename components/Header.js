import Image from "next/image";
import Logo from "../public/images/logo2.png";
import { GoSearch, GoChevronDown } from "react-icons/go";
import { useRouter } from "next/router";
import { RiWechatLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const router = useRouter();
  const isHome = router.pathname === "/home";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 w-full bg-custom-gray3 py-1 z-50">
      <div className="flex justify-between items-center text-white font-OpenSans py-[10px] container mx-auto px-4 lg:px-0">
        {/* Left Section - Logo and Search */}
        <div className="flex items-center  gap-4 lg:gap-28">
          <div className="w-[80px] lg:w-[110px] h-auto">
            <Image src={Logo} alt="logo" />
          </div>

          {!isHome && (
            <div className="mt-[6px] mr-3 lg:mr-0 flex gap-4 lg:gap-[50px] text-[16px] lg:text-[20px]">
              <div className="hidden sm:flex items-center">
                <span className="mr-2 lg:mr-3 text-[16px] lg:text-[20px]">
                  <GoSearch />
                </span>
                Search
              </div>
            </div>
          )}
        </div>

        {/* Mobile Search Icon */}
        {!isHome && (
          <div className="sm:hidden flex items-center text-[20px]">
            <GoSearch />
          </div>
        )}

        {/* Desktop Navigation */}
        {isHome && (
          <>
            <div className="hidden lg:flex gap-4 text-md">
              <ul className="flex gap-4 text-md">
                <li className="text-custom-yellow">Dashboard</li>
                <li>
                  <div className="flex items-center gap-1">
                    <p>Profile</p>
                    <GoChevronDown />
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <p>Photos</p>
                    <GoChevronDown />
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <p>Tools</p>
                    <GoChevronDown />
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <p>Membership</p>
                    <GoChevronDown />
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <p>Account</p>
                    <GoChevronDown />
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <p>Help & Support</p>
                    <GoChevronDown />
                  </div>
                </li>
                <li>
                  <div>Search</div>
                </li>
              </ul>
            </div>

           
          </>
        )}
         {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex flex-col gap-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>

        {/* Right Section */}
        <div className="hidden lg:flex items-center">
          {!isHome && (
            <div className="hidden sm:flex lg:text-[18px] text-white lg:pr-20 pt-3">
              Login<span className="text-sm pl-2">or</span> Sign up
            </div>
          )}

          {isHome && (
            <div className="hidden lg:flex items-center justify-center gap-2 text-md">
              <RiWechatLine size={25} />
              <FaRegBell size={25} />
              <div>Log Out</div>
            </div>
          )}

          {/* Mobile Login/Signup for non-home pages */}
          {!isHome && (
            <div className="sm:hidden text-[14px] text-white pt-3">
              Login/Signup
            </div>
          )}

        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isHome && isMenuOpen && (
        <div className="lg:hidden bg-custom-gray3 text-white border-t border-gray-600">
          <ul className="flex flex-col py-4 px-4 space-y-3">
            <li className="text-custom-yellow py-2">Dashboard</li>
            <li className="flex items-center justify-between py-2">
              <span>Profile</span>
              <GoChevronDown />
            </li>
            <li className="flex items-center justify-between py-2">
              <span>Photos</span>
              <GoChevronDown />
            </li>
            <li className="flex items-center justify-between py-2">
              <span>Tools</span>
              <GoChevronDown />
            </li>
            <li className="flex items-center justify-between py-2">
              <span>Membership</span>
              <GoChevronDown />
            </li>
            <li className="flex items-center justify-between py-2">
              <span>Account</span>
              <GoChevronDown />
            </li>
            <li className="flex items-center justify-between py-2">
              <span>Help & Support</span>
              <GoChevronDown />
            </li>
            <li className="py-2">Search</li>
            <li className="py-2 border-t border-gray-600 pt-4">Log Out</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;