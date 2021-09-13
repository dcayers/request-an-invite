import React from 'react';
import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-image: url('https://images.pexels.com/photos/1684151/pexels-photo-1684151.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'); */
  background-image: url('https://images.pexels.com/photos/5054531/pexels-photo-5054531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 1rem;

  h2 {
    font-size: 64px;
  }

  h2,
  p {
    text-align: center;
    color: white;
  }
`;
