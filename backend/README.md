# Contact Management System

A full-stack MERN application for managing contacts with CRUD operations, search functionality, and responsive design.

## 🚀 Live Demo
- **Frontend**: [Will add after deployment]
- **Backend API**: [Will add after deployment]

## ✨ Features
- ➕ Add new contacts
- ✏️ Edit existing contacts
- 🗑️ Delete contacts
- 🔍 Search contacts by name, email, or company
- ✅ Form validation
- 📱 Responsive design
- ⚠️ Error handling

## 🛠️ Tech Stack
- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Deployment**: Vercel (Frontend), Render (Backend)

## 📦 Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB Atlas account

### Backend Setup
```bash
cd backend
npm install
# Create .env file with your MongoDB URI
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

## 🔑 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### Frontend (.env)
```
REACT_APP_API_URL=your_backend_url/api
```

## 📝 API Endpoints
- `GET /api/contacts` - Get all contacts (with optional search)
- `GET /api/contacts/:id` - Get single contact
- `POST /api/contacts` - Create new contact
- `PUT /api/contacts/:id` - Update contact
- `DELETE /api/contacts/:id` - Delete contact
