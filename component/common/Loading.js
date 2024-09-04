import { StyleSheet, ActivityIndicator, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
     <ActivityIndicator size="large" color="#00ff00" />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center', 
        alignItems: 'center'
    }
})