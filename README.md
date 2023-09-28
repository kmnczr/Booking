# Airbnb Clone Application

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)


## Introduction

Welcome to the Airbnb Clone Application! This project is a web application inspired by Airbnb, designed to provide users with a platform to discover, list, and book accommodations. It is built using the MERN (MongoDB, Express, React, Node.js) stack to ensure a robust and efficient development process.

## Usage

To get started with the Airbnb Clone Application, follow these steps:

1. **Clone the Repository**: 
git clone https://github.com/kmnczr/Booking.git

2. **Navigate to the Project Directory**:
cd Booking

3. **Install Dependencies**:

cd backend
yarn add

4. **Install frontend dependencies using Vite**:

cd client
yarn add

5. **Set Up Environment Variables**:
- Create a `.env` file in the `backend` directory to store your configuration. You'll need to configure your MongoDB connection URL and JWT secret. Here's an example:

MONGODB_URI=your_mongodb_connection_url
JWT_SECRET=your_jwt_secret


6. **Start the Development Servers**:
- Start the backend server (Node.js) using Nodemon:
  
  cd backend
  nodemond index.js

- Start the frontend server (Vite) with hot-reloading:

  cd client
  npm run dev

7. **Access the Application**:
- Open your web browser and go to `http://127.0.0.1:5173/` to access the Airbnb Clone Application.

8. **User Authentication**:
- Sign up for a new user account to get started. You can also use the provided test user credentials for quick access.

9. **Start Exploring**:
- After logging in, you can start exploring the application's features, including creating listings, searching for accommodations, and making bookings.

## Features

- User Authentication: Users can sign up, log in, and manage their profiles.
- Listings: Hosts can create, edit, and delete property listings, including details like property description, pricing, and availability.
- Search and Filters: Users can search for listings based on location, dates, and filters such as property type and amenities.
- Booking: Users can book available properties for specific dates, and hosts can manage their bookings.
- Reviews and Ratings: Users can leave reviews and ratings for properties they have stayed at.
- Responsive Design: The application is designed to be accessible and usable across various devices and screen sizes.

## Technologies Used

- Frontend: React.js
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Styling: Tailwind CSS

## Contributing

Contributions are welcome! If you find any issues or want to contribute enhancements, please create a pull request.