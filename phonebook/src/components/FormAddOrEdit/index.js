import React, { Component } from 'react';
import { connect } from "react-redux";

import { Content, Form } from "./styles";
import { Button } from "@material-ui/core";
import { FaStepBackward, FaSave } from "react-icons/fa";

import Input from '../Input'

import api from "../../services/api";

class FormAddOrEdit extends Component {
  state = {
    name: "",

    phone: "",
    email: "",
    company: "",
    age: null,

    address: "",
    nemployees: null,
    number: "",
    site: ""
  };
  
  componentDidMount() {
    if(this.props.title === "Edit") {
      this.setState({
        name: this.props.info.name,
        email: this.props.info.email,
        phone: this.props.info.phone,
        company: this.props.info.company,
        age: this.props.info.age,

        address: this.props.info.address,
        nemployees: this.props.info.nemployees,
        number: this.props.info.number,
        site: this.props.info.site
      });
    }
  }

  t
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDispathActions = e => {
    this.props.dispatch({
      type: "SET_TITLE_SEARCH"
    });

    this.props.dispatch({
      type: "ACTIVATE_SELECTOR"
    });
  };

  
  // handleAddAssetType = async e => {
  //   const response = await api.post();
  // }

  
  render() {
    return (
      <>
        <Form>
          <Input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          {this.props.assetType === "contact" ? (
            <>
              <Input
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <Input
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
              <Input
                name="company"
                value={this.state.company}
                onChange={this.handleChange}
              />
              <Input
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </>
          ) : (
            <>
              <Input
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <Input
                name="nemployees"
                value={this.state.nemployees}
                onChange={this.handleChange}
              />
              <Input
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
              />
              <Input
                name="site"
                value={this.state.site}
                onChange={this.handleChange}
              />
            </>
          )}
        <Content>
          
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FaStepBackward />}
            onClick={() => this.handleDispathActions()}
          >
            Back
          </Button>
            
          <Button
            variant="contained"
            color="primary"
            startIcon={<FaSave />}
            // onClick={() => this.props.dispatch({
            //   type: "SET_TITLE_SEARCH"
            // })}
          >
            Save
          </Button>
        </Content>
        </Form>

      </>
    );
  }
}

export default connect(state => ({
  info: state.data,
  title: state.title
}))(FormAddOrEdit);
