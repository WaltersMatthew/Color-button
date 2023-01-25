import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button has correct initial color, and updates when clicked", () => {
    render(<App />);

    // find an element with a role of button and text of 'change to blue'
    const colorButton = screen.getByRole("button", {
        name: "Change to Midnight Blue",
    });

    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

    //click button
    fireEvent.click(colorButton);

    // expect the background color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

    //expect button text to be 'change to red'
    expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
    render(<App />);

    // check that the button starts out enabled
    const colorButton = screen.getByRole("button", {
        name: "Change to Midnight Blue",
    });
    expect(colorButton).toBeEnabled();

    //check that the checkbox starts out unchecked
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
});

test("checkbox diables button on first click and enables on second click", () => {
    render(<App />);
    const checkbox = screen.getByRole("checkbox", {
        name: "Disable Button",
    });
    const colorButton = screen.getByRole("button", {
        name: "Change to Midnight Blue",
    });

    expect(colorButton).toBeEnabled();

    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();

    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
});

test("Button turns grey when disabled and back to previous color when re-enabled", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", {
        name: "Change to Midnight Blue",
    });
    const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

    //starts red
    expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

    //turns grey when disabled
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

    //returns to red when re-enabled
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});
test("Button changes to blue on click, grey on disabled, and back when re-enabled", () => {
    render(<App />);
    const colorButton = screen.getByRole("button", {
        name: "Change to Midnight Blue",
    });
    const checkbox = screen.getByRole("checkbox", { name: "Disable Button" });

    //starts red
    expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

    //changes to blue
    fireEvent.click(colorButton);
    expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

    // goes gray on checkbox
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "gray" });

    //back to blue
    fireEvent.click(checkbox);
    expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel-case capital letters", () => {
    test("works for no inner capital letters", () => {
        expect(replaceCamelWithSpaces("Red")).toBe("Red");
    });
    test("works for one inner capital letter", () => {
        expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
    });
    test("works for multiple inner capital letters", () => {
        expect(replaceCamelWithSpaces("MediumVioletRed")).toBe(
            "Medium Violet Red"
        );
    });
});
