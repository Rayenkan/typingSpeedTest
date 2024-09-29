import AboutIcon from "../svgs/aboutIcon";
import LoginIcon from "../svgs/loginIcon";
import Logo from "../svgs/Logo";
import NotificationIcon from "../svgs/notificationIcon";
import SettingsIcon from "../svgs/settingsIcon";

const TopBar = () => {
  return (
    <div className="h-36 w-full flex flex-row items-center justify-between px-16 py-16">
      <div className="flex items-center justify-center space-x-6 h-full">
        <div className="flex items-center justify-center space-x-2 h-full">
          <Logo />
          <p className="text-4xl font-light text-gray-500  ">TypeMaster</p>
        </div>

        <AboutIcon />
        <SettingsIcon />
      </div>
      <div className="flex items-center justify-center space-x-8 h-full">
        <NotificationIcon />
        <LoginIcon />
      </div>
    </div>
  );
};
export default TopBar;
