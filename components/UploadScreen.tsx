import React, { useEffect, useState } from "react";
import {
  Platform,
  Text, 
  View, 
  Image, 
  TouchableHighlight,
  StyleSheet,
  Dimensions
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import userReducer from "../src/store/reducers/user.reducer";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../src/store/actions/user.actions";
import { withTheme } from "@rneui/themed";
import firebaseConfig from "../entities/firebaseConfig";
import { User } from "../entities/User";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

initializeApp(firebaseConfig);

export default function UploadScreen(probs: any) {
  const dispatch = useDispatch(); // hook to get
  const user = useSelector((state: any) => state.user.loggedInUser);
  const token = useSelector((state: any) => state.user.idToken);
  const [photoUrl, setphotoUrl] = React.useState(user.photoUrl)
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const storage = getStorage(); //the storage itself
      const uri = result.uri; //full uri of the image

      const lastIndex = uri.lastIndexOf("/"); //getting the last / in the path of the uri
      const length = uri.length; //getting the last index of the uri so we can slice
      const fileName = uri.slice(lastIndex, length); //slicing, to recieve the image file name so we can store it in our firebase storage
      const reference = ref(storage, fileName); //how the image will be addressed inside the storage
      
      //convert image to array of bytes
      const img = await fetch(result.uri);
      const bytes = await img.blob();
      await uploadBytes(reference, bytes); //upload images
      
      setphotoUrl(fileName) 
      const newUser: User = new User(user.email, user.name, fileName)
      dispatch(updateUser(newUser, token))
      console.log("uploadscreen: ", newUser)
      
    }
  };

  return (
    <View style={styles.uploadImageButton}>
      <TouchableHighlight onPress={pickImage}>
        <Text style={styles.textStyle}>Upload image</Text>
        
      </TouchableHighlight>
    </View> 
  );
}
const styles = StyleSheet.create({
    uploadImageButton: {
        position:"absolute",
        right: Dimensions.get("window").width-160,
        bottom: Dimensions.get("window").height-220,
        backgroundColor: '#003399', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: 100,
        height: 30,
        borderRadius: 15
    },
    textStyle:{
        color: "white",
    }
});