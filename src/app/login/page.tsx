import { SignInForm } from "./_components/signInForm";
import { SignupForm } from "./_components/signupForm";

const Page = () => {
  return (
    <div className="w-full py-16 px-[20vw] flex flex-row items-start justify-between">
      <SignupForm />
      <SignInForm />
    </div>
  );
};
export default Page;
