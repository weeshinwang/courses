import React from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
  body {
  background: slateblue;
}
`;

const Article = styled.article`
  min-width: 250px;
  border-radius: 32px;
  padding: 24px;
  background: white;
  box-shadow: 0px 2px 20px hsl(248deg 53% 40%);
  text-align: center;
  position: absolute;
  width: 500px;
  height: 200px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;

const Avatar = styled.img`
  display: block;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -64px;
  margin-bottom: 16px;
  border: 6px solid white;
`;

const Name = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: hsl(0deg 0% 40%);
`;

function ContactCard({ avatarSrc, name, email }) {
  return (
    <>
      <GlobalStyles />
      <Article>
        <Avatar alt='' src={avatarSrc} />
        <Name>{name}</Name>
        <Paragraph>{email}</Paragraph>
      </Article>
    </>
  );
}

const ContactCardApp = () => {
  return (
    <ContactCard
      avatarSrc='https://avatarfiles.alphacoders.com/121/121594.jpg'
      name='Mittens'
      email='meow@gmail.com'
    />
  );
};

export default ContactCardApp;
