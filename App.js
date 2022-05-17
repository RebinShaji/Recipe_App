import * as React from 'react';
//import Splash_Screen from './src/Splash_Screen/Splash_Screen';
//import SignUp from "./src/Screens/SignUp";
// import Login from "./src/Screens/Login";
import Navigation from "./src/Navigation/Navigation"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
      <NavigationContainer>
        <Stack.Navigator>
             {/* <Stack.Screen name="Splash_Screen" component={Splash_Screen} options={{
        headerShown: false
      }}/> */}
             {/* <Stack.Screen name="Login" component={Login} options={{
        headerShown: false
      }}/> */}
             {/* <Stack.Screen name="SignUp" component={SignUp} options={{
        headerShown: false
      }}/> */}
             <Stack.Screen name="Navigation" component={Navigation} options={{
        headerShown: false
      }}/>
        </Stack.Navigator>
      </NavigationContainer>
  ) ;
}