import { User } from "../../../entities/User";
import {
  SIGNUP,
  LOGOUT,
  LOGIN,
  UPDATE_USER,
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
    // case REHYDRATE_USER:
    //   return {
    //     ...state,
    //     loggedInUser: action.payload.user,
    //     idToken: action.payload.idToken,
    //   };
    case SIGNUP:
      const newUser = new User(action.payload.email, '', '');
      // return {...state, loggedInUser: user}

      //const user = {email: 'fakjsdflh', photoUrl: 'afdds' } as User
      return {
        ...state,
        loggedInUser: newUser,
        idToken: action.payload.idToken,
      };

    case LOGIN:
      const user = new User(action.payload.email, action.payload.displayName, action.payload.photoUrl)
      
      return {
        ...state,
        loggedInUser: user,
        idToken: action.payload.idToken,
      };

    case UPDATE_USER:
      console.log("display name updated", action.payload.user)
      return {
        ...state,
        loggedInUser: action.payload.user,
        idToken: action.payload.idToken,
      };

    default:
      return state;
  }
};

export default userReducer;
