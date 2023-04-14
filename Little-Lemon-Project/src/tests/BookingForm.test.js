import {screen, render, fireEvent} from '@testing-library/react'
import BookingForm from '../components/BookingForm'

// testing for a static text that is rendered on the BookingPage
it('renders static text', () => {
    render(<BookingForm />)
    const text = screen.getByText('Book a Reservation Now!!')
    expect(text).toBeInTheDocument()
})
// test if a date is displayed after a user selects a date
it('renders a date after a user selects a date', () => {
    render(<BookingForm />)
    const date = screen.getByText('Select a Date for Your Reservation')
    expect(date).toBeInTheDocument()
})
// test if a user can enter a name
it('renders a name after a user enters a name', () => {
    render(<BookingForm />)
    const name = screen.getByPlaceholderText('Enter Your Name')
    expect(name).toBeInTheDocument()
})
// test if a user can enter a phone number
it('renders a phone number after a user enters a phone number', () => {
    render(<BookingForm />)
    const phone = screen.getByPlaceholderText('Enter Your Phone Number')
    expect(phone).toBeInTheDocument()
})
// test if a user can enter a date
it('renders a date after a user enters a date', () => { 
    render(<BookingForm />)
    const date = screen.getByPlaceholderText('Select a date')
    expect(date).toBeInTheDocument()
})

test('shows error messages when form is submitted with invalid values', async () => {
    render(<BookingForm />);
    fireEvent.submit(screen.getByRole('button'));

    const nameError = await screen.findByText("Name is required");
    const phoneError = await screen.findByText("Phone number is required");
    
    const guestsError = await screen.findByText("Number of guests is required");
    const occasionError = await screen.findByText("Occasion is required");

    expect(nameError).toBeInTheDocument();
    expect(phoneError).toBeInTheDocument();
    expect(guestsError).toBeInTheDocument();
    expect(occasionError).toBeInTheDocument();
  });