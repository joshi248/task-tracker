import { useState, useEffect } from "react";
import List from "./components/List";
import Logo from "./components/Logo";
import Hero from "./components/Hero";
// To import uuid export it first in the package.json file in a new entry
import {v4 as uuidv4} from "uuid"

const getLocalStorage = () => {
  let items = localStorage.getItem("items")
  if(items) {
    return JSON.parse(localStorage.getItem("items"))
  }
  else{
    return []
  }
}
export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(getLocalStorage());
  // Add an item to the list
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItems = {
      id: uuidv4(),
      title: text
    }
    setItems([newItems, ...items])
    setText("")
  }
// Deleting an item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  //Store items in Local Storage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  return (
    <>
      <main>
        <Hero />
        <Logo />
        <form className="flex items-center justify-center mt-10" onSubmit={handleSubmit}>
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
          <input type="text" name="text" placeholder="Enter task" className="no-outline relative py-2 px-2 rounded-lg bg-gray-700 text-white tracking-wide group-hover:text-purple-200 transition duration -200" autoComplete="off"
          value = {text}
          onChange={(e) => setText(e.target.value)}
          />
          </div>
        </form>
        <List items = {items} setItems={setItems} deleteItem = {deleteItem}/>
      </main>
    </>
  )
}