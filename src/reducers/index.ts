import { Status } from "@/types/enums";
import { TodoItem } from "@/types";
import * as actions from "./actions";

interface redcuerInterface {
  todoItems: TodoItem[];
  doingItems: TodoItem[];
  doneItems: TodoItem[];
}

const sampleItem1 = new TodoItem(
  "테마 모드 구현",
  "테스트 메세지. \n 개행테스트",
  Status.Done
);
const sampleItem2 = new TodoItem(
  "line-clamp 테스트",
  `내용@@내용@@내용@@내용@@내용@@내용내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@`,
  Status.Done
);
sampleItem1.setId(1);
sampleItem2.setId(2);
export const initialState = {
  todoItems: [],
  doingItems: [],
  doneItems: [sampleItem1, sampleItem2],
};

export const todoReducer = (
  state: redcuerInterface,
  { type, payload }: any
) => {
  switch (type) {
    case actions.ADD_ITEM:
      const itemKey = `${payload.status}Items` as keyof redcuerInterface;
      const newItem = new TodoItem(
        payload.title,
        payload.description,
        payload.status
      );
      return { ...state, [itemKey]: [...state[itemKey], newItem] };
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
    //TO-DO overItem이 없는경우 마지막에 추가를함
    default:
      return state;
  }
};
