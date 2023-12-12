import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout";
import AboutPage from "../pages/AboutPage";
import ChatPage from "../pages/ChatPage";
import HomePage from "../pages/HomePage";
import NewsPage from "../pages/NewsPage";
import SearchPage from "../pages/SearchPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <AdminLayout>
              <HomePage />
            </AdminLayout>
          }
        />
        <Route
          path="/search"
          element={
            <AdminLayout>
              <SearchPage />
            </AdminLayout>
          }
        />

        <Route
          path="/about"
          element={
            <AdminLayout>
              <AboutPage />
            </AdminLayout>
          }
        />
        <Route
          path="/chat"
          element={
            <AdminLayout>
              <ChatPage />
            </AdminLayout>
          }
        />
        <Route
          path="/news"
          element={
            <AdminLayout>
              <NewsPage />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
