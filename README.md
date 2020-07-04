# React Gallery App

### Project 7 from the Treehouse Full Stack Javascript TechDegree program.

**_React, React Router, Javascript_**

In this project, I will create a image gallery using the React library to load JSX, Routes and fetch data from Flickr's API using Axios.

### Project Requirements

- Project set up correctly using Create React App
  - No warnings or errors in console about unused/missing assets.
  - Running npm start successfully launches the app.
  - The node_modules folder is referenced in the .gitignore file and isn't in the repo.
- App is broken up into components.
- Mockups provided match project
- Routing
  - React Router properly implemented.
  - URLs correctly match routes.
  - Clicking a nav link navigates user to new route and loads new data.
- Data Fetching
  - Uses Flickr API correctly: API Keys and proper Photo source URLs.
  - Data fetched from a "container" component that passes data down to presentation component via props.
- Displaying Data
  - No console errors or warnings regarding unique "key" props.
  - Key props passed to images.
- Search Field
  - Submitting search data returns & displays results.

### Exceeds Requirements

- Includes a 404-like error route that displays when a URL path does not match an existing route.
- Displays a loading indicator each time the app fetches new data on at least the search route.
- If no matches are found by the search, the app includes a message to tell the user there are no matches.

### Changes to styling

- Change background color
- Added background image to all routes
- Added text-shadow and box-shadow
- Added hover effects

### To Use Application

- Sign up for a yahoo account to sign into Flickr.com
- Apply for a non-commercial API Key
- Create a new environment development file at the root of this project
- Ensure Git does not track your environment file by adding the file to .gitignore
- Add the following to your newly created environment file with your personal API key

```
REACT_APP_FLICKR_API_KEY=<YOUR PERSONAL API KEY GOES HERE>
```

WARNING: Do not store any secrets (such as private API keys) in your React app!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
