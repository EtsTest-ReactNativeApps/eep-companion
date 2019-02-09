import React, { Component } from 'react';
import {
  Image,
  View,
  StyleSheet,
  Button,
  ScrollView
} from 'react-native';
import {
  createStackNavigator,
  NavigationActions
} from 'react-navigation';
import activities from '../content/activities.js';
import Activity from '../components/activity.js';

import {
  Card,
  Text
 } from 'react-native-elements';


class ActivityScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Path Info"
    }
  }

  render() {
    const { navigation } = this.props;
    const activityID = navigation.getParam('id',-1);

    if (activityID === -1) {
      navigation.navigate('ActivityList',{showAll:true})
    }

    activity = activities[activityID];

    return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.containerFull}>
          <Text>{activity.about}</Text>

          <View style={{marginTop:10,marginBottom:10}}>
            <Text><Text>Material:</Text> {activity.material}</Text>
            <Text><Text>Duration:</Text> {activity.duration}</Text>
          </View>
          <Card title="HOW DO I PLAY?">
            {activity.howToPlay}
          </Card>
          <Text>.</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFull: {
    backgroundColor: '#fff',
    padding:10,
    borderWidth:2,
  },
});

export default ActivityScreen;
