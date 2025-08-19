import { DevEnvironment } from "../Components/DevEnvironment"
import { BackButton } from "../Components/BackButton"
import { SubmitButton } from "../Components/SubmitButton"

import { Link } from "react-router-dom";


export function EditorPage({lesson}) {

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <div style={{display: "flex", justifyContent: "space-between", width: "74.5rem", margin: "0.5rem"}}>
            <p className={"page_title"} >{lesson.title}</p>
            <BackButton />
        </div>
        <DevEnvironment inputHTML={lesson.default_html} inputCSS={lesson.default_css} inputJS={lesson.default_js} />
        <div style={{display: "flex", justifyContent: "space-between", width: "75rem"}}><div /><Link to="/course"><SubmitButton label={"Submit"} /></Link></div>
    </div>

  )
}
