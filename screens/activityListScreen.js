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

class ActivityListScreen extends Component {
  static navigationOptions = {
    title: 'Activities',
  };

  render() {
    const { navigation } = this.props;
    const activityIDs = navigation.getParam('activityIDs',[]);

    return (
      <View>
        <Text>Test.</Text>
        {activityIDs.map((activityID,i) =>
           <Activity id={activityID} snippet={1} key={i} />
         )
        }
        {/* TODO list of activities */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // backgroundColor:'#aabbcc',
  }
});

export default ActivityListScreen;
