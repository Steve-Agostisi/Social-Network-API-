# Social Network API

## Description
This project is a social network API built using MongoDB, Express.js, and Mongoose. It allows users to share their thoughts, react to friends' thoughts, and manage a friend list. The API is designed to handle large amounts of unstructured data efficiently.

## Technologies Used
- MongoDB
- Express.js
- Mongoose
- Node.js

## Getting Started

### Prerequisites
- Node.js installed on your machine
- MongoDB installed and running locally

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd social-network-api
   ```
3. Install the dependencies:
   ```
   yarn install
   ```

### Usage
1. Start the server:
   ```
   yarn start
   ```
2. Use Insomnia or Postman to test the API routes.

### API Routes
- **Users**
  - `GET /api/users` - Retrieve all users
  - `GET /api/users/:userId` - Retrieve a single user by ID
  - `POST /api/users` - Create a new user
  - `PUT /api/users/:userId` - Update a user by ID
  - `DELETE /api/users/:userId` - Delete a user by ID

- **Thoughts**
  - `GET /api/thoughts` - Retrieve all thoughts
  - `GET /api/thoughts/:thoughtId` - Retrieve a single thought by ID
  - `POST /api/thoughts` - Create a new thought
  - `PUT /api/thoughts/:thoughtId` - Update a thought by ID
  - `DELETE /api/thoughts/:thoughtId` - Delete a thought by ID

- **Reactions**
  - `POST /api/thoughts/:thoughtId/reactions` - Create a reaction to a thought
  - `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Delete a reaction from a thought

## Walkthrough Video
A walkthrough video demonstrating the functionality of the API will be provided here.

## License
This project is licensed under the MIT License.