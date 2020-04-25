import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';

// These are the styles of the different buttons types
// It helps a lot with reusability and changes in future
const btnTypes = {
  primary: {
    color: colors.light,
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  secondary: {
    color: colors.light,
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
  },
  default: {
    color: colors.gray,
    backgroundColor: colors.light,
    borderColor: colors.gray,
  },
  defaultSolid: {
    color: colors.light,
    backgroundColor: colors.lighterGray,
    borderColor: colors.gray,
  },
  success: {
    color: colors.green,
    backgroundColor: colors.light,
    borderColor: colors.green,
  },
  successSolid: {
    color: colors.dark,
    backgroundColor: colors.lighterGreen,
    borderColor: colors.green,
  },
  info: {
    color: colors.blue,
    backgroundColor: colors.light,
    borderColor: colors.blue,
  },
  infoSolid: {
    color: colors.light,
    backgroundColor: colors.blue,
    borderColor: colors.blue,
  },
};

// These are some helper functions, but they can be nested inside the styled component as well
const getColor = (props) =>
  props.type ? btnTypes[props.type]['color'] : btnTypes['default']['color'];
const getBackgroundColor = (props) =>
  props.type
    ? btnTypes[props.type]['backgroundColor']
    : btnTypes['default']['backgroundColor'];
const getBorderColor = (props) =>
  props.type
    ? btnTypes[props.type]['borderColor']
    : btnTypes['default']['borderColor'];

// The button styled component
// Basically this is pure CSS, but since we use string literals - ``
// we can inject some JS inside - ${...}
// This makes it extremely powerful and easy to build reusable and customizable components
const ButtonComponent = styled.button`
  width: 100%;
  max-width: 500px;
  min-height: 44px;
  border-radius: 2px;
  margin: 15px 0 0;
  color: ${getColor};
  background-color: ${getBackgroundColor};
  border: 1px solid ${getBorderColor};
`;

const Button = ({ onClick, type, children }) => {
  return (
    <ButtonComponent onClick={onClick} type={type}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
