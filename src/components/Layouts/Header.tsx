import React from "react";
import { Layout, Switch } from "antd";

const { Header } = Layout;
interface Props {
  isDark: boolean;
  onChangeTheme: () => void;
}

const LayoutHeader = ({ isDark, onChangeTheme }: Props) => {
  return (
    <Header className="ta-c">
      <h2>Todo-List</h2>
      <div className="mode-container">
        <Switch
          checked={!isDark}
          checkedChildren="Light"
          unCheckedChildren="Dark"
          onClick={onChangeTheme}
        />
      </div>
    </Header>
  );
};

export default LayoutHeader;
