import { CoursePanel } from '../Components/CoursePanel'
import { Link, useLocation } from "react-router-dom"

export function CoursesPage(courses) {

  // const location = useLocation();
  // const { user } = location.state || {};

  console.log(courses)

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "40rem"}}>
      <Link to="/course" ><CoursePanel course={courses} /></Link>
      
    </div>
  )
}
