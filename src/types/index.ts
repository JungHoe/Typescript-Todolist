import { Status } from "@/types/enums";

export interface TodoItemInterface {
  id: number;
  title: string;
  description: string;
  status: Status;
}
export class TodoItem implements TodoItemInterface {
  public id: number;
  constructor(
    public title: string,
    public description: string,
    public status: Status
  ) {
    this.id = new Date().getTime(); //TODO  -1로 셋팅 백엔드 데이터받아오기
  }
  setId(id: number) {
    this.id = id;
  }
  setStatus(status: Status) {
    this.status = status;
  }
  setTitle(title: string) {
    this.title = title;
  }
  setDescription(description: string) {
    this.description = description;
  }
}
