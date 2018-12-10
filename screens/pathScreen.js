import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from 'react-native';
import {
  createStackNavigator,
  NavigationActions
} from 'react-navigation';

import globalStyles from '../styles/globalStyles.js';
import ModButton from '../components/modButton.js';

class PathStep extends Component {
  render() {
    const step = this.props.step;
    const { navigation } = this.props;
    const nextStep = (step.last) ? null : (this.props.id + 1);
    // let nextButton;
    // if (step.last) {
    //   nextButton = (<ModButton
    //     title="Finish"
    //     onPress = {() =>
    //       navigation.navigate('End')
    //     }
    //   />);
    // } else {
    //   nextButton = (<ModButton
    //     title="next"
    //     onPress = {() =>
    //       navigation.push('Path',{'step':nextStep})
    //     }
    //   />);
    // };


    let nextButton;
    if (step.last) {
      nextButton = (
        <TouchableHighlight
          style={[styles.navButton,styles.navButtonLast]}
          onPress={()=>navigation.navigate('End')}
          underlayColor="white"
        >
          <Text style={styles.navButtonText}>FINISH</Text>
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

    let backButton = (
      <TouchableHighlight
        style={styles.navButton}
        onPress={()=>navigation.goBack()}
        underlayColor="white"
      >
        <Text style={styles.navButtonText}>BACK</Text>
      </TouchableHighlight>
    );

    let activityLink;

    if (step.activities.length == 0) {
      activityLink = null;
    } else {
      activityLink = (<ModButton
        title="Possible activities"
        onPress = {() =>
          navigation.navigate('ActivityList',{'activityIDs':step.activities})
        }
      />)

    }

    return (
      <View style={[styles.wrapper]}>
        <View style={styles.mapButton}>
          <ModButton
            style={styles.navButton}
            title="show map"
            onPress = {() =>
            navigation.navigate('Map')
          }
          />
        </View>
        <View style={styles.pathPhoto}>
          <ScrollView horizontal={true} contentContainerStyle={{alignItems: 'center'}} style={styles.imageScroll} ref='_scrollView'>
            <Image resizeMode='cover' style={styles.stepImage} source={step.image}/>
          </ScrollView>
          <View style={styles.activityLink}>
            {activityLink}
          </View>
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

    // if (step === undefined) {
    //   return (
    //     <View><Text>Step id {stepID} not found.</Text></View>
    //   );
    // }

    //intentionally not catching errors - if there is no step of this id, this should die a fiery death.

    return (
      <PathStep step={step} navigation={navigation} id={stepID} />
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#aabbcc',
  },
  mapButton: {
    position:'absolute',
    top: 0,
    right: 0,
    marginTop:30,
    zIndex: 100
  },
  imageScroll: {
    flex:1,
  },
  stepImage: {
    // note to self: NO FLEX!
    // width:Dimensions.get('window').width,
    flex:1,
  },
  pathPhoto: {
    flex:4,
    width:'100%',
    backgroundColor:'#ccffff',
  },
  activityLink: {
    flex:1,
    position:'absolute',
    bottom:0,
    paddingBottom:10,
    width:'100%',
    alignItems: 'center',
  },
  // activityLinkButton: {
  //   width: '30%'
  // },
  nav: {
    flex:0.5,
    flexDirection: 'row',
    backgroundColor: '#ffccff',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButton: {
    flex:1,
    height:'100%',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  navButtonNext: {
    borderLeftWidth:1,
    borderLeftColor:'#ddd',
  },
  navButtonLast: {
    borderLeftWidth:1,
    borderLeftColor:'#ddd',
  },
  navButtonText: {
    fontSize:16,
    // textTransform:'uppercase',
  }
});

const steps = [
  {
    title:'some step', //this is more for convenience sake
    image:require('../assets/pathPhotos/00.jpg'),
    activities:[0,1,2],
    last:false
  },
  {
    title:'second step', //this is more for convenience sake
    image:require('../assets/pathPhotos/01.jpg'),
    activities:[],
    last:false
  },
  {
    title:'third step', //this is more for convenience sake
    image:require('../assets/pathPhotos/02.jpg'),
    activities:[0,1,2],
    last:false
  },
  {
    title:'last step', //this is more for convenience sake
    image:require('../assets/pathPhotos/03.jpg'),
    activities:[0,1,2],
    last:true
  },
]

export default PathScreen;
