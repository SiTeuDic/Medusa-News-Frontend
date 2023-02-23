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
import EditPostPage from "./pages/EditPostPage";
import EditProfilePage from "./pages/EditProfilePage";

function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="user/:id" element={<UserPage />} />
        <Route path="/editProfile/:userId" element={<EditProfilePage />} />
        <Route path="/new/:id" element={<SinglePostPage />} />
        <Route path="/createNew" element={<CreatePostPage />} />
        <Route path="/editNew/:id" element={<EditPostPage />} />

        <Route path="/subject/:subject" element={<PostBySubjectPage />} />
        <Route path="/editProfile/:userId" element={<EditProfilePage />} />

        
        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </main>
  );
}

export default App;
