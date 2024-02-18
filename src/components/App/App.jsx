import { useState } from 'react'
import ContactList from "../ContactList/ContactList"
import contacts from "../contacts.json"
import SearchBox from "../SearchBox/SearchBox"

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

return (
<div>
    <h1>Phonebook</h1>
  {/* <ContactForm /> */}
  <SearchBox value={inputValue} onChange={handleChange}/>
  <ContactList contacts ={contacts} />       
</div>
  )
}


