//import { Route, Router, Routes } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Admin from "./pages/Admin"
import ProjectDetails from "./pages/ProjectDetails"
import BlogDetails from "./pages/BlogDetails"




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/admin" element={ <Admin /> } />
        <Route path="/projects/:slug" element={ <ProjectDetails /> } />
        <Route path="/blog/:slug" element={ <BlogDetails /> } />
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  )
}

export default App 
