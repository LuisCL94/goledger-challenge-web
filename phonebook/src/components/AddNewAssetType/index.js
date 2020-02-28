import React, { Component } from 'react';
import FormAddOrEdit from '../FormAddOrEdit'
// import { } from './styles';

export default class AddNewAssetType extends Component {
  render() {
    return (
      <>
        <FormAddOrEdit assetType={this.props.assetType}/>
      </>
    );
  }
}