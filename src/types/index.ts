import { Status } from "@/types/enums";

export interface TodoItemType {
  id: number;
  title: string;
  description: string;
  status: Status;
}
