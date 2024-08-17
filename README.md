# Fullstack Assignment

This is a fullstack assignment project that includes a frontend built with React and Tailwind CSS and a backend using Node and Express with MongoDB as a NoSQL database. The project demonstrates a simple card layout with search functionality.
I am using sample Data for the cards in the Frontend, I have written the code for how to fetch the cards data from a database too so please check the app.js file in frontend thoroughly.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/fullstack-assignment.git
   ```

2. Navigate to the frontend directory:

   ```sh
   cd fullstack-assignment/frontend
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Navigate to the backend directory:

   ```sh
   cd fullstack-assignment/backend
   ```

5. Install the dependencies:

   ```sh
   npm install
   ```

6. Create .env file and add Environment Variables:
   ```sh
   MONGO_URI="Your database connection string"
   PORT=5000
   ```

## Usage

1. Start the development server in both Frontend and Backend Folders:

   ```sh
   cd fullstack-assignment/frontend
   npm start
   cd fullstack-assignment/backend
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Features

- **Card Layout**: Displays a list of cards with titles and descriptions.
- **Search Functionality**: Allows users to search for specific cards.
- **Responsive Design**: The layout adjusts to different screen sizes, with 2 columns on larger screens.
