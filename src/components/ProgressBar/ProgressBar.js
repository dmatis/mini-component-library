/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "height": 8,
    "radius": 4,
  },
  medium: {
    "height": 12,
    "radius": 4,
  },
  large: {
    "height": 24,
    "radius": 8,
    "padding": 4,
  }
};

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  /* This is allows us to curve the inner progress bar to fit inside the wrapper when we reach 100% */
  overflow: hidden;
  border-radius: 4px;
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to Progressbar: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{
        '--padding': styles.padding + 'px',
        '--radius': styles.radius + 'px'
      }}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            "--width": value+"%",
            "--height": styles.height + "px",
            '--radius': styles.radius + 'px'
          }}
        />
      </BarWrapper>
    </Wrapper>
    // <ProgressBarWrapper style={styles}>
    //   <ProgressBarInner value={value} style={styles} />
    // </ProgressBarWrapper>
  );
};

export default ProgressBar;
