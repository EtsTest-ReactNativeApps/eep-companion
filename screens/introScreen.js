import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Button,
  Alert,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import Paragraph from '../components/paragraph.js';
import ModButton from '../components/modButton.js';
import globalStyles from '../styles/globalStyles.js';

class IntroScreen extends Component {
  static navigationOptions = {
    header:null,
  }

  render() {
    const { navigation } = this.props;
    let map = require('../assets/map.jpg');
    return (
      <ScrollView>
      <View style={[globalStyles.container, styles.container]}>
        <TouchableHighlight
          onPress={()=>navigation.navigate('Map')}
          underlayColor="white"
        >
          <Image resizeMode='contain' style={styles.map} source={map} />
        </TouchableHighlight>
        <Paragraph style={styles.big}>Welcome to the Yellow Path, traveler!</Paragraph>
<Paragraph>The Yellow Path will take you on a 2.5 km journey through the forest of Stoumont. To begin this journey you must first follow your heart and then, the yellow signs along the way or our photo guide. As you walk you will meet a number of special activity points, already marked on the map here. We encourage you to stop for a while, take a moment to read the info board specific for every such point and get involved with the adventure it offers you. It could be a curious fact, a game or a challenge.</Paragraph>
        <ModButton
          title="Start"
          style={globalStyles.button}
          onPress = {() =>
          navigation.navigate('Path',{step:0})
        }
        />
        <Paragraph>Every forest is a magical kingdom with many curiosities and secrets awaiting to be discovered and explored. Beauty of the natural world is obvious to the eye, but sometimes more beauty can be found in sounds, smells, textures, in hidden places, above or below. </Paragraph>
        <Paragraph>Everything in is up to you, dear explorer! How much more you want to see, to know or to feel in this journey - it's up to you!</Paragraph>
        <Paragraph>Of course it is also up to you, if you want to be a guardian protector of this forest kingdom and keep all inorganic invadors away! If you see any garbage on your path, collect – recycle it and your mission will be accomplished fully.</Paragraph>
        <Paragraph>Answer the call for adventure!</Paragraph>
        <ModButton
          title="all activities!"
          onPress = {() =>
          navigation.navigate('ActivityList',{activityIDs:[0,1,2,3,4,5]})
        }
        />
      </View>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    // note to self: NO FLEX!
    width:Dimensions.get('window').width,
  },
  big :{
    fontSize:20,
  },
  container: {
    padding:10,
    flex:0,
  }
});

export default IntroScreen;
