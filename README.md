# Carna Take Home Project

- This project was done to allow Carna to assess my coding ability.
- Is it perfect? Definitely not. It is a work in progress.
- It should run on any computer meeting the requirements

## Requirements

- Must have Docker installed on host machine.

## Usage

- Navigate to project root folder
- Be sure Docker is running
- From the terminal: docker compose up
- In browser: navigate to http://127.0.0.1:3001

## What you can expect of the current version

1. 4 client screens plus dashboard screen
2. Answering questions on pages 1 and 2 correctly will be indicated by the client
3. Functionality for pages 3 and 4 is not implemented yet. (matching words with correct translation)
4. Simple navigation in side bar is handled by React Router
5. Page number entered in dashboard input retrieves all questions for that page from the postgres db
6. Question editor is pre filled with questions and answers to be edited.
7. Once edited, hitting return or 'submit' button sends the edited question back to update the database via 'PUT' request to server.

## What was left out

- CRUD functionality for user management - mostly implemented but untested on back end
- POST and DELETE for questions - mostly implemented but untested in back end
- Other features for the dashboard - time ultimately became an issue
- Testing - would have included with more time. I can write tests, but it is a skill I need to keep working on.

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

- Testing. I would have used Jest/react-testing-library for front end, Jest/enzyme/supertest for back end.
- Finish CRUD for users and questions
- Implement filters for retrieving user data
- Would have liked to finish and do some load testing and optimization. I would have used K6 for that locally, possibly looking at New Relic as well.
- Would have liked to implement exporting data (via CSV file), using Node and the npm module 'csv-stream-writer'
