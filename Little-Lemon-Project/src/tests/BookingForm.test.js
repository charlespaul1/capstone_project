import {screen, render} from '@testing-library/react'
import BookingForm from '../components/BookingForm'
// testing for a static text that is rendered on the BookingPage
test('if there is a heading', () => {
    render(<BookingForm />)
    const headingElement = screen.getByText("Book a Reservation Now!!")
    expect(headingElement).toBeInTheDocument()
})
// testing if it updates time based on selected date
test('if it updates time based on selected date', () => {
    render(<BookingForm />)
    const dateElement = screen.getByText("Select a Date for Your Reservation")
    expect(dateElement).toBeInTheDocument()
})