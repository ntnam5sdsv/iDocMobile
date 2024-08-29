import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Button} from 'react-native';
import LoginScreen from './component/login/LoginScreen';
import SplashScreen from './component/login/SplashScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import TabBarScreen from './component/login/TabBarScreen';


const Stack = createNativeStackNavigator();
export default function App (){
  function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Home Screen</Text>
          <Button title='Go to Details' onPress={() => navigation.navigate('Details') }/> 
        </View>

    );
  }

  function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

  return (
    // <SafeAreaView style={styles.container}>
    //   <SplashScreen/>
    //   {/* <LoginScreen /> */}
    // </SafeAreaView>

    // <NavigationContainer>    
    //   <Stack.Navigator initialRouteName='Home'>
    //     <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
    //     <Stack.Screen name="Details" component={DetailsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <SafeAreaView style={styles.container}>
      <TabBarScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
