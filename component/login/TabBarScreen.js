import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider, useSafeAreaInsets,} from 'react-native-safe-area-context';
import React, { useState } from 'react'
import LoginScreen from './LoginScreen';
import IconItem from './IconItem';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();
export default function TabBarScreen() {

    const [numberNoti, setNumberNoti] = useState(3);

  return (
    <SafeAreaProvider>
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen}  
                options={{
                    tabBarLabel: "Trang chủ",
                    tabBarLabelStyle: {fontSize: 13,},
                    tabBarIcon: () => (
                        <IconItem name={"home"} size={35} color={"#666666"}/>
                      ),
                }}
            />
            <Tab.Screen name="Calender" component={LoginScreen} 
                options={{
                    tabBarLabel: "Lịch công tác",
                    tabBarLabelStyle: {fontSize: 13,},
                    tabBarIcon: () => (
                        <IconItem name={"event"} size={35} color={"#666666"}/>
                      ),
                }}
            />
            <Tab.Screen name="Notify" component={LoginScreen} 
                options={{
                    tabBarLabel: "Thông báo",
                    tabBarLabelStyle: {fontSize: 13,},
                    tabBarIcon: () => (
                        <IconItem name={"notifications"} size={35} color={"#666666"}/>
                      ),
                      tabBarBadge: numberNoti
                }}
            />
            <Tab.Screen name="Settings" component={LoginScreen} 
                options={{
                    tabBarLabel: "Cài đặt",
                    tabBarLabelStyle: {fontSize: 13,},
                    tabBarIcon: () => (
                        <IconItem name={"engineering"} size={35} color={"#666666"}/>
                      ),
                }}
            />
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
    
  )
}

const styles = StyleSheet.create({
    label:{
        fontSize: 20,
    }
})