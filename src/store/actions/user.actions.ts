import { firebaseSignupSuccess } from "../../../entities/firebaseSignupSuccess";
import { User } from "../../../entities/User";

export const SIGNUP = "SIGNUP";
export const LOGOUT = 'LOGOUT';
export const LOGIN = "LOGIN";
export const UPDATE_USER = 'UPDATE_USER';


const APIKEY = "AIzaSyARVBYF9aJs_TJeEv7aXAvcn37PBVlN8tM"

export const updateUser = (user: User, idToken: string) => {  
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
            dispatch({type: UPDATE_USER, payload: { user, idToken}})
        }
    };
}

export const logout = () => {

    return { type: LOGOUT }
}

export const login = (email : string, password : string) => {
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
             
            dispatch({type: LOGIN, payload: { email: data.email, displayName: data.displayName, idToken: data.idToken, photoUrl: data.profilePicture }})
        }
    };
 };


export const signup = (email : string, password : string) => {
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

           dispatch({type: SIGNUP, payload: {email: data.email, idToken: data.idToken}})
       }
   };
};