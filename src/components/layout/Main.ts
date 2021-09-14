import React from 'react';
import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://images.pexels.com/photos/1419923/pexels-photo-1419923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 1rem;

  > h2 {
    font-size: 8vmin;
    margin-bottom: 0;
  }

  > p {
    font-size: 3vmin;
  }

  > h2,
  > p {
    text-align: center;
  }

  /* Large desktop */
  @media (min-width: 1024px) {
    > button {
      font-size: 2vmin;
    }
  }

  /* Portrait tablet to landscape and desktop */
  @media (min-width: 768px) and (max-width: 1024px) {
    > h2 {
      font-size: 10vmin;
    }
    > p {
      font-size: 4vmin;
    }
  }

  /* Landscape phone to portrait tablet */
  @media (max-width: 767px) {
    > h2 {
      font-size: 10vmin;
    }
    > p {
      font-size: 4vmin;
    }
  }

  /* Landscape phones and down */
  @media (max-width: 480px) {
    > h2 {
      font-size: 10vmin;
    }
    > p {
      font-size: 5vmin;
    }
  }
`;
