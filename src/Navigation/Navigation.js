import * as React from 'react';
import Item from '../Screens/Item';
import Chicken_Recipe from '../Screens/Chicken_Recipe';
import Egg_Recipe from '../Screens/Egg_Recipe';
import Milk_Recipe from '../Screens/Milk_Recipe';
import Fish_Recipe from '../Screens/Fish_Recipe';
import { View, Image } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();

function DrawerContent(props) {
  return (
    <DrawerContentScrollView style= {props}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      </View>
      <View style={{ flex: 4 }}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

export default function MyDrawer(){
  return (  
      <Drawer.Navigator screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: '#6ACC00',
      drawerInactiveBackgroundColor: '#f5f5f5',
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor: 'black',
      swipeEdgeWidth: 1,
      }}
      initialRouteName={'DashBoard'}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Recipes" component={Item} options={{
        headerShown: true }} />  
      <Drawer.Screen name="Chicken_Recipe" component={Chicken_Recipe} options={{
        headerShown: true }} />
      <Drawer.Screen name="Egg_Recipe" component={Egg_Recipe} options={{
        headerShown: true }} />
      <Drawer.Screen name="Milk_Recipe" component={Milk_Recipe} options={{
        headerShown: true }} />
      <Drawer.Screen name="Fish_Recipe" component={Fish_Recipe} options={{
        headerShown: true }} />  
      {/* <Drawer.Screen name="Logout" component={Login}/> */}
      </Drawer.Navigator>
  );
}

      
