import React, { createContext } from "react";
import contactReducer from "../reducers/contact.reducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import { initialContacts } from "../helpers/contacts";

export const ContactsContext = createContext();
export const DispatchContext = createContext();

export function ContactsProvider(props) {
  const [contacts, dispatch] = useLocalStorageReducer(
    "contacts",
    {
      contacts: initialContacts,
      searchedContacts: initialContacts,
    },
    contactReducer
  );
  return (
    <ContactsContext.Provider value={contacts}>
      <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
    </ContactsContext.Provider>
  );
}
