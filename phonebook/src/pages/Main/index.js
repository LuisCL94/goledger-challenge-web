import React, { Component } from 'react';
import {connect} from 'react-redux';

import api from '../../services/api';

import Selector from '../../components/Selector';
import AssetTypeData from "../../components/AssetTypeData";
import InfoAssetType from "../../components/InfoAssetType";

import { Button } from "@material-ui/core";

import { SchemeInput, TitlePage, AssetList, } from "./styles";
import { FaQuestion, FaUserAlt, FaBuilding, FaSpinner, FaPlus, FaStepBackward} from "react-icons/fa";

class Main extends Component {
  state = {
    assetType: "",
    loading: false,
    contacts: [], 
    companyes: [],
  };

  async componentDidMount() {
    // this.props.dispatch({
    //   type: "ACTIVATE_SELECTOR"
    // });

    this.setState({ loading: true });

    const paramsContacts = {
      selector: {
        "@assetType": "contact"
      }
    };
    const paramsCompanyes = {
      selector: {
        "@assetType": "company"
      }
    };

    const [responseContacts, responseCompanyes] = await Promise.all([
      api.post("search", paramsContacts),
      api.post("search", paramsCompanyes)
    ]);

    this.setState({
      contacts: responseContacts.data.result,
      companyes: responseCompanyes.data.result,
      loading: false,
      assetType: "contact",
    });

    this.props.dispatch({
      type: "SET_TITLE_SEARCH"
    });

    this.props.dispatch({
      type: "ACTIVATE_SELECTOR"
    });
  }

  handleChangeAsset = async e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <>
        {console.log(this.props.isSelectorActive)}
        <TitlePage> {this.props.title} </TitlePage>

        <SchemeInput loading={this.state.loading}>
          {this.state.loading ? (
            <FaSpinner size={30} />
          ) : !this.state.assetType ? (
            <FaQuestion size={30} />
          ) : this.state.assetType === "contact" ? (
            <FaUserAlt size={30} />
          ) : (
            <FaBuilding size={30} />
          )}

          <Selector
            name="assetType"
            value={this.state.assetType}
            onChange={this.handleChangeAsset}
            disabled={this.props.isSelectorActive}
          />

          <Button
            variant="contained"
            color="primary"
            title={"add " + this.state.assetType}
            disabled={this.state.loading}
          >
            <FaPlus size={17} />
          </Button>
        </SchemeInput>

        {this.props.title === "Search" ? (
          
          <AssetList>
          
            {this.state.assetType === "contact" ? 
          
              <AssetTypeData
                assetType={this.state.assetType}
                assetData={this.state.contacts}
              /> 
              
              :this.state.assetType === "company" ? (
              
              <AssetTypeData
                assetType={this.state.assetType}
                assetData={this.state.companyes}
              />) : ( <></> )
            }

          </AssetList> ):(<></>)}

        {this.props.title === "Info" ? 
          <InfoAssetType assetType={this.state.assetType}/> : <></>}
      </>
    );
  }
}

export default connect(state => ({
  title: state.title,
  isSelectorActive: state.isSelectorActive
}))(Main);
