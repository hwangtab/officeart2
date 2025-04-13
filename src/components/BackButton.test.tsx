import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For extended matchers like toBeInTheDocument
import BackButton from './BackButton';

describe('BackButton Component', () => {
  it('renders the button with default text and link', () => {
    render(<BackButton />);

    // Check if the default text is rendered
    const buttonText = screen.getByText('메인으로 돌아가기');
    expect(buttonText).toBeInTheDocument();

    // Check if the link points to the root directory by default
    // We find the link by its role and check its href attribute
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/');

    // Check if the icon is rendered (optional, checks for SVG presence)
    const icon = linkElement.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  it('renders the button with custom text and link', () => {
    const customText = "이전 페이지로";
    const customHref = "/previous-page";
    render(<BackButton text={customText} href={customHref} />);

    // Check if the custom text is rendered
    const buttonText = screen.getByText(customText);
    expect(buttonText).toBeInTheDocument();

    // Check if the link points to the custom href
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', customHref);
  });
});