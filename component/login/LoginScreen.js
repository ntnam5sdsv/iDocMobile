import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ImageBackground, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen({navigation}
  
) {
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');
  const [showPassword, setShowPassword]= useState(false);

  function toggleShowPassword(){
    setShowPassword(!showPassword);
  }

  function loginHandler(){
    //send request
    console.log("Username: " + username);
    console.log("Password: " + password);
    navigation.navigate("Dashboard");
  }
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.logoContainer}>
        <ImageBackground source={require('./images/background_top.jpg')} resizeMode="cover" style={styles.background}>
          <Image  source={require("./images/logo.png")} resizeMode='contain' style={{marginTop: '10%'}}/>
          <Text style={styles.title}>ban cơ yếu chính phủ</Text>
        </ImageBackground>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.inputArea}>
              <MaterialCommunityIcons name={'account'} size={30} color="#666666" style={{marginLeft: 10}}/>
              <TextInput  style={styles.text}  value={username} onChangeText={(text) => setUsername(text)} placeholder='Tên đăng nhập'  placeholderTextColor={'#777777'} textContentType='nickname' autoComplete='username' maxLength={20}/>
          </View>
          <View style={styles.inputArea}>
              <MaterialCommunityIcons name={'lock'} size={30} color="#666666" style={{marginLeft: 10}}/>
              <TextInput style= {styles.text} value={password} onChangeText={(text) => setPassword(text)} placeholder='Nhập mật khẩu' placeholderTextColor={'#777777'} secureTextEntry={!showPassword} textContentType='password'  maxLength={20}/> 
              <MaterialCommunityIcons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="#666666"
                    style={{marginLeft: 10, marginRight: 10}}
                    onPress={toggleShowPassword}
                />

          </View>
        </View>

        <View style={styles.btnContainer}>          
          <TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
            <Text style={styles.loginText}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fffcf7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoContainer:{
      flex: 1.5,
      width: '100%',
      marginBottom: '10%',
      
    },
    contentContainer:{
      flex: 3,
      width:'80%',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    inputContainer:{
      width: '100%',
    },
    title:{
      width: '100%',
      color: '#ff1d01',
      fontWeight: 'bold',
      fontSize: 25,
      textAlign: 'center',
      marginTop: '10%',
      // shadowOpacity: 0.2,
      // shadowColor:'yellow',
      textTransform:'uppercase'
    },
    inputArea:{
        height: 60, 
        borderWidth: 2,
        borderColor: '#B7B7B7',
        borderRadius: 20, 
        color: '#777777',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text:{
      flex: 6,
      fontSize: 18, 
      alignItems: 'flex-start', 
      fontWeight: 'condensedBold', 
      paddingLeft: 10
    },
    btnContainer:{
      width: '50%',
    },
    loginBtn:{
      width: '100%',
      backgroundColor: '#f32906',
      borderRadius: 30,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: '10%',
    },
    loginText:{
      color: 'white',
      textAlign: 'center',
      fontSize: 20,
    }
})