import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { View } from '../components/Themed';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList, MainTabParamList, ProfileTabParamList} from '../types';
import MainScreen from '../screens/MainScreen';
import ProfileScreen from '../screens/ProfileScreen';

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
      initialRouteName="MainTab"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, showLabel :false, style : styles.container}}>
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileTabNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="person" color={color} focused={focused}/>,
        }}
      />
      <BottomTab.Screen
        name="MainTab"
        component={MainTabNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="home" color={color} focused={focused} />,
        }}
      />
      <BottomTab.Screen
        name="RegisterTab"
        component={MainTabNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => <TabBarIcon name="calendar" color={color} focused={focused}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

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
      marginBottom : "20%",
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

const ProfileTabStack = createStackNavigator<ProfileTabParamList>();

function ProfileTabNavigator() {
  return (
    <ProfileTabStack.Navigator>
      <ProfileTabStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown : false }}
      />
    </ProfileTabStack.Navigator>
  );
}

const MainTabStack = createStackNavigator<MainTabParamList>();

function MainTabNavigator() {
  return (
    <MainTabStack.Navigator>
      <MainTabStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{  headerShown : false }}
      />
    </MainTabStack.Navigator>
  );
}

