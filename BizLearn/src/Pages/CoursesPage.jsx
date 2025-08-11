import { CoursePanel } from '../Components/CoursePanel'
import { Link, useLocation } from "react-router-dom"

export function CoursesPage({user}) {

  // const location = useLocation();
  // const { user } = location.state || {};

  console.log(user)

  const courses = user.courseList;

  console.log(courses[0])

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "40rem"}}>
      <Link to="/course" state={courses[0]} ><CoursePanel /></Link>
      
    </div>
  )
}
