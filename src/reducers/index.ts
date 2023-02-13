import { Status } from "@/types/enums";
import { TodoItemInterface } from "@/types";
import * as actions from "./actions";
interface redcuerInterface {
  todoItems: TodoItemInterface[];
  doingItems: TodoItemInterface[];
  doneItems: TodoItemInterface[];
}

class Item {
  private id: number;
  constructor(
    public title: string,
    public description: string,
    public order: number
  ) {
    this.id = new Date().getTime();
  }
}

export const initialState = {
  todoItems: [],
  doingItems: [],
  doneItems: [
    {
      id: 1,
      title: "테마 모드 구현",
      status: Status.Done,
      description: "테스트 메세지. \n 개행테스트",
      order: 1,
    },
    {
      id: 2,
      title: "line-clamp 테스트",
      status: Status.Done,
      description: `내용@@내용@@내용@@내용@@내용@@내용내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@내용@@`,
      order: 2,
    },
  ],
};

export const todoReducer = (
  state: redcuerInterface,
  { type, payload }: any
) => {
  switch (type) {
    case actions.ADD_ITEM:
      const itemKey = `${payload.status}Items` as keyof redcuerInterface;
      const nextOrder = state[itemKey].length + 1;
      const t1 = new Item(payload.title, payload.description, nextOrder);
      return { ...state, [itemKey]: [...state[itemKey], t1] };
    default:
      return state;
  }
};
