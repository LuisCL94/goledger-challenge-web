import React, { Component } from 'react';
import { connect } from "react-redux";

import { Content, Form } from "./styles";
import { Button } from "@material-ui/core";
import { FaStepBackward, FaSave, FaSpinner } from "react-icons/fa";

import Input from '../Input'

import api from "../../services/api"; 

class FormAddOrEdit extends Component {
  state = {
    addOrEditDone: false,
    loading: false,
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

  handleAddAssetType = async e => {
    this.setState({loading: true});

    var params = [];

    var paramsContact = {
      "@assetType": "contact",
      name: this.state.name,
      phone: this.state.phone,
      company: this.state.company,
      email: this.state.email,
      age: Number(this.state.age)
    };

    var paramsCompany = {
      "@assetType": "company",
      name: this.state.name,
      address: this.state.address,
      nemployees: Number(this.state.nemployees),
      number: this.state.number,
      site: this.state.site
    };

    if(this.props.assetType === "contact") {
      params = paramsContact;
    }

    else if(this.props.assetType === "company") {
      params = paramsCompany;
    }

    if(this.props.title==="Add New") {
      return await api.post("create", params)
      .then(response => {
        this.setState({
           loading: false,
           addOrEditDone: true,
          });      
      }, (error) => {
        console.log(error);
      });
    }
    else if(this.props.title === "Edit")
      return await api.put("update", params)
        .then(response => {
          this.setState({
            loading: false,
            addOrEditDone: true
          });
          
        }, (error) => {
          console.log(error);
        });
  }

  render() {
    return (
      <>
        <Form>
          <Input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
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
                required
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
                required
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
                required
              />
              <Input
                name="site"
                value={this.state.site}
                onChange={this.handleChange}
              />
            </>
          )}
          <Content loading={this.state.loading}>
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
              onClick={this.handleAddAssetType}
            >
              Save
            </Button>
            {this.state.loading ? <FaSpinner /> : <></>}
          </Content>
        </Form>
        
        {this.state.addOrEditDone ? window.location.reload() : <></>}
      </>
    );
  }
}

export default connect(state => ({
  info: state.data,
  title: state.title
}))(FormAddOrEdit);
