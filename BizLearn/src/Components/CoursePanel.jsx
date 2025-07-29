import { ProgressBar } from "./ProgressBar"

export function CoursePanel(course) {
    return (
        <div className="course-panel" style={{
            display: "flex", 
            flexDirection: "column", 
            backgroundColor: "#172037",
            width: "30rem",
            height: "18rem",
            borderRadius: "0.7rem",
            overflow: "hidden"
            }}>
            <ProgressBar percentage={70.0} width={30} height={1} />
            <div style={{overflow: "hidden", width: "100%", 
                display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src="/placeholder.png" alt="" style={{width: "33rem"}}/> 
            </div>
            <div>
                <p style={{
                    paddingLeft: "1rem",
                    paddingTop: "1rem",
                    paddingBottom: "0.3rem",
                    fontSize: "20px"
                }}>Zero to Fullstack Bootcamp</p>
                <p style={{
                    paddingLeft: "1rem",
                    paddingBottom: "1rem",
                    maxWidth: "70%",
                    fontSize: "15px",
                    color: "#627295"
                }}>Introduction into programming and creating your first project.</p>
            </div>
        </div>
    );
}