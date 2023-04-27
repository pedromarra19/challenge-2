import React, {useState} from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  FlatList,
  ScrollView 
} from 'react-native';

import {useFonts} from 'expo-font'
import {Inter_200ExtraLight} from '@expo-google-fonts/inter'


const items=[
    {
        id: '01'
    },
    {
        id: '02'
    },
    {
        id: '03'
    },
    {
        id: '04'
    },
    {
        id: '05'
    },
    {
        id: '06'
    },
    {
        id: '07'
    },
    {
        id: '08'
    }

]


export default function Home(){

    const [fontLoaded] = useFonts({
        Inter_200ExtraLight
      });
  
      if(!fontLoaded){
        return null;
      }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>HOME</Text>   
            <ScrollView showsVerticalScrollIndicator={false}>       
                <View style={styles.list}>
                    <FlatList
                        data={items}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=><TouchableOpacity style={styles.button}/>}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2D2D2D',

    },
    title:{
        color: '#D78F3C',
        fontFamily: 'Inter_200ExtraLight',
        fontSize: 20,
        marginVertical:60,
        marginLeft: 15
    },
    list:{
        alignItems: 'center'
    },
    button:{
        width:150,
        height: 190,
        backgroundColor: 'white',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
})