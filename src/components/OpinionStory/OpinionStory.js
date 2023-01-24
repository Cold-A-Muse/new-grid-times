import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <StoryWrapper href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <OpinionHeader>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </OpinionHeader>
      </Wrapper>
    </StoryWrapper>
  );
};

const StoryWrapper = styled.a`
   background-color: var(--color-gray-100);

   &:not(:last-of-type) {
    padding-bottom: 16px;
  }

   &:not(:first-of-type) {
    padding-top: 16px;
  }
`

const OpinionHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Wrapper = styled.article`
  color: var(--color-gray-900);
  background-color: var(--color-gray-100);
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
  justify-content: space-between;

  @media ${QUERIES.tabletOnly} {
    justify-content: flex-start;
    flex-direction: column;
    padding: 0 16px;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
