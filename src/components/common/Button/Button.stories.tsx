import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const actionArgs = {
  onClick: action("onClick"),
};

export const Search = Template.bind({});
Search.args = {
  ...actionArgs,
  children: "Search",
};
