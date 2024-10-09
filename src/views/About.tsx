import { Helmet } from "react-helmet";
import { SiVercel } from "react-icons/si";
import { LuCookie } from "react-icons/lu";
import { FiNavigation } from "react-icons/fi";
import { CiRoute } from "react-icons/ci";
import { BiAccessibility } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { GiPokerHand } from "react-icons/gi";
import { IoRadioButtonOnSharp } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import { MdOutlineCleanHands } from "react-icons/md";
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
      <h3 className="text-style">
        <strong>
          Thank you for the opportunity to work on this project! Here are some
          of the features I worked on:
        </strong>
      </h3>
      <div style={{ marginTop: "24px" }}>
        <List
          text="Vercel automatic deployments."
          icon={<SiVercel fontSize={32} />}
        />
        <List
          text="Cookie consent modal for user agreement."
          icon={<LuCookie fontSize={32} />}
        />
        <List
          text="Animated navigation bar and company logo that appear upon page load."
          icon={<FiNavigation fontSize={32} />}
        />
        <List
          text="Integrates React-Router-DOM to facilitate routing and navigation."
          icon={<CiRoute fontSize={32} />}
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
          text="Uses React Context to manage the game's card faces. App is set by default to a travel theme, a reflection of COMPANY."
        />
        <List
          icon={<GiPokerHand fontSize={32} />}
          text="Displays playing cards in a responsive grid with animations for flipping. Includes a modal to show match results and win notifications."
        />
        <List
          icon={<IoRadioButtonOnSharp fontSize={32} />}
          text="Provides a Reset button to shuffle deck."
        />
        <List
          text="Implements React Helmet for improved SEO."
          icon={<TbSeo fontSize={32} />}
        />
        <List
          text="Clean codebase with well-structured logic and organization."
          icon={<MdOutlineCleanHands fontSize={32} />}
        />
      </div>
      <div>
        <small>
          1. Accessibility testing for the game component has not been
          conducted.{" "}
        </small>
      </div>
      <div style={{ marginTop: "38px" }}>
        <h3 className="text-style">
          <strong>Some thoughts on this project:</strong>
        </h3>
        <h3 className="text-style">
          For this project I didn’t want to overload the app with too many
          animated UI transitions. I included a navigation bar animation along
          with the card flip to show my ability with these CSS skills but felt
          that anything more would be excessive. It's my belief that a clean,
          minimal UI would facilitate a more direct user experience. Since the
          app is a game, the focus should be on playing, not getting distracted
          by superfluous effects or components.
        </h3>
        <h3 className="text-style">
          While this application is responsive, I chose not to present the cards
          in a grid on mobile view. My opinion is that maintaining the same grid
          structure would result in significantly smaller cards. This reduction
          in size would make it difficult for users to see the card content
          clearly, tap accurately on individual cards, and could lead to a
          frustrating gameplay experience.
        </h3>
        <h3 className="text-style">
          Lastly, it was important for me to demonstrate a mature approach to
          development by incorporating essential, though less exciting, features
          like SEO and accessibility as my 'personal touch.' These
          behind-the-scenes elements enhance the app’s overall quality and
          usability, aligning it with industry standards. The same applies to
          the implementation of a cookie consent modal, which reflects attention
          to privacy and compliance without disrupting the user experience.
        </h3>
        <h3 className="text-style">
          Please visit my{" "}
          <a href="https://github.com/michaelpaulcuccia" target="_blank">
            GitHub
          </a>{" "}
          to view other my projects and learn more.
        </h3>
      </div>
    </>
  );
};

export default About;
