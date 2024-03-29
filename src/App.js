import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";

import FollowersPage from "./pages/FollowersPage/FollowersPage";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tweets" element={<FollowersPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
