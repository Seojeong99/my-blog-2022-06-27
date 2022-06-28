import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";

function IndexPage() {
  return (
        <Layout pageTitle={'Home Page'}>
          <title>HomePage</title>
          <h1>메인 화면입니다.</h1>
          {/* <StaticImage alt='설명설명' src="https://picsum.photos/seed/picsum/500/100"/> */}
        </Layout>
  );
}

export default IndexPage;