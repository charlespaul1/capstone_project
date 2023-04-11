import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  VStack,
  Text,
  Box,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const reservationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
      "Invalid phone number"
    ),
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
  occasion: Yup.string(),
  guests: Yup.number().required("Number of guests is required"),
});

const initialFormState = {
  name: "",
  phone: "",
  date: new Date(),
  time: "",
  occasion: "",
  guests: "",
};

const timesAvailable = [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
];

const ReservationForm = () => {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    // get the selected date and set the available times
    const selectedDate = new Date();
    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 0) {
      // Sunday
      setAvailableTimes([]);
    } else if (dayOfWeek === 6) {
      // Saturday
      setAvailableTimes(timesAvailable.slice(0, 3));
    } else {
      // Weekdays
      setAvailableTimes(timesAvailable);
    }
  }, []);

  return (
    <Formik
      initialValues={initialFormState}
      validationSchema={reservationSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <VStack spacing={4} align="stretch">
            <Field name="name">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Input {...field} id="name" placeholder="Name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="phone">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.phone && form.touched.phone}
                >
                  <FormLabel htmlFor="phone">Phone Number</FormLabel>
                  <Input {...field} id="phone" placeholder="Phone Number" />
                  <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="date">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.date && form.touched.date}
                >
                  <FormLabel htmlFor="date">Date</FormLabel>
                  <DatePicker
                    {...field}
                    id="date"
                    selected={field.value}
                    onChange={(date) => form.setFieldValue("date", date)}
                    dateFormat="yyyy/MM/dd"
                    minDate={new Date()}
                    placeholderText="Select Date"
                    showYearDropdown
                    showMonthDropdown
                    dropdownMode="select"
                  />
                  <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="time">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.time && form.touched.time}
                >
                  <FormLabel htmlFor="time">Time</FormLabel>
                  <Select {...field} id="time" placeholder="Select Time">
                    {availableTimes.length ? (
                      availableTimes.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))
                    ) : (
                      <option disabled>No available times</option>
                    )}
                  </Select>
                  <FormErrorMessage>{form.errors.time}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="occasion">
              {({ field }) => (
                <FormControl>
                  <FormLabel htmlFor="occasion">Occasion</FormLabel>
                  <Input {...field} id="occasion" placeholder="Occasion" />
                </FormControl>
              )}
            </Field>
            <Field name="guests">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.guests && form.touched.guests}
                >
                  <FormLabel htmlFor="guests">Number of Guests</FormLabel>
                  <Input {...field} id="guests" placeholder="Number of Guests" />
                  <FormErrorMessage>{form.errors.guests}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Box>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </Box>
            <Box>
              {availableTimes.length > 0 && (
                <Text fontSize="sm">
                  Available times for {props.values.date.toLocaleDateString()}:
                  {availableTimes.map((time) => (
                    <span key={time}> {time} </span>
                  ))}
                </Text>
              )}
            </Box>
          </VStack>
        </Form>
      )}
    </Formik>
    );
};

export default ReservationForm;


