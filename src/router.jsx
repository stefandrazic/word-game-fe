import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import GamePage from "./pages/GamePage";
import LeaderboardPage from "./pages/LeaderboardPage";

export default function router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/game" />} />
      <Route index path="/game" element={<GamePage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
    </Routes>
  );
}
