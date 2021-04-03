import React, { useRef } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextInput as RNTextInput, Linking } from "react-native";

import TextInput from "../components/Form/TextInput";
import {
  AuthNavigationProps,
  Container,
  Box,
  Text,
  Button,
} from "../../components";
import Footer from "../components/Footer";

const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email!").required("Required"),
});

const ForgetPassword = ({
  navigation,
}: AuthNavigationProps<"ForgetPassword">) => {
  const password = useRef<RNTextInput>(null);

  const footer = (
    <Footer
      title="Don't work?"
      action="Try another way"
      onPress={() => Linking.openURL("mailto:help@support.com")}
    />
  );

  return (
    <Container pattern={2} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forget Password
        </Text>
        <Text variant="body" textAlign="center">
          Enter the email address associated with your account
        </Text>
        <Formik
          validationSchema={ForgetPasswordSchema}
          initialValues={{ email: "" }}
          onSubmit={(/*values*/) => navigation.navigate("PasswordChanged")}
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
                  returnKeyType="go"
                  returnKeyLabel="go"
                  onSubmitEditing={() => password.current?.focus()}
                />
              </Box>
              <Box alignItems="center" marginTop="m">
                <Button
                  variant="primary"
                  title="Reset Password"
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

export default ForgetPassword;
