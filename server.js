const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

// GraphQL Schema
const schema = buildSchema(`
    type User {
        id: Int
        name: String
        age: Int
    }

    type Query {
        message: String
        getUser(id: Int!): User
        getAllUsers: [User]
    }

    type Mutation {
        setMessage(newMessage: String!): String
        createUser(id: Int!, name: String!, age: Int!): User
        updateUser(id: Int!, name: String, age: Int): User
        deleteUser(id: Int!): String
    }
`);

// Database simulation
const users = [];
let message = "Default message"; 

// Resolver functions
const root = {
    // Delete user by ID
    deleteUser: ({ id }) => {
        const userIndex = users.findIndex(user => user.id === id);
        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            return "User deleted successfully";
        }
        return "User not found";
    },

    // Get single user by ID
    getUser: ({ id }) => users.find(user => user.id === id),

    // Update user details
    updateUser: ({ id, name, age }) => {
        const user = users.find(user => user.id === id);
        if (user) {
            if (name) user.name = name;
            if (age) user.age = age;
            return user;
        }
        return null;
    },

    // Create new user
    createUser: ({ id, name, age }) => {
        if (users.some(user => user.id === id)) {
            throw new Error("User with this ID already exists");
        }
        const newUser = { id, name, age };
        users.push(newUser);
        return newUser;
    },

    // Get all users
    getAllUsers: () => users,

    // Get current message
    message: () => message,

    // Set new message
    setMessage: ({ newMessage }) => {
        message = newMessage;
        return message;
    }
};

// Setup GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true // Enable GraphiQL for testing
}));

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
