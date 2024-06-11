import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" px={4} py={2} mt={10}>
      <Flex justify="center">
        <Link as={RouterLink} to="/about" px={2}>
          About
        </Link>
        <Link as={RouterLink} to="/contact" px={2}>
          Contact
        </Link>
        <Link as={RouterLink} to="/privacy" px={2}>
          Privacy Policy
        </Link>
      </Flex>
      <Text textAlign="center" mt={2}>
        &copy; {new Date().getFullYear()} Financial Times
      </Text>
    </Box>
  );
};

export default Footer;