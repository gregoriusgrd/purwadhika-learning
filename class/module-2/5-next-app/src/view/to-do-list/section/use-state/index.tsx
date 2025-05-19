"use client";

import { useState } from "react";

export default function UseState() {
  const [todos, setTodos] = useState<string[]>([]); // state untuk menyimpan daftar to-do
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, input]); // tambahkan input ke daftar to-do
    setInput(""); // reset input setelah ditambah
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">To-Do List</h1>
      <input
        className="border p-2 mr-2"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} // ubah input
        placeholder="Tambahkan tugas..."
      />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={addTodo}>
        Tambah
      </button>
      <ul className="mt-4 list-disc list-inside">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li> // tampilkan semua to-do
        ))}
      </ul>
    </div>
  );
}
