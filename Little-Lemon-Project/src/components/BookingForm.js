import React from "react";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import {
  Input,
  Button,
  Select,
  FormControl,
  FormErrorMessage,
  InputGroup,
} from "@chakra-ui/react";
// validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone number is required"),
  date: Yup.date().required("Date is required"),
  guests: Yup.number().required("Number of guests is required").min(1, "Minimum 1 guest"),
  occasion: Yup.string().required("Occasion is required"),
});
// initial values
const initialValues = {
  name: "",
  phone: "",
  date: "",
  guests: "",
  occasion: "",
};
// form component
const BookingForm = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
  }
  const inputStyles = {
    variant: "outline",
    borderRadius: "5px",
    w: "100%",
    fontSize: "1.2rem",
    mb: "1rem",
    errorBorderColor: "red",
  }
  const errorStyles = {
    color: "red",
    fontSize: "0.8rem",
    fontWeight: "bold",
  }

  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={handleSubmit} 
     validationSchema={validationSchema}>
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={errors.name && touched.name}>
                <Input {...field} 
                id="name" 
                placeholder="Name"
                
                style={inputStyles}
                 />
                <FormErrorMessage 
                style={errorStyles}
                >{errors.name}</FormErrorMessage>
              </FormControl>
                    )}
          </Field>
          <Field name="phone">
            {({ field, form }) => (
              <FormControl isInvalid={errors.phone && touched.phone}>
                <InputGroup w='100%'>
                
                <Input {...field} 
                style={inputStyles}
                id="phone" placeholder="Phone" />
                </InputGroup>
         
                <FormErrorMessage
                style={errorStyles}
                >{errors.phone}</FormErrorMessage>
              </FormControl>
                    )}
          </Field>
          <Field name="date">
            {({ field, form }) => (
              <FormControl isInvalid={errors.date && touched.date}>
                <Input 
                style={inputStyles}
                {...field} id="date" placeholder="Date" />
                <FormErrorMessage
                style={errorStyles}
                >{errors.date}</FormErrorMessage>
              </FormControl>
                    )}
          </Field>
          <Field name="guests">
            {({ field, form }) => (
              <FormControl isInvalid={errors.guests && touched.guests}>
                <Input 
                style={inputStyles}
                {...field} id="guests" placeholder="Guests" />
                <FormErrorMessage
                style={errorStyles}
                >{errors.guests}</FormErrorMessage>
              </FormControl>
                    )}
          </Field>
          <Field name="occasion">
            {({ field, form }) => (
              <FormControl isInvalid={errors.occasion && touched.occasion}>
                <Select {...field} id="occasion" placeholder="Occasion">
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="corporate">Corporate</option>
                  <option value="other">Other</option>
                </Select>
                <FormErrorMessage
                style={errorStyles}
                >{errors.occasion}</FormErrorMessage>
              </FormControl>
                    )}
          </Field>
          <Button 
          type="submit" disabled={isSubmitting} 
          colorScheme="#495E57"
          
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default BookingForm;