import TodoItemHeader from "@/components/TodoItemHeader";
import { Status } from "@/types/enums";
import { TodoItemInterface } from "@/types";
import TodoItem from "@/components/TodoItem";
import StyledTodoItemWrapper, {
  StyledTodoItemList,
} from "@/style/TodoItem/wrapper";

interface TodoItemsProps {
  status: Status;
  items: TodoItemInterface[];
  onClickCreate: Function;
}
const TodoItems: React.FC<TodoItemsProps> = ({
  status,
  onClickCreate,
  items,
}) => {
  return (
    <StyledTodoItemWrapper className={`item-${status}`} span={7}>
      <TodoItemHeader
        type={status}
        onClickIcon={onClickCreate}
      ></TodoItemHeader>
      <StyledTodoItemList>
        {items?.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            description={item.description}
          ></TodoItem>
        ))}
      </StyledTodoItemList>
    </StyledTodoItemWrapper>
  );
};

export default TodoItems;
