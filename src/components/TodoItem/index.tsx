// import { Col, Row, Input, Button } from "antd";
import { Button, Popover } from "antd";
import { SmallDashOutlined } from "@ant-design/icons";

import TodoItemHeader from "@/components/TodoItemHeader";
import { Status } from "@/types/enums";
import { TodoItemType } from "@/types";
import StyleWrapper from "@/style/TodoItem/wrapper";
import StyleItem from "@/style/TodoItem";

type Props = {
  status: Status;
  items: TodoItemType[];
};
const TodoItems = (props: Props) => {
  return (
    <StyleWrapper className={`item-${props.status}`} span={7}>
      <TodoItemHeader type={props.status}></TodoItemHeader>
      <ul>
        {props.items?.map((item) => (
          <StyleItem key={item.id}>
            <h3 className="title">{item.title}</h3>
            <div className="description">{item.description}</div>
            <Popover
              trigger={"click"}
              content={
                <div style={{ width: 100 }}>
                  <Button>Edit</Button>
                  <Button>Remove</Button>
                </div>
              }
            >
              <SmallDashOutlined />
            </Popover>
          </StyleItem>
        ))}
      </ul>
    </StyleWrapper>
  );
};

export default TodoItems;
