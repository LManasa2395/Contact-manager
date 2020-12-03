import React, { useState, useContext } from "react";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { DispatchContext } from "../../contexts/contacts.context";

function Search(props) {
  const [searchText, setSearchText] = useState("");
  const resetSearch = () => {
    setSearchText("");
    dispatch({ type: "RESET" });
  };
  const dispatch = useContext(DispatchContext);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.length > 0) dispatch({ type: "SEARCH", searchText: e.target.value.toLowerCase() });
    else dispatch({ type: "RESET" });
  };
  return (
    <TextField
      label='Search'
      onChange={handleChange}
      value={searchText}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <SearchIcon />
            <IconButton onClick={resetSearch}>
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default Search;
