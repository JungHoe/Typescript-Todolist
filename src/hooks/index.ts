import { TodoItem } from "@/types";
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
  editItem?: TodoItem;
}

export const useModal = (): [
  modalProperty,
  (nextMode?: Mode, item?: TodoItem) => boolean
] => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>(Mode.create);
  const [editItem, setEditItem] = useState<TodoItem>();
  const toggleModal = (nextMode?: Mode, item?: TodoItem) => {
    setIsOpen(!isOpen);
    if (nextMode) {
      setMode(nextMode);
    }
    if (item) {
      setEditItem(item);
    } else {
      setEditItem(undefined);
    }
    return !isOpen;
  };
  return [{ isOpen, mode, editItem }, toggleModal];
};

export const useToggleButton = () => {
  const [open, setOpen] = useState(false);
  const onOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
  };
  return { open, onOpenChange };
};
