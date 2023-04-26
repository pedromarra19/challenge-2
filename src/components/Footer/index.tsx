import React from 'react';

import { 
    View,
    Text,
    Image,
    StyleSheet
 } from 'react-native';

 import {useFonts, Inter_200ExtraLight} from '@expo-google-fonts/inter'


 export default function Footer(){

    const [fontLoaded] = useFonts({
        Inter_200ExtraLight,
    });

    if(!fontLoaded){
        return null;
    }


        return(
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Text style={styles.footer}>Don't have an account? 
                        <Text style={styles.signUp}> Sign Up</Text>
                    </Text>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        borderTopWidth: 0.5,
        paddingHorizontal: 100,
        borderColor: '#D78F3C',
        position: 'absolute',
        bottom: 0
    },
    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    footer:{
        color: '#000',
        height: 40,
        fontSize: 30,
        fontFamily: 'Inter_200ExtraLight',
        fontSize: 16,
        color: '#F5F5F5',
    },
    signUp:{
        color: '#D78F3C',
    }
    
})