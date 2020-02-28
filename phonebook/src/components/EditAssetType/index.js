import React, { Component } from 'react';
import FormAddOrEdit from '../FormAddOrEdit'
// import { } from './styles';

export default class EditAssetType extends Component {
  render() {
    return (
      <>
        <FormAddOrEdit assetType={this.props.assetType}/>
      </>
    );
  }
}