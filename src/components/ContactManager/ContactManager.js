import React from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import ContactList from "../ContactList/ContactList";
import AddContact from "../AddContact/AddContact";
import Search from "../Search/Search";
import { ContactsProvider } from "../../contexts/contacts.context";
import "./ContactManager.css";

function ContactManager(props) {
  return (
    <Paper className='paper' elevation={0}>
      <AppBar color='primary' position='static' className='app-bar'>
        <Toolbar className='tool-bar'>
          <Typography color='inherit'>CONTACT MANAGER</Typography>
        </Toolbar>
      </AppBar>
      <div className='contacts-list'>
        <ContactsProvider>
          <Search />
          <ContactList />
          <AddContact />
        </ContactsProvider>
      </div>
    </Paper>
  );
}

export default ContactManager;
