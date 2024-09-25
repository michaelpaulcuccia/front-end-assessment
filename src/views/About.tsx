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
      <h3>
        Thank you for the opportunity to work on this project! Here are some of
        the features I worked on:
      </h3>
      <div style={{ marginTop: "24px" }}>
        <ul className="about-list">
          <li>
            <h3>Cookie consent modal for user agreement.</h3>
          </li>
          <li>
            <h3>
              Animated navigation bar and company logo that appear upon page
              load.
            </h3>
          </li>
          <li>
            <h3>
              Accessibility tested<sup>1</sup> using the "Tab" key and VoiceOver
              on Safari.
            </h3>
          </li>
          <li>
            <h3>
              Uses React Context to manage the game's card faces. App is set by
              default to travel, a reflection of Zicasso.
            </h3>
          </li>
          <li>
            <h3>
              Displays playing cards in a responsive grid with animations for
              flipping. Includes a modal to show match results and winning
              notifications.
            </h3>
          </li>
          <li>
            <h3>Provides a Reset button to "shuffle deck".</h3>
          </li>
          <li>
            <h3>Implements React Helmet for improved SEO.</h3>
          </li>
          <li>
            <h3></h3>
          </li>
        </ul>
        <div style={{ marginTop: "12px" }}>
          <small>
            1. Accessibility testing for the game component has not been
            conducted.{" "}
          </small>
        </div>
      </div>
    </>
  );
};

export default About;
