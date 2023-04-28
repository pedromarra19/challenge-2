import React from 'react';

import { 
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
 } from 'react-native';

 import {useFonts, Inter_200ExtraLight} from '@expo-google-fonts/inter'


 export default function Footer({textButton, setOnPress}, props){

    const [fontLoaded] = useFonts({
        Inter_200ExtraLight,
    });

    if(!fontLoaded){
        return null;
    }


    return(
        <View style={styles.container}>
            <View style={styles.border}/>

            <View style={styles.textContainer}>
                <Text style={styles.footer}>Don't have an account? </Text>
                <TouchableOpacity onPress={setOnPress}><Text style={styles.signUp}>{textButton}</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',  
    },
    border:{
        borderTopWidth: 0.3,
        borderColor: '#D78F3C',
        paddingHorizontal: 200
    },
    textContainer:{
        flexDirection: 'row',
        padding: 10
    },
    footer:{
        height: 40,
        fontFamily: 'Inter_200ExtraLight',
        fontSize: 16,
        color: '#F5F5F5',
    },
    signUp:{
        color: '#D78F3C',
        fontSize: 16,
        fontFamily: 'Inter_200ExtraLight',
    }
    
})