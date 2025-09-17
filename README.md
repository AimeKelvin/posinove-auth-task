# Posinove Auth System

A complete authentication system with a secure Node.js/Express API and a modern Next.js frontend.

## Project Overview

This project consists of two main parts:
- **API**: A robust RESTful API built with Express.js and TypeScript
- **Client**: A modern web application built with Next.js 14

### Key Features

- 🔐 Secure JWT-based authentication
- 📱 Responsive modern UI
- 🛡️ Rate limiting and security middleware
- 🔄 Error handling and validation
- 📝 OpenAPI documentation
- 🐳 Docker support for API
- 🎨 Tailwind CSS styling
- 👤 User profile management
- 🔒 Protected routes
- 📊 User dashboard

## Tech Stack

### API
- Node.js & Express.js
- TypeScript
- MongoDB with Mongoose
- JWT for authentication
- Docker support
- Rate limiting
- Winston logger
- OpenAPI documentation

### Client
- Next.js 14
- TypeScript
- Tailwind CSS
- Axios
- React Context for state management
- JWT handling

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas URI)
- Docker (optional, for containerized API)
- npm or yarn

## Quick Start

### Setting up the API

1. **Navigate to the API directory**
   ```bash
   cd api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the api directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/posinove-auth
   JWT_SECRET=your-super-secret-jwt-key
   NODE_ENV=development
   ```

4. **Start the API server**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm run build
   npm start
   ```

#### Docker Setup (Optional)
```bash
# Build and run with Docker Compose
docker-compose up --build
```

### Setting up the Client

1. **Navigate to the client directory**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the client directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The client will be available at `http://localhost:3000` and the API at `http://localhost:5000`.

## Project Structure

```
posinove-auth-task/
├── api/                      # Backend API
│   ├── src/
│   │   ├── config/          # Configuration files
│   │   ├── controllers/     # Route controllers
│   │   ├── docs/           # API documentation
│   │   ├── middlewares/    # Custom middlewares
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   └── utils/          # Helper functions
│   └── Dockerfile          # Docker configuration
│
└── client/                   # Frontend application
    ├── src/
    │   ├── app/            # Next.js pages
    │   ├── components/     # Reusable components
    │   └── lib/           # Utilities and contexts
    └── public/            # Static assets
```

## API Documentation

The API documentation is available in OpenAPI format at `/api/docs/openapi.yaml`. When the server is running, you can access the API documentation at:

- Development: `http://localhost:5000/api-docs`

## Testing

### API Tests
```bash
cd api
npm run test
```

### Client Tests
```bash
cd client
npm run test
```

## Deployment

### API Deployment
The API can be deployed using Docker:
```bash
cd api
docker build -t posinove-auth-api .
docker run -p 5000:5000 posinove-auth-api
```

### Client Deployment
The Next.js client can be deployed to Vercel or any other platform that supports Next.js:
```bash
cd client
npm run build
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security

- All passwords are hashed using bcrypt
- JWT tokens for authentication
- Rate limiting to prevent brute force attacks
- Input validation and sanitization
- Protected routes and middleware
- CORS configuration
- Environmental variables for sensitive data

## License

This project is licensed under the ISC License.

## Acknowledgments

- Next.js team for the amazing framework
- Express.js community
- MongoDB team
- All contributors to the project