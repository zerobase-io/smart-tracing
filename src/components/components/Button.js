import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';

const btnStyles = {
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
    backgroundColor: colors.lightGreen,
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

const getColor = (props) =>
  props.btnStyle
    ? btnStyles[props.btnStyle]['color']
    : btnStyles['default']['color'];
const getBackgroundColor = (props) =>
  props.btnStyle
    ? btnStyles[props.btnStyle]['backgroundColor']
    : btnStyles['default']['backgroundColor'];
const getBorderColor = (props) =>
  props.btnStyle
    ? btnStyles[props.btnStyle]['borderColor']
    : btnStyles['default']['borderColor'];

const ButtonComponent = styled.button`
  width: 100%;
  max-width: 400px;
  min-height: 44px;
  border-radius: 2px;
  margin: 5px;
  color: ${getColor};
  background-color: ${getBackgroundColor};
  border: 1px solid ${getBorderColor};
`;

const Button = ({ onClick, btnStyle, children }) => {
  return (
    <ButtonComponent onClick={onClick} btnStyle={btnStyle}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
