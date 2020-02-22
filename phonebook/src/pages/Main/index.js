import React, { Component } from 'react';
import api from '../../services/api';

import Selector from '../../components/Selector';
import AssetData from '../../components/AssetData';

import { SchemeInput, TitlePage, AssetList } from "./styles";
import { FaQuestion, FaUserAlt, FaBuilding, FaSpinner} from "react-icons/fa";

export class Main extends Component {
  state = {
    assetType: "",
    loading: false,
    contacts: [],
    companyes: []
  }

  async componentDidMount() {
    this.setState({ loading: true });

    const paramsContacts = {
      selector: {
        "@assetType": "contact",
      },
    }
    const paramsCompanyes = {
      selector: {
        "@assetType": "company",
      },
    }

    const [responseContacts, responseCompanyes] = await Promise.all([
      api.post("search", paramsContacts),
      api.post("search", paramsCompanyes)
    ]);

    this.setState({
      contacts: responseContacts.data.result,
      companyes: responseCompanyes.data.result,
      loading : false
    });
  }

  handleChangeAsset =  async e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <>
        <TitlePage> Search </TitlePage>

        <SchemeInput loading = {this.state.loading}>

          {this.state.loading ? (<FaSpinner size={30}/>):(
            !this.state.assetType ? (
              <FaQuestion size={30} />
            ) : (
                this.state.assetType === "contact" ? (
                  <FaUserAlt size={30} />
                ) : (
                    <FaBuilding size={30} />
                  )
              )          
          )}
        
          <Selector
            name="assetType"
            value={this.state.assetType}
            onChange={this.handleChangeAsset}
          />
        </SchemeInput>

        <AssetList >
      
          {this.state.assetType === "contact" ? 
            
            <AssetData 
              assetType={this.state.assetType} 
              assetData={this.state.contacts}/>
          
          :this.state.assetType === "company" ? 
          
            <AssetData 
              assetType={this.state.assetType}
              assetData={this.state.companyes}/>  : (<></>)
          }

        </AssetList>
      </>
    );
  }
}

export default Main;
