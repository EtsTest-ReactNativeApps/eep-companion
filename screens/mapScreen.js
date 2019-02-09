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
  NavigationActions,
  withNavigation
} from 'react-navigation';
import Mapbox from '@mapbox/react-native-mapbox-gl';

import appinfo from '../appinfo.js';
//to set your Mapbox key, create an appinfo.js file by copying the appinfo-example.js  and entering your API key. THIS IS NOT A PRODUCTION-READY SETUP! For explanation read comments in appinfo-example.js 
Mapbox.setAccessToken(appinfo.mapbox);


import steps from '../content/steps.js';

const layerStyles = Mapbox.StyleSheet.create({
  origin: {
    circleRadius: 5,
    circleColor: 'white',
  },
  destination: {
    circleRadius: 5,
    circleColor: 'white',
  },
  route: {
    //lineColor: '#ffff00', //pure yellow
    //lineColor: '#ffd42a', //gold yellow
    lineColor: '#009b71', //emerald green
    lineWidth: 3,
    lineOpacity: 0.84,
  },
  progress: {
    lineColor: '#314ccd',
    lineWidth: 3,
  },
});

class PathPoint extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    if (this.props.active) {
      marker = (
        <View style={styles.stepMarkerActive}>
          <Text style={styles.stepMarkerText}>{this.props.id}</Text>
        </View>
      )
    } else {
      marker = (
        <View style={styles.stepMarker}>
        </View>
      )
    }
    return (<Mapbox.PointAnnotation
      key={this.props.id}
      id={`pointAnnotation-${this.props.id}`}
      anchor={{ x: 0.5, y: 0.5 }}
      coordinate={this.props.pathStep.coords}
      onSelected={()=>{
        console.log("navigatin!");
        navigation.navigate('Path',{'step':this.props.id})
      }}
      >
      {marker}
    </Mapbox.PointAnnotation>)
  }
}

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  };

  constructor(props) {
    super(props);
    this.state = {
      route:pathLine,
      stepPoints:null,
      navigation:null
    };
  }

  renderPath() {
    return (
      <Mapbox.ShapeSource id="routeSource" shape={this.state.route}>
      <Mapbox.LineLayer
        id="routeFill"
        style={layerStyles.route}
        belowLayerID="originInnerCircle"
      />
    </Mapbox.ShapeSource>
    )
  }

  render() {
    console.log('rendering map page');
    const { navigation } = this.props;
    const activeStep = navigation.getParam('stepID',null);

    //Mapbox map does not show up if it is in a View. (yes, it took me two weeks to figure out.)
    return (
      <Mapbox.MapView
          styleURL={Mapbox.StyleURL.Outdoors}
          centerCoordinate={[5.8147,50.4125]}
          zoomLevel={14}
          style={styles.mapview}
          showUserLocation={true}
          userTrackingMode={Mapbox.UserTrackingModes.None}
      >
        {this.renderPath()}
        {steps.map((step,i) => (<PathPoint pathStep={step} id={i} key={i} active={(activeStep === i)} navigation={navigation} />))}
      </Mapbox.MapView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#aabbcc',
  },
  mapview: {
    flex:1
  },
  stepMarker: {
    width: 10,
    height: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009b71',
    // borderWidth:1,
    // borderColor:'#009b71',
    borderRadius: 5,
  },
  stepMarkerActive: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffd42a',
    // borderWidth:1,
    // borderColor:'#009b71',
    borderRadius: 15,
  },
  stepMarkerText:{
    color:'#000000'
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  }
});

const pathLine = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            5.8091819286346436,
            50.409679906483476
          ],
          [
            5.8097827434539795,
            50.4098952847479
          ],
          [
            5.809755921363831,
            50.41014143013701
          ],
          [
            5.809455513954163,
            50.41052773907228
          ],
          [
            5.809476971626282,
            50.4106884153126
          ],
          [
            5.809729099273682,
            50.41117044076429
          ],
          [
            5.809916853904724,
            50.41132427764213
          ],
          [
            5.810582041740417,
            50.41146443969597
          ],
          [
            5.810700058937073,
            50.41161485704861
          ],
          [
            5.810399651527405,
            50.4119738056197
          ],
          [
            5.810088515281676,
            50.412223358738025
          ],
          [
            5.810120701789856,
            50.41230198479065
          ],
          [
            5.810340642929077,
            50.41236009961526
          ],
          [
            5.810716152191162,
            50.41235326258078
          ],
          [
            5.8110111951828,
            50.41238061071282
          ],
          [
            5.810898542404175,
            50.41259597670096
          ],
          [
            5.810785889625548,
            50.41274297197201
          ],
          [
            5.810694694519043,
            50.41280792322556
          ],
          [
            5.81051766872406,
            50.41316002583979
          ],
          [
            5.810286998748779,
            50.413471104613
          ],
          [
            5.809997320175171,
            50.41378218134366
          ],
          [
            5.809900760650635,
            50.41412743993885
          ],
          [
            5.81001877784729,
            50.414274430458306
          ],
          [
            5.810040235519409,
            50.414390655197344
          ],
          [
            5.810415744781494,
            50.41458892027054
          ],
          [
            5.810549855232239,
            50.414794021197245
          ],
          [
            5.8110058307647705,
            50.41507774268208
          ],
          [
            5.811633467674255,
            50.41452055309765
          ],
          [
            5.812915563583374,
            50.41368988406525
          ],
          [
            5.813999176025391,
            50.41366253668898
          ],
          [
            5.815324187278748,
            50.41367621037909
          ],
          [
            5.8160752058029175,
            50.41376508926862
          ],
          [
            5.818687677383423,
            50.414257338560866
          ],
          [
            5.8210694789886475,
            50.41474958273847
          ],
          [
            5.8204954862594604,
            50.41418213413892
          ],
          [
            5.820398926734924,
            50.4141206031594
          ],
          [
            5.820189714431763,
            50.41400437775786
          ],
          [
            5.8199697732925415,
            50.41384371276271
          ],
          [
            5.819787383079529,
            50.4136112603159
          ],
          [
            5.819588899612427,
            50.413337785388876
          ],
          [
            5.819449424743652,
            50.413224976521605
          ],
          [
            5.819116830825806,
            50.41303354267759
          ],
          [
            5.818848609924316,
            50.41288312982894
          ],
          [
            5.818553566932678,
            50.4127703198791
          ],
          [
            5.818338990211487,
            50.412657509660626
          ],
          [
            5.818054676055908,
            50.41252418814703
          ],
          [
            5.817856192588805,
            50.41249000308309
          ],
          [
            5.817705988883972,
            50.412448980973856
          ],
          [
            5.817555785179138,
            50.41238061071282
          ],
          [
            5.817459225654602,
            50.41223019579127
          ],
          [
            5.816386342048645,
            50.41179262239515
          ],
          [
            5.816171765327453,
            50.41178236672021
          ],
          [
            5.816043019294739,
            50.411741343998244
          ],
          [
            5.815871357917786,
            50.41161827561927
          ],
          [
            5.815656781196593,
            50.41150204407891
          ],
          [
            5.815308094024657,
            50.41141999811404
          ],
          [
            5.81502377986908,
            50.41131402186583
          ],
          [
            5.814723372459412,
            50.41123539417364
          ],
          [
            5.814358592033386,
            50.411184115173654
          ],
          [
            5.813929438591003,
            50.411173859367
          ],
          [
            5.813848972320556,
            50.41114309193372
          ],
          [
            5.813811421394348,
            50.4111054872659
          ],
          [
            5.813800692558289,
            50.41097558000199
          ],
          [
            5.813854336738586,
            50.41085592825958
          ],
          [
            5.813822150230408,
            50.41038757424744
          ],
          [
            5.813682675361633,
            50.410134592782356
          ],
          [
            5.811772942543029,
            50.40994998383375
          ],
          [
            5.811595916748047,
            50.409902122137076
          ],
          [
            5.8110058307647705,
            50.40996707728515
          ],
          [
            5.810742974281311,
            50.41006963786394
          ],
          [
            5.810367465019226,
            50.4101209180701
          ],
          [
            5.810120701789856,
            50.41015168616715
          ],
          [
            5.809959769248962,
            50.4102166409731
          ],
          [
            5.8094823360443115,
            50.410496971219416
          ]
        ]
      }
    }
  ]
}

export default MapScreen;
