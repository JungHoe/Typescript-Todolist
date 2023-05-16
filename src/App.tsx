import "@/style/global.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useState, useReducer } from "react";
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
const TodoItemMaps = Object.values(Status);

const App: React.FC<ThemeProps> = ({ theme, onChangeTheme }) => {
  const [itemStatusType, setItemStatusType] = useState<Status>(Status.Todo);
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [modalProps, toggleModal] = useModal();

  const handleClickCreate = (status: Status) => {
    setItemStatusType(status);
    toggleModal(Mode.create);
  };
  const handleAddItem = ({ title, description }: TodoItemInterface) => {
    const payload = { title, description, status: itemStatusType };
    dispatch({ type: actions.ADD_ITEM, payload });
    toggleModal();
  };
  const handlEditItem = ({ title, description, id }: TodoItemInterface) => {
    const payload = { title, description, status: itemStatusType, id };
    dispatch({ type: actions.EDIT_ITEM, payload });
    toggleModal();
  };
  const handleMoveItem = (dragItem: any, overItem: any) => {
    const payload = { dragItem, overItem };
    dispatch({ type: actions.MOVE_ITEM, payload });
  };
  const handleClickEdit = ({ status, index }: { status: Status; index: number }) => {
    const item = state[`${status}Items`][index];
    setItemStatusType(status);
    toggleModal(Mode.edit, item);
  };
  const handleClickRemove = ({ status, id }: { status: Status; id: number }) => {
    const payload = { status, id };
    dispatch({ type: actions.REMOVE_ITEM, payload });
  };

  return (
    <Layout id="layout-wrapper" className={theme}>
      <LayoutHeader isDark={theme === Theme.dark} onChangeTheme={onChangeTheme} />
      <Layout id="main-app">
        <Content>
          <Divider />
          <TodoItemModal
            isOpen={modalProps.isOpen}
            mode={modalProps.mode}
            selectedItem={modalProps.editItem}
            toggleModal={toggleModal}
            onAddItem={handleAddItem}
            onEditItem={handlEditItem}
            status={itemStatusType}
          ></TodoItemModal>
          <DndProvider backend={HTML5Backend}>
            <Row className="itemRow" justify={"center"}>
              {TodoItemMaps.map((itemStatus, idx) => (
                <React.Fragment key={itemStatus}>
                  <TodoItems
                    status={itemStatus}
                    items={state[`${itemStatus}Items`]}
                    onClickCreate={handleClickCreate}
                    onMoveItem={handleMoveItem}
                    onClickEdit={handleClickEdit}
                    onClickRemove={handleClickRemove}
                  ></TodoItems>
                  {idx !== 2 && <Divider type="vertical" />}
                </React.Fragment>
              ))}
            </Row>
          </DndProvider>
        </Content>
      </Layout>
      <Footer className="ta-c"></Footer>
    </Layout>
  );
};

export default WithTheme(App);
