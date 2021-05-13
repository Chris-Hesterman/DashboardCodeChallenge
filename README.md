# Carna Take Home Project

- This project was done to allow Carna to assess my coding ability.
- Is it perfect? Definitely not. It is a work in progress.
- It should run on any computer meeting the requirements

## Requirements

- Must have Docker installed and running on host machine.
- Be sure local project has .env file with appropriate variables

## Usage

1. Navigate to project root folder
2. From the terminal: docker compose up
3. In browser: navigate to http://127.0.0.1:3001

## What you can expect of the current version

1. 4 client screens plus dashboard screen
2. Answering questions on pages 1 and 2 correctly will be indicated by the client
3. Functionality for pages 3 and 4 is not implemented yet. (matching words with correct translation)
4. Simple navigation in side bar is handled by React Router
5. Page number entered in dashboard input retrieves all questions for that page from the postgres db
6. Question editor is pre filled with questions and answers to be edited.
7. Once edited, hitting return or 'submit' button sends the edited question back to update the database via 'PUT' request to server.
8. Questions can also be deleted.
9. Once finished editing, clicking 'Finished Editing' button refreshes page, fetches the revised dataset for the app.

## What was left out

- CRUD functionality for user management - mostly implemented but untested on back end
- POST for questions - mostl implemented but untested in back end. Not yet implemented on front end.
- Other features for the dashboard - time ultimately became an issue
- Testing - would have included with more time. I can write tests, but it is a skill I need to keep working on.
- better error handling, I would like to go back and do more than just log the error for a better user experience.

## Technology choices

1. React was chosen as the front end technology for a number of reasons

   - client side routing made easy
   - component structure
   - quick setup with create-react-app
   - hooks
   - styled-components keep css modular
   - Preferred in project specifications
   - overall familiarity

2. Node and Express

   - Previous experience integrating with various databases
   - Express simplifies setting up server/routes
   - Preferred in project specifications
   - Familiarity

3. Postgres

   - Preferred in project specifications
   - Familiarity
   - Great community/docs

4. Docker

   - Specifications called for starting app with one command
   - I took this to mean build/seed database, npm install, npm run build in an automated way
   - Docker allows most of that to be done ahead and saved as images.
   - With Docker compose, can simply run 'docker compose up' and Docker will fetch the necessary images from Docker Hub, set them up to communicate and get them running. All you need to do then is navigate to the appropriate URL in your browser.
   - I had not use Docker before and it did take significant time to work out the bugs and get it to do exactly what I needed.

## Areas for improvement

- Testing. Judging by how quickly this project grew in complexity, testing while developing would likely have been a better approach. Need to implement TDD for future projects. I would have used Jest/react-testing-library for front end, Jest/enzyme/supertest for back end.
- Finish CRUD for users and 'C' in CRUD for questions
- Implement filters for retrieving user data
- Would have liked to finish and do some load testing and optimization. I would have used K6 for that locally, possibly looking at New Relic as well.
- Would have liked to implement exporting data (via CSV file), using Node and the npm module 'csv-stream-writer'
- Of course making it all look nicer would be great but that was not the focus of this project.

## Technical Questions

### What libraries did you add to the frontend? What are they used for?

- **ANSWER:**

  - React.js, Allows you to compartmentalize your app into small manageable chunks (components) and update the DOM only where necessary and without refreshing. Fast.
  - react-router-dom, for efficient client-side routing
  - styled-components, keeps component styles isolated from one another, avoids having to assign classNames all over the place

### What's the command to start application locally?

- **ANSWER:**

  - 'docker compose up'

### How long did you spend on the coding project? What would you add to your solution if you had more time? If you didn't spend much time on the coding project, then use this as an opportunity to explain what you would add.

- **ANSWER**

  - About 2 weeks on and off, as far as # hours, not sure, just whenever I had spare time, but significant #

- What if more time?

- **ANSWER**
  - Testing. Judging by how quickly this project grew in complexity, testing while developing would likely have been a better approach. Need to implement TDD for future projects. I would have used Jest/react-testing-library for front end, Jest/enzyme/supertest for back end.
  - Finish CRUD for users and 'C' in CRUD for questions
  - Implement filters for retrieving user data
  - Would have liked to finish and do some load testing and optimization. I would have used K6 for that locally, possibly looking at New Relic as well.
  - Would have liked to implement exporting data (via CSV file), using Node and the npm module 'csv-stream-writer'
  - Of course making it all look nicer would be great but that was not the focus of this project.

### What was the most useful feature that was added to the latest version of your chosen language? Include code snippet to show how you used it.

- **ANSWER**

  - As far as JavaScript, a somewhat recent feature I used quite a bit was object destructuring.

  - **code example-** from server/controllers/index.js

```js
  put: (req, res) => {
    const { question_id } = req.params;
    const { question, answer } = req.body;

    pgdb
      .updateData(question, answer, question_id, 'question')
```

    - As far as React, which is a library, Hooks are something I used frequently.

- **code example-** from src/components/App/App.js
  ```js
    function App(props) {
      const [fetched, setFetched] = useState([]);
  ```
      and further down...
  ```js
  useEffect(() => {
    getQuestions('[]');
  }, []);
  ```

### How would you track down a performance issue in production? Have you ever had to do this?

- **ANSWER**

  - I would use a combination of tools ranging from chrome dev tools to NewRelic to Loader.io to database administration tools. After taking some time to research what I find I would discuss solutions such as code changes or scaling methods with team/supervisors. I have had to do this and it resulted in a better outcom.
