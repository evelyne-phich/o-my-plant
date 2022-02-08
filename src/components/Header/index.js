import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      <section className="header-part-left">
        <div className="header-part-left-contain">
          <h1>O'My Plant</h1>
          <p>
            Même vos plantes
            <br /> ont leur agenda
          </p>
        </div>
      </section>
      <section className="header-part-right"></section>
    </header>
  );
};

export default Header;
