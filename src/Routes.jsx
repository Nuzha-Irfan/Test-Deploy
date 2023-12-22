import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Landing = React.lazy(() => import("pages/LandingPage"));


const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
        
         
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
