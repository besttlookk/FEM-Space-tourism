import React from "react";
import styled from "styled-components";

const FooterEl = styled.footer`
  position: relative;

  background-color: var(--col-footer-bg);
  border-top-right-radius: 12rem;
`;

const Footer = () => {
  return <FooterEl></FooterEl>;
};

export default Footer;
