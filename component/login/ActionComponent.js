import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import IconItem from './IconItem';
import { MaterialIcons} from '@expo/vector-icons';

export default function ActionComponent({urlIcon, contentLabel}) {
  console.log(urlIcon);
  return (
    <TouchableOpacity style= {styles.container} onPress={()=> {console.log("Press  "+ props.contentLabel)}}>
      <View style={styles.iconWrapper}>
        <Image  source={require("./images/icon_add.png")} resizeMode = 'contain' size={10}/>
      </View>
      <Text style={styles.text}>{contentLabel}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        marginTop: 10,
        textAlign:'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
    }, iconWrapper:{
        width: 60,
        height: 60,
        borderRadius: 60/2,
        borderWidth: 2,
        borderColor: '#B7B7B7',
        justifyContent: 'center',
        alignItems: 'center'
    }
})