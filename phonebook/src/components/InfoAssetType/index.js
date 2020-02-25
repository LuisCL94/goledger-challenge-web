// import React from 'react';
import React, { Component } from 'react';

import { connect } from "react-redux";

import { AssetList, Content } from "./styles";
import { Button } from "@material-ui/core";
import { FaStepBackward } from "react-icons/fa";

class InfoAssetType extends Component {

  handleDispathActions = e => {
    this.props.dispatch({
      type: "SET_TITLE_SEARCH"
    })

    this.props.dispatch({
      type: "ACTIVATE_SELECTOR"
    });
  }

  render() {
    return (
      <>
      {console.log(this.props.info)}
        <AssetList>
          <li><span><strong>Name:</strong>{this.props.info.name}</span></li>
          
          {this.props.assetType==="contact" ? 
          
          (<>
            <li><span><strong>Email:</strong>{this.props.info.email}</span></li>
            <li><span><strong>Phone:</strong>{this.props.info.phone}</span></li >
            <li><span><strong>Company:</strong>{this.props.info.company}</span></li>
            <li><span><strong>Age:</strong>{this.props.info.age}</span></li >
          </>):
          
          this.props.assetType==="company" ? 
          
          (<>
            <li><span><strong>Address:</strong>{this.props.info.address}</span></li>
                <li><span><strong>Nemployes:</strong>{this.props.info.nemployees}</span></li >
            <li><span><strong>Number:</strong>{this.props.info.number}</span></li>
            <li><span><strong>Site:</strong>{this.props.info.site}</span></li >
          </>)
          
          :<></> }
            
        </AssetList>

        <Content>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<FaStepBackward />}
            onClick={() => this.handleDispathActions()
            }
          >
            Back
            </Button>
        </Content>
      </>
    );
  }
}
export default connect(state => ({
  info: state.data, })) (InfoAssetType);

  
