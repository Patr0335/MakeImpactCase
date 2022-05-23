import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';



const Box = ({ title, img, onPress }:
    { title: string, img: any, onPress: any }) => {


    const handleError = (e: { nativeEvent: { error: any; }; }) => { console.log(e.nativeEvent.error); };
    return (
        <View style={styles.imageBox}>
            <ImageBackground
                //onError={handleError}
                source={img}
                style={styles.imageBG}
            >
            <LinearGradient
                colors={["rgba(0,0,0,1)", "transparent"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0.5 }}
            >
                    <TouchableOpacity 
                    style={styles.tOpacity}
                    onPress={onPress}>
                        <Text style={styles.buttonTextStyle}>{title}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}


const styles = StyleSheet.create({


    imageBox: {
        borderRadius: 6,
        overflow: "hidden",
        width: 300,
        height: 150,
        marginTop: 10,
        marginBottom: 10,
        //shadow
        elevation: 20,
        shadowColor: '#171717',
    },
    imageBG: {
        borderRadius: 10,
        overflow: "hidden",
        width: 300,
        height: 150,
    },
    tOpacity: {
        height: 150,
    },
    buttonTextStyle: {
        color: "#fff",
        marginBottom: 4,
        marginLeft: 10,
        position: "absolute",
        left: 5,
        bottom: 10,
        fontWeight: "600",
        fontSize: 22,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
    },

});

export default Box;