import React, { Component } from 'react';
import {
  Button,
} from 'react-native';
import globalStyles from '../styles/globalStyles.js';

class ModButton extends Component {
  render() {
    return (
      <Button color="#333" {...this.props} />
    )
  }
}

export default ModButton;
