import {getStorage, ref, getDownloadURL} from 'firebase/storage';
import firebaseConfig from "../entities/firebaseConfig";
import { initializeApp } from "firebase/app";
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet } from "react-native";
initializeApp(firebaseConfig)


export default function GetProfilePicture() {
  const user = useSelector((state: any) => state.user.loggedInUser);
  const [url, setUrl] = useState();

  useEffect(() => {
    const func = () => {
      const storage = getStorage();
      const reference = ref(storage, '/' + user.photoUrl)
      getDownloadURL(reference).then((result:any) => {
         //console.log("se her",result) 
        setUrl(result);
      })
      
    }
    if(user) {func()}
  })
 
  return(
    <Image source={{ uri: url }} style={styles.imageStyle} />
  )
}


const styles = StyleSheet.create({
imageStyle:{
    height: 140, 
    width: 140,
    // position: "absolute",
    // top:20,
    // right: Dimensions.get("window").width - 350,
    borderRadius: 80,
    

  },
})