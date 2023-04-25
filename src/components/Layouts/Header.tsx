import { Layout, Switch } from "antd";
import styled from "styled-components";
import { isThemeDark } from "@/hooks";

const { Header } = Layout;
const StyledHeader = styled(Header)`
  background-color: ${({ theme }) =>
    isThemeDark(theme) ? "#001529" : "#de483a"} !important;
`;
interface Props {
  /**
   * 테마모드를 확인하는 플래그
   */
  isDark: boolean;
  onChangeTheme: () => void;
}

/**
 * Primary UI component for user interaction
 */
const LayoutHeader = ({ isDark, onChangeTheme }: Props) => {
  return (
    <StyledHeader className="ta-c">
      <h2>Todo-List</h2>
      <div className="mode-container">
        <Switch
          checked={!isDark}
          checkedChildren="Light"
          unCheckedChildren="Dark"
          onClick={onChangeTheme}
        />
      </div>
    </StyledHeader>
  );
};

export default LayoutHeader;
