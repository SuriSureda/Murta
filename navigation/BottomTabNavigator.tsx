import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, ViewProps } from '../components/Themed';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList} from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  
  const colorScheme = useColorScheme();
  const styles = StyleSheet.create({
    container : {
      backgroundColor : Colors[colorScheme].background,
      height : "8%",
    }
  });

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, showLabel :false, style : styles.container}}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="person" color={color} focused={focused}/>,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="home" color={color} focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="calendar" color={color} focused={focused}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string; focused : boolean }) {

  const size : number = props.focused ? 32 : 25
  const colorScheme = useColorScheme();
  const tabStyle = StyleSheet.create({
    container : {
      display : "flex",
      height : "100%",
      width : "40%", 
      alignItems : "center"
    },
    line : {
      backgroundColor : props.focused ? Colors[colorScheme].tabIconSelected : Colors[colorScheme].background, 
      height : "10%",
      marginBottom : "5%",
      width : "100%",
      borderRadius: 10000
    }
  })

  return (
    <View style = {tabStyle.container}>
      <View style = {tabStyle.line}/>
      <Ionicons size={size} style={{ marginBottom: -3 }} {...props}/>
    </View>
    
  )
}

