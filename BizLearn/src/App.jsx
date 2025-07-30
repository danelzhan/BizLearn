import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css'
import { Header } from './Components/Header'
import { CoursesPage } from './Pages/CoursesPage'
import { EditorPage } from './Pages/EditorPage'
import { CoursePage } from './Pages/CoursePage'
import { VideoPage } from './Pages/VideoPage'

function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CoursePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
