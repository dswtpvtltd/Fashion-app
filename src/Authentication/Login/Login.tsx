import React, { useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput } from "react-native";
import { CommonActions } from "@react-navigation/native";

import TextInput from "../components/Form/TextInput";
import Checkbox from "../components/Form/Checkbox";
import {
  Container,
  Box,
  Text,
  Button,
  AuthNavigationProps,
} from "../../components";
import Footer from "../components/Footer";

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "To Shaort!")
    .max(50, "Too Long!")
    .required("Required!"),
  email: Yup.string().email("Invalid Email!").required("Required"),
});

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
  const password = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Don't have an account?"
      action="Signup here"
      onPress={() => navigation.navigate("Signup")}
    />
  );

  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome Back
        </Text>
        <Text variant="body" textAlign="center">
          Use you credentials below and login to your account
        </Text>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{ email: "", password: "", remember: false }}
          onSubmit={() =>
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Home" }],
              })
            )
          }
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            setFieldValue,
          }) => (
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
              <Box>
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
                  onSubmitEditing={() => handleSubmit()}
                />
              </Box>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                marginTop="l"
              >
                <Checkbox
                  label="Remember Me!"
                  checked={values.remember}
                  onChange={() => setFieldValue("remember", !values.remember)}
                />
                <Text
                  marginLeft="s"
                  onPress={() => navigation.navigate("ForgetPassword")}
                >
                  Forget Password
                </Text>
              </Box>
              <Box alignItems="center" marginTop="m">
                <Button
                  variant="primary"
                  title="Log into your account"
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

export default Login;
