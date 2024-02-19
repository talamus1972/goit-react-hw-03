import { useState } from 'react'
import ContactList from "../ContactList/ContactList"
import contacts from "../contacts.json"
import SearchBox from "../SearchBox/SearchBox"

// export default function App() {
//   const [inputValue, setInputValue] = useState("");
//   const handleChange = (evt) => {
//     setInputValue(evt.target.value);
//   };

// return (
// <div>
//     <h1>Phonebook</h1>
//   {/* <ContactForm /> */}
//   <SearchBox value={inputValue} onChange={handleChange}/>
//   <ContactList contacts ={contacts} />       
// </div>
//   )
// }

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleChange = (evt) => {
    const searchTerm = evt.target.value;
    setInputValue(searchTerm);

    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredContacts(filtered);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox value={inputValue} onChange={handleChange} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}
