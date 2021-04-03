import React, { useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput } from "react-native";

import TextInput from "../components/Form/TextInput";
import {
  AuthNavigationProps,
  Container,
  Box,
  Text,
  Button,
} from "../../components";
import Footer from "../components/Footer";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "To Shaort!")
    .max(50, "Too Long!")
    .required("Required!"),
  confpassword: Yup.string()
    .equals([Yup.ref("password")], "Password does not match!")
    .required("Required!"),
  email: Yup.string().email("Invalid Email!").required("Required"),
});

const Signup = ({ navigation }: AuthNavigationProps<"Signup">) => {
  const password = useRef<RNTextInput>(null);
  const confpassword = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="If you have already Account? "
      action="Login here"
      onPress={() => navigation.navigate("Login")}
    />
  );

  return (
    <Container pattern={1} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create an Account
        </Text>
        <Text variant="body" textAlign="center">
          Let's know what your name, email and your password
        </Text>
        <Formik
          validationSchema={SignupSchema}
          initialValues={{ email: "", password: "", confpassword: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, touched, errors }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  iconName="mail"
                  placeholder="Enter Your Email"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                  autoCompleteType="email"
                  returnKeyType="next"
                  returnKeyLabel="next"
                  onSubmitEditing={() => password.current?.focus()}
                />
              </Box>
              <Box marginBottom="m">
                <TextInput
                  ref={password}
                  iconName="lock"
                  secureTextEntry
                  placeholder="Enter Your Password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors.password}
                  touched={touched.password}
                  autoCompleteType="password"
                  returnKeyType="go"
                  returnKeyLabel="go"
                  onSubmitEditing={() => confpassword.current?.focus()}
                />
              </Box>
              <Box>
                <TextInput
                  ref={confpassword}
                  iconName="lock"
                  secureTextEntry
                  placeholder="Confirm Your Password"
                  onChangeText={handleChange("confpassword")}
                  onBlur={handleBlur("confpassword")}
                  error={errors.confpassword}
                  touched={touched.confpassword}
                  autoCompleteType="password"
                  returnKeyType="go"
                  returnKeyLabel="go"
                  onSubmitEditing={() => handleSubmit()}
                />
              </Box>
              <Box alignItems="center" marginTop="m">
                <Button
                  variant="primary"
                  title="Create your account"
                  onPress={handleSubmit}
                />
              </Box>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Signup;
