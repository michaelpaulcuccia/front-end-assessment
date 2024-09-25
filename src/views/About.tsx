import { Helmet } from "react-helmet";
import { LuCookie } from "react-icons/lu";
import { FiNavigation } from "react-icons/fi";
import { BiAccessibility } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { GiPokerHand } from "react-icons/gi";
import { IoRadioButtonOnSharp } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import List from "../components/list";

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
      <h3>
        Thank you for the opportunity to work on this project! Here are some of
        the features I worked on:
      </h3>
      <div style={{ marginTop: "24px" }}>
        <List
          text="Cookie consent modal for user agreement."
          icon={<LuCookie fontSize={32} />}
        />
        <List
          text="Animated navigation bar and company logo that appear upon page load."
          icon={<FiNavigation fontSize={32} />}
        />
        <List
          icon={<BiAccessibility fontSize={32} />}
          text={
            <>
              Accessibility tested<sup>1</sup> using the "Tab" key and VoiceOver
              on Safari.
            </>
          }
        />
        <List
          icon={<FaReact fontSize={32} />}
          text="Uses React Context to manage the game's card faces. App is set by default to travel, a reflection of Zicasso."
        />
        <List
          icon={<GiPokerHand fontSize={32} />}
          text="Displays playing cards in a responsive grid with animations for flipping. Includes a modal to show match results and winning notifications."
        />
        <List
          icon={<IoRadioButtonOnSharp fontSize={32} />}
          text="Provides a Reset button to shuffle deck."
        />
        <List
          text="Implements React Helmet for improved SEO"
          icon={<TbSeo fontSize={32} />}
        />
      </div>
      <div style={{ marginTop: "12px" }}>
        <small>
          1. Accessibility testing for the game component has not been
          conducted.{" "}
        </small>
      </div>
    </>
  );
};

export default About;
