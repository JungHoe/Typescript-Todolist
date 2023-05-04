import React, { useRef } from "react";
import { Button, Popover } from "antd";
import { useDrop, useDrag } from "react-dnd";

import { SmallDashOutlined, MenuOutlined } from "@ant-design/icons";
import { TodoItem as Item } from "@/types";
import StyleItem from "@/style/TodoItem";
import InteractionButton from "@/style/TodoItem/InteractionButton";

interface itemWithIndex extends Item {
  index: number;
  ref: any;
}
interface TodoItemProps {
  item: Item;
  index: number;
  useInteractionButton?: boolean;
  /**
   * 상호작용 버튼 활성화 여부입니다.
   */
  onMoveItem: Function;
}

export const DraggableEmptyTodoItem = ({
  status,
  onMoveItem,
}: {
  status: any;
  onMoveItem: Function;
}) => {
  const [, drop] = useDrop({
    accept: "list",
    hover: (dragItem: itemWithIndex) => {
      onMoveItem({ ...dragItem }, { index: -1, status });
      dragItem.index = 0;
      dragItem.status = status;
    },
  });
  return <StyleItem className="empty" ref={drop}></StyleItem>;
};

const TodoItem = ({
  item,
  index,
  useInteractionButton = true,
  onMoveItem,
}: TodoItemProps) => {
  const ref = useRef<HTMLLIElement | null>(null);
  const { id, title, description, status } = item;
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: "list",
      item: { ...item, index, status },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      isDragging: (monitor) => {
        return monitor.getItem().id === id;
      },
    }),
    [status, index]
  );

  const [, drop] = useDrop({
    accept: "list",
    hover: (dragItem: itemWithIndex, monitor) => {
      if (dragItem.id === id) {
        return;
      }
      if (dragItem.status === status && dragItem.index === index) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current!.getBoundingClientRect();

      // // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // // Determine mouse position
      const clientOffset = monitor.getClientOffset()!;

      // // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // // Only perform the move when the mouse has crossed half of the items height
      // // When dragging downwards, only move when the cursor is below 50%
      // // When dragging upwards, only move when the cursor is above 50%

      // // Dragging downwards
      if (dragItem.index < index && hoverClientY < hoverMiddleY) {
        return;
      }
      // // Dragging upwards
      if (dragItem.index > index && hoverClientY > hoverMiddleY) {
        return;
      }
      onMoveItem({ ...dragItem }, { ...item, index });
      if (dragItem.status === status) {
        dragItem.index = index;
      } else {
        dragItem.index = index + 1;
        dragItem.status = status;
      }
    },
  });

  return (
    <StyleItem
      data-testid="todo-item"
      className={`dragAndDrop ${isDragging ? "dragging" : ""}`}
      ref={(liRef) => {
        ref.current = liRef;
        preview(liRef);
        drop(liRef);
      }}
    >
      <h3 className="title">{title}</h3>
      <div className="description">{description}</div>
      {useInteractionButton && (
        <>
          <MenuOutlined className="dragCursor" ref={drag} />
          <Popover
            trigger={"click"}
            content={
              <InteractionButton>
                <Button>Edit</Button>
                <Button>Remove</Button>
              </InteractionButton>
            }
          >
            <SmallDashOutlined />
          </Popover>
        </>
      )}
    </StyleItem>
  );
};

export default TodoItem;
