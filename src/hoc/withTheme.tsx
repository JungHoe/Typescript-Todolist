import { useState } from "react";
import { ConfigProvider, theme } from "antd";
import { ThemeProvider } from "styled-components";
import { Theme, ThemeMainColor } from "@/types/enums";
const { darkAlgorithm, defaultAlgorithm } = theme;

const WithTheme = (
  Component: React.ComponentType<any>,
  initstate: boolean = true
) => {
  return (props: any) => {
    const [isDark, setIsDark] = useState(initstate);
    const themeMode = isDark ? Theme.dark : Theme.light;
    const handleChangeTheme = () => {
      setIsDark(!isDark);
    };
    return (
      <ConfigProvider
        theme={{
          algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
          token: {
            colorBgBase: isDark ? ThemeMainColor.dark : ThemeMainColor.light,
          },
        }}
      >
        <ThemeProvider theme={{ themeMode }}>
          <Component
            {...props}
            theme={themeMode}
            onChangeTheme={handleChangeTheme}
          ></Component>
        </ThemeProvider>
      </ConfigProvider>
    );
  };
};

export default WithTheme;

export interface ThemeProps {
  theme: Theme;
  onChangeTheme: () => void;
}
