import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
`;
