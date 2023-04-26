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

import {Khula_300Light} from '@expo-google-fonts/khula'
import {Inter_200ExtraLight} from '@expo-google-fonts/inter'

import Footer from '../../components/Footer'


export default function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(){
    if(email == '' || password == ''){
      return(
        <Text>ERRO</Text>
      )
    }
  }


    const [fontLoaded] = useFonts({
      Khula_300Light,
      Inter_200ExtraLight
    });

    if(!fontLoaded){
      return null;
    }


 
  return (
    
    <View style={styles.container}>

      <Text style={styles.title}>WELCOME</Text>

      <View style={styles.inputContainer}>
        
        <View style={styles.inputStyle}>

          <Image  style={styles.inputIcon} source={require('../../assets/mail.png')}/>
          <TextInput
            placeholder="Your email"
            style={styles.input}
            placeholderTextColor="#A8A8A8"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputStyle}>
        <Image  style={styles.inputIcon} source={require('../../assets/lock.png')}/>
          <TextInput
            placeholder="Your Password"
            style={styles.input}
            placeholderTextColor="#A8A8A8"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            />
        </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
      </View>

      <Footer/>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#2D2D2D'
  },
  title:{
    marginBottom: 100,
    fontFamily: 'Khula_300Light',
    color: '#D78F3C',
    fontSize: 36,
    fontWeight: 700,
  },
  
  inputContainer:{
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14,
  },
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
  button:{
    width: '95%',
    height: 40,
    backgroundColor: '#D78F3C',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DBDBDB',
    fontFamily: 'Inter_200ExtraLight'
  },
  inputIcon:{
    position: 'absolute',
    left: 12,
    top: 7,
    width: 26,
    height: 26,
    resizeMode: 'contain'
  }
})