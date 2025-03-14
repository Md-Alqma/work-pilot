
# 🚀 Work-Pilot

*Your co-pilot for navigating work and productivity. A modern, Jira-like project management tool designed for teams to manage projects, tasks, and workflows efficiently.*

---

## 📌 About the Project

Work-Pilot is a full-stack web application that streamlines task tracking and team collaboration. Inspired by Jira, it provides a user-friendly interface with powerful features for managing projects seamlessly, helping teams stay organized and productive.

## [Live Preview](https://work-pilot-seven.vercel.app)

## 🛠 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/)
- **Backend**: [Hono.js](https://hono.dev/)
- **Database & Authentication**: [Appwrite](https://appwrite.io/)
- **Deployment**: Vercel & Appwrite Cloud

## ✨ Features

- 🏗 **Project & Board Management** – Easily create, organize, and manage multiple projects and boards.
- ✅ **Task Management** – Add, update, and delete tasks effortlessly.
- 🔄 **Drag & Drop Support** – Reorder tasks and columns seamlessly.
- 👥 **Task Assignment & Collaboration** – Assign tasks to team members, invite new members, and collaborate efficiently.
- 🔐 **User Authentication** – Secure login and registration powered by Appwrite.
- 📊 **Real-time Updates** – Keep your team synchronized with instant updates.
- 🎨 **Modern UI** – A clean, minimal, and intuitive interface built with TailwindCSS.

## 📸 Screenshots

### Login Page
![Login](https://github.com/user-attachments/assets/e272b910-5dce-44d9-9b6a-408ad6420d73)

### Home Page
![image](https://github.com/user-attachments/assets/56c10e34-e45e-49d3-9bad-4ce670ff1401)

### Create Workspace
![image](https://github.com/user-attachments/assets/7d34534c-62ed-4c58-9783-9d3e59fd16b6)

### Workspace Settings Page
![image](https://github.com/user-attachments/assets/dded13db-f664-42c3-a924-0945b746169f)

### Workspace Members Page
![image](https://github.com/user-attachments/assets/d433f904-6451-412b-a626-12089ca1cf30)

### Create Project
![image](https://github.com/user-attachments/assets/78163120-2c48-449b-88e2-66750a854c58)

### Project Page
![image](https://github.com/user-attachments/assets/65fa7447-8b76-437d-9316-8e3e404310ae)

### Project Page with Tasks
![image](https://github.com/user-attachments/assets/ac6fbccd-f1aa-4665-9731-6e5c65cd38bd)

### Project Settings Page
![image](https://github.com/user-attachments/assets/d235cdcb-c20c-4899-bd45-54f07c11e27a)

### Create Task
![image](https://github.com/user-attachments/assets/6767cee5-266d-4704-98ed-f37dc4d80cf8)

### Task Settings Page
![image](https://github.com/user-attachments/assets/a6c1bd25-dcff-40b5-aab9-8f9cc9782029)

### Tasks Table View Page
![image](https://github.com/user-attachments/assets/d2600515-ada7-4b82-9bac-e399c1cdea08)

### Tasks Kanban View Page
![image](https://github.com/user-attachments/assets/385eef6e-b2b1-4110-8d36-7a195d00f772)

### Tasks Calendar View Page
![image](https://github.com/user-attachments/assets/1b05b0b0-dfe4-464b-94ee-623e506849c3)

### Logout
![image](https://github.com/user-attachments/assets/1e5da731-3b1f-4117-993d-3eba32982c7f)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18+)
- **Appwrite Server** (or an Appwrite Cloud account)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/Md-Alqma/work-pilot.git
   cd work-pilot
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your Appwrite credentials:
   ```env
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
   NEXT_PUBLIC_APPWRITE_WORKSPACE_ID=your-project-id
   NEXT_PUBLIC_APPWRITE_PROJECTS_ID=your-project-id
   NEXT_PUBLIC_APPWRITE_TASKS_ID=your-project-id
   NEXT_PUBLIC_APPWRITE_DATABASE_ID=your-database-id
   ```
4. **Run the development server**
   ```sh
   npm run dev
   ```
5. **Open the app**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌍 Deployment

Easily deploy Work-Pilot using [Vercel](https://vercel.com/).

---

Thank you for checking out Work-Pilot! 🚀


