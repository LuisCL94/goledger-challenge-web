import React, { Component } from 'react';

import AssetData from '../AssetData';

import { AssetList} from './styles';

export default class SearchData extends Component {
  render() {
    return (
      <>
        {this.props.activeListAsset ? (

          <AssetList >
            {this.props.assetType === "contact" ?

              <AssetData
                assetType={this.props.assetType}
                assetData={this.props.contacts} />

              : this.props.assetType === "company" ?

              <AssetData
                assetType={this.props.assetType}
                assetData={this.props.companyes} /> : (<></>)

            }
          </AssetList>) : (<></>)}
      </>
    );
  }
}