# ToDo app - React and Rack

## Instructions

Go to the `front-end` folder and run:

- `npm i`
- `json-server --watch db.json`
- `npm start`

You will able to see a demo of the lab. 

## Tasks:

- Currently, tasks are fetched from the `json` server. Create a `Rack` server to provide tasks for the `react` app
- Use the `shotgun` command to start the `rack` server
- Create `tasks` and `categories` tables and create some seed data for them. The migrations have been created for you.
    - `category` has many `tasks`
    - `task` belongs to `category`
- Your `rack` server should send `json` responses for the following:
    - Show all tasks
    - Create a new task
    - Delete a task

**NOTE**: You can use `postman` to test your backend. Your back-end responses might be little bit slow with only the rack server but once we start using Rails it will be much faster.
