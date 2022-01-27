import React from 'react';
import { Text, StyleSheet, View, Button, Pressable, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {


  return (
    <View>
      <Text style={styles.text}>Hello WOrld</Text>
      <Button 
        onPress={() => props.navigation.navigate('Components')}
        title="Go to Components Demo"
      />

      <Pressable onPress={() => props.navigation.navigate('List')}>
        <Text style={styles.pressableText}>Go to new demo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  pressableText : {
    fontSize: 60,
    color: 'red'
  }
});

export default HomeScreen;
