import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import TodoItemHeader from "@/components/TodoItemHeader";
import { Status } from "@/types/enums";
import { TodoItem as Item } from "@/types";
import TodoItem from "@/components/TodoItem";
import StyledTodoItemWrapper, {
  StyledTodoItemList,
} from "@/style/TodoItem/wrapper";

interface TodoItemsProps {
  status: Status;
  items: Item[];
  onClickCreate: Function;
  onMoveItem: Function;
}
const TodoItems: React.FC<TodoItemsProps> = ({
  status,
  items,
  onClickCreate,
  onMoveItem,
}) => {
  return (
    <StyledTodoItemWrapper className={`item-${status}`} span={7}>
      <TodoItemHeader
        type={status}
        onClickIcon={onClickCreate}
      ></TodoItemHeader>
      <StyledTodoItemList>
        <DndProvider backend={HTML5Backend}>
          {items?.map((item, index) => (
            <TodoItem
              key={item.id}
              item={item}
              index={index}
              useInteractionButton
              onMoveItem={onMoveItem}
            ></TodoItem>
          ))}
        </DndProvider>
      </StyledTodoItemList>
    </StyledTodoItemWrapper>
  );
};

export default TodoItems;
