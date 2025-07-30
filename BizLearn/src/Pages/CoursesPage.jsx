import { CoursePanel } from '../Components/CoursePanel'
import { Link } from "react-router-dom"

export function CoursesPage() {

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "40rem"}}>
      <Link to="/"><CoursePanel /></Link>
      
    </div>
  )
}
