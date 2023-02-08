import React from 'react';
import Wrapper from './Wrapper';
import state from '../assets/state';
import generateCards from '../utilities/generateCards';

const { publications } = state;

const publicationsFileListCards = generateCards(publications);

const Publications = () => (
  <Wrapper id="publications">
    {publicationsFileListCards}
  </Wrapper>
);

export default Publications;
