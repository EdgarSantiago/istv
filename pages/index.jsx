import { Box, Container, Divider, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import ContactFormWithSocialButtons from "../components/Contact";
import Hero1 from "../components/Heros";
import IsnList from "../components/IsnList";
import Layout from "../components/Layout";
import Live from "../components/Live";
import BasicStatistics from "../components/OurCompany";
import Programs from "../components/Programs";

export default function Home() {
  return (
    <Layout>
      <Box
        bgGradient={`linear(to-b, ${useColorModeValue(
          "#2d4abf32, #fafafa,#fafafa, #fafafa, #fafafa, #fafafa, #fafafa, #fafafa",
          "#2d4abf32, #111111,#111111, #111111, #111111, #111111, #111111, #111111"
        )})`}
        maxW="100%"
      >
        <section>
          <Hero1 />
        </section>
        <Divider />
        <section>
          <Live />
        </section>
        <Divider />
        <section>
          <BasicStatistics />
        </section>
        <Divider />
        {/*<section id="programacao">
          <Programs />
        </section>*/}
        <Divider />
        <section id="isn">
          <IsnList />
        </section>
        <Divider />
        <section id="contato">
          <ContactFormWithSocialButtons />
        </section>
      </Box>
    </Layout>
  );
}
