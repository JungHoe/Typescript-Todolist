import "@testing-library/jest-dom";
// 해당모듈을 import 하여 jest expect시 각종 dom 테스팅 함수를 사용하게 해준다.
import { setProjectAnnotations } from "@storybook/react";
import globalStorybookConfig from "../.storybook/preview";
setProjectAnnotations(globalStorybookConfig);
