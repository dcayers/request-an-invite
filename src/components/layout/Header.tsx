import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  padding: 0 3rem;
  position: sticky;
  top: 0;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <span className="primary">Broccoli</span> <small className="secondary">&amp; Co.</small>
      </h1>
    </StyledHeader>
  );
};
