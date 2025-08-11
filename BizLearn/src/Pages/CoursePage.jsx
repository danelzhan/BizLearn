import { ProgressBar } from "../Components/ProgressBar"
import { LessonPanel } from "../Components/LessonPanel"
import { BackButton } from "../Components/BackButton"

import { Link, useLocation } from "react-router-dom";

export function CoursePage() {

    const location = useLocation();
    const { course } = location.state || {};

    console.log("course", course)



    const width = 75
    const lessons = course.lessons
    const title = "Zero to Fullstack Bootcamp"

    return (
        
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <div style={{width: width + "rem"}}>
                <div style={{display: "flex", justifyContent: "space-between", width: "74.5rem", margin: "0.5rem"}}>
                    <p className={"page_title"} >Zero to Fullstack Bootcamp</p>
                    <Link to="/"><BackButton /></Link>
                </div>
                <div style={{borderRadius: "1rem", overflow: "hidden", backgroundColor: "#172037", height: "40rem"}}>
                    <ProgressBar percentage={70.0} height={1} width={width} />
                    {lessons.map((lesson, index) => (
                        <Link to="/video"><LessonPanel title={lesson[0]} description={lesson[1]} /></Link>
                    ))}
                </div>
            </div>

        </div>

    )
}