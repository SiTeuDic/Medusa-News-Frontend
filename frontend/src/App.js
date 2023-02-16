import { Routes, Route } from "react-router-dom";

import "./App.css";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UserPage } from "./pages/UserPage";
import SinglePostPage from "./pages/SinglePostPage";
import CreatePostPage from "./pages/CreatePostPage";
import { PostBySubjectPage } from "./pages/PostBySubjectPage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="user/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/new/:id" element={<SinglePostPage />} />
        <Route path="/createNew" element={<CreatePostPage />} />
        <Route path="/:subject" element={<PostBySubjectPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
