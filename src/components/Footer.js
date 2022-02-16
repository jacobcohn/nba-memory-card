import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle>Created by Jacob Cohn</FooterTitle>
      <FooterLink href="https://github.com/jacobcohn" target="_blank" rel="noreferrer">
        <FaGithub />
      </FooterLink>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  font-size: 1.5em;
  padding: 0.2em 0;
  background: ${(props) => props.theme.red};
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
`;

const FooterTitle = styled.h1`
  font-size: inherit;
`;

const FooterLink = styled.a`
  font-size: inherit;
  padding-bottom: 0.1em;
  color: ${(props) => props.theme.white};
  &:hover {
    color: ${(props) => props.theme.whiteHover};
  }
  display: flex;
  justify-content: center;
`;

export default Footer;
