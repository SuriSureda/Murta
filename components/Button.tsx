import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Pressable} from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import {ButtonParamList as ButtonProps} from '../types';
import { MyTextBold } from './MyText';

const Button = (props: ButtonProps) => {

    const colorScheme = useColorScheme();

    const [pressed,setPressed] = useState(false);

    return (
        <View style={styles.container}>
            <Pressable style= {styles.pressable} android_disableSound = {true} onPress = {props.onPress} 
                onPressIn = {() => setPressed(true)}
                onPressOut = {() => setPressed(false)}
            >
            <LinearGradient
            colors ={pressed ?  [Colors.red, Colors.red] : [Colors.orange, Colors.red]}
            style = {styles.gradient}>
                <MyTextBold style = {styles.text} numberOfLines = {1}>{props.text}</MyTextBold>
            </LinearGradient>
            </Pressable>
        </View>
    );
};

export default Button;


const styles = StyleSheet.create({
    container: {},
    gradient : {
        alignSelf : "flex-start",
        paddingVertical : 20,
        paddingHorizontal : 40,
        borderRadius : 2000
    },
    pressable : {
        borderRadius : 1000
    },
    text : {
        textAlignVertical : "center",
        textAlign : "center",
        fontSize : 20, 
        color : Colors.white
    }

});
