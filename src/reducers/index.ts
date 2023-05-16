import { Status } from "@/types/enums";
import { TodoItem } from "@/types";
import * as actions from "./actions";

interface redcuerInterface {
  todoItems: TodoItem[];
  doingItems: TodoItem[];
  doneItems: TodoItem[];
}

export const initialState = {
  todoItems: [],
  doingItems: [],
  doneItems: [],
};

export const todoReducer = (
  state: redcuerInterface,
  { type, payload }: any
) => {
  switch (type) {
    case actions.ADD_ITEM:
      const addStateKey = `${payload.status}Items` as keyof redcuerInterface;
      const newItem = new TodoItem(
        payload.title,
        payload.description,
        payload.status
      );
      return { ...state, [addStateKey]: [...state[addStateKey], newItem] };
    case actions.EDIT_ITEM:
      const editStateKey = `${payload.status}Items` as keyof redcuerInterface;
      const nextEditItems = state[editStateKey].map((item) => {
        if (item.id === payload.id) {
          item.setTitle(payload.title);
          item.setDescription(payload.description);
        }
        return item;
      });
      return { ...state, [editStateKey]: nextEditItems };
    case actions.REMOVE_ITEM:
      const removeStateKey = `${payload.status}Items` as keyof redcuerInterface;
      const nextRemoveItems = state[removeStateKey].filter(
        (item) => item.id !== payload.id
      );
      return { ...state, [removeStateKey]: nextRemoveItems };
    case actions.MOVE_ITEM:
      const { dragItem, overItem } = payload;
      const dragIndex = dragItem.index;
      if (dragItem.status === overItem.status) {
        const itemKey = `${dragItem.status}Items` as keyof redcuerInterface;
        const items = state[itemKey];
        const overIndex = overItem.index;
        const nextItems = [...items];
        const [poped] = nextItems.splice(dragIndex, 1);
        nextItems.splice(overIndex, 0, poped);
        return { ...state, [itemKey]: nextItems };
      }
      if (overItem.index !== -1) {
        // 1. 기존 status에서 해당 Index 제거
        const dragKey = `${dragItem.status}Items` as keyof redcuerInterface;
        const dragItems = state[dragKey];
        const nextDragItems = [...dragItems];
        const [poped] = nextDragItems.splice(dragIndex, 1);
        // 2. over status 에 추가
        const overIndex = overItem.index;
        const overKey = `${overItem.status}Items` as keyof redcuerInterface;
        const overItems = state[overKey];
        const nextOverItems = [...overItems];
        poped.setStatus(overItem.status);
        nextOverItems.splice(overIndex + 1, 0, poped);
        return { ...state, [dragKey]: nextDragItems, [overKey]: nextOverItems };
      } else {
        // 1. 기존 status에서 해당 Index 제거
        const dragKey = `${dragItem.status}Items` as keyof redcuerInterface;
        const dragItems = state[dragKey];
        const nextDragItems = [...dragItems];
        const [poped] = nextDragItems.splice(dragIndex, 1);
        // 2. over status 에 추가
        poped.setStatus(overItem.status);
        const overKey = `${overItem.status}Items` as keyof redcuerInterface;
        const nextOverItems = [poped];
        return { ...state, [dragKey]: nextDragItems, [overKey]: nextOverItems };
      }
    default:
      return state;
  }
};
