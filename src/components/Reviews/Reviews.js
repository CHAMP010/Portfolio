import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ReviewsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { ReviewsData } from '../../constants/constants';

const Reviews = () => (
  <Section nopadding id='reviews'>
    <SectionDivider />
    <SectionTitle main>What Client says?</SectionTitle>
    <GridContainer>
      {ReviewsData.map(({ id, text, image }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>
              {text}
            </HeaderThree>
            <Hr />
          </TitleContent>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Reviews;