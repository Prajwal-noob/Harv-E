# Harv-E
Your AI-legal Assistant 

# AI Legal Assistant

A comprehensive AI-powered legal document analysis and consultation platform that helps users understand legal documents, get expert advice, and manage their legal queries efficiently.

## 🌟 Features

### 🔐 User Authentication
- Secure user registration and login
- JWT-based authentication
- User profile management
- Password change functionality

### 💬 AI-Powered Chat Interface
- Natural language legal consultation
- Document analysis in chat context
- Clause comparison functionality
- Chat history and session management
- Real-time AI responses with legal references

### 📄 Document Analysis
- **PDF Document Processing**: Extract and analyze text from PDF files
- **Image OCR**: Extract text from legal document images
- **Multi-format Support**: PDF, JPG, PNG, GIF, BMP, TIFF
- **Intelligent Analysis**: 
  - Document type classification
  - Key clause identification
  - Risk assessment
  - Party identification
  - Date and monetary value extraction
  - Legal reference suggestions

### 🎯 Key Capabilities
- **Contract Analysis**: Identify risks, obligations, and key terms
- **Legal Notice Review**: Understand implications and deadlines
- **Agreement Comparison**: Compare different legal documents
- **Risk Assessment**: Get risk levels and recommendations
- **Government References**: Links to official legal resources

### 📊 Dashboard & Analytics
- User activity overview
- Document statistics
- Chat session management
- Recent activity tracking
- Search functionality

## 🚀 Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **OpenAI GPT-4** for AI analysis
- **JWT** for authentication
- **Multer** for file uploads
- **PDF-parse** for PDF processing
- **Tesseract.js** for OCR

### Frontend
- **React 18** with functional components
- **React Router** for navigation
- **React Query** for data fetching
- **Tailwind CSS** for styling
- **React Hook Form** with Zod validation
- **Lucide React** for icons
- **React Hot Toast** for notifications

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- OpenAI API key
- npm or yarn package manager

## 🛠️ Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ai-legal-assistant
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Environment Configuration

#### Backend (.env file in server directory)
```bash
cd server
cp env.example .env
```

Edit the `.env` file with your configuration:
```env
# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/ai-legal-assistant

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# OpenAI Configuration
OPENAI_API_KEY=your-openai-api-key-here

# File Upload Configuration
MAX_FILE_SIZE=10485760
UPLOAD_PATH=uploads

# Security Configuration
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

#### Frontend (.env file in client directory)
```bash
cd client
```

Create `.env` file:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Database Setup
Make sure MongoDB is running on your system or use a cloud MongoDB instance.

### 5. OpenAI API Key
Get your OpenAI API key from [OpenAI Platform](https://platform.openai.com/api-keys) and add it to the server `.env` file.

## 🚀 Running the Application

### Development Mode
```bash
# From the root directory
npm run dev
```

This will start both the backend server (port 5000) and frontend client (port 3000) concurrently.

### Production Mode
```bash
# Build the frontend
cd client
npm run build

# Start the server
cd ../server
npm start
```

## 📱 Usage Guide

### 1. User Registration/Login
- Visit the application and create a new account
- Log in with your credentials
- Access the dashboard

### 2. Starting a Chat Session
- Click "Start New Chat" from the dashboard
- Choose a topic and title for your chat
- Begin asking legal questions or upload documents

### 3. Document Analysis
- Upload PDF or image files
- Select document type (contract, notice, agreement, etc.)
- Get AI-powered analysis with:
  - Document summary
  - Risk assessment
  - Key clauses identification
  - Recommendations
  - Legal references

### 4. Chat Features
- Ask legal questions in natural language
- Upload documents during chat
- Compare legal clauses
- Save and revisit chat sessions
- Get government website references

### 5. Document Management
- View all uploaded documents
- Search through documents
- Reanalyze documents
- Compare multiple documents
- Export analysis results

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get user profile
- `PUT /api/auth/profile` - Update profile
- `POST /api/auth/change-password` - Change password

### Chat Management
- `GET /api/chat` - Get user's chat sessions
- `POST /api/chat` - Create new chat session
- `GET /api/chat/:id` - Get specific chat
- `POST /api/chat/:id/message` - Send message
- `POST /api/chat/:id/analyze-document` - Analyze document in chat
- `POST /api/chat/:id/compare-clauses` - Compare clauses

### Document Management
- `POST /api/documents/upload` - Upload document
- `GET /api/documents` - Get user's documents
- `GET /api/documents/:id` - Get specific document
- `POST /api/documents/:id/reanalyze` - Reanalyze document
- `DELETE /api/documents/:id` - Delete document
- `POST /api/documents/compare` - Compare documents

### User Management
- `GET /api/users/profile` - Get user profile with stats
- `GET /api/users/dashboard` - Get dashboard data
- `GET /api/users/search` - Search chats and documents
- `GET /api/users/analytics` - Get user analytics

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Rate limiting
- CORS protection
- Input validation
- File upload restrictions
- Helmet.js security headers

## 📊 Database Schema

### User Model
- Basic user information
- Authentication details
- Preferences and settings
- Activity tracking

### Chat Model
- Chat sessions
- Messages with metadata
- Document analysis results
- Legal references
- Tags and categorization

### Document Model
- File information
- Analysis results
- Risk assessments
- Processing status
- Metadata and timestamps

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the API endpoints

## 🔮 Future Enhancements

- Email notifications
- Document templates
- Advanced analytics
- Multi-language support
- Mobile application
- Integration with legal databases
- Real-time collaboration features

## ⚠️ Disclaimer

This AI Legal Assistant provides general legal information and document analysis. It is not a substitute for professional legal advice. Always consult with qualified legal professionals for specific legal matters.

---

**Built with ❤️ for the legal community** 
