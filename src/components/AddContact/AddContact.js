import React from "react";
import { IconButton, Card, CardContent } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import uuid from "uuid/v4";
import useToggle from "../../hooks/useToggle";
import ContactForm from "../ContactForm/ContactForm";
import "./AddContact.css";

function AddContact(props) {
  const [open, toggle] = useToggle(false);
  const newContact = {
    firstName: "",
    lastName: "",
    email: "",
    numbers: [{ id: `${uuid()}`, type: "Mobile", num: undefined }],
  };

  return (
    <div>
      <Card className='card' variant='outlined'>
        <CardContent>
          <IconButton aria-label='Add' onClick={toggle}>
            <AddIcon />
          </IconButton>
        </CardContent>
      </Card>

      <ContactForm open={open} toggle={toggle} contact={newContact} isEditing={false} />
    </div>
  );
}

export default AddContact;
