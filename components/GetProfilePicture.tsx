import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import firebaseConfig from "../entities/firebaseConfig";
import { initializeApp } from "firebase/app";
import { useSelector } from "react-redux";
import { Image, StyleSheet } from "react-native";

// Initialize Firebase to connect to firebase Storage
initializeApp(firebaseConfig);

export default function GetProfilePicture() {
  //get our currently logged on user
  const user = useSelector((state: any) => state.user.loggedInUser);
  const [url, setUrl] = useState();


  //When you call useEffect, you’re telling React to run your “effect” function after flushing changes to the DOM
  useEffect(() => {
    const showProfilePicture = () => {
      //getting the connection to our storage in our firebase
      const storage = getStorage();
      //takes the storage connection with our photourl to get the image.
      const reference = ref(storage, "/" + user.photoUrl);
      getDownloadURL(reference).then((result: any) => {
        //then we set the url, so we can pass the constant url to our image component which this function returns.
        setUrl(result);
      });
    };
    if (user) {
      showProfilePicture();
    }
  });

  return <Image source={{ uri: url }} style={styles.imageStyle} />;
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 140,
    width: 140,
    borderRadius: 80,
  },
});
