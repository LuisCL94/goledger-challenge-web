import React, { Component } from 'react';
import { connect } from 'react-redux';

// import React from "react";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import { Button } from "@material-ui/core";
import { Options } from "./styles";

// import { Link } from "react-router-dom";

class AssetTypeData extends Component {

  handleDispathActions = (action, data) => {
    this.props.dispatch({
      type: action
    });

    this.props.dispatch({
      type: "ASSET_TYPE_INFO",
      data
    });

    this.props.dispatch({
      type: "DEACTIVATE_SELECTOR"
    });
  };

  render() {
    return this.props.assetData.map(data => (
      <li key={data.name}>
        <span>{data.name}</span>

        <Options>
          {/* <Link to={"view/" + this.props.assetType + "/" + r.name}> */}
          <Button
            title={"view " + this.props.assetType}
            onClick={() => this.handleDispathActions("SET_TITLE_VIEW", data)}
          >
            <FaEye size={25} color="blue" />
          </Button>
          {/* </Link> */}

          <Button
            title={"edit " + this.props.assetType}
            onClick={() => this.handleDispathActions("SET_TITLE_EDIT", data)}
          >
            <MdEdit size={25} color="black" />
          </Button>

          <Button title={"delete " + this.props.assetType}>
            <FaTrashAlt size={20} color="red" />
          </Button>
        </Options>
      </li>
    ));
  }
}

export default connect()(AssetTypeData);
