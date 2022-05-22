import { User } from "../../../entities/User";
import {
  SIGNUP,
  LOGOUT,
  REHYDRATE_USER,
  LOGIN,
  PHOTO_URL,
  UPDATE_USER,
  GET_USER
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

      //const user = {email: 'fakjsdflh', photoUrl: 'afdds' } as User
      return {
        ...state,
        loggedInUser: action.payload.user,
        idToken: action.payload.idToken,
      };

    case LOGIN:
      console.log(action.payload.user)
      return {
        ...state,
        loggedInUser: action.payload.user,
        idToken: action.payload.idToken,
      };

    case UPDATE_USER:
      console.log(action.payload)
      return { ...state, loggedInUser: action.payload.user, idToken: action.payload.idToken  };

    // case PHOTO_URL:
    //     return { ...state, loggedInUser: action.payload.user }
    case GET_USER:
      return {...state, user: action.payload.user}
    default:
      return state;
  }
};

export default userReducer;
