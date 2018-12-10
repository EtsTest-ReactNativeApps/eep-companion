import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import globalStyles from '../styles/globalStyles.js';

class Paragraph extends Component {
  render() {
    return (
      <Text style={[
        globalStyles.p,
        this.props.style
      ]}>
        {this.props.children}
      </Text>
    )
  }
}

export default Paragraph;
