import React from "react";
import { Button, Popover } from "antd";
import { SmallDashOutlined, DragOutlined } from "@ant-design/icons";
import StyleItem from "@/style/TodoItem";
import InteractionButton from "@/style/TodoItem/InteractionButton";
interface TodoItemProps {
  /**
   * 할일의 제목입니다.
   */
  title: string;
  /**
   * 할일의 설명입니다.
   */
  description: string;
  /**
   * 상호작용 버튼 활성화 여부입니다.
   */
  useInteractionButton?: boolean;
}

const TodoItem = ({
  title,
  description,
  useInteractionButton = true,
}: TodoItemProps) => {
  return (
    <StyleItem data-testid="todo-item">
      <h3 className="title">{title}</h3>
      <div className="description">{description}</div>
      {useInteractionButton && (
        <>
          <DragOutlined />
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
