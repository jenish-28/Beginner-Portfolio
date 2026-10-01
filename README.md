# Beginner Portfolio

> A beginner-friendly personal portfolio website built while learning modern web development with Next.js, React, JavaScript/JSX, and Tailwind CSS.

This repository contains an earlier portfolio project created to practice building a responsive personal website, structuring reusable React components, working with the Next.js App Router, and experimenting with server-side email integration.

## 🌐 Project

**GitHub Repository:** [Beginner-Portfolio](https://github.com/jenish-28/Beginner-Portfolio)

The main Next.js application is located inside the `myportfolio` directory.

> **Project status:** This is an earlier learning/portfolio project. It is kept as part of the development journey and is not the user's current portfolio implementation.

## ✨ Features

- Responsive portfolio layout
- Fixed navigation bar
- Mobile navigation menu
- Smooth scrolling between sections
- Hero section with animated/typewriter content
- About section
- Skills section
- Education section
- Projects showcase
- Contact section
- Email link
- LinkedIn profile link
- CV download action
- Responsive design for different screen sizes
- Dark-themed UI
- Interactive skills, education, and project tabs
- Server-side Resend API route included in the project

## 🧩 Portfolio Sections

### Hero

The hero section introduces Jenish Patel as a Full-Stack Developer interested in AI and includes a CV download action.

The profile description references technologies including:

- Python
- FastAPI
- React
- Next.js
- SQL
- MongoDB

### About

The About section provides a short developer introduction and uses three interactive tabs:

- **Skills**
- **Education**
- **Projects**

### Skills

The current project groups skills into:

| Category | Technologies |
|---|---|
| Backend | Python, FastAPI, RESTful APIs, JWT, Node.js |
| Frontend | React, Next.js, Tailwind CSS, JavaScript ES6+, HTML & CSS |
| Database & ORM | MongoDB, SQLite, SQL |

### Education

The portfolio currently mentions:

- Master's studies in Applied Computer Science at Hochschule Schmalkalden, Germany
- Bachelor of Engineering in Computer Engineering
- H.S.C. in Science Stream

### Projects

The current portfolio showcases:

**Finstagram — Backend**

A Python/FastAPI backend implementing core social-media functionality including JWT authentication, post uploads, likes, comments, and follow/unfollow interactions with MongoDB.

**Job Portal — Full Stack**

A team-based project using C#/.NET Core and SQL with role-based authentication, CRUD operations, and MVC architecture.

**Registration System — MERN Stack**

A full-stack registration system using React, Node.js, and MongoDB.

### Contact

The current Contact section provides:

- Direct email contact
- LinkedIn profile link
- A short invitation to discuss projects and opportunities

The visible portfolio currently uses a direct email link rather than submitting a form from the UI.

## 🛠️ Tech Stack

### Frontend

- **Next.js 16**
- **React 19**
- **JavaScript / JSX**
- **TypeScript**
- **Tailwind CSS 4**
- **HTML & CSS**

### Libraries

- **Heroicons**
- **Lucide React**
- **Resend**

### Development

- Node.js
- npm
- ESLint
- Git
- GitHub

## 🏗️ Application Structure

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
│   │       ├── about-image.png
│   │       ├── hero-image.png
│   │       └── linkedin.png
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   └── next.config.ts
│
└── README.md
```

## 🚀 Run Locally

### Prerequisites

Install:

- Node.js
- npm

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

The project contains a server-side API route at:

```text
/api/send
```

It uses Resend and reads its configuration from environment variables.

Create a `.env.local` file inside `myportfolio/`:

```env
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=your_verified_sender@example.com
```

**Never commit real API keys or other secrets to GitHub.**

> Note: The current visible Contact section uses a `mailto:` link. The Resend API route exists separately in the codebase and is not currently wired to a visible contact form.

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📦 Available Commands

Run these commands from `myportfolio/`:

```bash
npm run dev
```

Starts the Next.js development server.

```bash
npm run build
```

Creates a production build.

```bash
npm start
```

Starts the production Next.js server after a successful build.

```bash
npm run lint
```

Runs ESLint.

## 📧 Email Integration

The project includes a Next.js Route Handler:

```text
app/api/send/route.js
```

It uses the Resend SDK and reads:

- `RESEND_API_KEY`
- `FROM_EMAIL`

The route accepts email-related information including:

- sender email
- subject
- message

and attempts to send the message to the configured portfolio email address.

The currently rendered Contact section does not submit directly to this endpoint; it provides a `mailto:` link instead.

## 🎨 Design

The portfolio uses a dark interface with:

- Black background
- Purple and pink gradient accents
- Responsive Tailwind CSS layouts
- Rounded content cards
- Interactive tab navigation
- Mobile navigation
- Responsive profile imagery
- Smooth scrolling navigation
- Typewriter-style hero text

## 📚 What This Project Demonstrates

This project was built as a learning step toward full-stack web development and demonstrates experience with:

- React component structure
- Next.js App Router
- Client-side React state
- Responsive Tailwind CSS layouts
- Navigation and smooth scrolling
- Next.js image handling
- Static assets
- API route creation
- Resend email integration
- Environment variables
- Git and GitHub
- Basic deployment workflow

## ⚠️ Development Notes

A few parts of the project are intentionally simple because this is an earlier portfolio implementation.

For example:

- Portfolio content is directly defined inside React components.
- The contact UI currently uses a `mailto:` link.
- The Resend API route exists separately and can be connected to a form in a future iteration.
- The CV download action currently points to an external Google Drive URL.
- The root layout still contains the default Next.js metadata values and can be customized further.

## 👨‍💻 Author

**Jenishkumar Patel**

M.Sc. Applied Computer Science student and software developer based in Germany.

Areas of interest include:

- Full-stack web development
- React & Next.js
- Python & FastAPI
- AI & automation
- REST APIs
- Database-backed applications

## 🔗 Profiles

- [GitHub](https://github.com/jenish-28)
- [LinkedIn](https://www.linkedin.com/in/jenishkumar-patel-634770394/)
- [Email](mailto:16jenishkumarpatel@gmail.com)

## 📄 License

No separate license file is currently included in the repository.

© Jenishkumar Patel
