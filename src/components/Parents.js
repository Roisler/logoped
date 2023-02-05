import React from 'react';
import Wrapper from './Wrapper';
import publications from '../assets/publications';
import generateCards from '../assets/generateCards';

const parentsFileListCards = generateCards(publications, 'theme');

const Parents = () => (
  <Wrapper id="parents">
    {parentsFileListCards}
  </Wrapper>
);

export default Parents;
