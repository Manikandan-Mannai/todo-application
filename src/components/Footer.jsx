import React from 'react';
import styled from 'styled-components';


const Footer = () => {
    return (
        <StyledFooter>
            <div>
                Developed by <Anchor href="https://main--neon-fairy-bfb874.netlify.app/" target="_blank" rel="noopener noreferrer">Manikandan ⚡</Anchor>
            </div>
        </StyledFooter>
    );
}

export default Footer;

const StyledFooter = styled.footer`
  padding: 20px;
  text-align: center;
  color: #fff;
  margin-top: 36vh;
`;

const Anchor = styled.a`
  color: #fff;
  font-weight: bold;
`;