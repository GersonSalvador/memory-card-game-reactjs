import { Routes, Route } from "react-router-dom";

import {Dashboard} from "../pages";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}