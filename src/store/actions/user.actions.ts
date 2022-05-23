import * as SecureStore from 'expo-secure-store';
import { firebaseSignupSuccess } from "../../../entities/firebaseSignupSuccess";
import { User } from "../../../entities/User";

export const SIGNUP = "SIGNUP";
export const LOGOUT = 'LOGOUT';
export const LOGIN = "LOGIN";
export const UPDATE_USER = 'UPDATE_USER';
export const REHYDRATE_USER = 'REHYDRATE_USER';

export const rehydrateUser = (user: User, idToken: string) => {
    return { type: REHYDRATE_USER, payload: { user, idToken } }
}

export const updateUser = (user: User, idToken: string) => {
    const APIKEY = "AIzaSyARVBYF9aJs_TJeEv7aXAvcn37PBVlN8tM"
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:update?key=" + APIKEY
     return async (dispatch: any) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json string
                //key value pairs of data you want to send to server
                // ...
                idToken: idToken,
                email: user.email,
                displayName: user.displayName,
                photoUrl: user.photoUrl,
                returnSecureToken: true 
            })
        });
        if (!response.ok) {
            //There was a problem..
            console.log("Something went wrong in updating the displayName")
        } else {
            const data = await response.json(); // json to javascript
            // SecureStore.setItemAsync("displayName", data.displayName);
            dispatch({type: UPDATE_USER, payload: { user, idToken}})
        }
    };
}

export const logout = () => {
    SecureStore.deleteItemAsync('idToken'); 
    SecureStore.deleteItemAsync('user');

    return { type: LOGOUT }
}

export const login = (email : string, password : string) => {
    const APIKEY = "AIzaSyARVBYF9aJs_TJeEv7aXAvcn37PBVlN8tM"
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + APIKEY
     // laver en const som jeg kalder i min fetch forneden
     return async (dispatch: any) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json string
                //key value pairs of data you want to send to server
                // ...
                email: email, 
                password: password,
                returnSecureToken: true
            })
        });
        if (!response.ok) {
            //There was a problem..
        } else {
            const data: firebaseSignupSuccess = await response.json(); // json to javascript
            console.log(data)
            console.log(data.profilePicture)
            
 
 
            dispatch({type: LOGIN, payload: { email: data.email, displayName: data.displayName, idToken: data.idToken, photoUrl: data.profilePicture }})
        }
    };
 };







export const signup = (email : string, password : string) => {
    const APIKEY = "AIzaSyARVBYF9aJs_TJeEv7aXAvcn37PBVlN8tM"
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + APIKEY // laver en const som jeg kalder i min fetch forneden

   return async (dispatch: any) => {
       const response = await fetch(url, {

           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({ //javascript to json
               //key value pairs of data you want to send to server
               // ...
               email: email, 
                password: password,
               returnSecureToken: true //returns ID and refresh token. ALWAYS USE TRUE
           })
       });
 
       if (!response.ok) {
           //There was a problem.. error handling time, BUT I WONT LOL
           console.log("response problem");

       } else {
           const data: firebaseSignupSuccess = await response.json(); // json to javascript

           const user = new User(data.email, '', '');

            // await SecureStore.setItemAsync('idToken', data.idToken);
            // await SecureStore.setItemAsync('user', JSON.stringify(user)); // convert user js-obj. to json

           dispatch({type: SIGNUP, payload: {email: data.email, idToken: data.idToken}})
       }
   };
};