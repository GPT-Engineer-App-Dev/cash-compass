import { Box, Container, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

const articles = [
  {
    title: "Article 1",
    description: "Brief description of article 1.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Article 2",
    description: "Brief description of article 2.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Article 3",
    description: "Brief description of article 3.",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Article 4",
    description: "Brief description of article 4.",
    image: "https://via.placeholder.com/150",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={4}>
      <Heading mb={6}>Top Stories</Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
        {articles.map((article, index) => (
          <GridItem key={index} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={article.image} alt={article.title} />
            <Box p={4}>
              <Heading size="md" mb={2}>
                {article.title}
              </Heading>
              <Text>{article.description}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Index;