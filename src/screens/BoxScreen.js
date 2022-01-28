import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.parentStyle} >
            <View style={styles.textOneStyle} >
         
            </View>
            <View style={styles.textTwoStyle} >
           
            </View>
            <View style={styles.textThreeStyle} >
           
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 4,
        borderColor: 'black',
        height: 200,
     //   alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textOneStyle: {
      //  borderWidth: 4,
      //  borderColor: 'red',
       // flex: 4,
       // margin: 20,
       height: 50,
       width: 50,
       backgroundColor: 'red',
     //  alignSelf: 'flex-start'
    },
    textTwoStyle: {
      //  borderWidth: 4,
      //  borderColor: 'red',
       // position: 'absolute',
      //  fontSize: 18,
        // top: 0,
        // right: 0,
        // left: 0,
        // bottom : 0,
     //   ...StyleSheet.absoluteFillObject
       // flex: 2
       // margin: 20,
       height: 50,
       width: 50,
       backgroundColor: 'green',
       marginTop: 50,
      // al
    },
    textThreeStyle: {
      //  borderWidth: 4,
      //  borderColor: 'red',
       // flex: 4
       // margin: 20,
       height: 50,
       width: 50,
       backgroundColor: 'purple',
     //  alignSelf: 'flex-start'
    },
});

export default BoxScreen;