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

import Input from '../../components/Input'


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
        
        <Input
            placeholderContent="Your email"
            content={email}
            setContent={setEmail}
            error={errorMail}
            icon={require("../../assets/mail.png")}
            warning="Please enter a valid email address"
          />

          <Input
            placeholderContent="username"
            content={username}
            setContent={setUsername}
            error={errorUser}
            icon={require("../../assets/user.png")}
            warning="Please enter a valid username."
          /> 

          <Input
            placeholderContent="Your password"
            content={password}
            setContent={setPassword}
            error={errorPassword}
            icon={require("../../assets/lock.png")}
            warning="Please enter a valid password."
          />     

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
})