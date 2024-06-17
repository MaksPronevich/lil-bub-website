import { useState } from "react";

type UseCopyText = {
  isNotificationVisible: boolean;
  copyHandler: (text: string) => void;
};

export const useCopyText = (): UseCopyText => {
  const [isNotificationVisible, setIsNotificationVisible] = useState<boolean>(false);

  const copyHandler = (text: string): void => {
    navigator.clipboard.writeText(text).then();
    setIsNotificationVisible(true);
    setTimeout(() => {
      setIsNotificationVisible(false);
    }, 1500);
  };

  return { copyHandler, isNotificationVisible };
};
