import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css'
import { Header } from './Components/Header'
import { CoursesPage } from './Pages/CoursesPage'
import { EditorPage } from './Pages/EditorPage'
import { CoursePage } from './Pages/CoursePage'
import { VideoPage } from './Pages/VideoPage'
import { VideoLesson, InteractiveLesson, Course, User } from './Objects'
import { fetchCourseBySlug } from "./Bridge";

function App() {

  const demoCourse = fetchCourseBySlug("zero-to-fullstack-bootcamp")

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<CoursesPage courses={demoCourse} />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/video" element={<VideoPage title={"Demo: Introduction to Web Development"} />}/>
          <Route path="/challenge" element={<EditorPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
