import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>I'm making this site whilst learning Gatsby!</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="about me page" content="Learn all about me" />
  </>
);
export default AboutPage;
