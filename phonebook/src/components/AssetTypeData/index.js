import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FaEye, FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import { IconButton } from "@material-ui/core";
import { Options } from "./styles";
import api from '../../services/api';

let listAssetType = [];

class AssetTypeData extends Component {

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


  // handleDelete = assetTypeName => async e => {
  //   const params = {
  //     "@assetType": "contact",
  //     name: assetTypeName,
  //   };
  //   const response = await api.delete("delete", params);
  //   console.log(response)
  //   // .then((response) => {
  //   //   console.log(response)
  //   // }, (error) => {
  //   //   console.log(error);
  //   // });
  // }
  async handleDelete(assetTypeName) {

    const params = {
      "@assetType": "contact",
      "name": assetTypeName
    };

    return await api.delete("/delete", {params})
      .then((response) => {
        console.log(response)
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
    )));
  }
}

export default connect(state => ({
  allContacts: state.allContacts,
  allCompanies: state.allCompanies,
  
}))(AssetTypeData);
