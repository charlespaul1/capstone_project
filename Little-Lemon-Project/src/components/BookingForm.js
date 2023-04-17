import React , {useState, useEffect}from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { Formik,Form, Field} from "formik";
import * as Yup from "yup";
import {

  Input,
  Button,
  Select,
  FormControl,
  FormErrorMessage,
  InputGroup,
  FormLabel,
  
} from "@chakra-ui/react";
import { fetchAPI } from "./BookingAPI"
// validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits"),
    date: Yup.date().required("Date is required"),
  guests: Yup.number().required("Number of guests is required")
             .min(1, "Minimum 1 guest")
              .max(10, "Maximum 10 guests")
              .typeError("Must be a number")
              .positive("Must be a positive number"),
  occasion: Yup.string().required("Occasion is required"),
});
// initial values
const initialValues = {
  name: "",
  phone: "",
  date: new Date(),
  time: "",
  guests: "",
  occasion: "",
};


const BookingForm = ({submitForm}) => {
  
  // handling available times
  const [availableTimes, setAvailableTimes] = useState([]);
  useEffect(() => {
    const today = new Date();
    fetchAPI(today).then((times) => {
      setAvailableTimes(times);
    });
  }, []);
    
 const inputStyles = {
    variant: "flushed",
    borderRadius: "5px",
    w: "100%",
    fontSize: "1.2rem",
    fontFamily:"karla",
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
  fontFamily:"karla",
  mb: "1rem",
  errorBorderColor: "red",
  focusBorderColor: "#495E57",
  padding: "0.5rem" ,
  margin: "0.5rem",
  bg:"#495E57",
  borderColor:"#495E57"

}
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
    fetchAPI(date).then((times) => {
      setAvailableTimes(times);
    });
  };


const datepickerStyle = {
  input: {
    ...inputStyles,
    padding: "1rem",
    fontSize: "1.2rem",
    fontFamily:"karla",
    backgroundColor: "#fff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    _hover: {
      backgroundColor: "#495E57",
      color: "#fff",
        
    _focus: {
      boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 0px 3px",
      outline: "none",
      border: "none",
    },
    },
  },
  Select: {
    variant: "flushed",
    borderRadius: "5px",
    fontSize: "1.2rem",

  }

}
const styleH1 ={
  color: "#F4CE14",
  fontSize: "2rem",
  fontFamily: "Markazi Text', serif",
  '@media (max-width: 1040px)': {
    fontSize :"64px",
  }
          
}


  return (
    <Formik 
    initialValues={initialValues} 
    onSubmit={(values, actions) => {
      submitForm(values);
      actions.setSubmitting(false);
    }}
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
          <h1 
          style={styleH1}
          >Book a Reservation Now!!</h1>
          <Field name="name">
            {({ field, form }) => (
              <FormControl 
              isInvalid={errors.name && touched.name}
           
              >
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input {...field} 
                id="name" 
                placeholder="Enter Your Name"
                variant="outline"
                style={inputStyles}
                aria-label="Name"
                aria-invalid={errors.name && touched.name ? "true" : "false"}
                aria-describedby="name-error"
                 />
                <FormErrorMessage 
                style={errorStyles}
                id="name-error"
                >{errors.name}</FormErrorMessage>
              </FormControl>
                    )}
          </Field>
          <Field name="phone">
            {({ field, form }) => (
              <FormControl isInvalid={errors.phone && touched.phone}>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <InputGroup>
                <Input {...field} 
                style={inputStyles}
                id="phone" placeholder="Enter Your Phone Number" 
                aria-label="Phone Number"
                aria-invalid={errors.phone && touched.phone ? "true" : "false"}
                aria-describedby="phone-error"
                
                />
                </InputGroup>
         
                <FormErrorMessage
                style={errorStyles}
                id="phone-error"
                >{errors.phone}</FormErrorMessage>
              </FormControl>
                    )}
          </Field>
          <Field name="date">
            {({ field, form }) => (
              <FormControl isInvalid={errors.date && touched.date}>
              <FormLabel htmlFor="date">Select a Date for Your Reservation</FormLabel>  
              <DatePicker
                {...field}
                id="date"
                style={datepickerStyle}
                selected={selectedDate}
                onChange={handleDateChange}
                value={selectedDate}
                aria-label="Reservation Date"
                aria-invalid={errors.date && touched.date ? "true" : "false"}
                aria-describedby="date-error"
              
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                popperPlacement=""
                />

                <FormErrorMessage
                style={errorStyles}
                id="date-error"
                >{errors.date}</FormErrorMessage>
              </FormControl>
                    )}
          </Field>

                  
                  
            <Field name="time">
  {({ field, form }) => (
    <FormControl isInvalid={errors.time && touched.time}>
      <FormLabel htmlFor="time">Select a Time for Your Reservation</FormLabel>
      <Select
        {...field}  
        id="time"
        name="time"
        placeholder="Select Time for  Reservation"
        variant="outline"
        style={selectStyle}
        aria-label="Reservation Time"
        aria-invalid={errors.time && touched.time ? "true" : "false"}
        aria-describedby="time-error"
       >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
        </Select>
        <FormErrorMessage
        style={errorStyles}
        id="time-error"
        >{errors.time}</FormErrorMessage>
    </FormControl>
    
  )}
</Field>
          
          <Field name="guests">
            {({ field, form }) => (
              <FormControl isInvalid={errors.guests && touched.guests}>
                <FormLabel htmlFor="guests">Number of Guests</FormLabel>
                <Input 
                style={inputStyles}
                {...field} id="guests" placeholder="Number of Guests" 
                aria-label="Number of Guests"
                aria-invalid={errors.guests && touched.guests ? "true" : "false"}
                aria-describedby="guests-error"
                
                />
                <FormErrorMessage
                style={errorStyles}
                id="guests-error"
                >{errors.guests}</FormErrorMessage>
              </FormControl>
                    )}
          </Field>
          <Field name="occasion">
            {({ field, form }) => (
              <FormControl isInvalid={errors.occasion && touched.occasion}>
                <FormLabel htmlFor="occasion">Occasion for Reservation</FormLabel>
                <Select 
                {...field} id="occasion"
                 placeholder="Occasion for Reservation"
                 style={selectStyle}
                 bg='#FBDABB'
                 borderColor='tomato'
                 color='white'
                  aria-label="Occasion for Reservation"
                  aria-invalid={errors.occasion && touched.occasion ? "true" : "false"}
                  aria-describedby="occasion-error"
                 >
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="corporate">Corporate</option>
                  <option value="business">Business meeting</option>
                  <option value="other">Other</option>
                  <option value='none'>None</option>
                </Select>
                <FormErrorMessage
                style={errorStyles}
                id="occasion-error"
                >{errors.occasion}</FormErrorMessage>
              </FormControl>
                    )}
          </Field>
          <Button 
          type="submit" 
          bgColor="#F4CE14"
          _hover={{opacity: 0.5}}
          disabled={isSubmitting}
          isLoading={isSubmitting}
          role="button"
          aria-label="Submit reservation form"
         
      >
        {isSubmitting ? "Submitting" : "Submit"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
export default BookingForm;