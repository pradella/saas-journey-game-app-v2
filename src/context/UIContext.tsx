// useReducer with Typescript:
// https://github.com/hswolff/youtube/blob/master/videos/why-i-love-usereducer/src/LoginUseReducerTypeScript.tsx

import { useReducer, ReactNode } from 'react';
import { createContext } from 'use-context-selector';
import _ from 'lodash';

const initialState: UIState = {
  routes: {},
  setRoute: () => {},
};

type Route = {
  path: string;
  scrollTop?: number;
  tabId?: string;
};

type UIState = {
  routes: { [path: string]: Route };
  setRoute: (route: Route) => void;
};

type UIAction = {
  type: 'SET_ROUTE';
  payload: Route;
};

function UIReducer(state: UIState, action: UIAction): UIState {
  switch (action.type) {
    case 'SET_ROUTE':
      return {
        ...state,
        routes: {
          ...state.routes,
          [action.payload.path]: action.payload,
        },
      };

    default:
      return state;
  }
}

export const UIContext = createContext(initialState as UIState);

export default function UIProvider(props: { children: ReactNode }) {
  const [state, dispatch] = useReducer(UIReducer, initialState);

  // Actions
  // reminder: always dispatch; otherwise, is a SELECTOR, not an ACTION
  function setRoute(route: Route) {
    dispatch({
      type: 'SET_ROUTE',
      payload: route,
    });
  }

  return (
    <UIContext.Provider
      value={{
        ...state,
        setRoute,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
}
