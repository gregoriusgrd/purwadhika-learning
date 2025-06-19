"use client";

import { useState } from "react";
import { axios } from "../lib/axios";
import { IUser } from "@/features/user/type";
import useAuthStore from "@/store/authStore";
import Link from "next/link";

export default function Home() {
  const {user, onSuccess} = useAuthStore((state) => state)
  const [users, setUsers] = useState<IUser[]>([]);
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/auth");
      setUsers(data.content?.user);
      onSuccess(data.content?.user[0])
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Link href={"/dashboard"}>Dashboard</Link>
      <p>Ini user pertama {user?.email}</p>
      {users.length > 0 &&
        users.map((user, idx) => (
          <div key={idx}>
            <p>{user.id}</p>
            <p>{user.email}</p>
            <p>{user.password}</p>
          </div>
        ))}
      <button onClick={fetchUser}>Request</button>
    </div>
  );
}
