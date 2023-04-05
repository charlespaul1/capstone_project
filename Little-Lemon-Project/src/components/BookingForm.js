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
  time:Yup.number().required("Time for Reservation is required"),
  guests: Yup.number().required("Number of guests is required").min(1, "Minimum 1 guest"),
  occasion: Yup.string().required("Occasion is required"),
});
// initial values
const initialValues = {
  name: "",
  phone: "",
  date: "",
  time:"",
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
    variant: "flushed",
    borderRadius: "5px",
    w: "100%",
    fontSize: "1.2rem",
    mb: "1rem",
    errorBorderColor: "red",
    focusBorderColor: "#495E57",
    padding: "0.5rem",
    margin: "0.5rem",
  }
  const errorStyles = {
    color: "red",
    fontSize: "0.8rem",
    fontWeight: "bold",
  }
const selectStyle = {
  variant: "flushed",
  borderRadius: "5px",
  w: "100%",
  fontSize: "1.2rem",
  mb: "1rem",
  errorBorderColor: "red",
  focusBorderColor: "#495E57",
  padding: "0.5rem" ,
  margin: "0.5rem",
  bg:"#495E57",
  borderColor:"#495E57"

}
  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={handleSubmit} 
     validationSchema={validationSchema}
     
     >
      {({ isSubmitting, errors, touched }) => (
        <Form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          margin: "0 auto",
          padding: "1rem",
          borderRadius: "5px",
          background: "#495E57",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
          maxWidth: "500px",
        }}  
        >
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={errors.name && touched.name}>
                <Input {...field} 
                id="name" 
                placeholder="Name"
                variant="outline"
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
          <Field name="time">
            {({field, form}) =>(
              <FormControl isInvalid={errors.guests && touched.guests}>
               <Select 
                {...field} id="time"
                 placeholder="Time"
                 style={selectStyle}
                 bg='#FBDABB'
                 color='white'
                 >
                  <option value="noon">12:00 pm</option>
                  <option value="19:00">16:00 pm</option>
                  <option value="20:00">18:00 pm</option>
                  <option value="21:00">20:00 pm</option>
                  <option value="21:00">21:00 pm</option>
                  <option value="21:00">22:00 pm</option>
                  <option value="21:00">10:00 am</option>
                </Select>
                <FormErrorMessage
                style={errorStyles}
                >{errors.time}</FormErrorMessage>
                  </FormControl>
            )}

          </Field>
          <Field name="guests">
            {({ field, form }) => (
              <FormControl isInvalid={errors.guests && touched.guests}>
                <Input 
                style={inputStyles}
                {...field} id="guests" placeholder="Number of Guests" />
                <FormErrorMessage
                style={errorStyles}
                >{errors.guests}</FormErrorMessage>
              </FormControl>
                    )}
          </Field>
          <Field name="occasion">
            {({ field, form }) => (
              <FormControl isInvalid={errors.occasion && touched.occasion}>
                <Select 
                {...field} id="occasion"
                 placeholder="Occasion"
                 style={selectStyle}
                 bg='#FBDABB'
                 borderColor='tomato'
                 color='white'
                 >
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
            Submit Reservation
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default BookingForm;