import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import {
  createStackNavigator,
  NavigationActions
} from 'react-navigation';

import ModButton from '../components/modButton.js';

class EndScreen extends Component {
  static navigationOptions = {
    header:null,
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <ModButton
          title="show map"
          onPress = {() =>
          navigation.navigate('Map')
        }
        />
        <Text>You finished the path, yay!</Text>
        <Text>Some reflection prompts.</Text>
        <Text>Maybe contact info.</Text>
        <ModButton
          title="back button necessary?"
          onPress = {() =>
          navigation.goBack()
        }
        />
        <ModButton
          title="back to start"
          onPress = {() =>
            navigation.reset([NavigationActions.navigate({ routeName: 'Intro' })], 0)
          }
        />
        {/* questionable. Do I want to erase the stack, or not? */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#aabbcc',
  }
});

export default EndScreen;
