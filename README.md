## How to Run Locally
Create `.env` or `.env.development.local` file and add following env variables
1. `REACT_APP_OMDB_API_KEY`

You can get API Key from https://omdbapi.com/apikey.aspx
## Approach 

I used TDD approach to implement this application, 
Steps of that process are following

1. Write unit test to check whether app contains input field, then implement input element to make test pass
2. Repeat step `1` for button
3. Style elements via visual tdd using storybook
4. Write an integration test that the text "No Movie" should be visible initially 
5. Extract "No Movie" into its own component and add storybook for that
6. Write Integration test that should render movie details when submit form and request is successfull
7. Start implementing above test and realize that state management is needed
8. Comment out the integration test
9. Write the first version of test for state reducers and implement it
10. Write tests for useQuery hook and implemeted that hook for query state management
11. Added useQuery and made integration tests to pass
12. Added Storybook for Main component and implement styling

## Deploy
This app is deployed to gh pages using github actions, you need to take following steps to make it pass

1. create personal action token and add it to your repo secrets as `GH_TOKEN` to grant github action access to repo
2. Add `REACT_APP_OMDB_API_KEY` to your repo secrets so that github actions can use it in build process

## useQuery Hook API 

```js
const [loading, error, data, setUrl] = useQuery();
```
`setUrl` takes url as an argument and returns data
