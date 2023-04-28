import React, {useState} from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  FlatList,
  SafeAreaView 
} from 'react-native';


import {useFonts} from 'expo-font'
import {Inter_200ExtraLight} from '@expo-google-fonts/inter'

interface items {
    id: string;
}


const itemsData = {
        items:[
        {
            id: '1'
        },  
        {
            id: '2'
        },
        {
            id: '3'
        },
        {
            id: '4'
        },
        {
            id: '5'
        },
        {
            id: '6'
        },
        {
            id: '7'
        },
        {
            id: '8'
        }
    ]
}


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
            <SafeAreaView style={{flex: 1}}>       
                <View style={styles.list}>
                    <FlatList

                        data={itemsData.items}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=><TouchableOpacity style={styles.button}/>}
                        numColumns={2}
                        onEndReachedThreshold={0.1}
                        showsVerticalScrollIndicator={false}
                        />
                </View>
            </SafeAreaView>
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