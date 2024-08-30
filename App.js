import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Button} from 'react-native';
import LoginScreen from './component/login/LoginScreen';
import SplashScreen from './component/login/SplashScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabBarScreen from './component/login/TabBarScreen';


const Stack = createNativeStackNavigator();
export default function App (){
  return (
    <SafeAreaView style={styles.container}>
        <NavigationContainer independent={true}>
        <Stack.Navigator>
          {/*Define our routes*/}
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={TabBarScreen}  options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
