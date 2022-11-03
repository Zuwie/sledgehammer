import { useOptionalUser } from "~/utils";
import { Hero } from "~/components/Hero";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Container, Stack } from "@chakra-ui/react";
import Post from "~/components/Post";

export default function Index() {
  const user = useOptionalUser();
  return (
    <>
      <Header />
      <Hero />
      <Container maxW={"7xl"}>
        <main>
          <Stack direction={["column", "row"]} spacing={"8"}>
            <Post />
            <Post />
            <Post />
          </Stack>
        </main>
      </Container>
      <Footer />
    </>
  );
}
