"use client";

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { IResponse } from "@/features/types";
import { User } from "@/features/user/types";

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");

      const { data }: { data: IResponse<User[]> } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  console.log(users);

  return (
    <div className="h-screen flex items-center justify-center">
      <h1>Home</h1>
    </div>
  );
};

export default Home;
