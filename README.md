# 🏠 HouseRentApp

A Full-Stack MERN (MongoDB, Express, React, Node.js) application for listing, renting, and managing properties. This project is organized into two main folders: **Backend** and **Frontend**.

## 📁 Project Structure

```
HouseRentApp/
├── Backend/
│   ├── .env
│   ├── .gitignore
│   ├── config/
│   ├── controllers/
│   ├── index.js
│   ├── middlewares/
│   ├── mongodlog.txt
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── routes/
│   ├── schemas/
│   └── uploads/
├── Frontend/
│   ├── .gitignore
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── public/
│   ├── README.md
│   └── src/
├── .gitignore
└── README.md
```


## 🚀 Features

- User authentication (Register, Login)
- Role-based access control (Admin, Owner, User)
- Add, view, edit, and delete property listings
- Property search and filter functionality
- Booking management
- Responsive design for all devices

## 🛠️ Tech Stack

**Frontend**:
- React
- React Router
- Axios
- CSS (or TailwindCSS)

**Backend**:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- Bcrypt for password hashing

## ⚙️ Installation and Setup

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** and **npm** installed
- **MongoDB** installed locally or a MongoDB Atlas account
- **Git** installed

### 1. Clone the Repository

```bash
git clone https://github.com/Aishu1509/Aishwarya-HouseRentApp.git
cd Aishwarya-HouseRentApp
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

#### Environment Variables

Create a `.env` file in the `Backend` folder and add the following:

```
PORT=8001
MONGO_URI=mongodb://127.0.0.1:27017/houseRentApp
JWT_KEY=your_jwt_secret_key
```

#### Run the Backend Server

```bash
npm start
```

The backend server will be running on [http://localhost:8001](http://localhost:8001).

### 3. Frontend Setup

```bash
cd ../Frontend
npm install
```

#### Run the Frontend Server

```bash
npm start
```

The frontend server will be running on [http://localhost:3000](http://localhost:3000).

### 4. Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🗂️ API Endpoints

### **User Routes**

| Method | Endpoint                        | Description                           |
|--------|----------------------------------|---------------------------------------|
| POST   | `/register`                      | Register a new user.                 |
| POST   | `/login`                         | Log in with email and password.      |
| POST   | `/forgotpassword`                | Reset the password.                  |
| GET    | `/getAllProperties`              | Fetch all available properties.      |
| POST   | `/getuserdata`                   | Fetch authenticated user data.      |
| POST   | `/bookinghandle/:propertyid`     | Book a property.                     |
| GET    | `/getallbookings`                | Get all bookings made by the user.   |

### **Admin Routes**

| Method | Endpoint                        | Description                           |
|--------|----------------------------------|---------------------------------------|
| GET    | `/getallusers`                   | Get all users.                       |
| POST   | `/handlestatus`                  | Update user status (e.g., grant access). |
| GET    | `/getallproperties`              | Get all properties.                  |
| GET    | `/getallbookings`                | Get all bookings.                    |

### **Owner Routes**

| Method | Endpoint                        | Description                           |
|--------|----------------------------------|---------------------------------------|
| POST   | `/postproperty`                  | Add a new property (with images).    |
| GET    | `/getallproperties`              | Get all properties owned by the user. |
| GET    | `/getallbookings`                | Get all bookings for the owner's properties. |
| POST   | `/handlebookingstatus`           | Update booking status (e.g., accepted/rejected). |
| DELETE | `/deleteproperty/:propertyid`    | Delete a property.                   |
| PATCH  | `/updateproperty/:propertyid`    | Update property details.            |


## 🔑 Environment Variables

Make sure to set the following environment variables in your `.env` file:

- `PORT`: The port for the backend server (default: 8001)
- `MONGO_URI`: Your MongoDB connection string
- `JWT_KEY`: A secret key for JWT token generation


```bash
npm test
```

## 🙏 Acknowledgements

- [MongoDB Documentation](https://docs.mongodb.com/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/)

## 🤝 Contributing

Contributions are welcome! Please fork this repository, create a branch, and submit a pull request.

## 📜 License

This project is licensed under the MIT License.

## 📧 Contact

For any inquiries or issues, please contact:

- **Aishwarya** - [GitHub Profile](https://github.com/Aishu1509)

---
