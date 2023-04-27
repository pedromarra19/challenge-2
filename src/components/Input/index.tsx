import React, {useState} from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';

import {useFonts} from 'expo-font'

import {Inter_200ExtraLight} from '@expo-google-fonts/inter'



export default function SignIn( {placeholderContent, content, setContent, error, icon, warning}) {

    const [fontLoaded] = useFonts({
      Inter_200ExtraLight
    });

    if(!fontLoaded){
      return null;
    }
    console.log(icon)

 
  return (
    
    <View style={[styles.inputStyle, {borderColor: error ? '#FF4B4B' : '#656262'}, {borderWidth: 0.5}]}>
          <Image  style={styles.inputIcon} source={icon}/>
          <TextInput
            placeholder={placeholderContent}
            style={styles.input}
            placeholderTextColor="#A8A8A8"
            value={content}
            onChangeText={setContent}
          />
          <Text style={[styles.warning, {color: error ? '#FF4B4B' : '#2D2D2D'}]}>
           {warning}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle:{
    flexDirection: 'row',
    width: '95%',
    height: 40,
    backgroundColor: '#656262',
    marginBottom: 20,
    borderRadius: 30,
    paddingHorizontal: 8,
  },
  input:{
    flexDirection: 'row',
    width: '90%',
    height: 40,
    paddingLeft: 35,
    color: '#A8A8A8',
    fontFamily: 'Inter_200ExtraLight',
  },
  inputIcon:{
    position: 'absolute',
    left: 15,
    top: 10,
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  warning:{
    position: 'absolute',
    left: 15,
    top: 40,
    fontSize: 10,
    fontFamily: 'Inter_200ExtraLight'
  }
})