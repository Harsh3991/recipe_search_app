# Recipe Search App 🍳

A full-stack recipe search application built with React Native (Expo) for mobile and Node.js for the backend. Discover delicious recipes, save your favorites, and explore different cuisines with an intuitive and user-friendly interface.

## 📱 Download the App

**Try the app on your Android device:**
[Download APK](https://drive.google.com/file/d/1WdiUeiWYxgvteuvosKVURnGkTqyQfs3M/view?usp=sharing)

## ✨ Features

- **Recipe Search**: Search for recipes by name, ingredients, or cuisine
- **Category Filtering**: Browse recipes by categories (chicken, pork, lamb, etc.)
- **Favorites**: Save your favorite recipes for quick access
- **Recipe Details**: View detailed recipe information including ingredients and instructions
- **User Authentication**: Sign up, sign in, and email verification
- **Responsive Design**: Optimized for mobile devices
- **Real-time Search**: Debounced search for better performance

## 🛠 Tech Stack

### Mobile App (React Native)
- **React Native** with Expo
- **TypeScript** for type safety
- **Expo Router** for navigation
- **Custom Components** and hooks
- **Responsive Styling**

### Backend (Node.js)
- **Node.js** with Express
- **Drizzle ORM** for database operations
- **Database Migrations** support
- **Environment Configuration**
- **Cron Jobs** for scheduled tasks

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Expo CLI** (`npm install -g @expo/cli`)
- **Git**

### Cloning the Repository

```bash
# Clone the repository
git clone https://github.com/Harsh3991/recipe_search_app.git

# Navigate to the project directory
cd recipe_search_app
```

### Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Set up environment variables
# Create a .env file in the backend directory and add your configuration
cp .env.example .env

# Run database migrations
npm run db:migrate

# Start the backend server
npm run dev
```

### Mobile App Setup

```bash
# Navigate to the mobile directory
cd mobile

# Install dependencies
npm install

# Start the Expo development server
npx expo start

# Or run on specific platform
npx expo run:android  # For Android
npx expo run:ios      # For iOS
```

## 📁 Project Structure

```
recipe_search_app/
├── backend/                 # Node.js backend
│   ├── src/
│   │   ├── server.js       # Main server file
│   │   ├── config/         # Configuration files
│   │   └── db/             # Database schema and migrations
│   ├── package.json
│   └── drizzle.config.js
├── mobile/                  # React Native mobile app
│   ├── app/                # App screens and navigation
│   │   ├── (auth)/         # Authentication screens
│   │   ├── (tabs)/         # Tab navigation screens
│   │   └── recipe/         # Recipe detail screens
│   ├── components/         # Reusable components
│   ├── constants/          # App constants and API config
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API services
│   └── assets/             # Images and styles
└── README.md
```

## 🔧 Environment Variables

### Backend (.env)
```bash
# Database
DATABASE_URL=your_database_url

# Server
PORT=3000
NODE_ENV=development

# Add other environment variables as needed
```

### Mobile (Optional .env)
```bash
# API URL
EXPO_PUBLIC_API_URL=http://localhost:3000
```

## 📱 Running on Device

### Android
1. Install Expo Go from Google Play Store
2. Scan the QR code from `npx expo start`
3. Or use the direct APK link provided above

### iOS
1. Install Expo Go from App Store
2. Scan the QR code from `npx expo start`

## 🧪 Development

### Available Scripts

**Backend:**
- `npm run dev` - Start development server
- `npm run start` - Start production server
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open database studio

**Mobile:**
- `npx expo start` - Start Expo development server
- `npx expo run:android` - Run on Android
- `npx expo run:ios` - Run on iOS
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

**Harshwardhan Dhoble**
- GitHub: [@Harsh3991](https://github.com/Harsh3991)

## 🙏 Acknowledgments

- **CODESISTENCY** for the excellent tutorial that guided this project development
- Recipe data provided by TheMealDB API
- Icons and images from various open-source resources
- Expo team for the amazing development platform

---

⭐ If you found this project helpful, please give it a star!recipe_search_app
I’m building a recipe search app using the react native
