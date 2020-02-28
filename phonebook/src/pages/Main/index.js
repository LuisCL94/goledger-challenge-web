import React, { Component } from 'react';
import { connect } from 'react-redux';

import api from '../../services/api';

import Selector from '../../components/Selector';
import AssetTypeData from "../../components/AssetTypeData";
import InfoAssetType from "../../components/InfoAssetType";
import AddNewAssetType from "../../components/AddNewAssetType";
import EditAssetType from "../../components/EditAssetType";

import { Button } from "@material-ui/core";

import { SchemeInput, TitlePage, AssetList, } from "./styles";
import { FaQuestion, FaUserAlt, FaBuilding, FaSpinner, FaPlus } from "react-icons/fa";

class Main extends Component {
  state = {
    assetType: "",
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const paramsContacts = {
      selector: {
        "@assetType": "contact"
      }
    };
    const paramsCompanies = {
      selector: {
        "@assetType": "company"
      }
    };

    const [responseContacts, responseCompanies] = await Promise.all([
      api.post("search", paramsContacts),
      api.post("search", paramsCompanies)
    ]);
    
    this.props.dispatch({
      type: "ALL_CONTACTS_DATA",
      payload: responseContacts.data.result
    });
    
    this.props.dispatch({
      type: "ALL_COMPANIES_DATA",
      payload: responseCompanies.data.result
    });

    this.setState({
      contacts: responseContacts.data.result,
      companies: responseCompanies.data.result,
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

  handleChange = async e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddAssetType = e => {
    this.props.dispatch({
      type: "SET_TITLE_ADD"
    });

    this.props.dispatch({
      type: "ACTIVATE_SELECTOR"
    });
  }

  render() {
    return (
      <>

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
            onChange={this.handleChange}
            disabled={this.props.isSelectorActive}
            options={["contact", "company"]}
          />

          <Button
            variant="contained"
            color="primary"
            title={"add new " + this.state.assetType}
            disabled={this.state.loading}
            onClick={() => this.handleAddAssetType()}
          >
            <FaPlus size={17} />
          </Button>
        </SchemeInput>

        {this.props.title === "Search" ? (
          <AssetList>
            <AssetTypeData assetType={this.state.assetType} />
          </AssetList>) : (<></>)}

        {this.props.title === "Info" ?
          <InfoAssetType assetType={this.state.assetType} /> : <></>}

        {this.props.title === "Edit" ?
          <EditAssetType assetType={this.state.assetType} /> : <></>}

        {this.props.title === "Add New" ?
          <AddNewAssetType assetType={this.state.assetType} /> : <></>}      
      </>
    );
  }
}

export default connect(state => ({
  title: state.title,
  isSelectorActive: state.isSelectorActive,
}))(Main);
