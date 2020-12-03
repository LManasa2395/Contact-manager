import { useReducer, useEffect } from "react";
import ls from "local-storage";

function useLocalStorageReducer(key, defaultVal, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;
    try {
      val = ls.get(key) || defaultVal;
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });
  useEffect(() => {
    state.searchedContacts = state.contacts.slice();
    ls.set(key, state);
  }, []);
  useEffect(() => {
    ls.set(key, state);
  }, [state, key]);
  return [state, dispatch];
}

export { useLocalStorageReducer };
