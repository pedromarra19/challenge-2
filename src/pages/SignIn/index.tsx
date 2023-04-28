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


export default function SignIp(props) {
  
  const [email, setEmail] = useState<String>('')
  const [password, setPassword] = useState<String>('')

  const [errorMail, setErrorMail] = useState<Boolean>(false)
  const [errorPassword, setErrorPassword] = useState<Boolean>(false)


  function handleLogin(){
    if(email == '' || password == ''){

        if(email == ''){
          setErrorMail(true)
        }
        else{setErrorMail(false)}
        
        if (password == ''){
          setErrorPassword(true)
        }
        else{setErrorPassword(false)}
        
    }
    else{ props.navigation.navigate("Home") }

    return;
  }

  function signUpScreen<VoidFunction>(){
    props.navigation.navigate("SignUp")
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

      <Text style={styles.title}>WELCOME</Text>

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
            placeholderContent="Your password"
            content={password}
            setContent={setPassword}
            error={errorPassword}
            icon={require("../../assets/lock.png")}
            warning="Please enter a valid password."
          />     

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>LOGIN</Text>
            
          </TouchableOpacity>
      </View>

      <Footer 
        textButton="Sign Up"
        setOnPress={signUpScreen}/>
 
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