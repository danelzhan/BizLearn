import { BackButton } from "../Components/BackButton"
import { SubmitButton } from "../Components/SubmitButton"
import { Video } from "../Components/Video"

import { Link } from "react-router-dom";


export function VideoPage({title}) {

    const width = 75

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{display: "flex", justifyContent: "space-between", width: "74.5rem", margin: "0.5rem"}}>
                <p className={"page_title"} >{title}</p>
                <Link to="/course"><BackButton /> </Link>
            </div>
            <div style={{borderRadius: "1rem", width: width + "rem", height: "40rem", display: "flex", justifyContent: "center",
                 alignItems: "center", backgroundColor: "#172037", padding: "1.5rem"}}>
                <div style={{borderRadius: "1rem", overflow: "hidden", width: "100%", height: "100%"}}>
                    <Video url="https://www.youtube.com/embed/3OamzN90kPg?si=kyb2jPaEMNn5wTwd" />
                </div>
            </div>
            
            <div style={{display: "flex", justifyContent: "space-between", width: "78rem"}}><div /><Link to="/challenge"><SubmitButton label={"Next"} /></Link></div>
        </div>

    )
}
