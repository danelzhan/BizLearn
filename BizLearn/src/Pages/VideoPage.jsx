import { BackButton } from "../Components/BackButton"
import { SubmitButton } from "../Components/SubmitButton"
import { Video } from "../Components/Video"

export function VideoPage({title}) {

    const width = 75

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <div style={{display: "flex", justifyContent: "space-between", width: "74.5rem", margin: "0.5rem"}}>
                <p className={"page_title"} >{title}</p>
                <BackButton />
            </div>
            <div style={{borderRadius: "1rem", width: width + "rem", height: "40rem", display: "flex", justifyContent: "center",
                 alignItems: "center", backgroundColor: "#172037", padding: "1.5rem"}}>
                <div style={{borderRadius: "1rem", overflow: "hidden", width: "100%", height: "100%"}}>
                    <Video url="https://www.youtube.com/embed/MjQGc1H0BXc?si=-XtaadUU0NMdLRjz" />
                </div>
            </div>
            
            <SubmitButton />
        </div>

    )
}
