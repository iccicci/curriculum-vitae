import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CurriculumVitae } from "./CurriculumVitae";

const App = () => <BrowserRouter>
  <Routes>
    <Route caseSensitive path="/DanieleRicci" element={<CurriculumVitae />} />
    <Route path="/*" element={<Navigate to="/DanieleRicci" />} />
  </Routes>
</BrowserRouter>;

export default App;
