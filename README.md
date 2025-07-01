# ZeroToBuild Landing Page

A simple, responsive landing page for MVP Compass - a product idea validation tool for solo founders and indie hackers.

## Features

- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive layout
- **Clean UI**: Minimal, modern design with warm blue/indigo color palette
- **Form Validation**: Client-side validation with required fields
- **Smooth Interactions**: Hover effects, transitions, and smooth scrolling
- **Data Collection**: Form submissions logged to console (ready for backend integration)

## Structure

### Header Section
- Bold headline targeting solo founders
- Clear value proposition
- Call-to-action button that scrolls to form

### Form Section
- "What's blocking you?" question
- Required textarea for main blocker
- Optional radio buttons for no-code experience
- Required email field
- Submit button for early access

### Footer
- Brand message for solo founders
- GitHub icon (placeholder link)

## Getting Started

1. Open `index.html` in your web browser
2. The page uses Tailwind CSS via CDN, so no build process required
3. Form submissions are logged to the browser console

## Customization

- Colors can be modified in the Tailwind config section
- Form fields can be easily added/removed
- Backend integration can replace the console.log in the form submission handler

## Next Steps

- Add backend API integration for form submissions
- Implement email collection and validation
- Add analytics tracking
- Consider A/B testing different headlines or form layouts 
