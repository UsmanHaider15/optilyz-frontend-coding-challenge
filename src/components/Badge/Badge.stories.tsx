import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Badge } from "./Badge";

export default {
  title: "Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const NoMovie = Template.bind({});
NoMovie.args = {
  label: "No Movie",
  type: "info",
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Loading...",
  type: "info",
};

export const NoMovieFound = Template.bind({});
NoMovieFound.args = {
  label: "No Movie Found",
  type: "error",
};

export const MovieError = Template.bind({});
MovieError.args = {
  label: "Error occurred while fetching movie",
  type: "error",
};
