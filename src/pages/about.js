import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>I'm making this site whilst learning Gatsby!</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <Seo title="About me" />
  </>
);
export default AboutPage;
