# 🍽️ SharePlate - Share a Plate, Save a Life  

🌍 **A platform designed to promote community sharing and reduce food waste.**  
It connects donors with those in need, making food donation **intuitive, accessible, and impactful**.  

---

## 📜 Table of Contents  

- [Purpose](#-purpose)  
- [Live URL](#-live-url)  
- [Features](#-features)  
- [Tech Stack](#-tech-stack)  
- [Installation](#-installation)  
- [Usage](#-usage)  
- [Configuration](#-configuration)  
- [Deployment](#-deployment)  
- [Dependencies](#-dependencies)  

---

## 🎯 Purpose  

**SharePlate** is built to create a **web-based solution** for:  
✅ **Reducing food waste** by sharing surplus food.  
✅ **Connecting communities** through food donations.  
✅ **Ensuring accessibility** for people in need.  

---

## 🌐 Live URL  

🔗 **Visit the Live Website:** [SharePlate](https://shareplate-72dea.web.app)  

---

## 🚀 Features  

✅ **User Authentication** – Secure sign-up & login functionality.  
✅ **Custom Layout** – Change the grid layout in the food section.  
✅ **Add Food Items** – Users can add details of food for donation.  
✅ **Manage Food Items** – Update or delete added food items.  
✅ **Food Details Page** – View full details of available food.  
✅ **Responsive Design** – Optimized for all devices.  
✅ **SweetAlert Integration** – Beautiful alert modals for interactions.  
✅ **Lottie Animations** – Engaging UI animations for a better experience.  

---

## 🛠 Tech Stack  

### 🔹 **Frontend**  
- **React** – JavaScript library for UI development.  
- **React Router DOM** – Handles navigation and routing.  
- **Tailwind CSS** – Utility-first CSS framework.  
- **SweetAlert2** – Elegant alert modals.  
- **Lottie React** – Lightweight animations.  
- **React Awesome Button** – Stylish button components.  

### 🔹 **Backend & APIs**  
- **Axios** – For making API requests.  
- **MongoDB** – Database.  
- **NodeJS** – For backend api.  
- **React Hook Form** – Handles form validation and submission.  

---

## ⚙️ Installation  

1️⃣ **Clone the repository**  
```bash
git clone https://github.com/yourusername/shareplate.git
cd shareplate
```

2️⃣ **Install dependencies**  
```bash
npm install
```

3️⃣ **Start the development server**  
```bash
npm start
```
> The app will run on `http://localhost:3000/`.  

---

## 📖 Usage  

### **General Usage**  
1. **Sign Up/Login** using the authentication system.  
2. **Browse Food Listings** – Explore available food items.  
3. **Add New Items** – Donate food by providing relevant details.  
4. **Manage Listings** – Update or delete previously added food items.  
5. **Engage with Alerts & Animations** – Enjoy **SweetAlert modals** and **Lottie animations** for a smooth experience.  

---

## 🛠 Configuration  

To configure the project, add environment variables in a `.env.local` file:  

```env
VITE_apiKey=firebase_api_key
VITE_authDomain=firebase_authDomain
VITE_projectId=firebase_projectId
VITE_storageBucket=firebase_storageBucket
VITE_messagingSenderId=firebase_messagingSenderId
VITE_appId=firebase_appId
```
> Replace `your_api_url` with the actual backend API URL.  

---

## 🚀 Deployment  

You can deploy **SharePlate** using platforms like **Vercel, Netlify, or Firebase Hosting**.  

### **Deploy to Firebase**  
```bash
firebase deploy
```

---

## 📦 Dependencies  

| Package              | Description |
|----------------------|------------|
| `react`             | Core UI framework |
| `react-router-dom`  | Handles page routing |
| `react-hook-form`   | Manages form submissions |
| `axios`             | Handles API requests |
| `sweetalert2`       | Provides beautiful alert modals |
| `react-awesome-button` | Adds stylish buttons |
| `lottie-react`      | Displays Lottie animations |

---
