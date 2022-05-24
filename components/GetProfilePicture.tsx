import {getStorage, ref, getDownloadURL} from 'firebase/storage';
import firebaseConfig from "../entities/firebaseConfig";
import { initializeApp } from "firebase/app";
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet } from "react-native";
initializeApp(firebaseConfig)


export default function GetProfilePicture() {
  const user = useSelector((state: any) => state.user.loggedInUser);
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState();

  useEffect(() => {
    const func = async () => {
      const storage = getStorage();
      const reference = ref(storage, '/' + user.photoUrl)
      await getDownloadURL(reference).then((result) => {
        return setUrl(result);
      })
      setLoading(false)
    }
    if(url===undefined) {func()}
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