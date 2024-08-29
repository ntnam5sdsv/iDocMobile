import React, { useEffect , useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
const SplashScreen = ({}) => {
    const image = require("./images/background.jpg");
    const logo = require("./images/logo.png");
    const [isLoadScreen, setIsLoadScreen] = useState(false);
    // setTimeout(()=>{setIsLoadScreen(true)}, 10000);
    // useEffect(()=> navigation.navigate('LoginScreen'), [isLoadScreen]);
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={StyleSheet.insideContainer}>
          <View style={styles.logoContainer}>
            <Image  source={logo} resizeMode='contain' style={StyleSheet.logo} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text} >BAN CƠ YẾU CHÍNH PHỦ</Text>
            <View style={styles.animationArea}>
              <View style={styles.square}>
              </View>
              <View style={styles.square}>
              </View>
              <View style={styles.square}>
              </View>
              <View style={styles.square}>
              </View>
              <View style={styles.square}>
              </View>
              {/* <Text style={styles.animation}>Loading...</Text> */}
            </View>
          </View>
        </View>
    </ImageBackground>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    image: {
        justifyContent: 'center',
        alignItems:'center'
      },
      insideContainer: {
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
      },
      logoContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:'center'
      },
      textContainer:{
        flex: 1,
      },
      text:{
        width: '100%',
        color: 'red',
        fontWeight: 'bold',
        shadowColor: "#b43800",
        fontSize: 25,
        textAlign: 'center',
        marginTop: '10%',
        shadowOpacity: 0.3,
        shadowColor: 'yellow'
      },
      animation:{
        marginTop: '10%',
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: '30%',
      },
      animationArea:{
        marginTop: '20%',
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      square: {
        width: 20,
        height: 20,
        backgroundColor: "#98e9d7",
      },
})