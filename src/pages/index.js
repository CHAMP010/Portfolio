import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgComponent from '../components/BackgroundComponent/BackgroundComponent';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Reviews from '../components/Reviews/Reviews';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgComponent />
      </Section>
      <Reviews />
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
