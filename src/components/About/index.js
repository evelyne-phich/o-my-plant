import collaboration from "../../assets/img/about/collaboration.svg";
import nature from "../../assets/img/about/nature.svg";
import connected from "../../assets/img/about/connected.svg";

import Quotes from "../Quotes";

import "./style.scss";

const AboutQuote = () => {
  return <span>“Qui ne se plante jamais n'a aucune chance de pousser.”</span>;
};

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-page-title">
        Avec O’My Plant, n'oubliez plus vos plantes !
      </h1>
      <div className="about-page-section-introduction">
        <div className="about-page-section-text">
          <h2 className="about-page-section-title">A propos d'O'My Plant</h2>
          <p className="about-page-section-content">
            O'My Plant a été développé pendant 1 mois par une team de 5
            personnes en reconversion professionnelle. Ce projet est le fruit
            d'un travail d'équipe après 4 mois de formation intensive chez
            O'clock.
          </p>
        </div>
        <img
          className="about-page-section-plant-image"
          src="https://res.cloudinary.com/dtnoanxmt/image/upload/c_scale,w_260/v1643378630/photo-1520412099551-62b6bafeb5bb_h6lepk.jpg"
          alt="plante"
        />
      </div>
      <div className="about-page-section">
        <h2 className="about-page-section-team-title">L'équipe O'My Plant</h2>
        <div className="about-page-section-content"></div>
      </div>
      <div className="about-page-section">
        <h2 className="about-page-section-team-title">Nos valeurs</h2>
        <div className="about-page-section-content">
          <div className="about-page-section-values">
            <img
              className="about-page-section-values-image"
              src={collaboration}
              alt="collaboration"
            />
            <div className="about-page-section-values-name">Collaboration</div>
          </div>
          <div className="about-page-section-values">
            <img
              className="about-page-section-values-image"
              src={nature}
              alt="nature"
            />
            <div className="about-page-section-values-name">Nature</div>
          </div>
          <div className="about-page-section-values">
            <img
              className="about-page-section-values-image"
              src={connected}
              alt="connecté"
            />
            <div className="about-page-section-values-name">Connecté</div>
          </div>
        </div>
      </div>
      <Quotes page="about" quote={<AboutQuote />} author="Proverbe arabe" />
    </div>
  );
};

export default About;
