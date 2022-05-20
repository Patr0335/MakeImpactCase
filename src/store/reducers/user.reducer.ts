import { User } from "../../../entities/User";
import {
  SIGNUP,
  LOGOUT,
  REHYDRATE_USER,
  LOGIN,
  CREATE_USER,
  PHOTO_URL,
} from "../actions/user.actions";

interface ReduxState {
  loggedInUser: User;
  idToken: string | undefined;
}

const initialState: ReduxState = {
  loggedInUser: {} as User,
  idToken: undefined,
};

const userReducer = (state: ReduxState = initialState, action: any) => {
  switch (action.type) {
    case LOGOUT:
      return { ...state, loggedInUser: null, idToken: undefined };
    case REHYDRATE_USER:
      return {
        ...state,
        loggedInUser: action.payload.user,
        idToken: action.payload.idToken,
      };
    case SIGNUP:
      // const user = new User(action.payload.email, '', '');
      // return {...state, loggedInUser: user}
      console.log("Successfully signed up, bitch");

      //const user = {email: 'fakjsdflh', photoUrl: 'afdds' } as User
      return {
        ...state,
        loggedInUser: action.payload.user,
        idToken: action.payload.idToken,
      };

    case LOGIN:
      console.log("Successfully logged in, bitch");
      console.log(action.payload);

      return {
        ...state,
        loggedInUser: action.payload.user,
        token: action.payload.token,
      };

    case CREATE_USER:
      return { ...state, loggedInUser: action.payload.user };

    // case PHOTO_URL:
    //     return { ...state, loggedInUser: action.payload.user }

    default:
      return state;
  }
};

export default userReducer;
