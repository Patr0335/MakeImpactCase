import React, { useEffect } from "react";
import {
  Platform,
  Text, 
  View, 
  Image, 
  TouchableHighlight
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARVBYF9aJs_TJeEv7aXAvcn37PBVlN8tM",
  authDomain: "youonlydicetwice.firebaseapp.com",
  databaseURL: "https://youonlydicetwice-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "youonlydicetwice",
  storageBucket: "youonlydicetwice.appspot.com",
  messagingSenderId: "617006067367",
  appId: "1:617006067367:web:c70aeba0ee39963d60f582",
  measurementId: "G-B9MW0YC1QQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

initializeApp(firebaseConfig);

export default function UploadScreen(probs: any) {
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
      const fileExtension = uri.slice(lastIndex, length); //slicing, to recieve the image file name so we can store it in our firebase storage
      const reference = ref(storage, fileExtension); //how the image will be addressed inside the storage

      //convert image to array of bytes
      const img = await fetch(result.uri);
      const bytes = await img.blob();

      
      await uploadBytes(reference, bytes); //upload images
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
      <TouchableHighlight onPress={pickImage}>
        <Text>select image</Text>
      </TouchableHighlight>
    </View> 
  );
}