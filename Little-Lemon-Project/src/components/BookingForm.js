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


const BookingForm = () => {
  const handleSubmit = (values, actions) => {
    // const selectedDate = selectedDate;
    alert(`Reservation details: \nName: ${values.name}\nPhone: ${values.phone}\nDate: ${selectedDate.toLocaleDateString()} \nTime: ${values.time} \nNumber of Guests: ${values.guests} \nOccasion: ${values.occasion}`);
    actions.setSubmitting(false);
  }

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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


const datepickerStyle = {
  input: {
    ...inputStyles,
    padding: "1rem",
    fontSize: "1.2rem",
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
          <h1 
          style={{
            color: "#F4CE57",
          }}
          >Book a Reservation Now!!</h1>
          <Field name="name">
            {({ field, form }) => (
              <FormControl isInvalid={errors.name && touched.name}>
                <Input {...field} 
                id="name" 
                placeholder="Enter Your Name"
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
                <InputGroup>
                
                <Input {...field} 
                style={inputStyles}
                id="phone" placeholder="Enter Your Phone Number" />
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
              <FormLabel htmlFor="date"> Select a Date for Your Reservation</FormLabel>  
              <DatePicker
                {...field}
                id="date"
                style={datepickerStyle}
                selected={selectedDate}
                onChange={handleDateChange}
              
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                popperPlacement=""
                />

                <FormErrorMessage
                style={errorStyles}
                >{errors.date}</FormErrorMessage>
              </FormControl>
                    )}
          </Field>

                  
                  
            <Field name="time">
  {({ field, form }) => (
    <FormControl isInvalid={errors.time && touched.time}>
      <FormLabel htmlFor="time"> Select a Time for Your Reservation</FormLabel>
      <Select
        id="time"
        name="time"
        placeholder="Select a time"
        value={field.value}
        // onChange={handleChange}
        // onBlur={handleBlur}
        {...selectStyle}
        >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
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