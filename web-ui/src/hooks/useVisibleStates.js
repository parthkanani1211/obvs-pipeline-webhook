import { useState, useCallback } from "react";

export default function useVisibleState(status) {
  const [isVisible, setIsVisible] = useState(status || false);

  const show = useCallback(() => {
    setIsVisible(true);
  }, []);

  const hide = useCallback(() => {
    setIsVisible(false);
  }, []);

  const toggle = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  const onVisiblityChange = useCallback((val) => {
    setIsVisible(val);
  }, []);

  return {
    visible: isVisible,
    show,
    hide,
    toggle,
    onVisiblityChange,
  };
}
