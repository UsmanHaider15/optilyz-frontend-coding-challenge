import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Main } from "./Main";

export default {
  title: "Main",
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: "No Movie Found!",
};

export const NoMovie = Template.bind({});
NoMovie.args = {
  data: {},
};

export const MovieCard = Template.bind({});
MovieCard.args = {
  data: {
    Title: "Titanic",
    Released: "19 Dec 1997",
    Runtime: "194 min",
    Genre: "Drama, Romance",
    Director: "James Cameron",
    Writer: "James Cameron",
    Actors: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
    Plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    Language: "English, Swedish, Italian, French",
    Country: "United States, Mexico",
    Awards: "Won 11 Oscars. 125 wins & 83 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.8/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "89%",
      },
      {
        Source: "Metacritic",
        Value: "75/100",
      },
    ],
  },
};
