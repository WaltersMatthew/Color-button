import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color, and updates when clicked", () => {
    render(<App />);

    // find an element with a role of button and text of 'change to blue'
    const colorButton = screen.getByRole("button", { name: "Change to blue" });

    // expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: "red" });

    //click button
    fireEvent.click(colorButton);

    // expect the background color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

    //expect button text to be 'change to red'
    expect(colorButton).toHaveTextContent("Change to red");
});

test("button has correct initial text", () => {});
test("button turns blue when clicked", () => {
    render(<App />);

    const colorButton = screen.getByRole("button", { name: "Change to blue" });
});
