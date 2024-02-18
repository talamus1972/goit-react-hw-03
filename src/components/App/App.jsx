// import { useState } from 'react'
import ContactList from "../ContactList/ContactList"
import contacts from "../contacts.json"
import SearchBox from "../SearchBox/SearchBox"

export default function App() {
  

return (
<div>
    <h1>Phonebook</h1>
  {/* <ContactForm /> */}
  <SearchBox />
  <ContactList contacts ={contacts} />       
</div>
  )
}


