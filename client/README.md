# Posinove Auth Client

A modern authentication application built with Next.js, featuring a clean UI and secure authentication system.

## Features

- 🔐 Secure user authentication
- 🎨 Modern and responsive UI
- 👤 User profile management
- 📱 Dashboard interface
- 🌐 Public and protected routes
- 🎯 Role-based access control

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **State Management:** React Context
- **Authentication:** JWT
- **HTTP Client:** Axios

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- The API server running (see the `/api` directory)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/AimeKelvin/posinove-auth-task.git
   cd posinove-auth-task/client
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the client directory with the following content:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open the application**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # App router pages
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   └── profile/           # User profile pages
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── navbar.tsx        # Navigation component
└── lib/                  # Utilities and contexts
    ├── auth-context.tsx  # Authentication context
    ├── client.ts         # API client setup
    └── utils.ts          # Helper functions
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

