import React from "react";
import { render, screen } from "@testing-library/react";
import {About} from "./About";
import {describe, it, expect} from 'vitest';
import '@testing-library/jest-dom/vitest';
// import userEvent from "@testing-library/user-event";

describe('About', () => {
   
    it('should render text', () => {
        render(<About/>);
        const text = screen.getByTestId('about-text');
        const aboutUS = screen.getByText('About Us');
        expect(aboutUS).toBeInTheDocument();
        expect(text).toHaveTextContent('Welcome to ShopEase – your go-to destination for a seamless online shopping experience!'); 
          
    })
   
})