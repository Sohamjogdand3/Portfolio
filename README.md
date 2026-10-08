# Soham Jogdand — Personal Portfolio

Modern, responsive portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- **Hero & About Section**: Dynamic personal introduction with direct resume download.
- **Featured Projects**: Curated technical projects (NLAMS, Automated Exam Management / AI Proctoring, Unified Grievance Intelligence & Resolution Platform, CivicFix AI) with tech tags and direct GitHub links.
- **POR & Achievements**: Timeline of leadership roles, hackathon wins, and research presentations.
- **Interactive Contact Form**: Powered by Web3Forms directly from the client side with input validation and instant status feedback.
- **Fully Responsive & Accessible**: Optimized for mobile, tablet, and desktop viewports.

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Vanilla CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: Web3Forms API
- **Deployment**: Vercel

## 📦 Getting Started

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/Sohamjogdand3/Portfolio.git
cd Portfolio
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## 🌐 Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the `Portfolio` repository.
4. Framework Preset will auto-detect as **Vite**.
5. Add the Environment Variable `VITE_WEB3FORMS_ACCESS_KEY` under Project Settings.
6. Click **Deploy**.
