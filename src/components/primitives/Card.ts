import styled from '@emotion/styled';
import { space, SpaceProps, width, WidthProps, height, HeightProps } from 'styled-system';

export const CardHeader = styled.div<SpaceProps>`
  width: 100%;
  padding: 1rem;
  text-align: center;
  position: relative;

  ::after {
    content: ' ';
    position: absolute;
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
    width: 35px;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 4px;
  }

  ${space};
`;
export const CardBody = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const Card = styled.div<HeightProps & WidthProps>`
  min-height: 100px;
  min-width: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  padding: 1rem;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);

  ${height};
  ${width};
`;
