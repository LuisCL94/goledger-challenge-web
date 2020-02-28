import React from 'react';

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";


export default function MultilineTextFields(props) {
  
  const curr= props.options;

  const currencies = [];

  for(var i=0; i<curr.length; i++) {
    currencies.push({value: curr[i]})
  }
  
  return (
    <div>
      <TextField
        style={{ width: "130px", marginLeft: "15px" }}
        id="outlined-select-currency"
        select
        label="AssetType"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        variant="outlined"
        margin="normal"
        disabled={props.disabled}
        
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>

    </div>
  );
}

