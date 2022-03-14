import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Hey, I am <br />
        YASH SONI
      </SectionTitle>
      <SectionText>
        I love developing beautiful Frontends using ReactJS and represent Data in a meaningful way. Also, I like pushing myself and taking up new challenges.
      </SectionText>
      <Button onClick={() => window.location = '#about'} > Learn More</Button>
    </LeftSection>
  </Section >
);

export default Hero;