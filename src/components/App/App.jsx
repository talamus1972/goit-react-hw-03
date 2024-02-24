import { useState } from "react";
import ContactList from "../ContactList/ContactList";
import contacts from "../contacts.json";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

export default function App() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFormSubmit = (x) => {
    console.log(x);
  };

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSavedForm={handleFormSubmit} />
      <SearchBox onChange={handleChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}
