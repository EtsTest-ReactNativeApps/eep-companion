import React, { Component } from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from 'react-native';
import {
  createStackNavigator,
  NavigationActions
} from 'react-navigation';
import {
  Text,
  Button,
  Icon,
  Card,
  Divider
} from 'react-native-elements';

import Table from '../components/table.js';

class Paragraph extends Component {
  render() {
    return (
      <Text style={[{
        marginBottom:16,
        color:'#ffffff'
      },
        this.props.style
      ]}>
        {this.props.children}
      </Text>
    )
  }
}

class PathInfoScreen extends Component {
  static navigationOptions = {
    title: 'Path Info',
  };

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.wrapper}>
          <View style={styles.title}>
            <Text style={{color:'#ffffff',fontWeight:'bold',fontSize:20}}>
              Le Fagotin A.S.B.L. - Yellow Path
            </Text>
          </View>
          <Table borderColor="#00463f" textColor="#0c877a" data={
            [
              ['Age group: ','12 - 17'],
              ['Location: ','Stoumont, Belgium'],
              ['Starting point: ','Lat.: 50.4097, Lon.:5.8092'],
              ['Length: ','2.7 km'],
              ['Duration: ','1h'],
              ['Elevation: ','100m']
            ]} />

          <View style={styles.infoText}>
            <Paragraph style={styles.big}>Welcome to the Yellow Path, traveler!</Paragraph>
    <Paragraph>The Yellow Path will take you on a 2.5 km journey through the forest of Stoumont. To begin this journey you must first follow your heart and then, the yellow signs along the way or our photo guide. As you walk you will meet a number of special activity points, already marked on the map here. We encourage you to stop for a while, take a moment to explore the suggestions and the adventures they offer. It could be a curious fact, a game or a challenge.</Paragraph>
            <Paragraph>Every forest is a magical kingdom with many curiosities and secrets awaiting to be discovered and explored. Beauty of the natural world is obvious to the eye, but sometimes more beauty can be found in sounds, smells, textures, in hidden places, above or below. </Paragraph>
            <Paragraph>Everything in is up to you, dear explorer! How much more you want to see, to know or to feel in this journey - it's up to you!</Paragraph>
            <Paragraph>Of course it is also up to you, if you want to be a guardian protector of this forest kingdom and keep all inorganic invadors away! If you see any garbage on your path, collect – recycle it and your mission will be accomplished fully.</Paragraph>
            <Paragraph>Answer the call for adventure!</Paragraph>
          </View>

          <Table borderColor="#333" textColor="#aaa" data={
            [
              ['Path maintainer: ','Le Fagotin A.S.B.L.'],
              ['Phone: ','+32 (0)80 78 63 46'],
              ['E-mail: ','info@fagotin.be']
            ]} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'#222222',
  },
  title: {
    alignItems:'stretch',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#00463f',
  },
  cardContainer: {
    borderWidth:0,
    borderRadius:3,
    backgroundColor:'#292929'
  },
  cardTitle: {
    color:'#ffffff'
  },
  cardText: {
    color:'#ffffff'
  },
  infoText:{
    padding:20,
    paddingBottom:0,
  },
  big: {
    fontSize:20,
  },
  stats: {
    justifyContent:'space-around',
    margin:20,
    borderWidth:1,
    borderColor:'#00463f',
    borderRadius:3
  },
  statsRow: {
    width:null,
    flexDirection:'row',
    alignItems:'stretch',
    borderBottomWidth:1,
    borderColor:'#00463f',
  },
  statsDef: {
    borderColor:'#00463f',
    borderRightWidth:1,
  },
  statsPart: {
    flexGrow:1,
    flexBasis:'50%',
    padding:5,
    color:'#0c877a'
  },
});



export default PathInfoScreen;
