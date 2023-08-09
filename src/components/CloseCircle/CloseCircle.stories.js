import { CloseCircle } from ".";

export default {
  title: "Components/CloseCircle",
  component: CloseCircle,
  argTypes: {
    property1: {
      options: ["twotone", "broken", "outline", "bold", "linear", "bulk"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "twotone",
  },
};
