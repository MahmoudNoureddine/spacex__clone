import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterSection>
        <SocialLinks>
          <span>SPACEX © 2022</span>
          <a href="#">Twitter</a>
          <a href="#">Youtube</a>
          <a href="#">Instagram</a>
          <a href="#">FlICKER</a>
          <a href="#">LINKEDIN</a>
          <a href="#">PRIVACY POLICY</a>
          
        </SocialLinks>
    </FooterSection>
  )
}

export default Footer

const FooterSection = styled.div`
 width: 100%;
 height: 100px;
 background: #000;
 display: flex;
 align-items: center;
`;

const SocialLinks = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
   a {
    cursor: pointer;
    margin-right: 50px;
    font-size: 14px;
    transition: all 250ms;
   }

   a:hover {
     color: #DAD7D6;
   }

   span {
     font-size: 12px;
     margin-right: 50px;
     color: #C1C1C1;
     
   }
`;



