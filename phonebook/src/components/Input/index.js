import React, { Component } from "react";

import { TextField } from "@material-ui/core";

var required;

export default class Input extends Component {

  render() {

    return (
      <TextField
        style={{ width: this.props.width, marginLeft: "20px", marginRight: "20px" }}
        margin="normal"
        required={this.props.required}
        name={this.props.name}
        label={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
        // color="primary"
        // variant=
      />
    );
  }
}