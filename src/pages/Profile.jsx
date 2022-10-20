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
  Textarea,
  HStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { profileSchema } from "../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Profile = () => {
  const email = useSelector((state) => state.login.email);
  const initialValues = {
    company: "Creative Code Inc.",
    email,
    username: "",
    address: "",
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    code: "",
    about: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: profileSchema,
    onSubmit: (values) => {
      toast("Profile Updated Successfully");
    },
  });
  return (
    <>
      <Flex justify="center" flexDirection="column" h="100vh">
        <Text fontSize="2xl" marginBottom="20px">
          Edit Profile
        </Text>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Company</FormLabel>
                <Input
                  type="text"
                  disabled
                  id="company"
                  name="company"
                  variant="filled"
                  value={formik.values.company}
                />
              </FormControl>
              <FormControl isInvalid={formik.errors.username}>
                <FormLabel>Username</FormLabel>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  variant="filled"
                  placeholder="Username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />

                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.email}>
                <FormLabel>Email Address</FormLabel>
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
            </HStack>
            <HStack spacing={4}>
              <FormControl isInvalid={formik.errors.firstName}>
                <FormLabel>First Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  variant="filled"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.lastName}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  variant="filled"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
              </FormControl>
            </HStack>

            <FormControl isInvalid={formik.errors.address}>
              <FormLabel>Address</FormLabel>
              <Input
                id="address"
                name="address"
                type="text"
                variant="filled"
                placeholder="Home Address"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
            </FormControl>
            <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
            <HStack spacing={4}>
              <FormControl isInvalid={formik.errors.city}>
                <FormLabel>City</FormLabel>
                <Input
                  id="city"
                  name="city"
                  type="text"
                  variant="filled"
                  placeholder="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                />
                <FormErrorMessage>{formik.errors.city}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.country}>
                <FormLabel>Country</FormLabel>
                <Input
                  id="country"
                  name="country"
                  type="text"
                  variant="filled"
                  placeholder="Country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                />
                <FormErrorMessage>{formik.errors.country}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.code}>
                <FormLabel>Postal Code</FormLabel>
                <Input
                  id="code"
                  name="code"
                  type="text"
                  variant="filled"
                  placeholder="Zip Code"
                  onChange={formik.handleChange}
                  value={formik.values.code}
                />
                <FormErrorMessage>{formik.errors.code}</FormErrorMessage>
              </FormControl>
            </HStack>
            <FormControl isInvalid={formik.errors.about}>
              <FormLabel>About me</FormLabel>
              <Textarea
                id="about"
                name="about"
                variant="filled"
                placeholder="Description"
                onChange={formik.handleChange}
                value={formik.values.about}
              />
              <FormErrorMessage>{formik.errors.about}</FormErrorMessage>
            </FormControl>
            <Flex justifyContent="end" width="100%">
              <Button type="submit" colorScheme="twitter">
                Update Profile
              </Button>
            </Flex>
          </VStack>
        </form>
      </Flex>
      <ToastContainer />
    </>
  );
};

export default Profile;
