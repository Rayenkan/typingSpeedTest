"use client";
import AboutIcon from "../../app/svgs/aboutIcon";
import LoginIcon from "../../app/svgs/loginIcon";
import Logo from "../../app/svgs/Logo";
import NotificationIcon from "../../app/svgs/notificationIcon";
import SettingsIcon from "../../app/svgs/settingsIcon";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { ClearCookies } from "@/api/auth";
import { toast } from "sonner";

const TopBar = () => {
  const router = useRouter();
  const username = Cookies.get("username");
  const token = Cookies.get("token");

  const handleLoginClick = () => {
    if (token) {
      ClearCookies();
      toast.success("logged out successfully");
      router.push("/");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="h-36 w-full flex flex-row items-center justify-between px-16 py-16">
      <div className="flex items-center justify-center space-x-6 h-full">
        <div className="flex items-center justify-center space-x-2 h-full">
          <Logo />
          <p className="text-4xl font-light text-gray-500">TypeMaster</p>
        </div>
        <AboutIcon />
        <SettingsIcon />
      </div>
      <div className="flex items-center justify-center space-x-8 h-full">
        <NotificationIcon />
        {token ? (
          <div className="flex items-center text-gray-500 justify-center flex-row space-x-2">
            <p>Welcome, {username || "Guest"}</p>
            <LoginIcon onClick={handleLoginClick} />
          </div>
        ) : (
          <div>
            <LoginIcon onClick={handleLoginClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
