/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBarWrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 370px;
  height: auto;
  position: relative;
  border-radius: 4px;
`;

const ProgressBarInner = styled.div`
  background-color: ${COLORS.primary};
  height: var(--height);
  padding: var(--padding);
  position: relative;
  width: ${p => (p.value/100) * 370}px;
  border-radius: var(--borderRadius) ${p => (p.value >= 98 ? `var(--borderRadius)` : 0)} ${p => (p.value >= 98 ? `var(--borderRadius)` : 0)} var(--borderRadius);

`;

const SIZES = {
  small: {
    "--height": 8 + "px",
    "--borderRadius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--borderRadius": 4 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--borderRadius": 8 + "px",
    "--padding": 4 + "px"
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  console.log({styles});
  return (
    <ProgressBarWrapper style={styles}>
      <ProgressBarInner value={value} style={styles} />
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
