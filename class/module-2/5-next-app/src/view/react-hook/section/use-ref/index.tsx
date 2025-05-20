"use client";

import { useRef, useEffect } from "react";

export default function UseRef() {
  // kenapa null karena pertama kali ke render bakal blank page
  const inputRef = useRef<null | HTMLInputElement>(null);

  return (
    <div>
      <input
        className="border-2 border-black rounded-2xl"
        type="text"
        ref={inputRef}
      />
      <button
        className="border-2 border-black rounded-2xl"
        onClick={() => {
            inputRef.current?.focus()
            console.log(inputRef.current)
        }}
      >
        Focus
      </button>
    </div>
  );
}
