import { Normal } from ".";

export default {
  title: "Components/Normal",
  component: Normal,
  argTypes: {
    state: {
      options: ["disabled", "hover", "active", "default"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "xsmall", "xlarge", "small", "medium"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "disabled",
    size: "large",
    className: {},
    elementClassName: {},
  },
};
