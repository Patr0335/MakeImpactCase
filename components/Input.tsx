import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';



const Input = ({ title, inputValue, error, setText }:
    { title: string, inputValue: string, error: string, setText: (i: string) => void }) => {

    const [entered, setEntered] = useState(false)

    const handleChangeText = (input: string) => {
        setText(input);
        setEntered(true);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{title}</Text>
            <TextInput style={styles.inputStyle} value={inputValue} onChangeText={handleChangeText} onBlur={() => setEntered(true)} />
            {inputValue === '' && entered ? <Text>{error}</Text> : <></>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor: '#fff',
        justifyContent: 'center',
        
        minHeight:Dimensions.get('window').height-600,
        width: Dimensions.get('window').height-400,
        margin: 10,
        borderRadius:10, 
    
    },
    textTitle: {
        position: "absolute", 
        top: 1,
        marginLeft: 5,
        fontWeight: "bold",
    },
    inputStyle: {
        marginLeft: 5,
        fontFamily: "serif",
        position: "absolute",
        bottom: 20,
        fontSize: 20,
        
    }
})

export default Input;