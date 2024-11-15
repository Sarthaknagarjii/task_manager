# Task Management Application
This project is a Task Management Application built with React and Material-UI. It allows users to add, edit, delete, search, and sort tasks efficiently. The application is responsive and provides an easy-to-use interface for managing tasks with various priorities and due dates.

#Table of Contents
Features
Setup and Launch
Assumptions
Tech Stack
License


# Features:
Add Tasks: Create new tasks with a title, description, priority, and due date.
Edit Tasks: Update existing tasks to adjust details.
Delete Tasks: Remove tasks permanently.
Search Functionality: Locate tasks by title using the search bar in the navbar.
Sort Functionality: Sort tasks by priority or due date for better task management.
Toggle Completion: Mark tasks as completed or pending.
Local Storage: Task data is stored in the browser's local storage, so tasks are saved between sessions.
Responsive Design: Built to be responsive, the application adjusts to various screen sizes for seamless use on mobile, tablet, and desktop devices.


#Setup and Launch
To run this application locally, follow the steps below:

Clone the Repository

bash
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
Install Dependencies

bash
npm install
Run the Application

bash
npm start
The application will open in your default browser at http://localhost:3000.
Build the Application

To create a production-ready build, run:
bash
npm run build


# Assumptions

Task Sorting Options: The application assumes only two sorting options are required: by priority and by due date. Priority sorting is managed based on three levels (High, Medium, Low), and due dates are sorted in chronological order.

Single Page Application: Assumes a simple, single-page application for ease of navigation and faster loading.

Local Storage Only: Data persistence is limited to the browser's local storage. There is no backend API or external database for storing tasks, so data will not be shared across different devices or browsers.

Limited Priority Options: Tasks can have a priority of High, Medium, or Low. Custom priorities are not supported.

Basic Completion Status: Tasks can be marked as complete or incomplete, without additional status options.

#Tech Stack
Frontend: React, Material-UI
State Management: React Hooks (useState, useEffect)
Data Storage: Local Storage (browser-based)
Styling: CSS-in-JS with Material-UI components and styles


# License
This project is open-source and available under the MIT License.
