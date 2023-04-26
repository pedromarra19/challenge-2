import React, {useState} from 'react';
import {
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TextInput, 
  TouchableOpacity, 
} from 'react-native';

import {useFonts} from 'expo-font'

import {Khula_300Light} from '@expo-google-fonts/khula'
import {Inter_200ExtraLight} from '@expo-google-fonts/inter'

import Footer from '../../components/Footer'


export default function SignUp() {
  
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [errorMail, setErrorMail] = useState(false)
  const [errorUser, setErrorUser] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)

  const[isSelected, setSelection] = useState(false)


  function handleLogin(){

    if(email == ''){
        setErrorMail(true)
    }
    else{setErrorMail(false)}

    if (username == ''){
        setErrorUser(true)
    }
    else{setErrorUser(false)}

    if (password == ''){
        setErrorPassword(true)
    }
    else{setErrorPassword(false)}

    return;
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

      <Text style={styles.title}>SIGN UP</Text>

      <View style={styles.inputContainer}>
        
        <View style={[styles.inputStyle, {borderColor: errorMail ? '#FF4B4B' : '#656262'}, {borderWidth: 0.5}]}>

          <Image  style={styles.inputIcon} source={require('../../assets/mail.png')}/>
          <TextInput
            placeholder="Your email"
            style={styles.input}
            placeholderTextColor="#A8A8A8"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={[styles.warning, {color: errorMail ? '#FF4B4B' : '#2D2D2D'}]}>
            Please enter a valid amail address.</Text>
        </View>

        <View style={[styles.inputStyle, {borderColor: errorUser? '#FF4B4B' : '#656262'}, {borderWidth: 0.5}]}>
          <Image  style={styles.inputIcon} source={require('../../assets/user.png')}/>
          <TextInput
            placeholder="username"
            style={styles.input}
            placeholderTextColor="#A8A8A8"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={[styles.warning, {color: errorUser ? '#FF4B4B' : '#2D2D2D'}]}>
            Please enter a valid username.</Text>
        </View>

        <View style={[styles.inputStyle, {borderColor: errorPassword ? '#FF4B4B' : '#656262'}, {borderWidth: 0.5}]}>
          <Image  style={styles.inputIcon} source={require('../../assets/lock.png')}/>
          <TextInput
            placeholder="Your Password"
            style={styles.input}
            placeholderTextColor="#A8A8A8"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
            <Text style={[styles.warning, {color: errorPassword ? '#FF4B4B' : '#2D2D2D'}]}>
            Please enter a valid password.</Text>
        </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
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