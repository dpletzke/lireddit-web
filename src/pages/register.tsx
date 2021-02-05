import React from "react";
import { Formik, Form } from "formik";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { formatWithValidation } from "next/dist/next-server/lib/utils";
import { Wrapper } from "../components/Wrapper";

interface registerProps {}

export const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(values, handleChange) => (
          <FormControl id="first-name" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              value={values.username}
              onChange={handleChange}
              placeholder="User Name"
              id="username"
              size="sm"
            />
          </FormControl>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
