// useReducer with Typescript:
// https://github.com/hswolff/youtube/blob/master/videos/why-i-love-usereducer/src/LoginUseReducerTypeScript.tsx

import { useReducer, ReactNode } from 'react';
import { createContext } from 'use-context-selector';
import _ from 'lodash';

const initialState: IUserState = {
  user: undefined,
  clearUser: () => {},
  setUser: () => {},
};

type User = {
  onlineId: string;
  accountId: string;
  avatarUrl: string;
};

type IUserState = {
  user?: User;
  setUser: (user: User) => void;
  clearUser: () => void;
};

type IUserAction =
  | {
      type: 'SET_USER';
      payload: User;
    }
  | {
      type: 'CLEAR_USER';
    };

function userReducer(state: IUserState, action: IUserAction): IUserState {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    case 'CLEAR_USER':
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
}

export const UserContext = createContext(initialState as IUserState);

export default function UserProvider(props: { children: ReactNode }) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  // Actions
  // reminder: always dispatch; otherwise, is a SELECTOR, not an ACTION
  function setUser(user: User) {
    dispatch({
      type: 'SET_USER',
      payload: user,
    });
  }

  function clearUser() {
    dispatch({
      type: 'CLEAR_USER',
    });
  }

  return (
    <UserContext.Provider
      value={{
        ...state,
        setUser,
        clearUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
