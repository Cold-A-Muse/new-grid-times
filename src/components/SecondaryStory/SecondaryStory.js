import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <StoryWrapper href={`/story/${id}`}>
      <Wrapper>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <Abstract>{abstract}</Abstract>
      </Wrapper>
    </StoryWrapper>
  );
};

const StoryWrapper = styled.a`
   background-color: var(--color-gray-100);

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
  }

   &:not(:last-of-type) {
    padding-bottom: 16px;
  }

   &:not(:first-of-type) {
    border-top: 1px solid var(--color-gray-300);
    padding-top: 16px;
  }
`

const Wrapper = styled.article`
  display: grid;
  grid-template-areas:
    'image heading'
    'image abstract';
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);


  
  @media ${QUERIES.tabletOnly} {
    grid-template-areas:
    'image image'
    'heading heading'
    'abstract abstract';
  }

`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;

  @media ${QUERIES.tabletOnly} {
    grid-column: 1 / -1;
    object-fit: cover;
  }
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;

  @media ${QUERIES.tabletOnly} {
    grid-column: 1 / -1;
  }
`;

const Abstract = styled.p`
  grid-area: abstract;
  font-size: 1rem;
  white-space: pre-wrap;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;

  @media ${QUERIES.tabletOnly} {
    grid-column: 1 / -1;
  }
`;

export default SecondaryStory;
