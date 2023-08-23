import { fireEvent, render, screen } from "@testing-library/react";
import RegisterNewAccount from "./RegisterNewAccount";
import { expect } from 'chai'
import { BrowserRouter } from "react-router-dom";

describe("Register Page", () => {
    it("should assert input field value Register Page", () => {
        render(
            <RegisterNewAccount />, {wrapper: BrowserRouter}
        );
        
        const input = screen.getByLabelText("email");
        fireEvent.change(input, { target: { value: "email@gmail.com" } })

        expect(input.value).to.equal('email@gmail.com')
    })
})