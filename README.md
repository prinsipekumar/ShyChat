# ShyChat

**ShyChat** is a **real-time chatting** application built with the **MERN Stack and Socket.io**. It allows users to **register**, **authenticate securely**, and **chat instantly** with others. The app supports **image uploads** via Cloudinary, secure JWT-based authentication, and sign up confirmation email notifications using **Nodemailer**. It is designed to provide a smooth, **responsive**, and modern chatting experience with keystroke and notification sounds.

**Live Demo**: [https://shychat.onrender.com](https://shychat.onrender.com)

---

## Features

- Secure Authentication with **JWT** and **bcrypt**
- Real-time messaging powered by **Socket.io**
- Keystroke and notification sound
- Responsive UI with **TailwindCSS + DaisyUI**
- Image upload support via **Cloudinary**
- Sign up confirmation email using **Nodemailer**
- Modern design with **Lucide icons** and **toast notifications**
- **MongoDB** database with **Mongoose** for persistence
- Deployed on **Render**

---

## Tech Stack

### Frontend

- React.js (Vite)
- TailwindCSS + DaisyUI
- Zustand (state management)
- Axios
- Socket.io-client
- React Router

### Backend

- Node.js
- Express.js
- MongoDB + Mongoose
- Socket.io
- JWT + bcryptjs
- Nodemailer
- Cloudinary
- Arcjet (security inspection)

### Deployment

- Frontend: Vite build
- Backend: Node.js server
- Environment variables managed with dotenv

---

## Getting Started

To run the project locally:

1. **Clone the Repository**

```bash
git clone https://github.com/prinsipekumar/ShyChat.git
cd ShyChat
```

2. **Configure Environment Variables**

Create `.env` file in `backend`. Include:

- PORT=your-port
- MONGO_URI=your-mongodb-connection-string
- NODE_ENV=development
- JWT_SECRET=your-jwt-secret
- EMAIL=your-email
- PASS=your-password
- CLIENT_URL=your-client-url
- CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
- CLOUDINARY_API_KEY=your-cloudinary-api-key
- CLOUDINARY_API_SECRET=your-cloudinary-api-secret
- ARCJET_KEY=your-arcjet-key
- ARCJET_ENV=your-arcjet-env

Create `.env` file in `frontend`. Include:

- VITE_API_URL=your-vite-api-url

3. **Install Dependencies and Start the Application**

### frontend

```bash
cd frontend
npm install
npm run dev
```

### backend

```bash
cd ../backend
npm install
npm run dev
```

---

## Contact Me

If you’d like to connect, collaborate, or explore my work further:

- Email: prinsipekumar@gmail.com
