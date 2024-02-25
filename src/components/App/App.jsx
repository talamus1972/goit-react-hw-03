import { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import contacts from "../contacts.json";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedClick = window.localStorage.getItem("clicks")
    console.log(savedClick);
return savedClick !== "[]" ? JSON.parse(savedClick) : contacts
    
  });
  const [filter, setFilter] = useState("");
    
  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, { ...newTask, id: nanoid() }];
    });
  };

   useEffect(() => {
     window.localStorage.setItem("clicks", JSON.stringify(tasks))
   }, [tasks])
  

  
  const deleteTask = (taskId) => {
    console.log(taskId);
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) => {
    return task.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addTask} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}
