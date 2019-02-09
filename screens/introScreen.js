import React, { Component } from 'react';
import {
  Image,
  View,
  ScrollView,
  StyleSheet,
  Alert,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  Platform
} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import Table from '../components/table.js';

import { Text, Button, Icon } from 'react-native-elements';

class IntroScreen extends Component {
  static navigationOptions = {
    header:null,
  }

  render() {
    const { navigation } = this.props;
    let intro_img = require('../assets/fagotin_cover.jpg');
    return (
      <View style={styles.mainView}>
        <View style={styles.coverImage}>
          <TouchableHighlight
            style={styles.imageTouchable}
            onPress = {() => navigation.navigate('Path',{step:0})}
            >
            <Image resizeMode='cover' source={intro_img} style={styles.image}/>
          </TouchableHighlight>
        </View>

        <View style={styles.textContent}>
          <View style={styles.title}>
            <Text style={{color:'#ffffff',fontWeight:'bold',fontSize:20}}>
              Le Fagotin A.S.B.L. - Yellow Path
            </Text>
          </View>
          <View style={styles.intro}>
            <TouchableOpacity
              onPress={()=>navigation.navigate('PathInfo')}
              >
              <View>
                <Text style={styles.text}>Welcome to the Yellow Path, traveler! This path will take you on a 2.5 km journey through the forest of Stoumont. <Text style={[styles.text, {color:'#0c877a'}]}>More about this path.</Text></Text>
              </View>
            </TouchableOpacity>

            <Table borderColor="#00463f" textColor="#0c877a" data={
              [
                ['Location: ','Stoumont, Belgium'],
                ['Length: ','2.7 km'],
                ['Duration: ','cca 1h'],
              ]} />
          </View>

        </View>
        <View style={styles.startButtonArea}>
          <Button
            backgroundColor='#ffd42a'
            buttonStyle={{borderRadius:3, marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop:10}}
            title='START'
            textStyle={{color:'#222222', fontWeight:'bold'}}
            onPress = {() => navigation.navigate('Path',{step:0})}
           />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor:'#222222',
    alignItems:'center',
    flex: 1,
    alignItems:'stretch',
    justifyContent:'space-between'
  },
  text: {
    color:'#ffffff',
    fontSize:18
  },
   coverImage: {
     flexGrow:2,
     flexBasis:'25%',
     alignItems:'stretch',
   },
   imageTouchable: {
     alignSelf:'stretch',
     width: null,
     flex:1,
   },
   image: {
     flex:1,
     height:undefined,
     width:undefined,
   },
  title: {
    alignItems:'stretch',
    alignItems:'center',
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#00463f',
  },
  textContent: {
    flexGrow:3,
    alignItems:'stretch',
  },
  intro: {
    padding:15,
  },
  stats: {
    justifyContent:'space-around',
    marginTop:15,
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
  startButtonArea: {
    flexGrow:1,
    flex:1,
    justifyContent:'flex-end',
    alignItems:'stretch',
    padding:15,
    paddingLeft:30,
    paddingRight:30,
  },
});

export default IntroScreen;
