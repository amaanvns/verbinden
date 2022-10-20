import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { TfiGithub } from "react-icons/tfi";
import { BsFacebook } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { emailFetch } from "../features/login/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: loginSchema,

    onSubmit: (values) => {
      dispatch(emailFetch(values.email));
      navigate("/profile");
    },
  });
  return (
    <Flex
      bg="gray.100"
      align="center"
      justify="center"
      flexDirection="column"
      h="100vh"
    >
      <Text fontSize="2xl">Login with</Text>
      <Flex align="center" justify="center" width="100%">
        <Icon
          as={FcGoogle}
          w={8}
          h={8}
          margin="10px"
          _hover={{
            cursor: "pointer",
          }}
        />
        <Icon
          as={TfiGithub}
          w={8}
          h={8}
          margin="10px"
          _hover={{
            cursor: "pointer",
          }}
        />
        <Icon
          as={BsFacebook}
          w={8}
          h={8}
          color="blue.500"
          margin="10px"
          _hover={{
            cursor: "pointer",
          }}
        />
      </Flex>
      <Box bg="white" p={6} rounded="md" marginTop="20px">
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl isInvalid={formik.errors.email}>
              {/* <FormLabel htmlFor="email">Email Address</FormLabel> */}
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              onChange={formik.handleChange}
              isChecked={formik.values.rememberMe}
              colorScheme="purple"
            >
              Remember me?
            </Checkbox>
            <Button type="submit" colorScheme="twitter" width="full">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
