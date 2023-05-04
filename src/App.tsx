import "@/style/global.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState, useReducer } from "react";
import { Layout, Row, Divider } from "antd";
import WithTheme, { ThemeProps } from "@/hoc/withTheme";
import { TodoItemInterface } from "@/types";
import { Status, Mode, Theme } from "@/types/enums";
import LayoutHeader from "@/components/Layouts/Header";
import TodoItems from "@/components/TodoItems";
import { useModal } from "@/hooks";
import TodoItemModal from "@/components/TodoItemModal";
import { todoReducer, initialState } from "@/reducers";
import * as actions from "@/reducers/actions";

const { Content, Footer } = Layout;

const App: React.FC<ThemeProps> = ({ theme, onChangeTheme }) => {
  const [itemStatusType, setItemStatusType] = useState<Status>(Status.Todo);
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [modalProps, toggleModal] = useModal();

  const handleClickCreate = (type: Status) => {
    setItemStatusType(type);
    toggleModal(Mode.create);
  };
  const handleAddItem = ({ title, description }: TodoItemInterface) => {
    const payload = { title, description, status: itemStatusType };
    dispatch({ type: actions.ADD_ITEM, payload });
    toggleModal();
  };
  const handleMoveItem = (dragItem: any, overItem: any) => {
    const payload = { dragItem, overItem };
    dispatch({ type: actions.MOVE_ITEM, payload });
  };

  return (
    <Layout id="layout-wrapper" className={theme}>
      <LayoutHeader
        isDark={theme === Theme.dark}
        onChangeTheme={onChangeTheme}
      />
      <Layout id="main-app">
        <Content>
          <Divider />
          <TodoItemModal
            isOpen={modalProps.isOpen}
            toggleModal={toggleModal}
            onAddItem={handleAddItem}
            status={itemStatusType}
          ></TodoItemModal>
          <DndProvider backend={HTML5Backend}>
            <Row className="itemRow" justify={"center"}>
              <TodoItems
                status={Status.Todo}
                items={state.todoItems}
                onClickCreate={handleClickCreate}
                onMoveItem={handleMoveItem}
              ></TodoItems>
              <Divider type="vertical" />
              <TodoItems
                status={Status.Doing}
                items={state.doingItems}
                onClickCreate={handleClickCreate}
                onMoveItem={handleMoveItem}
              ></TodoItems>
              <Divider type="vertical" />
              <TodoItems
                status={Status.Done}
                items={state.doneItems}
                onClickCreate={handleClickCreate}
                onMoveItem={handleMoveItem}
              ></TodoItems>
            </Row>
          </DndProvider>
        </Content>
      </Layout>
      <Footer className="ta-c">footer</Footer>
    </Layout>
  );
};

export default WithTheme(App);
