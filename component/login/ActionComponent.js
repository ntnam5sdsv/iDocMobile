import { StyleSheet, Text, TouchableOpacity, Icon, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons} from '@expo/vector-icons';

export default function ActionComponent({iconName, contentLabel}) {
  return (
    <TouchableOpacity style= {styles.container} onPress={()=> {console.log("Press  "+ contentLabel)}}>
      <View style={styles.iconWrapper}>
      <MaterialCommunityIcons name={iconName}  size={45} color={"#666666"} />
      </View>
      <Text style={styles.text}>{contentLabel}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        width: '20%'
    },
    text:{
        marginTop: 10,
        textAlign:'center',
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
    },
    iconWrapper:{
      width: 70,
      height: 70,
      borderRadius: 70/2,
      borderWidth: 2,
      borderColor: '#666666',
      justifyContent: 'center',
      alignItems: 'center',
  }
})