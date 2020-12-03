import React, { useContext } from "react";
import ContactCard from "../ContactCard/ContactCard";
import { ContactsContext } from "../../contexts/contacts.context";
import "./ContactList.css";

function ContactList(props) {
  const { searchedContacts } = useContext(ContactsContext);
  return (
    <div className='ContactList'>
      {searchedContacts.map((contact) => (
        <ContactCard contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
