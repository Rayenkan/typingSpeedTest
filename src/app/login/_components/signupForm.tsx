"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { LogInIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoginIcon from "@/app/svgs/loginIcon";
import { handleSignUp } from "@/api/auth";
import { toast } from "sonner";
import useRouteState from "@/components/customHooks/useChangeRoutes";

export function SignupForm() {
  const { pushRoute } = useRouteState()

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email validation function using regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUpSubmit = async () => {
    const trimmedEmail = email.trim();
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedEmail || !trimmedPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      toast.error("Invalid email format.");
      return;
    }

    if (trimmedPassword.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    console.log(trimmedUsername, trimmedEmail, trimmedPassword);
    const response = await handleSignUp(
      trimmedUsername,
      trimmedEmail,
      trimmedPassword
    );

    if (response.success) {
      toast.success(response.message);
      pushRoute("/")

    } else {
      toast.error(response.message);
    }
  };

  return (
    <div className="space-y-2">
      <div className="text-gray-500 text-xl flex items-center flex-row justify-normal space-x-4">
        <LogInIcon />
        <p> Register</p>
      </div>
      <Input
        placeholder="Username"
        className="bg-[#2c2e31] w-[350px] h-12 text-white placeholder:text-gray-600 placeholder:text-lg"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="Email"
        className="bg-[#2c2e31] w-[350px] h-12 text-white placeholder:text-gray-600 placeholder:text-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        className="bg-[#2c2e31] w-[350px] h-12 text-white placeholder:text-gray-600 placeholder:text-lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={() => handleSignUpSubmit()}
        className="bg-[#303235] w-full h-12 gap-2"
      >
        <LoginIcon />
        Sign Up
      </Button>
    </div>
  );
}
