import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../entities/User";
import { updateUser } from "../src/store/actions/user.actions";
import {
  Platform,
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Dimensions
} from "react-native";
import * as ImagePicker from 'expo-image-picker';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import firebaseConfig from "../entities/firebaseConfig";


// Initialize Firebase
initializeApp(firebaseConfig);

export default function UploadScreen() {
  const dispatch = useDispatch(); // hook to get
  const user = useSelector((state: any) => state.user.loggedInUser);
  const token = useSelector((state: any) => state.user.idToken);
  //Here we use the usestate which is another hook. 
  const [photoUrl, setphotoUrl] = React.useState(user.photoUrl)
  
  useEffect(() => {
    (async () => {

      // Asks for permission on your device for photo library
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
      
      //defines which kind of media that can be selected from you library - this case only images
      mediaTypes: ImagePicker.MediaTypeOptions.Images, 

      //Allows user to crop and specify the area of the picture that are selected
      allowsEditing: true, 

      //aspect of the picture
      aspect: [4, 3],

      //quality = 1 compressed for maximum quality, 0 compressed for small size
      quality: 1,
    });

    if (!result.cancelled) {

      //the storage itself
      const storage = getStorage(); 

      //full uri of the image
      const uri = result.uri; 

      //getting the last / in the path of the uri
      const lastIndex = uri.lastIndexOf("/"); 

      //getting the last index of the uri so we can slice
      const length = uri.length; 

      //slicing, to recieve the image file name so we can store it in our firebase storage and our user photoUrl
      const fileName = uri.slice(lastIndex, length); 

      //reference to firestore and picture
      const reference = ref(storage, fileName); 
      

      //convert image to array of bytes
      const img = await fetch(result.uri);
      const bytes = await img.blob();
      //upload images
      await uploadBytes(reference, bytes); 

      //set photourl to user with our sliced constant and updating the user
      setphotoUrl(fileName)
      const newUser: User = new User(user.email, user.name, fileName)
      dispatch(updateUser(newUser, token))

    }
  };

  return (
    <View style={styles.uploadImageButton}>
      <TouchableHighlight onPress={pickImage}>
        <Text style={styles.textStyle}>Upload image</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  uploadImageButton: {
    position: "absolute",
    right: Dimensions.get("window").width - 160,
    bottom: Dimensions.get("window").height - 290,
    backgroundColor: '#003399',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    borderRadius: 15
  },
  textStyle: {
    color: "white",
  }
});