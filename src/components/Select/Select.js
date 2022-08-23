import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

// Ensure that it fills the container
const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-appearance: none; // needed for Safari
`;

const PresentationalBit = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding-right: 52px;
  font-size: ${16 / 16}rem;
  color: ${COLORS.gray700};
  border-radius: 8px;

  // Apply styles to PresentationalBit when NativeSelect
  // is focused/active
  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      <NativeSelect>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
      <IconWrapper style={{'--size': 24 + 'px'}}>
        <Icon id={"chevron-down"} strokeWidth={1} size={24} />
      </IconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

export default Select;
