import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FaEye, FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import { IconButton } from "@material-ui/core";
import { Options } from "./styles";
import api from '../../services/api';

let listAssetType = [];

class AssetTypeData extends Component {
  state = {
    deleteDone: false,
  }

  handleDispathActions = (action, data) => {
    this.props.dispatch({
      type: action
    });

    this.props.dispatch({
      type: "ASSET_TYPE_INFO",
      payload: data
    });

    this.props.dispatch({
      type: "DEACTIVATE_SELECTOR"
    });
  };

  async handleDelete(assetTypeName) {
    var params = [];

    var paramsToDeleteContact = {
      "@assetType": "contact",
      name: assetTypeName
    };
    
    var paramsToDeleteCompany = {
      "@assetType": "company",
      name: assetTypeName
    };

    if(this.props.assetType==="contact") {
      params = paramsToDeleteContact;
    }
    else if (this.props.assetType === "company") {
      params = paramsToDeleteCompany;
    }

    return await api.delete("/delete", {params})
      .then((response) => {
        console.log(response);
        this.setState({deleteDone: true});

      }, (error) => {
        console.log(error);
      });
  }

  render() {
    
    if(this.props.assetType === "contact") 
      listAssetType = this.props.allContacts;
    else if (this.props.assetType === "company")
      listAssetType = this.props.allCompanies;

    return (
      
      listAssetType.map(data => (
        <>
      <li key={data.name}>
        <span>{data.name}</span>
        <Options>
          <IconButton
            title={"view " + this.props.assetType + " " + data.name}
            onClick={() => this.handleDispathActions("SET_TITLE_VIEW", data)}
          >
            <FaEye size={20} color="#9d9d9c" />
          </IconButton>

          <IconButton
            title={"edit " + this.props.assetType + " " + data.name}
            onClick={() => this.handleDispathActions("SET_TITLE_EDIT", data)}
          >
            <MdEdit size={20} color="#9d9d9c" />
          </IconButton>

          <IconButton title={"delete " + this.props.assetType + " " + data.name}
              onClick={() => this.handleDelete(data.name)}
          >
            <FaTrashAlt size={15} color="#9d9d9c" />
          </IconButton>
        </Options>
      </li>
          {this.state.deleteDone ? window.location.reload() : <></>}
      </>
    )));
  }
}

export default connect(state => ({
  allContacts: state.allContacts,
  allCompanies: state.allCompanies,
  
}))(AssetTypeData);
