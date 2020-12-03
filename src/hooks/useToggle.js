import { useState } from "react";

function useToggle(initialval = false) {
  const [state, setState] = useState(initialval);
  const toggle = () => {
    // setState(!state);
    setState((state) => !state);
  };
  return [state, toggle];
}

export default useToggle;
