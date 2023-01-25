import { useState } from "react";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, " $1");
    // let spacedString = "";
    // for (let i = 0; i < colorName.length; i++) {
    //     if (i > 0 && colorName[i] === colorName[i].toUpperCase()) {
    //         spacedString += " " + colorName[i];
    //     } else spacedString += colorName[i];
    // }
    // return spacedString;
}

function App() {
    const [buttonColor, setButtonColor] = useState("MediumVioletRed");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const newButtonColor =
        buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

    return (
        <div>
            <button
                style={{
                    backgroundColor: buttonDisabled ? "gray" : buttonColor,
                }}
                onClick={() => setButtonColor(newButtonColor)}
                disabled={buttonDisabled}
            >
                Change to {replaceCamelWithSpaces(newButtonColor)}
            </button>
            <input
                id="disable-button-checkbox"
                type="checkbox"
                defaultChecked={buttonDisabled}
                onChange={(e) => setButtonDisabled(e.target.checked)}
            />
            <label htmlFor="disable-button-checkbox">Disable Button</label>
        </div>
    );
}

export default App;
