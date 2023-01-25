import { useState, useCallback } from "react";
import {
  ConfigProvider,
  theme,
  Layout,
  Col,
  Row,
  Switch,
  Input,
  Button,
  Divider,
} from "antd";
import "./App.css";
const { Header, Content, Footer } = Layout;
const { darkAlgorithm, defaultAlgorithm } = theme;

interface TodoItem {
  id: number;
  text: string;
  status: string;
}

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [text, setText] = useState("");
  const [list, setList] = useState<TodoItem[]>([
    { id: 1, text: "테스트 메세지", status: "doing" },
  ]);

  const onChangeText = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);
  const onSubmitTodo = () => {
    setList([...list, { id: new Date().getTime(), text, status: "doing" }]);
    setText("");
  };
  const themeName = isDark ? "dark" : "light";
  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorBgBase: isDark ? "#262626" : "#fff",
        },
      }}
    >
      <Layout id="layout-wrapper" className={themeName}>
        <Header className="ta-c">
          <h2>Todo-List</h2>
          <div className="mode-container">
            <Switch
              checked={!isDark}
              checkedChildren="Light"
              unCheckedChildren="Dark"
              onClick={() => setIsDark(!isDark)}
            />
          </div>
        </Header>
        <Layout id="main-app">
          <Content>
            <Row className="write-form">
              <Col span={20}>
                <Input value={text} onChange={onChangeText}></Input>
              </Col>
              <Col offset={1} span={3}>
                <Button onClick={onSubmitTodo}>작성</Button>
              </Col>
            </Row>
            <Divider />
            <ul>
              {list?.map((item) => {
                return <li key={item.id}>{item.text}</li>;
              })}
            </ul>
          </Content>
        </Layout>
        <Footer className="ta-c">footer</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
