import { Status } from "@/types/enums";

export interface TodoItemInterface {
  id: number;
  title: string;
  description: string;
  status: Status;
  order: number;
}

export interface TodoItemFormInterface {
  title: string;
  description: string;
  status?: Status;
}
