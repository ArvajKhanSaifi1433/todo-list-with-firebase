import { useState } from "react";

const useDisClouse = () => {
  const [click, setClick] = useState(false);

  const onOpen = () => {
    setClick(true);
  };

  const onClose = () => {
    setClick(false);
  };

  return { click, onOpen, onClose };
};

export default useDisClouse;
