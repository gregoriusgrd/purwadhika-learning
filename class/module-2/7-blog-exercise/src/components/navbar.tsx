"use client";

import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';

export default function Navbar() {
  return (
    <nav className="flex-shrink-0 flex justify-around items-center px-8 py-6 bg-[rgba(0,_0,_0,_0.5)]">
      <div className="h-10">
        <Image src="/navbar/navbar-logo.png" layout="responsive" width={100} height={40} className="nav__logo-img" alt="Trazler Logo" />
      </div>

      <ul className="flex gap-8">
        <li>
          <a href="#" className="uppercase no-underline text-white font-medium">
            Destinations
          </a>
        </li>
        <li>
          <a href="#" className="uppercase no-underline text-white font-medium">
            Food
          </a>
        </li>
        <li>
          <a href="#" className="uppercase no-underline text-white font-medium">
            Well Being
          </a>
        </li>
        <li>
          <a href="#" className="uppercase no-underline text-white font-medium">
            Sport
          </a>
        </li>
        <li>
          <a href="#" className="uppercase no-underline text-white font-medium">
            Family
          </a>
        </li>
        <li>
          <a href="#" className="uppercase no-underline text-white font-medium">
            LifeStyle
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-6 text-xs max-h-14">
        <BiSearch className='text-white text-xl'/>
        <button className="w-80 uppercase bg-black text-white px-10 py-3.5 rounded border-none cursor-pointer">
          Get Your $120 Christmas Gift
        </button>
      </div>
    </nav>
  );
}

/*
"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { useAppSelector, useAppDispatch } from "@/lib/redux/hooks";

import { logout } from "@/lib/redux/feature/authSlice";

export default function Navbar() {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();
  return (
    <div className="flex justify-between p-4">
      <div
        className="text-4xl font-bold hover:cursor-pointer"
        onClick={() => router.push("/")}
      >
        LOGO
      </div>
      {auth.isLogin ? (
        <div className="flex gap-4 items-center">
          <div>Welcome, {auth.user?.name}</div>
          <Button onClick={() => dispatch(logout())}>Sign Out</Button>
        </div>
      ) : (
        <div className="flex gap-4 align-middle">
          <Button onClick={() => router.push("/auth/signup")}>Sign Up</Button>
          <Button onClick={() => router.push("/auth/signin")}>Sign In</Button>
        </div>
      )}
    </div>
  );
}
*/
