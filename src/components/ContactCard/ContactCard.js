import React, { useContext } from "react";
import { Card, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggle from "../../hooks/useToggle";
import ContactForm from "../ContactForm/ContactForm";
import { DispatchContext } from "../../contexts/contacts.context";
import "./ContactCard.css";

function ContactCard({ contact }) {
  const { firstName, lastName, numbers, email, id } = contact;
  const [open, toggle] = useToggle(false);
  const dispatch = useContext(DispatchContext);
  const handleDelete = () => {
    dispatch({ type: "REMOVE", id: id });
  };
  return (
    <Card className='Card' variant='outlined'>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {firstName} {lastName}
        </Typography>
        <Typography className='email' color='textSecondary'>
          {email}
        </Typography>
        {numbers.map((number) => (
          <Typography variant='body2' component='p'>
            {number.type} {number.num}
          </Typography>
        ))}
      </CardContent>
      <CardActions className='card-actions'>
        <IconButton aria-label='Edit' onClick={toggle} className='edit-icon'>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='Delete' onClick={handleDelete} className='delete-icon'>
          <DeleteIcon />
        </IconButton>
      </CardActions>
      {open && <ContactForm contact={contact} toggle={toggle} open={open} isEditing />}
    </Card>
  );
}

export default ContactCard;
