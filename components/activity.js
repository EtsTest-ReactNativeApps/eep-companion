import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight
} from 'react-native';
import {
  createStackNavigator,
  NavigationActions,
  withNavigation
} from 'react-navigation';

import activities from '../content/activities.js';


class Activity extends Component {

  //TODO put this into JSON?

  render() {
    const { navigation } = this.props;
    const activityID = this.props.id;
    const isSnippet = (this.props.snippet === 1);
    const activity = activities[activityID];

    if (!activity) {
      return null;
    }

    let snippetContent = (
      <View style={styles.containerSnippet}>
        <View style={styles.snippetInfo}>
          <Text>{activity.title}</Text>
          <Text>{activity.intro}.</Text>
          <Text><Text>Tools needed:</Text> {activity.toolsNeeded}.</Text>
        </View>
        <TouchableHighlight
          style={[styles.navButton,styles.snippetMore]}
          onPress={()=>navigation.navigate('Activity',{id:activityID})}
          underlayColor="white"
        >
          <Text style={styles.navButtonText}>BACK</Text>
        </TouchableHighlight>
      </View>
    );

    let fullContent = (
      <View style={styles.containerFull}>
        <Text>{activity.title}</Text>
        <Text>ALL THE STUFF!!!</Text>
        {activity.content}
      </View>
    )

    if (isSnippet) {
      return snippetContent;
    } else {
      return fullContent;
    }
  }
}

const styles = StyleSheet.create({
  containerFull: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#aabbcc',
  },
  containerSnippet: {
    backgroundColor:'#aabbcc',
  }
});

export default withNavigation(Activity);
