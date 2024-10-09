"use server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { cookies } from "next/headers";
import { auth, db } from "@/utils/firebase";
import { doc, setDoc } from "firebase/firestore";



export const handleSignIn = async (email: string, password: string) => {
  const authInstance = getAuth();
  if (email.length === 0 || password.length === 0) {
    return { success: false, message: "You have to fill all the fields" };
  }

  try {
    const userCredential = await signInWithEmailAndPassword(
      authInstance,
      email,
      password
    );
    const user = userCredential.user;
    console.log(user);

    cookies().set("email", user.email || "");
    cookies().set("token", user.uid || "");
    cookies().set("username", user.displayName || "Anonymous");

    return { success: true, message: "Logged in successfully" };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, message: `Error: ${error.message}` };
    } else {
      return { success: false, message: "An unknown error occurred." };
    }
  }
};

export const handleSignUp = async (
  username: string,
  email: string,
  password: string
) => {
  if (username.length === 0 || email.length === 0 || password.length === 0) {
    return { success: false, message: "You have to fill all the fields" };
  }

  try {
    const response = await auth.createUserWithEmailAndPassword(email, password);
    const user = response.user;

    if (user) {
      await user.updateProfile({
        displayName: username,
      });

      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        createdAt: new Date(),
      });

      cookies().set("email", user.email || "");
      cookies().set("token", user.uid || "");
      cookies().set("username", username);

      return { success: true, message: "Account created successfully!" };
    } else {
      return { success: false, message: "User creation failed." };
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { success: false, message: `Error: ${error.message}` };
    } else {
      return { success: false, message: "An unknown error occurred." };
    }
  }
};

export const ClearCookies = () => {
  cookies().set("email", "");
  cookies().set("token", "");
  cookies().set("username", "");
};
