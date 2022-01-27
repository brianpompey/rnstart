import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';


const ColorScreen = () => {
   //  const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title="Add a color" />
            <View 
                style={{ height: 100, width: 100, backgroundColor: 'rgb(0, 255, 0)' }}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ColorScreen;