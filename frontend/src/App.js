import { Routes, Route } from "react-router-dom";

import "./App.css";
<<<<<<< HEAD

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UserPage } from "./pages/UserPage";
=======
import PostList from "./components/PostList/PostList";
>>>>>>> origin/produccion

function App() {
  return (
    <main>
<<<<<<< HEAD
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="user/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
=======
      <PostList />
>>>>>>> origin/produccion
    </main>
  );
}

export default App;
