import React from 'react';
import styled from '@emotion/styled';
import { HeartIcon } from './HeartIcon';
import { CopyrightIcon } from './CopyrightIcon';

const StyledFooter = styled.footer`
  background-color: white;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  p {
    margin: 0;
    font-size: 18px;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Made with <HeartIcon height="16px" /> in Melbourne.
      </p>
      <p>
        <CopyrightIcon height="16px" /> 2021 Broccoli &amp; Co. All rights reserved.
      </p>
    </StyledFooter>
  );
};
