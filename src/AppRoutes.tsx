import HomePage from "@/pages/HomePage";
import Layout from "@/layouts/Layout";
import AuthCallbackPage from "@/pages/AuthCallbackPage";
import { Navigate, Route, Routes } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/user-profile" element={<>user profile</>} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRoutes;
