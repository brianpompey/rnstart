import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const ColorCounter = ({ color }) => {
    return(
        <View>
            <Text>{color}</Text>
            <Button title="Increase Red" />
            <Button title="Decrease Red" />
        </View>
    )
}

const styles = StyleSheet.create({});

export default ColorCounter;