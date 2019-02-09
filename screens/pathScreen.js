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
import { Text, Button, Icon } from 'react-native-elements';
import steps from '../content/steps.js';

class PathStep extends Component {
  render() {
    const step = this.props.step;
    const { navigation } = this.props;
    const nextStep = (step.last) ? null : (this.props.id + 1);

    let nextButton;
    if (step.last) {
      nextButton = (
        <TouchableHighlight
          style={[styles.navButton,styles.navButtonDisabled]}
          underlayColor="white"
        >
          <Text style={[styles.navButtonText,styles.navButtonTextDisabled]}>NEXT</Text>
        </TouchableHighlight>
    );
    } else {
      nextButton = (
        <TouchableHighlight
          style={[styles.navButton,styles.navButtonNext]}
          onPress={()=>navigation.push('Path',{'step':nextStep})}
          underlayColor="white"
        >
          <Text style={styles.navButtonText}>NEXT</Text>
        </TouchableHighlight>
        );
    };

    let backButton;
    if (this.props.id === 0) {
      backButton = (
        <TouchableHighlight
          style={[styles.navButton,styles.navButtonDisabled]}
          underlayColor="white"
        >
          <Text style={[styles.navButtonText,styles.navButtonTextDisabled]}>BACK</Text>
        </TouchableHighlight>
      );
    } else {
      backButton = (
        <TouchableHighlight
          style={styles.navButton}
          onPress={()=>navigation.goBack()}
          underlayColor="white"
        >
          <Text style={styles.navButtonText}>BACK</Text>
        </TouchableHighlight>
      );
    };

    let activityLink;

    if (step.activities.length == 0) {
      activityLink = null;
    } else if (step.activities.length === 1) {
      activityLink = (<Button
        backgroundColor='#ffd42a'
        buttonStyle={{borderRadius:3, marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop:10}}
        title={`1 ACTIVITY`}
        onPress = {() => navigation.navigate('ActivityList',{'activityIDs':step.activities})}
        textStyle={{color:'#222222', fontWeight:'bold'}}
       />)
    }  else {
      activityLink = (<Button
        backgroundColor='#ffd42a'
        buttonStyle={{borderRadius:3, marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop:10}}
        title={`${step.activities.length} ACTIVITIES`}
        onPress = {() => navigation.navigate('ActivityList',{'activityIDs':step.activities})}
        textStyle={{color:'#222222', fontWeight:'bold'}}
       />)
    }

    return (
      <View style={[styles.wrapper]}>
        <View style={styles.topControlView}>
          <Button
            backgroundColor='#00463f'
            buttonStyle={{borderRadius:3, marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop:10}}
            textStyle={{fontWeight:'bold',color:'white'}}
            title="INTRO"
            onPress = {() =>
            navigation.navigate('Intro')
          }
          />
          <Button
            backgroundColor='#00463f'
            buttonStyle={{borderRadius:3, marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop:10}}
            textStyle={{fontWeight:'bold',color:'white'}}
            color='#00463f'
            title="SHOW MAP"
            onPress = {() =>
            navigation.navigate('Map',{'stepID':this.props.id})
          }
          />
        </View>
        <View
        style={styles.pathPhoto}>
          <Image style={styles.stepImage} source={step.image} />
        </View>
        <View style={styles.activityLinkView}>
          {activityLink}
        </View>
        <View style={styles.nav}>
          {backButton}
          {nextButton}
        </View>
      </View>
    )
  }
}

class PathScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigation } = this.props;
    const stepID = navigation.getParam('step', 0);
    const step = steps[stepID];
    return (
      <PathStep step={step} navigation={navigation} id={stepID} />
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:'#222222',
  },
  topControlView: {
    height:80,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  mapButton: {

  },
  imageScroll: {
    flex:1,
  },
  stepImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderColor:'#00463f',
    borderTopWidth:10,
    borderBottomWidth:10,
    //borderStyle:'solid',
    //width:Dimensions.get('window').width,
  },
  pathPhoto: {
    flex:4,
    width:'100%',
    backgroundColor:'#000000',
    height:null,
    borderColor:'#00463f',
    borderTopWidth:12,
    borderBottomWidth:12,
  },
  activityLinkView: {
    flex:1,
    //position:'absolute',
    //bottom:0,
    //paddingBottom:10,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityLink: {
    color:'#222222',
  },
  // activityLinkButton: {
  //   width: '30%'
  // },
  nav: {
    flex:0.5,
    flexDirection: 'row',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButton: {
    flex:1,
    height:'100%',
    backgroundColor:'#00463f',
    alignItems:'center',
    justifyContent:'center',
  },
  navButtonNext: {
    borderLeftWidth:1,
    borderLeftColor:'#000000',
  },
  navButtonDisabled: {
    backgroundColor:'transparent',
  },
  navButtonText: {
    fontSize:16,
    color:'#ffffff',

    // textTransform:'uppercase',
  },
  navButtonTextDisabled: {
    color:'#999'
  }
});



export default PathScreen;
