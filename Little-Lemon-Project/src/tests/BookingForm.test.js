import {screen, render} from '@testing-library/react'
import BookingForm from '../components/BookingForm'
// testing for a static text that is rendered on the BookingPage
test('if there is a heading', () => {
    render(<BookingForm />)
    const headingElement = screen.getByText("Book a Reservation Now!!")
    expect(headingElement).toBeInTheDocument()
})

// testing how the time is rendered on the BookingPage based on date selected
it('should update time based on the selected date', () => {
    // mocking the date object to simulate a date selected
    jest.spyOn(global, 'Date').mockImplementation(() => new Date('2023-04-13T00:00:00.000Z'));
    // finding the date picker input and simulate a date selected
    const datepicker = wrapper.find('input[id="date"]');
    datepicker.simulate('change',{target: {value: '2023-04-13T00:00:00.000Z'}});
    // Expecting that the available times to update based on the date selected(should be all available times)
    const availableTimes = wrapper.find('data-testid="availableTimes"');
    expect(availableTimes).toEqual(['12:00 PM, ', '13:00 PM, ', '16:00 PM, ', '18:00 PM, ', '20:00 PM, ', '21:00 PM, ', '22:00 PM, ']);
});