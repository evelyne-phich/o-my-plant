import collaboration from "../../assets/img/about/collaboration.svg";
import nature from "../../assets/img/about/nature.svg";
import connected from "../../assets/img/about/connected.svg";
import "./style.scss";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">
        Avec O’My Plant, n'oubliez plus vos plantes !
      </h1>
      <p className="about-title-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
        imperdiet eli. Sit amet, consectetur
      </p>
      <div className="about-section-introduction">
        <div className="about-section-text">
          <h2 className="about-section-title">A propos d'O'My Plant</h2>
          <p className="about-section-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget
            imperdiet elit vitae euismod enim. Nunc id nisi iaculis, maximus
            odio eu. Semper risus. Morbi viverra dolor ipsum, lacinia tincidunt
            erat luctus non. Etiam fringilla nec justo sit amet consequat.
            Maecenas blandit hendrerit odio, id semper justo consequat ut.
            Vestibulum tempus lorem ligula, sit amet volutpat justo gravida sit
            amet. Pellentesque ac tortor dapibus, malesuada lacus eget, viverra
            lectus. In non eros dolor. Suspendisse potenti.
          </p>
        </div>
        <img
          className="about-section-plant-image"
          src="https://res.cloudinary.com/dtnoanxmt/image/upload/c_scale,w_260/v1643378630/photo-1520412099551-62b6bafeb5bb_h6lepk.jpg"
          alt="plante"
        />
      </div>
      <div className="about-section">
        <h2 className="about-section-team-title">L'équipe O'My Plant</h2>
        <div className="about-section-content"></div>
      </div>
      <div className="about-section">
        <h2 className="about-section-team-title">Nos valeurs</h2>
        <div className="about-section-content">
          <div className="about-section-values">
            <img
              className="about-section-values-image"
              src={collaboration}
              alt="collaboration"
            />
            <div className="about-section-values-name">Collaboration</div>
          </div>
          <div className="about-section-values">
            <img
              className="about-section-values-image"
              src={nature}
              alt="nature"
            />
            <div className="about-section-values-name">Nature</div>
          </div>
          <div className="about-section-values">
            <img
              className="about-section-values-image"
              src={connected}
              alt="connecté"
            />
            <div className="about-section-values-name">Connecté</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
