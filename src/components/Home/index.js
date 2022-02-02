// import { useSelector } from 'react-redux';
// import Page from 'src/components/Page';
// import AppHeader from 'src/components/AppHeader';
// import Content from 'src/components/Content';
import Header from "../Header";
import PresVideo from "../PresVideo";
import SocialNetwork from "../SocialNetwork";
import PlantsCounter from "../PlantsCounter";
import Quote from "../Quotes";
import Modal from "../Modal";
const HomeQuote = () => {
  return (
    <span>
      “Si tu veux des mangues,
      <br /> plante un manguier”
    </span>
  );
};

const Home = () => {
  return (
    /*
    <Page>
      <AppHeader />
      <Content
        title={title}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
      />
    </Page>*/
    <>
      <Header />
      <main className="main">
        <PresVideo />
        <Modal />
        <PlantsCounter />
        <Quote page="home" quote={<HomeQuote />} author="Proverbe créole" />
        <SocialNetwork />
      </main>
    </>

    /*<main>
        <section></section>
    </main>
    <footer></footer>*/
  );
};

export default Home;
