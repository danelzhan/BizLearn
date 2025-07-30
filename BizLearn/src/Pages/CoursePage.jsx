import { ProgressBar } from "../Components/ProgressBar"
import { LessonPanel } from "../Components/LessonPanel"

export function CoursePage(course) {

    const width = 75
    const lessons = [["Introduction to Web Development", "Build a simple webpage using HTML and CSS. Lorem Ipsum Dolor Isit."], 
        ["JavaScript Basics", "Learn JavaScript fundamentals and interact with the webpage"],
        ["Control Flow and Functions", "Understand logic and create functions to manipulate input."],
        ["DOM Manipulation and Event Handling", "Learn how to update the webpage dynamically with JavaScript"]]
    const title = "Zero to Fullstack Bootcamp"

    return (
        
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
            <div style={{width: width + "rem"}}>
                <div className={"page_title"}>{title}</div>
                <div style={{borderRadius: "1rem", overflow: "hidden", backgroundColor: "#172037"}}>
                    <ProgressBar percentage={70.0} height={1} width={width} />
                    {lessons.map((lesson, index) => (
                        <LessonPanel title={lesson[0]} description={lesson[1]} />
                    ))}
                </div>
            </div>

        </div>

    )
}