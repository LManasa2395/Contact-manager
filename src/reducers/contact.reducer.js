import uuid from "uuid/v4";

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      let newContact = { id: uuid(), ...action.contact };
      return {
        contacts: [...state.contacts, newContact],
        searchedContacts: [...state.searchedContacts, newContact],
      };
    case "REMOVE":
      return {
        contacts: state.contacts.filter((contact) => contact.id !== action.id),
        searchedContacts: state.searchedContacts.filter(
          (contact) => contact.id !== action.id
        ),
      };
    case "EDIT":
      return {
        contacts: state.contacts.map((contact) =>
          contact.id === action.contact.id ? action.contact : contact
        ),
        searchedContacts: state.searchedContacts.map((contact) =>
          contact.id === action.contact.id ? action.contact : contact
        ),
      };
    case "SEARCH":
      return {
        contacts: state.contacts,
        searchedContacts: state.contacts.filter(
          (contact) =>
            contact.firstName.toLowerCase().includes(action.searchText) ||
            contact.lastName.toLowerCase().includes(action.searchText) ||
            contact.email.toLowerCase().includes(action.searchText) ||
            contact.numbers.filter((number) =>
              (number.num + "").includes(action.searchText)
            ).length > 0
        ),
      };
    case "RESET":
      return {
        contacts: state.contacts,
        searchedContacts: state.contacts.slice(),
      };
    default:
      return state;
  }
}

export default reducer;
