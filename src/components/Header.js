import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>NBA Memory Card</h1>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  background: ${props => props.theme.red};
  color: ${props => props.theme.white};
  display: flex;
  justify-content: center;
`;

export default Header;
