import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  titleColor,
  titleWrap,
  profile,
  textName,
  textArea,
} from "./layout.module.css";

function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`);

  return (
    <>
    <div className={titleColor} />
    {/* <img className={image} src="assets/img/city2.jpg" alt='' /> */}
    <div className={container}>
      <div className={titleWrap}>
        <div className={profile}/>
        {/* <img className={profile} src="assets/img/myImage.jpg" alt='' /> */}
        <div className={textArea}>
          <div className={textName}>
              Seo Jeong Lee
          </div>
          Full Stack Junior Web Developer
        </div>
      </div>
      <title>{pageTitle}</title>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
      <div>{data.site.siteMetadata.description}</div>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
    </main>
      <div>말하는 감자의 기술 블로그</div>
    </div>
    </>
  );
}

export default Layout;