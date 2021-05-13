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
