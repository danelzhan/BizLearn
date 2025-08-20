import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import './App.css'
import { Header } from './Components/Header'
import { CoursesPage } from './Pages/CoursesPage'
import { EditorPage } from './Pages/EditorPage'
import { CoursePage } from './Pages/CoursePage'
import { VideoPage } from './Pages/VideoPage'
import { LessonPage } from "./Pages/LessonPage";
import { LoginPage } from "./Pages/LoginPage";
import { LogoutPage } from "./Pages/LogoutPage";
import { ProfilePage } from "./Pages/ProfilePage";

import { VideoLesson, InteractiveLesson, Course, User } from './Objects'
import { fetchCourseBySlug } from "./Bridge";

function App() {
  const [demoCourse, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, isAuthenticated, isLoading, error } = useAuth0();

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

  // const [userData, setUserData] = useState(null);
  // useEffect(() => {
  //   fetch(`${BRIDGE_URL}/api/users/${user.email}`)
  //       .then(res => res.json())
  //       .then(data => setUserData(data));
  // }, []);

  // if (isAuthenticated && !userData && !isLoading) {

  // }
  

  if (loading) {
    return <p>Loading…</p>;
  }

  return (
    <>
      <Header />
      <Router basename="/BizLearn">
        <Routes>
          <Route path="/" element={<CoursesPage courses={demoCourse} />} />
          <Route path="/course/:slug" element={<CoursePage />} />
          <Route path="/video/:slug" element={<VideoPage />}/>
          <Route path="/editor/:slug" element={<EditorPage />} />
          <Route path="/course/:slug/lesson/:id" element={<LessonPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
