import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  CheckBox
} from 'react-native-elements';

class CheckList extends Component {
  state = {
    checked:[],
  };

  render() {
    const items = this.props.items;
    const i = 0;
    return (
      <View>
        {items.map((item,i) => (
          <CheckBox
            title={item}
            key={i}
            checked={this.state.checked[i]}
            onPress={() => {
              let listCheckedness = this.state.checked;
              listCheckedness[i] = !listCheckedness[i];
              this.setState({checked: listCheckedness})
            }}
          />
        ))
        }

      </View>
    )
  }
}

export default CheckList;
