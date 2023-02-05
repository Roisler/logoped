import React from 'react';
import Wrapper from './Wrapper';
import publications from '../assets/publications';
import generateCards from '../assets/generateCards';

const publicationsFileListCards = generateCards(publications);

const Publications = () => (
  <Wrapper id="publications">
    {publicationsFileListCards}
  </Wrapper>
);

export default Publications;
