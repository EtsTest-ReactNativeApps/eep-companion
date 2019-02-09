import React, { Component } from 'react';
import {
  Image,
  View,
  StyleSheet,
} from 'react-native';
import {
  createStackNavigator,
  NavigationActions
} from 'react-navigation';
import {
  Card,
  Divider,
  Text,
  Button,
  Icon
} from 'react-native-elements';

class SplashScreen extends Component {
  static navigationOptions = {
    header:null,
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={[styles.wrapper]}>
        <View style={styles.introText}>
          <Text style={styles.text} h1>EEP Companion</Text>
          <Text style={styles.text}>Educational Environmental Paths with photo-navigation and activities.</Text>
          <Text style={[styles.text,styles.cardListHeader]} h4>Currently available:</Text>

        </View>
          <Card
            title='Le Fagotin A. S. B. L. - Yellow Path'
            wrapperStyle={styles.pathCard}
            containerStyle={{borderWidth:0, borderRadius:3}}
            titleStyle={styles.pathCardTitle}
            image={require('../assets/fagotin_cover.jpg')}>
            <Text style={[styles.text,styles.cardText]}>
              A short path at the educational farm Le Fagotin, Belgium.
            </Text>
            <Button
              backgroundColor='#ffd42a'
              buttonStyle={{borderRadius:3, marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop:10}}
              title='VIEW'
              textStyle={{color:'#222222', fontWeight:'bold'}}
              onPress = {() =>
                navigation.navigate({ routeName: 'Intro' })
              }
             />
          </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop:0,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    backgroundColor:'#222222',
    flexDirection:'column',
  },
  introText: {
    margin:20,
    marginBottom:0,
    paddingBottom:0,
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    height:'auto',
  },
  cardListHeader: {
    marginBottom:0,
    paddingBottom:0,
  },
  pathCard: {
    backgroundColor:'#00463f',
    borderWidth:0,
    borderRadius:3
  },
  pathCardTitle: {
    color:'#ffffff'
  },
  text: {
    color:'#ffffff'
  },
  cardText:{
    marginBottom: 10,
  }
});

export default SplashScreen;
