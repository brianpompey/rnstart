import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const name = 'Brian';

    return(
        <View>
            <Text style={styles.textStyle}> Getting started with react native! </Text>
            <Text style={styles.textStyle2}> My name is {name} </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40
    },
    textStyle2: {
        fontSize: 20
    }
});

export default ComponentsScreen;