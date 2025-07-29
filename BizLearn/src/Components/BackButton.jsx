import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturnSharp';

export function BackButton() {

    const accentColor = "#7AD040"

    return (
        <div style={{ display: "flex", color: accentColor, width: "4.5rem", justifyContent: "space-between" }}>
            <p style={{fontSize: "20px"}}>Back</p>
            <KeyboardReturnIcon />
        </div>
    )
}
