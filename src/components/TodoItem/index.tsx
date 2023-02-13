import React from "react";
import { Button, Popover } from "antd";
import { SmallDashOutlined, DragOutlined } from "@ant-design/icons";
import StyleItem from "@/style/TodoItem";
import InteractionButton from "@/style/TodoItem/InteractionButton";
interface TodoItem {
  title: string;
  description: string;
  useInteractionButton?: boolean;
}

const TodoItem: React.FC<TodoItem> = ({
  title,
  description,
  useInteractionButton = true,
}) => {
  return (
    <StyleItem>
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
