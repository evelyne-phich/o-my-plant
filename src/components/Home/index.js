// import { useSelector } from 'react-redux';
// import Page from 'src/components/Page';
// import AppHeader from 'src/components/AppHeader';
// import Content from 'src/components/Content';
import Header from "../Header";
import PresVideo from "../PresVideo";
import SocialNetwork from "../SocialNetwork";
import PlantsCounter from "../PlantsCounter";

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
    <div>
      <Header />
      <PresVideo />
      <PlantsCounter />
      <SocialNetwork />
    </div>

    /*<main>
        <section></section>
    </main>
    <footer></footer>*/
  );
};

export default Home;
