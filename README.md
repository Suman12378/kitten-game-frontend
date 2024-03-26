# Kitten Game Frontend

This repository contains the frontend code for the Kitten Game application. It provides a user interface for playing the game, managing user accounts, and viewing leaderboard data.

## Getting Started

To get started with the frontend development environment, follow these steps:

1. Clone the repository to your local machine: git clone <repository-url>

2. Install dependencies: npm install


3. Set up environment variables:
- If necessary, create a `.env` file in the root directory to define environment variables such as `REACT_APP_API_URL` for communicating with the backend API.

4. Start the development server: npm start

## Folder Structure

The project structure is organized as follows:

- **src:** Contains the source code for the React components, styles, and other frontend assets.
- **public:** Contains static assets and the HTML template.

## Available Scripts

- **start:** Starts the development server.

- **build:** Builds the production-ready assets.

- **test:** Runs test suites (if any).

- **eject:** Ejects the Create React App configuration for customization.

## Dependencies

- **axios:** Library for making HTTP requests.
- **react:** JavaScript library for building user interfaces.
- **react-dom:** React package for working with the DOM.
- **react-hot-toast:** Library for displaying toast notifications.
- **react-redux:** Library for managing application state in React.
- **react-router-dom:** Library for routing in React applications.
- **redux-persist:** Library for persisting Redux state.
- **@reduxjs/toolkit:** Toolkit for efficient Redux development.

## Components

- **Login:** Component for user login.
- **Signup:** Component for user registration.
- **Home:** Landing page component.
- **Navbar:** Navigation bar component.
- **Leaderboard:** Component for displaying leaderboard data.
- **Profile:** Component for displaying user profile information.
- **Dashboard:** Component for the game dashboard.
- **WinCard:** Component for displaying the win message.
- **LossCard:** Component for displaying the loss message.

## API Endpoints

- **POST /v1/login:** Endpoint for user login.
- **POST /v1/register:** Endpoint for user registration.
- **POST /v1/leaderboard:** Endpoint for fetching leaderboard data.
- **POST /v1/fetchstate:** Endpoint for fetching game state.
- **POST /v1/updatestate:** Endpoint for updating game state.
- **GET /v1/draw-card:** Endpoint for drawing a card.
- **POST /v1/updatescore:** Endpoint for updating user score.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

Suman Thakur