import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:30,
    alignItems: 'center',
    // backgroundColor:'#aabbcc',
  },
  containerFull: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#aabbcc',
  },
  containerSnippet: {
    backgroundColor:'#aabbcc'
  },
  p: {
    marginBottom:16,
  },
  button: {
    color:'#333',
  }
});

export default styles;
