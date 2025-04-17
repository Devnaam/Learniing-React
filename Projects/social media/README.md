# 📱 Social Media React App

A responsive and modern **Social Media Web Application** built using **React + Vite**, styled with **Bootstrap**, and powered by **React Router**. This app simulates a front-end social platform with features like user authentication, post feed, profile pages, search, notifications, and more.

---

## 🚀 Features

- ✅ User Login & Registration
- 🏠 Home Feed with Posts
- 👤 User Profile Pages
- 📝 Create New Post
- 🔍 Search for Users & Hashtags
- 🔔 Notifications Page
- ⚙️ Settings for Profile Update
- 💬 Comments Section
- ❤️ Like & Follow Features
- 🔄 Reusable Components (Navbar, PostCard, UserCard, etc.)
- 📱 Fully Responsive (Mobile-friendly using Bootstrap Grid)

---

## 🛠️ Tech Stack

| Technology | Description |
|------------|-------------|
| [React](https://reactjs.org/) | Front-end library for UI |
| [Vite](https://vitejs.dev/) | Fast dev server and bundler |
| [Bootstrap](https://getbootstrap.com/) | CSS Framework for styling |
| [React Router](https://reactrouter.com/) | Routing and navigation |
| JavaScript (ES6+) | Scripting language |

---

## 📁 Folder Structure

social-media-app/
├── src/
│   ├── assets/
│   │   └── logo.png              # App logo for favicon and navbar
│   ├── components/
│   │   ├── CommentSection.jsx    # Comment input and list
│   │   ├── FollowButton.jsx      # Follow/Unfollow button
│   │   ├── Navbar.jsx            # Navigation bar
│   │   ├── PostCard.jsx          # Post display component
│   │   └── UserCard.jsx          # User info card
│   ├── pages/
│   │   ├── CreatePost.jsx        # Post creation page
│   │   ├── Home.jsx              # Home feed page
│   │   ├── Login.jsx             # Login page
│   │   ├── Notifications.jsx     # Notifications page
│   │   ├── Profile.jsx           # User profile page
│   │   ├── Register.jsx          # Registration page
│   │   ├── Search.jsx            # Search page
│   │   └── Settings.jsx          # Settings page
│   ├── data/
│   │   └── dummyData.js          # Placeholder data for users, posts, notifications
│   ├── App.jsx                   # Main app with routing
│   ├── main.jsx                  # Entry point with ReactDOM
│   └── index.css                 # Global styles
├── index.html                    # HTML template with Bootstrap CDN
├── package.json                  # Project dependencies and scripts
├── vite.config.js                # Vite configuration
└── README.md                     # This file