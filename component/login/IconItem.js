import { StyleSheet } from 'react-native'
import React from 'react'
import { MaterialIcons} from '@expo/vector-icons';

export default function IconItem({name, size, color}) {
  return (
    <MaterialIcons name={name}  size={size} color={color} />
  )
}

const styles = StyleSheet.create({

})