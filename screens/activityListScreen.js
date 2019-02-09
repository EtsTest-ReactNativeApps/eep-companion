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

import { List, ListItem } from 'react-native-elements'

import activities from '../content/activities.js';
import Activity from '../components/activity.js';

class ActivityListScreen extends Component {
  static navigationOptions = {
    title: 'Activities',
  };

  render() {
    const { navigation } = this.props;

    const getActivitiesToDisplay = (showAll) => {
      if (showAll) {
        return Object.keys(activities);
      } else {
        return navigation.getParam('activityIDs',[]);
      }
    };

    const activityIDs = getActivitiesToDisplay(navigation.getParam('showAll',false));

    return (
      <View style={styles.container}>
        {activityIDs.map((activityID,i) => (
          <ListItem
            roundAvatar
            key={i}
            title={activities[activityID].title}
            subtitle={activities[activityID].intro}
            leftIcon={{name: 'av-timer'}}
            onPress={()=>navigation.navigate('Activity', {id:activityID})}
          />
        ))}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // backgroundColor:'#aabbcc',
  },
  containerFull: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10
    //alignItems: 'center',
    //justifyContent: 'center',
    // backgroundColor:'#aabbcc',
  },
});

export default ActivityListScreen;
