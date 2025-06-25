"use client";

import RegisterForm from "./components/RegisterForm";
import RegisterFormik from "./components/RegisterFormik";

const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div>
        <div className="flex flex-col gap-5 mb-16">
          <h1 className="text-2xl font-semibold text-center">Create Account</h1>
          <hr className="w-[50px] h-[3px] bg-black mx-auto" />
        </div>

        <div className="mb-6">
          <RegisterFormik>
            <RegisterForm />
          </RegisterFormik>
        </div>
      </div>
    </div>
  );
};

export default Register;
