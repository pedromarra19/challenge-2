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
import CheckBox from '../../components/CheckBox'

import { AntDesign } from '@expo/vector-icons';

export default function SignUp(props) {
  
  const [email, setEmail] = useState<String>('')
  const [username, setUsername] = useState<String>('')
  const [password, setPassword] = useState<String>('')
  const[isSelected, setSelection] = useState<Boolean>(false)

  const [errorMail, setErrorMail] = useState<Boolean>(false)
  const [errorUser, setErrorUser] = useState<Boolean>(false)
  const [errorPassword, setErrorPassword] = useState<Boolean>(false)
  const [errorCheckBox, setErrorCheckBox] = useState<Boolean>(false)



  function handleLogin(){

    if(email == '' || username == '' || password == '' || isSelected == false){

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
        
        if (isSelected == false){
          setErrorCheckBox(true)
        }
        else{setErrorCheckBox(false)}
    }
  else{props.navigation.navigate("Home")}
    return;
  }

  function signInScreen<VoidFunction>(){
    props.navigation.navigate("SignIn")
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

      <TouchableOpacity style={styles.arrow} onPress={signInScreen}>
        <AntDesign  name="arrowleft" size={40} color='#D78F3C' />
      </TouchableOpacity>

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

          <CheckBox
            setValue={isSelected}
            setValueChange={setSelection}
            error={errorCheckBox}
          />     

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
      </View>

      <Footer 
        textButton="Sign In"
        setOnPress={signInScreen}
      />
 
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
  arrow:{
    position: 'absolute',
    top: 55,
    left: 15
  },
  title:{
    marginTop: 50,
    marginBottom: 80,
    fontFamily: 'Khula_300Light',
    color: '#D78F3C',
    fontSize: 36,
    fontWeight: 700,
  },
  
  inputContainer:{
    width: '95%',
    justifyContent: 'center',
    paddingVertical: 32,
    paddingHorizontal: 14,
    alignItems: 'center'
  },

  button:{
    width: '95%',
    height: 40,
    backgroundColor: '#D78F3C',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    margin:60
  },
  buttonText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DBDBDB',
    fontFamily: 'Inter_200ExtraLight'
  },

})