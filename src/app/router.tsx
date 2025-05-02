import HomePage from "@/app/routes/home";
import LoginPage from "@/app/routes/login";
import NotFoundPage from "@/app/routes/not-found";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
