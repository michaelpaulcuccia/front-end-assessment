import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="This is the about page of the application"
        />
        <meta name="keywords" content="React, SEO, Helmet" />
        <meta name="author" content="Michael Cuccia" />
        <link
          rel="canonical"
          href="https://front-end-assessment-ashy.vercel.app/About"
        />
      </Helmet>
      <h3>Thank you for the opportunity to work on this project!</h3>
    </>
  );
};

export default About;
