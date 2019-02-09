import React, { Component } from 'react';
import {
  Image,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from 'react-native';
import {
  createStackNavigator,
  NavigationActions,
  withNavigation
} from 'react-navigation';

import {
  Card,
  Text
 } from 'react-native-elements';


class Activity extends Component {

  render() {
    const { navigation } = this.props;
    const activityID = this.props.id;
    const isSnippet = (this.props.snippet === 1);
    const activity = this.props.data;

    if (!activity) {
      return null;
    }

    let snippetContent = (
      <View style={styles.containerSnippet}>
        <TouchableHighlight
          style={[styles.navButton,styles.snippetMore]}
          onPress={()=>navigation.navigate('Activity',{id:activityID})}
          underlayColor="white"
        >
        <View style={styles.snippetInfo}>

          <Text>{activity.title}</Text>
          <Text>{activity.intro}.</Text>
        </View>
        </TouchableHighlight>
      </View>
    );

    let fullContent = (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.containerFull}>
          <Text>{activity.about}</Text>

          <View style={{marginTop:10,marginBottom:10}}>
            <Text><Text>Material:</Text> {activity.material}</Text>
            <Text><Text>Duration:</Text> {activity.duration}</Text>
          </View>
          {// TODO format this better! Maybe another Card?
          }

          <Card title="HOW DO I PLAY?">
            {activity.howToPlay}
          </Card>

          {/* <HTML
            html={activity.content}
            imagesMaxWidth={Dimensions.get('window').width}
            tagsStyles={{li:{margin:0,padding:0}}}
            containerStyle={{marginTop:0}}
            //renderers={{ul:ul}}
            // TODO the original ul renderer has hardcoded padding; my attempt at copying and modifying a renderer don't work (yet)
          /> */}
        </ScrollView>
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
    padding:10
    //alignItems: 'center',
    //justifyContent: 'center',
    // backgroundColor:'#aabbcc',
  },
  containerSnippet: {
    backgroundColor:'#aabbcc',
  }
});

export default withNavigation(Activity);
