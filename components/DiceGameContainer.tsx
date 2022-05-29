import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

//defines the parameters for our Box component, and defines their types
const Box = ({ title, img, onPress, style }:
    { title: string, img: any, onPress: any, style: any }) => {

        return (
        <View style={[styles.imageBox, style]}>
            <ImageBackground
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
};


const styles = StyleSheet.create({
    imageBox: {
        borderRadius: 6,
        overflow: "hidden",
        width: 300,
        height: 150,
        marginTop: 10,
        marginBottom: 10,
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