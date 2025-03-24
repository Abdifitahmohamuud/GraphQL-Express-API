# GraphQL Express API

This repository contains a simple GraphQL API built with Express.js. The API allows users to perform CRUD operations on a user database, as well as manage a message string.

## Features
- **Create, Read, Update, Delete (CRUD) Users**
- **Manage a Global Message**
- **GraphiQL Interface for Testing**

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Abdifitahmohamuud/GraphQL-Express-API.git
   ```
2. Navigate into the project directory:
   ```sh
   cd GraphQL-Express-API
   ```
3. Install dependencies (since `node_modules` is not included in the repository, you need to install them manually):
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   node index.js
   ```
5. Open GraphiQL in the browser:
   ```
   http://localhost:3000/graphql
   ```

## API Endpoints & Usage

### Queries

#### Get all users
```graphql
query {
  getAllUsers {
    id
    name
    age
  }
}
```

#### Get a user by ID
```graphql
query {
  getUser(id: 1) {
    id
    name
    age
  }
}
```

#### Get the stored message
```graphql
query {
  message
}
```

### Mutations

#### Create a new user
```graphql
mutation {
  createUser(id: 1, name: "John Doe", age: 30) {
    id
    name
    age
  }
}
```

#### Update an existing user
```graphql
mutation {
  updateUser(id: 1, name: "John Smith", age: 31) {
    id
    name
    age
  }
}
```

#### Delete a user
```graphql
mutation {
  deleteUser(id: 1)
}
```

#### Set a new message
```graphql
mutation {
  setMessage(newMessage: "Hello, GraphQL!")
}
```

## Project Structure
```
.
├── index.js      # Main server file
├── package.json  # Project dependencies
├── README.md     # Documentation
```

## Technologies Used
- Node.js
- Express.js
- GraphQL

## License
This project is open-source and available under the MIT License.

