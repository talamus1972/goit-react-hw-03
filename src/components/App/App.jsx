import { useState } from "react";
import ContactList from "../ContactList/ContactList";
import contacts from "../contacts.json";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
import { nanoid } from "nanoid";

export default function App() {
  const [tasks, setTasks] = useState(contacts);
  const [filter, setFilter] = useState("");

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      console.log(newTask);
      return [...prevTasks, { ...newTask, id: nanoid() }];
    });
  };

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
