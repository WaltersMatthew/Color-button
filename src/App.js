import { useState } from "react";
import "./App.css";

function App() {
    const [buttonColor, setButtonColor] = useState("red");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const newButtonColor = buttonColor === "red" ? "blue" : "red";

    return (
        <div>
            <button
                style={{ backgroundColor: buttonColor }}
                onClick={() => setButtonColor(newButtonColor)}
                disabled={buttonDisabled}
            >
                Change to {newButtonColor}
            </button>
            <input
                id="disable-button-checkbox"
                type="checkbox"
                defaultChecked={buttonDisabled}
                onChange={(e) => setButtonDisabled(e.target.checked)}
            />
        </div>
    );
}

export default App;
