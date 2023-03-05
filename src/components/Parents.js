import React from 'react';
import Wrapper from './Wrapper';
import state from '../state/index';
import generateCards from '../utilities/generateCards';

const { parents } = state;

const parentsFileListCards = generateCards(parents, 'theme');

const Parents = () => (
  <Wrapper id="parents">
    {parentsFileListCards}
  </Wrapper>
);

export default Parents;
