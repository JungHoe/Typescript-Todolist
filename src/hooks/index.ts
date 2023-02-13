import { Status, Mode, Theme } from "@/types/enums";
import { useState } from "react";

export const isThemeDark = ({ themeMode }: { themeMode: string }): boolean => {
  if (themeMode === Theme.dark) {
    return true;
  }
  return false;
};
interface modalProperty {
  isOpen: boolean;
  mode: Mode;
}
export const useModal = (): [modalProperty, (payload?: Mode) => boolean] => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>(Mode.create);
  const toggleModal = (nextMode?: Mode) => {
    setIsOpen(!isOpen);
    if (nextMode) {
      setMode(nextMode);
    }
    return !isOpen;
  };
  return [{ isOpen, mode }, toggleModal];
};
