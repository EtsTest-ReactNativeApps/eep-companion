import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import { Card,Divider } from 'react-native-elements';
import CheckList from '../components/checklist.js';

const activities = [
  {
    title: 'Digital Treasure Hunt - start',
    intro: 'Search game played along the whole path.',
    about: 'Digital treasure hunt is a search game that can be played alongside other activities.  Best played with friends/classmates - either each on your own, or in groups of 2-5. Can you find the "treasures" in our list?',
    teamGame: true,
    teamSize: '3-5 people; one person is the "reporter" and takes the pictures',
    aloneGame: false,
    material: '1 (or more) cellphone with photo capability',
    duration:'60 min',
    howToPlay: (
      <View>
    <Text>FIND ME...</Text>
    <CheckList items={[
      'A reunion of trees',
      '2 marks of human presence',
      '2 different generations of the same tree species',
      '4 different trees with their fruits',
      'A “human forest” (make the forest with your bodies and arms)',
      'A bird (or a recording of the sound)',
      'Something white, something pink, something gray',
      'An insect (like spider, ant etc.)',
      'A selfie group with an animal who lives near the forest'
    ]} />
  </View>
  ),
    facilitatorNotes: 'Possible hidden content that would be displayed only to facilitators - have a setting for the app?'
  },
  {
    title: 'Meet your tree',
    intro: 'Connect to nature through your senses.',
    about: '',
    teamGame: true,
    teamSize: '2 people who will take turns leading and exploring',
    aloneGame:false,
    material:'scarfs',
    duration:'20 min',
    howToPlay: (
      <View>
        <Text style={{marginBottom:10}}>Connect your partner's eye and direct it to 1 tree of the forest that pulls (attract) you.</Text>
        <Divider />
        <Text style={{marginBottom:10}}>Help the "blind" partner to explore his tree and to feel it. If you tell to the partner: "feel the tree," he will not answer you with so much interest, but if you say:  Wrap the stomach on the tree's vault"; is your tree alive?; Can you put your arm around the tree? Is the tree older than you? Can you touch or find plants growing around the tree? Are there any traces of animals? Lichens?  Insects?</Text>
        <Divider />
        <Text style={{marginBottom:10}}>When your partner finishes exploring, direct him to the position from the beginning, but find another way out.</Text>
        <Divider />
        <Text style={{marginBottom:10}}>Then let your friend look open to find the tree explored before. </Text>
        <Divider />
        <Text style={{marginBottom:10}}>he tree can be an unforgettable experience. Do you feel related to it? Would you like to spend more time with it?</Text>
        <Divider />
      </View>
    )
  },
  {
    title: 'Tree shapes',
    intro: 'Make each other into the shape of a tree.',
    about:'The game is based in playing two roles, one are going to be the sculptors and the others the neutral statues like clay.',
    teamGame:true,
    teamSize: '2 people, taking turns at being the sculptor and the sculpture',
    aloneGame:false,
    material: 'phone with camera capability',
    duration: '30 min',
    howToPlay: (
      <View>
        <Text style={{marginBottom:10}}>
          The game is based in playing two roles, one are going to be the sculptors and the others the neutral statues like clay. The sculptors will have a quick look at the photo that they have made of a tree and shape the body of the friend in front of them to make it similar ( thinking about how are the leaves, trunk and roots of the tree).
        </Text>
        <Text style={{marginBottom:10}}>
          The first group of sculptors will go around and see all the other statues like a gallery. Each sculptor will explain which tree is it and describe their characteristics, during this time the statues will stay still or try to. After,  sculptors make a picture and participants exchange the roles. In the end they can try to remember all the trees that they have made and choose a tree to make it all together!
        </Text>
      </View>
    )
  },
  {
    title: 'Bird silhouettes',
    intro: 'some text',
    toolsNeeded: 'a set of cards with bird silhouettes',
    notes: 'do not eat the red berries',
    content: 'Some <em>text</em>.',
  },
]

export default activities;
