import { useState } from "react";

const useFocus = () => {
  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(!focus);
  };
  const onBlur = () => {
    setFocus(!focus);
  };

  return { focus, onFocus, onBlur };
};

export default useFocus;
