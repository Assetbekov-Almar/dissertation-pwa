import React from 'react';
import Navigation from "../components/Navigation";
import {render, screen, fireEvent} from "@testing-library/react";
import PageInfo from "../components/PageInfo";

describe('Navigation', () => {
    test('should render the links', () => {
        render(<Navigation />);
        const home = screen.getByText('Home');
        const news = screen.getByText('News');
        const contact = screen.getByText('Contact');
        const about = screen.getByText('About');

        expect(home).toBeInTheDocument();
        expect(news).toBeInTheDocument();
        expect(contact).toBeInTheDocument();
        expect(about).toBeInTheDocument();
    })

    test('should show a proper text on click', () => {
        render(<Navigation />);
        render(<PageInfo />);
        fireEvent.click(screen.getByText('Home'));
       expect(screen.getByTestId('home-info')).toBeInTheDocument();

        fireEvent.click(screen.getByText('News'));
        expect(screen.getByTestId('news-info')).toBeInTheDocument();

        fireEvent.click(screen.getByText('Contact'));
        expect(screen.getByTestId('contact-info')).toBeInTheDocument();

        fireEvent.click(screen.getByText('About'));
        expect(screen.getByTestId('about-info')).toBeInTheDocument();
    })
})