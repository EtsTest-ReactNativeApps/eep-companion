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
import Activity from '../components/activity.js';

class ActivityScreen extends Component {
  static navigationOptions = {
    title: 'Activity XY',
    //TODO this will need to be set in constructor...
  };

  render() {
    const { navigation } = this.props;
    const activityID = navigation.getParam('id',0);

    return (
      <Activity id={activityID} snippet={0}/>
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

export default ActivityScreen;
