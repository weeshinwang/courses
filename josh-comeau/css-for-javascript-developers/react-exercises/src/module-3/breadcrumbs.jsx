import React from 'react';
import styled from 'styled-components/macro';

const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label='Breadcrumb'>
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
};

const Crumb = ({ children }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href=''>{children}</CrumbLink>
    </CrumbWrapper>
  );
};

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;
  &:not(:first-of-type) {
    margin-left: var(--spacing);
    &::before {
      content: '/';
      opacity: 0.25;
      margin-right: var(--spacing);
    }
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: revert;
  }
`;

const BreadCrumbsApp = () => {
  return (
    <Breadcrumbs>
      <Crumb href='/'>Home</Crumb>
      <Crumb href='/living'>Living Room</Crumb>
      <Crumb href='/living/couch'>Couches</Crumb>
      <Crumb href='/living/couch/sectional'>Sectionals</Crumb>
    </Breadcrumbs>
  );
};

export default BreadCrumbsApp;
