import React from 'react';
import { Text, StyleSheet, View, Button, Pressable, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello WOrld</Text>
      <Button 
        onPress={() => console.log("BUtton pressed")}
        title="Go to Components Demo"
      />
      <TouchableOpacity>
        <Text>Go to list demo</Text>
      </TouchableOpacity>
      <Pressable onPress={() => console.log("BUtton pressed")}>
        <Text>Go to new demo</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
