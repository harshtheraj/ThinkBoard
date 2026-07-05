# ThinkBoard 🧠

ThinkBoard is a modern, full-stack note-taking web application built with the MERN stack. It allows users to quickly jot down their thoughts, ideas, and notes in a clean, beautifully designed user interface. 

The application is designed to be highly responsive and includes API rate limiting to ensure reliability and security against abuse.

## 🚀 Features

- **Create Notes**: Easily create notes with a title and content.
- **View Notes**: Browse all your notes on the home page.
- **Note Details**: Click on any note to view its full content in a dedicated page.
- **Rate Limiting**: Integrated Upstash Redis to prevent API spam and abuse.
- **Modern UI**: Styled with Tailwind CSS and DaisyUI for a beautiful, responsive, and accessible user experience.
- **Toast Notifications**: Interactive feedback using React Hot Toast.

## 🛠️ Tech Stack

### Frontend
- **React (v19)**: The core UI library.
- **Vite**: Ultra-fast frontend build tool and development server.
- **Tailwind CSS & DaisyUI**: For utility-first styling and pre-built modern components.
- **React Router DOM**: For seamless client-side routing (Home, Create, Details).
- **Axios**: For making HTTP requests to the backend API.
- **Lucide React**: For beautiful, scalable SVG icons.
- **React Hot Toast**: For elegant toast notifications.

### Backend
- **Node.js & Express.js**: The backend runtime and web framework.
- **MongoDB & Mongoose**: NoSQL database for persistently storing notes, with Mongoose for object modeling.
- **Upstash Redis (@upstash/ratelimit & @upstash/redis)**: Serverless Redis used for highly efficient, globally distributed API rate limiting.
- **dotenv**: For managing secure environment variables (MongoDB URI, Upstash credentials).
- **CORS**: For handling cross-origin requests between the frontend and backend.

## ⚙️ Environment Variables

To run this project locally, you will need to add a `.env` file to the `backend` folder with the following variables:

```env
# MongoDB Connection String
MONGO_URL=mongodb+srv://<username>:<password>@cluster0...

# Upstash Redis Credentials for Rate Limiting
UPSTASH_REDIS_REST_URL=https://<your-upstash-url>
UPSTASH_REDIS_REST_TOKEN=<your-upstash-token>
```

## 💻 Running Locally

1. **Install Dependencies**:
   From the root folder, you can install both frontend and backend dependencies:
   ```bash
   npm run build
   ```
   *(Note: The custom build script in the root package.json installs backend, installs frontend, and builds the frontend)*

2. **Start the Development Server**:
   Open two terminal windows.
   
   **Terminal 1 (Backend)**:
   ```bash
   cd backend
   npm run dev
   ```
   
   **Terminal 2 (Frontend)**:
   ```bash
   cd frontend
   npm run dev
   ```

## 🌐 Deployment

The project is structured to be easily deployed on platforms like **Render**. The root `package.json` contains a build script that builds the frontend and a start script that runs the backend, which is designed to serve the static frontend files in production.
