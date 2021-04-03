import * as React from 'react';
import { StyleSheet } from 'react-native';
import Button from '../components/Button';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  function buttonClicked(){
    console.log("Button clicked");
  }

  return (
    <View style={styles.container}>
      <Button
        text = "Add program"
        onPress = {() => buttonClicked()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
