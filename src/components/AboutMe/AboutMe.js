import "./AboutMe.css";
import profileImage from "../../images/kostya.jpg";
import { aboutMe, moreAboutMe } from "../../constants/aboutMe";

const AboutMe = () => {
  return (
    <section className="about-me">
      <img
        className="about-me__image"
        src={profileImage}
        alt="Konstantin Haletckii"
      ></img>
      <div className="about-me__info-wrapper">
        <h2 className="about-me__title">About the author</h2>
        <p className="about-me__info">{aboutMe}</p>
        <p className="about-me__info">{moreAboutMe}</p>
      </div>
    </section>
  );
};

export default AboutMe;
