import React from 'react';
import Navigation from "../components/Navigation";
import {render, screen} from "@testing-library/react";

describe('Navigation', () => {
    test('should render the links', () => {
        render(<Navigation />);
        const home = screen.getByText('Home')
        expect(home).toBeInTheDocument();

    })
})