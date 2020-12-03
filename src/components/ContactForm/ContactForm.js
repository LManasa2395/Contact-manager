import React, { useState, useContext } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@material-ui/core";
import { FormControl, Select, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import uuid from "uuid/v4";
import { DispatchContext } from "../../contexts/contacts.context";
import "./ContactForm.css";

function ContactForm({ contact, open, toggle, isEditing }) {
  const [state, setState] = useState({ ...contact });
  const dispatch = useContext(DispatchContext);

  const addNumber = () => {
    console.log("adding");
    setState({
      ...state,
      numbers: [...state.numbers, { id: `${uuid()}`, type: "Mobile", num: undefined }],
    });
  };

  const deleteNumber = (id) => {
    setState({
      ...state,
      numbers: state.numbers.filter((eachNum) => eachNum.id !== id),
    });
  };

  const handleChange = (e) => {
    if (e.target.type === "number" || e.target.type === "select-one") {
      setState({
        ...state,
        numbers: state.numbers.map((eachNum) => {
          if (eachNum.id === e.target.name) {
            return e.target.type === "number" ? { ...eachNum, num: e.target.value } : { ...eachNum, type: e.target.value };
          } else return eachNum;
        }),
      });
    } else setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    toggle();
    if (isEditing) dispatch({ type: "EDIT", contact: state });
    else {
      dispatch({ type: "ADD", contact: state });
      setState({ ...contact });
    }
  };

  return (
    <Dialog open={open} onClose={toggle} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>Add Contact</DialogTitle>
      <DialogContent className='dialog-form-content'>
        <FormControl class='form-control'>
          <TextField
            required
            autoFocus
            margin='dense'
            name='firstName'
            label='First Name'
            placeholder='First Name'
            className='name-field'
            onChange={handleChange}
            value={state.firstName}
          />
          <TextField
            margin='dense'
            name='lastName'
            label='Last Name'
            placeholder='Last Name'
            className='name-field'
            onChange={handleChange}
            value={state.lastName}
          />
        </FormControl>
        <TextField
          margin='dense'
          name='email'
          label='Email Address'
          type='email'
          fullWidth
          onChange={handleChange}
          value={state.email}
        />
        {state.numbers.map((eachNum, i) => (
          <FormControl className='form-control'>
            <Select native value={eachNum.type} onChange={handleChange} name={eachNum.id} className='num-type'>
              <option value={"Home"}>Home</option>
              <option value={"Mobile"}>Mobile</option>
              <option value={"Other"}>Other</option>
            </Select>
            <TextField
              required
              margin='dense'
              name={eachNum.id}
              label='Contact Number'
              type='number'
              class='number'
              value={eachNum.num}
              onChange={handleChange}
            />
            {i !== state.numbers.length - 1 ? (
              <IconButton onClick={() => deleteNumber(eachNum.id)} className='delete-icon'>
                <DeleteIcon />
              </IconButton>
            ) : (
              <IconButton onClick={addNumber} className='edit-icon'>
                <AddIcon />
              </IconButton>
            )}
          </FormControl>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={toggle} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleSave} color='primary'>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ContactForm;
