"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Chrome, GithubIcon } from "lucide-react";
import LoginIcon from "@/app/svgs/loginIcon";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { handleSignIn } from "@/api/auth";
import { toast } from "sonner";
import useRouteState from "@/components/customHooks/useChangeRoutes";

export const SignInForm = () => {
  const { pushRoute } = useRouteState()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    console.log("working");
    console.log(email, password);
    const response = await handleSignIn(email, password);
    console.log(response);

    if (response.success) {
      toast.success(response.message);
      pushRoute("/");
    } else {
      toast.error(response.message);
    }
  };

  return (
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
        className="bg-[#2c2e31] w-[350px] text-white h-12 placeholder:text-gray-600 placeholder:text-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        className="bg-[#2c2e31] text-white  w-[350px] h-12 placeholder:text-gray-600 placeholder:text-lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex items-center justify-start  flex-row gap-4">
        <Checkbox className="!bg-[#2c2e31] h-6 w-6 border-gray-500 " />
        <p className="text-gray-500 text-xl flex flex-row"> Remember me</p>
      </div>
      <Button
        className="bg-[#2c2e31] w-full h-12 "
        onClick={() => handleSubmit()}
      >
        Sign In
      </Button>
    </div>
  );
};
