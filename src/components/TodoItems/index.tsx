import TodoItemHeader from "@/components/TodoItemHeader";
import { Status } from "@/types/enums";
import { TodoItem as Item } from "@/types";
import TodoItem, { DraggableEmptyTodoItem } from "@/components/TodoItem";
import StyledTodoItemWrapper, {
  StyledTodoItemList,
} from "@/style/TodoItem/wrapper";

interface TodoItemsProps {
  status: Status;
  items: Item[];
  onClickCreate: Function;
  onMoveItem: Function;
  onClickEdit?: Function;
  onClickRemove?: Function;
}
const TodoItems: React.FC<TodoItemsProps> = ({
  status,
  items,
  onClickCreate,
  onMoveItem,
  onClickEdit,
  onClickRemove,
}) => {
  return (
    <StyledTodoItemWrapper className={`item-${status}`} span={7}>
      <TodoItemHeader
        type={status}
        onClickIcon={onClickCreate}
      ></TodoItemHeader>
      <StyledTodoItemList>
        {items.length > 0 ? (
          items.map((item, index) => (
            <TodoItem
              key={item.id}
              item={item}
              index={index}
              useInteractionButton
              onMoveItem={onMoveItem}
              onClickEdit={onClickEdit}
              onClickRemove={onClickRemove}
            ></TodoItem>
          ))
        ) : (
          <DraggableEmptyTodoItem status={status} onMoveItem={onMoveItem} />
        )}
      </StyledTodoItemList>
    </StyledTodoItemWrapper>
  );
};

export default TodoItems;
