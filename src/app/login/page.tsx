import { Input } from "@/components/ui/input";
import { Chrome, Github, GithubIcon, LogInIcon } from "lucide-react";
import LoginIcon from "../svgs/loginIcon";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const Page = () => {
  return (
    <div className="w-full py-16 px-[15vw] flex flex-row items-start justify-between">
      <div className="space-y-2">
        <div className="text-gray-500 text-xl flex items-center flex-row justify-normal space-x-4">
          <LogInIcon />
          <p> Register</p>
        </div>
        <Input
          placeholder="username"
          className="bg-[#2c2e31] w-[350px] h-12 placeholder:text-gray-600 placeholder:text-lg"
        />
        <Input
          placeholder="Email"
          className="bg-[#2c2e31] w-[350px] h-12 placeholder:text-gray-600 placeholder:text-lg"
        />
        <Input
          placeholder="verify Email"
          className="bg-[#2c2e31] w-[350px] h-12 placeholder:text-gray-600 placeholder:text-lg"
        />
        <Input
          placeholder="Password"
          className="bg-[#2c2e31] w-[350px] h-12 placeholder:text-gray-600 placeholder:text-lg"
        />
        <Input
          placeholder="verify Password"
          className="bg-[#2c2e31] w-[350px] h-12 placeholder:text-gray-600 placeholder:text-lg"
        />
        <Button className="bg-[#303235] w-full h-12 gap-2">
          <LoginIcon />
          Sign Up
        </Button>
      </div>
      <div className="space-y-2">
        <div className="text-gray-500 text-xl flex items-center flex-row justify-normal space-x-4">
          <LoginIcon />
          <p> Login</p>
        </div>
        <div className="flex items-center justify-between flex-row  gap-6">
          <Button className="bg-[#2c2e31] !w-[150px] h-12 ">
            <Chrome />
          </Button>
          <Button className="bg-[#2c2e31] !w-[150px] h-12 ">
            <GithubIcon />
          </Button>
        </div>

        <Input
          placeholder=" Email"
          className="bg-[#2c2e31] w-[350px] h-12 placeholder:text-gray-600 placeholder:text-lg"
        />
        <Input
          placeholder="Password"
          className="bg-[#2c2e31] w-[350px] h-12 placeholder:text-gray-600 placeholder:text-lg"
        />
        <div className="flex items-center justify-start  flex-row gap-4">
          <Checkbox className="!bg-[#2c2e31] h-6 w-6 border-gray-500 " />
          <p className="text-gray-500 text-xl flex flex-row"> Remember me</p>
        </div>
        <Button className="bg-[#2c2e31] w-full h-12 ">Sign In</Button>
      </div>
    </div>
  );
};
export default Page;
