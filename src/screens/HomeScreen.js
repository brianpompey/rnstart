import React from 'react';
import { Text, StyleSheet, View, Button, Pressable, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {


  return (
    <View>
      <Text style={styles.text}>Hello WOrld</Text>


      <Pressable onPress={() => navigation.navigate('Components')}>
        <Text style={styles.pressableText}>Go to Components Demo</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('List')}>
        <Text style={styles.pressableText}>Go to List demo</Text>
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
