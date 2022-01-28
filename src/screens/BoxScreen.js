import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.viewStyle} >
            <Text style={styles.textOneStyle} >
                Child #1
            </Text>
            <Text style={styles.textTwoStyle} >
                Child #2
            </Text>
            <Text style={styles.textThreeStyle} >
                Child #3
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 4,
        borderColor: 'black',
        height: 200,
        alignItems: 'center'
       // flexDirection: 'row'
    },
    textOneStyle: {
        borderWidth: 4,
        borderColor: 'red',
       // flex: 4,
       // margin: 20,
    },
    textTwoStyle: {
        borderWidth: 4,
        borderColor: 'red',
        alignSelf: 'stretch'
       // flex: 2
       // margin: 20,
    },
    textThreeStyle: {
        borderWidth: 4,
        borderColor: 'red',
       // flex: 4
       // margin: 20,
    },
});

export default BoxScreen;