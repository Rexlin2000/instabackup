import React from 'react'
import {Box, FormControl, FormErrorMessage, Input} from '@chakra-ui/react'
import { Field, Form, Formik} from 'formik'
import * as Yup from "yup"


const validationshema = Yup.object().shape({
  email: Yup.string().email("invalid email address").required("Required"),
  password: Yup.string().min(8,"password must be at least 8 characters").required("password id required")
})

const Signin = () => {
  const InitialValues = {email:"", password:""}
  const handleSubmit = (values)=>{
    console.log("values: ", values)
  }


  return (
    <div>
      <div>
        <Box p={8} display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Formik 
          InitialValues={InitialValues}
          onSubmit={handleSubmit}
          validationSchema={validationshema}

>
  {(formkProps)=> <Form>
    <Field name="email">
      {({field, form})=><FormControl isInvalid={form.errors.email && form.touched.email}>
        
      <Input className="w-full" {...field} id='email' placeholder='mobile number or Email'>
        

      </Input>
      <FormErrorMessage>{form.errors.email}</FormErrorMessage>

        </FormControl>}

    </Field>
    
    </Form>}
          
          </Formik>

        </Box>
      </div>
    </div>
  )
}

export default Signin