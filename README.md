# 🌱 GreenNest – Online Nursery & Gardening Services Platform

GreenNest is a frontend-based online nursery and gardening services platform where customers can explore plants, purchase gardening products, and book gardening services. It also provides separate dashboards for vendors and gardeners to manage their activities.

## ✨ Features

### 👤 Customer Panel
- Customer registration and login.
- Browse plants and gardening products.
- Explore products by category.
- View product details.
- Add products to cart and place orders.
- Book gardening services.
- View order and booking history.
- Manage profile information.

### 🛍️ Vendor Panel
- Vendor dashboard.
- Add new products.
- View and manage listed products.
- Edit and delete products.
- Manage vendor profile.

### 🌿 Gardener Panel
- Gardener dashboard.
- View available gardening bookings.
- Accept customer bookings.
- Mark accepted bookings as completed.
- Manage gardener profile.

### 🔐 Additional Features
- Role-based navigation for Customer, Vendor, and Gardener.
- Protected dashboard routes.
- Responsive dashboard sidebar.
- About and Contact pages.
- Data persistence using browser LocalStorage.

## 🛠️ Technologies Used

- **HTML5** – Structure
- **CSS3** – Styling
- **JavaScript** – Functionality
- **React.js** – User interface
- **Tailwind CSS** – Responsive styling
- **React Router** – Navigation and routing
- **React Icons** – Icons
- **LocalStorage** – Frontend data persistence
- **Vite** – Development environment

## 📂 Project Structure

```text
src/
├── components/
│   └── common/
│       └── Sidebar.jsx
├── layouts/
│   └── PublicLayout.jsx
├── dashboard-layout/
│   └── DashboardLayout.jsx
├── pages/
│   ├── public/
│   ├── auth/
│   ├── customer/
│   ├── vendor/
│   └── gardener/
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/simrankumari-coder/GreenNest
```

### 2. Navigate to the project folder

```bash
cd GreenNest
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

### 5. Create a production build

```bash
npm run build
```

## 💾 Data Storage

GreenNest uses browser LocalStorage to store user information, products, cart items, orders, and gardening bookings.

**Note:** This is a frontend-only project. It does not currently use a backend or database. Data is stored locally in the browser.

## 🎯 Project Objective

The main objective of GreenNest is to create a convenient platform that connects customers, nursery vendors, and gardening service providers through a simple and user-friendly interface.

## 👩‍💻 Developer

**Simran Kumari**

- **Education:** Bachelor of Computer Applications (BCA), 3rd Semester
- **Field:** Frontend Development
- **Technologies:** HTML, CSS, JavaScript, React.js, Tailwind CSS

---

🌱 *Bring Nature Home with GreenNest!*