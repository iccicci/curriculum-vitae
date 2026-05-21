import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CurriculumVitae } from "./CurriculumVitae";
import { PrivacyPolicy } from "./Privacy";

const App = () => <BrowserRouter>
  <Routes>
    <Route caseSensitive path="/privacy" element={<PrivacyPolicy />} />
    <Route caseSensitive path="/DanieleRicci" element={<CurriculumVitae />} />
    <Route path="/*" element={<Navigate to="/DanieleRicci" />} />
  </Routes>
</BrowserRouter>;

export default App;
