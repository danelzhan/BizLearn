import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css'
import { Header } from './Components/Header'
import { CoursesPage } from './Pages/CoursesPage'
import { EditorPage } from './Pages/EditorPage'
import { CoursePage } from './Pages/CoursePage'
import { VideoPage } from './Pages/VideoPage'
import { VideoLesson, InteractiveLesson, Course, User } from './Objects'

function App() {

  const lesson1 = new VideoLesson("1", "Introduction to HTML", "The basics behind every website")
  const lesson2 = new InteractiveLesson()
  const course = new Course("2", "/placeholder.png", 
    "Zero to Fullstack Bootcamp", 
    "Introduction into programming and creating your first project", 
    [lesson1, lesson2]  
  )
  const userInfo = new User("3", [course])

  // console.log(userInfo)

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<CoursesPage user={userInfo} />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/video" element={<VideoPage title={"Demo: Introduction to Web Development"} />}/>
          <Route path="/challenge" element={<EditorPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
