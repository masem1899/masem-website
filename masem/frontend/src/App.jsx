//import { Route, Router, Routes } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Admin from "./pages/Admin"
import ProjectDetails from "./pages/ProjectDetails"
import BlogDetails from "./pages/BlogDetails"
import MainLayout from "./components/layout/MainLayout"
import { AuthProvider } from "./context/AuthContext"
import LegalPage from "./components/landing/Legal"




function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Shared layout for 'normal' pages. */}
          <Route element={<MainLayout />}>
            <Route path="/" element={ <Landing /> } />
            <Route path="/projects/:slug" element={ <ProjectDetails /> } />
            <Route path="/blog/:slug" element={ <BlogDetails /> } />
            <Route path="/legal" element={ <LegalPage /> } />
            <Route path="*" element={<Landing />} />
          </Route>
          
          <Route path="/admin" element={ <Admin /> } />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App 
