import React, {SetStateAction, useState} from 'react';
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

import Checkbox from 'expo-checkbox'; 

export default function CheckBox({setValue, setValueChange, error}){



    return(

        <View style={styles.container}>
            <Checkbox
                style={[styles.checkBox, {borderColor: error ? '#FF4B4B' : '#2D2D2D'}, {borderWidth: 0.5}]}
                value={setValue} 
                onValueChange={setValueChange}
                color={setValue ? '#D78F3C' : undefined} 
            />
            <Text style={styles.description}>Agree To <Text style={styles.underlined}>Terms And Conditions</Text>
            </Text>

            <Text style={[styles.warning, {color: error ? '#FF4B4B' : '#2D2D2D'}]}>Please accept the terms.</Text>
        </View>

    ) 
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    checkBox:{
        marginTop: 10,
        marginLeft: -105,
        borderRadius: 6,
        backgroundColor: '#D9D9D9'
    },
    description:{
        color: '#F5F5F5',
        fontSize: 11,
        marginTop: 11,
        marginLeft: 10,
    },
    underlined:{
        textDecorationLine: 'underline'
    },
    warning:{
        position: 'absolute',
        left: -105,
        top: 30,
        fontSize: 10,
        fontFamily: 'Inter_200ExtraLight'
      }
})