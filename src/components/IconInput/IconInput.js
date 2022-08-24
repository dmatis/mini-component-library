import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    size: 14,
    lineHeight: 16.41,
    borderBottom: 1

  },
  large: {
    size: 18,
    lineHeight: 21.09,
    borderBottom: 2
  }
}

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-appearance: none;
`;

// Need to get input from input, pass it to presentational bit
// placeholder text should be lighter than filled in text
// Need to be able to interact with NativeSelect

const PresentationalBit = styled.div`
  border-bottom: var(--borderBottom) solid black;
  padding: 8px 167px 7px 33px;
  color: ${COLORS.gray500};
  font-size: var(--size);
  line-height: var(--lineHeight);
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
  color: ${COLORS.gray500};
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = SIZES[size];
  return (
    <Wrapper>
      <label for={label} />
      <NativeInput id={label} />
      <IconWrapper style={{'--size': 24 + 'px'}}>
        <Icon id={icon} strokeWidth={1} size={24} />
      </IconWrapper>
      <PresentationalBit style={{
        '--borderBottom': styles.borderBottom + 'px',
        '--size': styles.size + 'px',
        '--lineHeight': styles.lineHeight + 'px'
      }}>
      {placeholder}
      </PresentationalBit>
    </Wrapper>
  );
};

export default IconInput;
