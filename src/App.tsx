import { useState } from "react";
import { ConfigProvider, theme, Layout, Row, Divider } from "antd";
import { ThemeProvider } from "styled-components";
import { Status } from "@/types/enums";
import "@/style/global.css";
import LayoutHeader from "@/components/Layouts/Header";
import TodoItem from "@/components/TodoItem";

const { Content, Footer } = Layout;
const { darkAlgorithm, defaultAlgorithm } = theme;

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const themeMode = isDark ? "dark" : "light";
  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorBgBase: isDark ? "#25262A" : "#fff",
        },
      }}
    >
      <ThemeProvider theme={{ themeMode }}>
        <Layout id="layout-wrapper" className={themeMode}>
          <LayoutHeader
            isDark={isDark}
            onChangeTheme={() => setIsDark(!isDark)}
          />
          <Layout id="main-app">
            <Content>
              <Divider />
              <Row className="itemRow" justify={"center"}>
                <TodoItem status={Status.Todo} items={[]}></TodoItem>
                <Divider type="vertical" />
                <TodoItem status={Status.Doing} items={[]}></TodoItem>
                <Divider type="vertical" />
                <TodoItem
                  status={Status.Done}
                  items={[
                    {
                      id: 1,
                      title: "테마 모드 구현",
                      status: Status.Done,
                      description: "테스트 메세지. \n 개행테스트",
                    },
                  ]}
                ></TodoItem>
              </Row>
            </Content>
          </Layout>
          <Footer className="ta-c">footer</Footer>
        </Layout>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
