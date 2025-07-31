import { DevEnvironment } from "../Components/DevEnvironment"
import { BackButton } from "../Components/BackButton"
import { SubmitButton } from "../Components/SubmitButton"

import { Link } from "react-router-dom";


export function EditorPage({title}) {

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <div style={{display: "flex", justifyContent: "space-between", width: "74.5rem", margin: "0.5rem"}}>
            <p className={"page_title"} >Challenge 2: Center a Div</p>
            <Link to="/course"><BackButton /></Link>
        </div>
        <DevEnvironment />
        <div style={{display: "flex", justifyContent: "space-between", width: "75rem"}}><div /><Link to="/course"><SubmitButton label={"Submit"} /></Link></div>
    </div>

  )
}
