import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  title: string;
}

const StyledHeader = styled('header')`
  display: flex;
  flex-direction: column;

  color: white;
  background-color: #282c34;
`;

const StyledHeading = styled('h1')`
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <StyledHeader>
      <StyledHeading>{title}</StyledHeading>
    </StyledHeader>
  );
};
