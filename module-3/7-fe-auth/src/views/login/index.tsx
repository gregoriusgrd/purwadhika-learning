"use client";

import Link from "next/link";
import LoginForm from "./components/LoginForm";
import LoginFormik from "./components/LoginFormik";

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <div className="flex flex-col gap-5 mb-16">
          <h1 className="text-2xl font-semibold text-center">Login</h1>
          <hr className="w-[50px] h-[3px] bg-black mx-auto" />
        </div>

        <div className="mb-6">
          <LoginFormik>
            <LoginForm />
          </LoginFormik>
        </div>

        <div className="flex flex-col">
          <Link href="/register" className="w-fit cursor-pointer mx-auto">
            <h2 className="text-sm font-semibold text-center">
              Create Account
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
