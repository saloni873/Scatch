# Scatch: Secure MERN Stack Web Application 🚀

**Repository Description:** Scatch is a modern, full-stack web application built with the **MERN stack (MongoDB, Express, React, Node.js)**. It features secure user registration and login, utilizing **JSON Web Tokens (JWT)** for stateless authentication.

---

## ✨ Features

* **JWT Authentication:** Secure user sign-up, sign-in, and protected routes using stateless JSON Web Tokens.
* **Mongoose/MongoDB:** Persistent data storage using the NoSQL database, managed via **Mongoose**.
* **CRUD Operations:** Full capability to Create, Read, Update, and Delete core resources (e.g., posts, tasks, profiles).
* **Bcrypt Hashing:** Secure storage of user passwords through the bcrypt algorithm.
* **Responsive UI:** A user interface built with React that looks great on desktop and mobile devices.

---

## 💻 Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **React** (with Hooks/Router) | Dynamic and responsive user interface. |
| **Backend** | **Node.js / Express.js** | Fast, unopinionated server environment and API framework. |
| **Database** | **MongoDB** (with Mongoose) | Flexible NoSQL data layer. |
| **Security** | **JWT / Bcrypt** | Authentication and password hashing. |

---

## ⚙️ Local Setup and Installation

Follow these steps to get Scatch running on your local machine. You will need **Node.js** and **npm** installed.

### 1. Clone the Repository
git clone [https://github.com/saloni873/scatch.git](https://github.com/saloni873/scatch.git)
cd scatch

### 2. Backend Setup (API)
The backend code is located in the backend directory.

a. Install Dependencies and Configure Environment
cd backend
npm install
Create a file named .env in the backend directory and add the following variables:

# Database connection string
MONGO_URI=[YOUR_MONGODB_CONNECTION_STRING_HERE]

# Secret key for signing JWTs
JWT_SECRET=[A_LONG_SECURE_RANDOM_STRING]

# Port for the Express server (Frontend should point to this port)
PORT=5000
b. Run the Backend


npm start
# The API server should now be running at http://localhost:5000
3. Frontend Setup (Client)
In a new terminal window, navigate back to the root directory and then into the frontend directory.

a. Install Dependencies
cd ..              # Back to the root 'scatch' folder
cd frontend
npm install
b. Run the Frontend
Bash

npm start
# The application should open automatically at http://localhost:3000

🤝 Contribution
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project.

Create your Feature Branch (git checkout -b feature/AmazingFeature).

Commit your Changes (git commit -m 'Add some AmazingFeature').

Push to the Branch (git push origin feature/AmazingFeature).

Open a Pull Request.

📄 License
Distributed under the MIT License. See LICENSE for more information.

📞 Contact
Email - gautamsaloni873@gmail.com

Project Link: https://github.com/saloni873/scatch





```bash
git clone [https://github.com/your-username/scatch.git](https://github.com/your-username/scatch.git)
cd scatch
