# Blog and Course Platform

This project is a full-stack web application designed for blog and course management, featuring an intuitive admin panel and user authentication via OTP. Built using React, Node.js, and MySQL, this platform allows users to explore blogs and courses, make purchases, and interact through a seamless interface.

## Table of Contents


https://github.com/user-attachments/assets/f6921a19-5b7e-451d-997d-70528a8f3fab



## Table of Contents
- [Features](#features)
- [Pages](#pages)
- [Database Schema](#database-schema)
- [Backend API Routes](#backend-api-routes)
- [Installation](#installation)

## Features
- **Home Page:** Displays blogs, with data fetched from the backend.
- **Courses Page:** Lists all available courses, fetched from the backend.
- **Admin Panel:** Form for creating new blog posts.
- **Schedule Page:** Displays blogs scheduled for future publication.
- **Course Detail Page:** Shows all information related to a selected course.
- **Blog Detail Page:** Displays full details of a selected blog post.
- **Mail Verification Page:** Form for user email verification.
- **OTP Verification Page:** OTP form for email-based authentication.
- **Purchase Page:** Allows users to make payments with multiple methods.

## Pages

- **Home Page:** Includes blogs fetched from the backend.
- **Courses Page:** Shows all courses available, with data fetched from the backend.
- **Admin Panel:** Form to post new blogs.
- **Schedule Page:** Lists blogs scheduled to post in the future.
- **Course Detail Page:** Detailed view of each course's information.
- **Blog Detail Page:** Detailed view of each blog's content.
- **Mail Verify Page:** Email form for user verification.
- **OTP Verify Page:** OTP form sent to the user’s email for authentication.
- **Purchase Page:** Includes payment methods for transactions.

## Database Schema

The database includes four main tables:

1. **user**: Stores user information.
2. **blog**: Contains all blog posts.
3. **courses**: Stores details of available courses.
4. **user_transactions**: Records user transaction history.

## Backend API Routes

The backend includes the following API routes:

- **GET /getBlogs**: Fetches all blog posts.
- **GET /getCourses**: Fetches all courses.
- **POST /sendOtp**: Uses Nodemailer to send an OTP to the user’s email.
- **POST /verifyOtp**: Verifies the OTP entered by the user.

## Installation

1. **Clone the repository**:
   ```bash
     git clone https://github.com/RohitVerma2003/FullStackBlogsAndCourses.git
   ```
2. **Navigate to the project directory**
   ```bash
     cd Blog
   ```
3. **Install frontend and backend dependencies**
   ```bash
     cd frontend
     npm install
   ```
   ```bash
    cd ../backend
    npm install
   ```
4.**Set up the database**

5. **Start the backend server**
  ```bash
  cd backend
  npm start
  cd ../frontend
  npm start
```

   
