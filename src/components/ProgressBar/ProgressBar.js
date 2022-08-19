/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBarWrapper = styled.strong`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  height: 24px;
  display: block;
`;

const ProgressBarInner = styled.div`
  background-color: ${COLORS.primary};
  height: 16px;
  width: ${p => (p.value/100) * 370}px;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressBarWrapper size={size}>
      <ProgressBarInner value={value} size={size} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
