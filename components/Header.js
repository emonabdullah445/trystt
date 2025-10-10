import Image from "next/image";
import Logo from "../public/images/logo2.png";
import { GoSearch, GoChevronDown } from "react-icons/go";
import { useRouter } from "next/router";
import { RiWechatLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";

function Header() {
  const router = useRouter();
  const isHome = router.pathname === "/home";

  return (
    <div className="sticky top-0 w-full bg-custom-gray3  py-1 ">
      <div className="flex justify-between items-center text-white font-OpenSans py-[10px] container mx-auto">
        {/* Left Section - Logo and Search */}
        <div className="flex items-center gap-28">
          <div className="w-[110px] h-auto">
            <Image src={Logo} alt="logo" />
          </div>

          {!isHome && (
            <div className="mt-[6px] mr-3 lg:mr-0 flex gap-[50px] text-[20px]">
              <div className="flex items-center">
                <span className="mr-3 text-[20px]">
                  <GoSearch />
                </span>
                Search
              </div>
            </div>
          )}
        </div>

        {isHome && (
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
        )}

        {/* Right Section */}
        <div className="flex items-center">
          {!isHome && (
            <div className="lg:text-[18px] text-white pr-20 pt-3">
              Login<span className="text-sm pl-2">or</span> Sign up
            </div>
          )}

          {isHome && (
            <div className="flex items-center justify-center gap-2 text-md">
              <RiWechatLine size={25} />
              <FaRegBell size={25} />
              <div>Log Out</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
