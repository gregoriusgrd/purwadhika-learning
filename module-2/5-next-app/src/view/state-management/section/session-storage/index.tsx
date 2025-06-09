"use client";

import { useState } from "react";

export default function SessionStorage() {
  const [token, setToken] = useState<string>("");

  return (
    <div>
      <div className="flex flex-col gap-2">
        {token}
        <input
          className="border border-black rounded-md p-2"
          type="text"
          onChange={(e) => setToken(e.target.value)}
        />
        <button
          className="border border-black rounded-md p-2"
          onClick={() => sessionStorage.setItem("token", token)}
        >
          Submit
        </button>
        <button
          className="border border-black rounded-md p-2"
          onClick={() => sessionStorage.removeItem("token")}
        >
          Remove
        </button>
      </div>
    </div>
  );
}