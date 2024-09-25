import ThemeSelector from "../components/themeSelector";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="This is the homepage of the application"
        />
        <meta name="keywords" content="React, SEO, Helmet" />
        <meta name="author" content="Michael Cuccia" />
        <link
          rel="canonical"
          href="https://front-end-assessment-ashy.vercel.app/"
        />
      </Helmet>
      <ThemeSelector />
    </>
  );
};

export default Home;
