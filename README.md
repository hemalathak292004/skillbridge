# SkillBridge - Learning Management System

A modern learning management system built with React and Node.js, featuring both student and instructor dashboards.

## 🚀 Features

- **Role-based Authentication** - Separate login/signup for students and instructors
- **Desktop Dashboard** - Professional sidebar navigation and modern UI
- **Course Management** - Create, manage, and track courses
- **Assignment System** - Submit and grade assignments
- **Analytics** - Track progress and performance
- **Responsive Design** - Works on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router
- Vite
- CSS3 with custom design system

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v16 or higher)
- **MongoDB** (running locally or MongoDB Atlas)
- **Git**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd skillbridge
```

### 2. Backend Setup

```bash
cd skillbridge-backend
npm install
```

### 3. Environment Configuration

Create a `.env` file in the `skillbridge-backend` directory:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/skillbridge
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

**Important:** 
- For local MongoDB: Use `mongodb://localhost:27017/skillbridge`
- For MongoDB Atlas: Use your Atlas connection string
- Change the JWT_SECRET to a secure random string

### 4. Start MongoDB

Make sure MongoDB is running on your system:

**Windows:**
```bash
# If MongoDB is installed as a service
net start MongoDB

# Or start manually
mongod
```

**macOS:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

### 5. Start the Backend Server

```bash
cd skillbridge-backend
npm start
```

The backend will be available at `http://localhost:5000`

### 6. Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd skillbridge-frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 🔧 Configuration

### Database Setup

1. **Local MongoDB:**
   - Install MongoDB locally
   - Start the MongoDB service
   - Use `mongodb://localhost:27017/skillbridge` in your `.env` file

2. **MongoDB Atlas (Cloud):**
   - Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a new cluster
   - Get your connection string
   - Replace `mongodb://localhost:27017/skillbridge` with your Atlas connection string

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Backend server port | 5000 |
| `MONGO_URI` | MongoDB connection string | mongodb://localhost:27017/skillbridge |
| `JWT_SECRET` | Secret key for JWT tokens | (required) |

## 📱 Usage

### First Time Setup

1. Open `http://localhost:5173` in your browser
2. Choose your role (Student or Instructor)
3. Create a new account or login
4. Access the dashboard at `/dashboard`

### Test Account

You can create a test account with:
- **Email:** test@example.com
- **Password:** test123
- **Role:** Student

## 🏗️ Project Structure

```
skillbridge/
├── skillbridge-backend/          # Backend API
│   ├── config/                   # Database configuration
│   ├── controllers/              # Route controllers
│   ├── models/                   # Database models
│   ├── routes/                   # API routes
│   ├── .env                      # Environment variables (not in git)
│   ├── .env.example              # Environment template
│   └── server.js                 # Main server file
├── skillbridge-frontend/         # Frontend React app
│   ├── src/
│   │   ├── components/           # Reusable components
│   │   ├── pages/                # Page components
│   │   ├── context/              # React context
│   │   └── services/             # API services
│   └── public/                   # Static assets
└── README.md                     # This file
```

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error:**
   ```
   MongooseError: Operation `users.findOne()` buffering timed out
   ```
   **Solution:** Make sure MongoDB is running and the connection string in `.env` is correct.

2. **Port Already in Use:**
   ```
   Error: listen EADDRINUSE: address already in use :::5000
   ```
   **Solution:** Kill existing Node processes or change the port in `.env`.

3. **Missing .env file:**
   ```
   ⚠️ MongoDB URI not found, running without database
   ```
   **Solution:** Create `.env` file from `.env.example` template.

### Getting Help

If you encounter issues:

1. Check that all prerequisites are installed
2. Verify MongoDB is running
3. Ensure the `.env` file is properly configured
4. Check the console for error messages
5. Make sure both frontend and backend servers are running

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the database
- Express.js for the backend framework
- All open-source contributors
