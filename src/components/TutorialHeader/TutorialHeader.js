'use client';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  Button,
} from '@carbon/react';

import Link from 'next/link';

const SiteHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Six Day's Work">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <Link href="/" passHref legacyBehavior>
          <HeaderName prefix="">Six Day&apos;s Work</HeaderName>
        </Link>
        <HeaderNavigation aria-label="Six Day's Work">
          <Link href="#features" passHref legacyBehavior>
            <HeaderMenuItem>Features</HeaderMenuItem>
          </Link>
          <Link href="#use-cases" passHref legacyBehavior>
            <HeaderMenuItem>Use Cases</HeaderMenuItem>
          </Link>
          <Link href="#pricing" passHref legacyBehavior>
            <HeaderMenuItem>Pricing</HeaderMenuItem>
          </Link>
          <Link href="#contact" passHref legacyBehavior>
            <HeaderMenuItem>Contact</HeaderMenuItem>
          </Link>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}
        >
          <SideNavItems>
            <HeaderSideNavItems>
              <Link href="#features" passHref legacyBehavior>
                <HeaderMenuItem>Features</HeaderMenuItem>
              </Link>
              <Link href="#use-cases" passHref legacyBehavior>
                <HeaderMenuItem>Use Cases</HeaderMenuItem>
              </Link>
              <Link href="#pricing" passHref legacyBehavior>
                <HeaderMenuItem>Pricing</HeaderMenuItem>
              </Link>
              <Link href="#contact" passHref legacyBehavior>
                <HeaderMenuItem>Contact</HeaderMenuItem>
              </Link>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <Button size="sm" kind="tertiary" href="#contact">
            Get API Key
          </Button>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default SiteHeader;
