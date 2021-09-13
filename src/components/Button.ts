import styled from '@emotion/styled';
import { space, SpaceProps } from 'styled-system';

export const Button = styled.button<SpaceProps>`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  ${space}
`;

export const ButtonOutline = styled(Button)`
  background-color: white;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  padding: 0.5rem 1rem;
`;

export const IconButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 100%;
  min-width: 25px;
  min-height: 25px;
  padding: 0.5rem;

  :hover,
  :focus {
    background-color: gray;
  }

  :focus {
    outline: blue;
    border: 2px solid blue;
  }
`;
