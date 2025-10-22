# Feedback App

## Overview
The Feedback App is a simple application that allows users to submit feedback. It consists of a React frontend, a Java Spring Boot backend, and an SQL database for storing feedback data.

## Project Structure
```
feedback-app
├── ui                # Frontend React application
│   ├── package.json  # NPM configuration file
│   ├── public        # Public assets
│   │   └── index.html # Main HTML file
│   └── src          # Source code for the React application
│       ├── index.jsx # Entry point for the React app
│       ├── App.jsx   # Main App component
│       ├── components # React components
│       │   └── FeedbackForm.jsx # Feedback form component
│       └── api      # API interaction
│           └── feedbackApi.js # API functions for feedback
├── api               # Backend Java application
│   ├── pom.xml      # Maven configuration file
│   └── src          # Source code for the Java application
│       └── main
│           ├── java
│           │   └── com
│           │       └── example
│           │           └── feedback
│           │               ├── Application.java # Main entry point
│           │               ├── controller
│           │               │   └── FeedbackController.java # Handles feedback requests
│           │               ├── model
│           │               │   └── Feedback.java # Feedback data model
│           │               └── repository
│           │                   └── FeedbackRepository.java # Data access interface
│           └── resources
│               └── application.properties # Application configuration
├── db                # Database scripts
│   └── feedback.sql  # SQL statements for feedback table
├── .gitignore        # Git ignore file
└── README.md         # Project documentation
```

## Setup Instructions

### Frontend (UI)
1. Navigate to the `ui` directory:
   ```
   cd ui
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm start
   ```

### Backend (API)
1. Navigate to the `api` directory:
   ```
   cd api
   ```
2. Build the Java application using Maven:
   ```
   mvn clean install
   ```
3. Run the Spring Boot application:
   ```
   mvn spring-boot:run
   ```

### Database
1. Execute the SQL script in `db/feedback.sql` to create the feedback table and insert sample data.

## Usage
- Users can access the React application in their browser, submit feedback through the form, and the feedback will be stored in the database via the Java API.