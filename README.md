# MERN-MAR

MERN-MAR is a full-stack MERN project built with React, Vite, Express, MongoDB, and Mongoose. The application combines an anime-themed React frontend with backend APIs for user registration, authentication lookup, product creation, and product listing.

The repository also includes a `Section 1` folder with earlier HTML, CSS, and JavaScript practice work such as forms, layouts, and JavaScript basics.

## Project Description

This project is a learning-focused MERN application that demonstrates how a React single-page app can communicate with an Express backend and store data in MongoDB. The frontend includes navigation, a Jujutsu Kaisen themed home page, signup and login screens, contact form UI, product upload form, product listing page, and a manage users page. The backend exposes REST-style routes for user and product data using Express routers and Mongoose models.

## Features

- React frontend created with Vite
- Client-side routing with `react-router-dom`
- Bootstrap-based responsive UI
- Signup form validation with Formik and Yup
- Snackbar notifications with Notistack
- Express backend server
- MongoDB connection using Mongoose
- User APIs for add, authenticate, and fetch all users
- Product APIs for add, fetch all, and fetch by ID
- Practice files for HTML, CSS layout, and JavaScript fundamentals

## Tech Stack

### Frontend

- React 18
- Vite
- React Router DOM
- Bootstrap 5
- Formik
- Yup
- Notistack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Nodemon

## Folder Structure

```text
MERN-MAR/
|-- BackEnd/
|   |-- Models/
|   |   |-- Product.js
|   |   `-- User.js
|   |-- Routers/
|   |   |-- Product.js
|   |   `-- User.js
|   |-- connection.js
|   |-- index.js
|   `-- package.json
|-- FrontEnd/
|   |-- public/
|   |-- src/
|   |   |-- Components/
|   |   |   |-- AddProduct.jsx
|   |   |   |-- ContactUs.jsx
|   |   |   |-- Home.jsx
|   |   |   |-- Login.jsx
|   |   |   |-- ManageUsers.jsx
|   |   |   |-- Navbar.jsx
|   |   |   |-- ProductListing.jsx
|   |   |   `-- SignUp.jsx
|   |   |-- App.jsx
|   |   |-- App.css
|   |   |-- index.css
|   |   `-- main.jsx
|   `-- package.json
`-- Section 1/
    |-- Flex Gird/
    |-- JavaScript/
    |-- Landing Page/
    `-- Registration Form And LoginPage/
```

## Getting Started

### Prerequisites

- Node.js installed
- npm installed
- MongoDB Atlas connection string or local MongoDB database

### Backend Setup

```bash
cd BackEnd
npm install
npm run dev
```

The backend server runs on:

```text
http://localhost:5000
```

### Frontend Setup

Open a second terminal:

```bash
cd FrontEnd
npm install
npm run dev
```

The frontend development server usually runs on:

```text
http://localhost:5173
```

## API Endpoints

### User Routes

Base URL:

```text
http://localhost:5000/user
```

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/add` | Add a new user |
| POST | `/authenticate` | Authenticate user details |
| POST | `/getall` | Fetch all users |

### Product Routes

Base URL:

```text
http://localhost:5000/product
```

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/add` | Add a new product |
| GET | `/getall` | Fetch all products |
| GET | `/getbyid/:id` | Fetch a product by MongoDB ID |

## Data Models

### User

```js
{
  name: String,
  email: String,
  password: String
}
```

### Product

```js
{
  pname: String,
  pprice: String,
  pcategory: String,
  pdescription: String
}
```

## Important Notes

- The backend allows CORS requests from `http://localhost:5173`.
- The backend currently contains a MongoDB Atlas connection string directly in `BackEnd/connection.js`. For production or public repositories, move this value into an environment variable such as `MONGO_URI`.
- In `FrontEnd/src/Components/SignUp.jsx`, the signup request currently points to `http://localhost:3000/user/add`; the backend server is configured for port `5000`, so this may need to be changed to `http://localhost:5000/user/add`.
- `AddProduct.jsx` contains file upload calls to `/util/uploadfile` and `/util/getfile`, but matching backend utility routes are not currently present in the project.
- There is no root `.gitignore` file yet, so generated folders like `node_modules` should be ignored before publishing the repository.

## Available Scripts

### Backend

```bash
npm run dev
```

Starts the Express server with Nodemon.

### Frontend

```bash
npm run dev
```

Starts the Vite development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

## Suggested Improvements

- Move database credentials to `.env`
- Add `.gitignore`
- Add password hashing before storing user passwords
- Complete the login form API integration
- Add delete and update APIs for users/products
- Add backend routes for file uploads or remove unused file upload calls
- Fix the signup API port from `3000` to `5000`
- Add loading and error states to frontend API pages

## Author

This project appears to be a MERN learning project created for practicing full-stack web development with React, Node.js, Express, and MongoDB.
