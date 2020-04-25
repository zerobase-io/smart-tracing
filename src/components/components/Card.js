import React from 'react';
import styled from 'styled-components';
import { colors, fontSizes } from '../../styles';

// These are the styles of the different card types
// It helps a lot with reusability and changes in future
const cardTypes = {
  default: {
    color: colors.light,
    backgroundColor: colors.gray,
    borderColor: colors.gray,
  },
  info: {
    color: colors.light,
    backgroundColor: colors.blue,
    borderColor: colors.blue,
  },
};

// These are some helper functions, but they can be nested inside the styled component as well
const getColor = (props) =>
  props.type ? cardTypes[props.type]['color'] : cardTypes['default']['color'];
const getBackgroundColor = (props) =>
  props.type
    ? cardTypes[props.type]['backgroundColor']
    : cardTypes['default']['backgroundColor'];

const CardContainer = styled.div`
  min-height: 200px;
  max-width: 500px;
  border-radius: 2px;
  margin: 15px 0 0;
  padding: 10px;
  display: flex;
  align-items: center;
  color: ${getColor};
  background-color: ${getBackgroundColor};
`;
const Image = styled.img`
  width: 100px;
`;
const Content = styled.div`
  flex: 1;
  padding: 0 10px;
  text-align: center;
`;
const Title = styled.div`
  font-size: ${fontSizes.title};
  font-weight: bold;
`;
const Subtitle = styled.div`
  font-size: ${fontSizes.primary};
  font-style: italic;
`;

const Card = ({ title, subtitle, img, type, onClick }) => {
  return (
    <CardContainer type={type} onClick={onClick}>
      <Image src={img} />
      <Content>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Content>
    </CardContainer>
  );
};

export default Card;
