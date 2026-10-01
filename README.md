# Beginner Portfolio

A beginner-friendly personal portfolio website built while learning modern web development with **Next.js, React, JavaScript/JSX, Tailwind CSS, and basic API integration**.

This project was created to practice building a complete responsive website, organizing React components, working with Next.js App Router, and connecting a contact form to an email service.

## 🌐 Project

**GitHub:** https://github.com/jenish-28/Beginner-Portfolio

> This is an earlier/beginner portfolio project. My newer portfolio project is available in my GitHub profile.

## ✨ Features

- Responsive portfolio layout
- Navigation bar
- Hero section
- About section
- Skills / technology section
- Projects showcase
- Contact section
- Email and LinkedIn links
- Download CV button
- Contact form with email sending
- Mobile-friendly design
- Simple animations and interactive UI elements

## 🛠️ Technologies

- **Next.js**
- **React**
- **JavaScript / JSX**
- **Tailwind CSS**
- **HTML & CSS**
- **Resend**
- **Heroicons**
- **Lucide React**
- **Git & GitHub**

## 📁 Project Structure

The main application is inside the `myportfolio` directory:

```text
Beginner-Portfolio/
├── myportfolio/
│   ├── app/
│   │   ├── api/
│   │   │   └── send/
│   │   │       └── route.js
│   │   ├── components/
│   │   │   ├── AboutSection.jsx
│   │   │   ├── EmailSection.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   └── Navbar.jsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── public/
│   │   └── image/
│   ├── package.json
│   ├── tsconfig.json
│   └── next.config.ts
│
└── README.md
```

## 🚀 Run the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/jenish-28/Beginner-Portfolio.git
cd Beginner-Portfolio/myportfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Resend

The contact form uses **Resend** to send emails.

Create a `.env.local` file inside the `myportfolio` folder:

```env
RESEND_API_KEY=your_resend_api_key
```

Keep your API key private and never commit `.env.local` to GitHub.

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📦 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎯 What I Learned

This project helped me practice:

- Building reusable React components
- Using the Next.js App Router
- Creating responsive layouts with Tailwind CSS
- Managing navigation between sections
- Working with images and static assets
- Creating a simple API route
- Connecting a contact form to an email service
- Using Git and GitHub for version control
- Deploying a web application

## 📚 Project Level

**Level:** Beginner / Learning Project

This repository represents an earlier stage of my web-development learning journey. It focuses on the fundamentals of creating and deploying a personal portfolio rather than complex application architecture.

## 👨‍💻 Author

**Jenishkumar Patel**

M.Sc. Applied Computer Science student and software developer interested in:

- Full-stack web development
- React & Next.js
- Python & FastAPI
- AI & automation
- REST APIs

## 📄 License

This project is a personal learning project and portfolio website.