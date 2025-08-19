import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import './App.css'
import { Header } from './Components/Header'
import { CoursesPage } from './Pages/CoursesPage'
import { EditorPage } from './Pages/EditorPage'
import { CoursePage } from './Pages/CoursePage'
import { VideoPage } from './Pages/VideoPage'
import { LessonPage } from "./Pages/LessonPage";
import { VideoLesson, InteractiveLesson, Course, User } from './Objects'
import { fetchCourseBySlug } from "./Bridge";

function App() {
  const [demoCourse, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cached = localStorage.getItem("demoCourse");
    if (cached) {
      setCourse(JSON.parse(cached));
      setLoading(false);
    } else {
      fetchCourseBySlug("zero-to-fullstack-bootcamp").then(course => {
        setCourse(course);
        localStorage.setItem("demoCourse", JSON.stringify(course));
        setLoading(false);
      });
    }
  }, []);

  if (loading) {
    return <p>Loading…</p>;
  }

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<CoursesPage courses={demoCourse} />} />
          <Route path="/course/:slug" element={<CoursePage />} />
          <Route path="/video/:slug" element={<VideoPage />}/>
          <Route path="/editor/:slug" element={<EditorPage />} />
          <Route path="/course/:slug/lesson/:id" element={<LessonPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
