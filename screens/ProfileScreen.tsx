import * as React from 'react';
import { StyleSheet } from 'react-native';
import { MyText } from '../components/MyText';

import { View } from '../components/Themed';

export default function ProfileScreen() {


  return (
    <View style={styles.container}>
      <MyText>ProfileScreen</MyText>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

