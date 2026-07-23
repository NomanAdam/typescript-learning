import { useState } from "react";

type TodoItem = {
 id: number;
 text: string;
 done: boolean;
};

function TodoList() {
 const [TodoItems] = useState<TodoItem[]>([
  { id: 1, text: "Learn generics", done: true },
  { id: 2, text: "Build portfolio", done: false },
 ]);
 return (
  <ul>
   {TodoItems.map((item) => (
    <li key={item.id}>
     {item.text}-{item.done ? "✅" : "❌"}
    </li>
   ))}
  </ul>
 );
}

export default TodoList;
