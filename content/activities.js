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
    title: 'Digital Treasure Hunt',
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
      'A tree with four trunks coming out of the same root system',
      'A plant that grows on another plant',
      'Two signs of human presence along the trail (can be permanent or temporary)',
      'Two individuals of the same tree species, but of different age',
      'Four different tree species with their fruits/seeds',
      'A “human forest” (people from your group pretending to be trees using their body, arms, etc.)',
      'A bird (or an audio recording of the sound)',
      'Natural objects in the colours white, pink, gray',
      'An invertebrate (e. g. spider, ant, etc.) -- or a sign of it',
      'A selfie with an animal (domestic or wild)'
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
        <Text style={{marginBottom:10,fontWeight:'bold'}}>Before the game starts:</Text>
        <Text style={{marginBottom:10}}>Find a friend - someone who you will trust to safely lead you when blindfolded. You will take turns leading each other through the activity. You can try it out before you start!</Text>
        <Divider />
        <Text style={{marginBottom:10,marginTop:10,fontWeight:'bold'}}>For the one who leads:</Text>
        <Text style={{marginBottom:10}}>Please, blindfold your partner.Then, choose one tree in the forest. You will be your partner’s guide to the tree; please, guide them carefully, instruct them about obstacles on the way, take care that they don’t trip, or fall, or have problems walking without seeing. </Text>
        <Text style={{marginBottom:10}}>Now return to the chosen tree; first turn your blindfolded partner around a few times, then lead them to the tree using a roundabout way (so it is not easy for your partner to find the tree directly); after they have “met” their tree, please, bring them back to the starting point. Once there, take down the blindfold.</Text>
        <Text style={{marginBottom:10}}>
         Now ask your partner to find the tree. Can they do it? If they struggle, you can offer some small hints, like "remember touching the roots" and so on.
       </Text>
        <Divider />
        <Text style={{marginBottom:10,marginTop:10,fontWeight:'bold'}}>For the one who is lead:</Text>
        <Text style={{marginBottom:10}}>Please, trust your partner to lead you to a tree they have chosen.</Text>
        <Text style={{marginBottom:10}}>Once there, take your time to touch and feel the tree; pay attention to details: structure of the bark, objects at the base of the trunk, shape of the base, holes/scars on the bark, width of the tree trunk, presence of boughs – try to remember anything that can help you identify your tree later.</Text>
        <Text style={{marginBottom:10}}>
        Your partner has lead you back to the starting point. Now, try to find your tree again. Can you do it?
       </Text>
      </View>
    )
  },
  {
    title: 'Tree shapes',
    intro: 'Make each other into the shape of a tree.',
    about:'The game is played in pairs: one player is the sculptor, while the other is the "material" to be shaped, like clay.',
    teamGame:true,
    teamSize: '2 people, taking turns at being the sculptor and the sculpture',
    aloneGame:false,
    material: 'phone with camera capability',
    duration: '30 min',
    howToPlay: (
      <View>
        <Text style={{marginBottom:10,fontWeight:'bold'}}>Before the game starts:</Text>
        <Text style={{marginBottom:10}}>
          Find a friend to play with. One of you will be a sculptor, the other will become the sculpture.
        </Text>
        <Text style={{marginBottom:10}}>
          Think of an interesting tree formation you have seen during the walk. (If you can't remember anything, look around you or use your imagination.)
        </Text>
         <Divider />
         <Text style={{marginBottom:10,fontWeight:'bold'}}>For the sculptor:</Text>
          <Text style={{marginBottom:10}}>
           Without hurting your partner, recreate the shape of your chosen tree from your partners body. (The partner is allowed to give suggestions, but not to move by themselves!)
        </Text>
        <Text style={{marginBottom:10}}>
         When you're done, you can put on a "show", explaining your sculptures to an audience.
        </Text>
        <Text style={{marginBottom:10}}>
         Finally, take a photo of your sculpture!
        </Text>
        <Text style={{marginBottom:10}}>
         You can now change roles with your partner and make another sculpture. Or, if you're in a group, you can make one large shared sculpture together!
        </Text>
      </View>
    )
  },
  {
    title: 'Find the non-biodegradable',
    intro: 'Find things that can\'t decompose through natural processes.',
    about:'Non-biodegradable materials cannot be destroyed by bacteria so they remain where we left them for a long, long time. They need to be disposed carefully, definitely not thrown out in the forrest.',
    teamGame:true,
    teamSize:'any',
    aloneGame:true,
    material: '',
    duration: '20 min',
    howToPlay: (
      <View>
        <Text style={{marginBottom:10}}>
          Think for a moment about the words "trash" and "pollution". What do you imagine when you read them? If you're playing in a group, discuss it together.
        </Text>
        <Text style={{marginBottom:10}}>
          For 10 minutes or so, look around you and see whether you can spot any trash or pollution in the forrest. Do you see anything? Walk around the place (if you're in a group, you go together or in opposite directions).
        </Text>
        <Text style={{marginBottom:10}}>
          If you can safely do so, collect the trash. If not, take a photo of it.
        </Text>
        <Text>
          Return to the starting place. If you're playing in a group, show each other what you found. Try to imagine how it got there - was it an accident? Was it intentional? How long do you think the trash has laid there?
        </Text>
      </View>
    )
  },
]

export default activities;
