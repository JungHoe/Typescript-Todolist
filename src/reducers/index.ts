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
const sampleItem3 = new TodoItem(
  "테마 모드  구현 ㅠㅠㅠㅠㅠㅠㅠㅠ",
  "테스트 메세지. \n ㅇㅅㅇㅅㅇㅅㅇㅅㅇㅅㅇㅅㅇ",
  Status.Done
);
sampleItem1.setId(1);
sampleItem2.setId(2);
sampleItem3.setId(3);
export const initialState = {
  todoItems: [],
  doingItems: [],
  doneItems: [sampleItem1, sampleItem2, sampleItem3],
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
      if (dragItem.status === overItem.status) {
        const itemKey = `${dragItem.status}Items` as keyof redcuerInterface;
        const items = state[itemKey];

        const dragIndex = dragItem.index;
        const overIndex = overItem.index;

        const nextItems = [...items];
        const poped = nextItems.splice(dragIndex, 1);
        nextItems.splice(overIndex, 0, poped[0]);
        return { ...state, [itemKey]: nextItems };
      }
    default:
      return state;
  }
};
