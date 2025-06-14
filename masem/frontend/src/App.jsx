//import { Route, Router, Routes } from "react-router-dom"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import Admin from "./pages/Admin"




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/admin" element={ <Admin /> } />
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  )
}

export default App 
