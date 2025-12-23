'use client';

import { Content, Theme } from '@carbon/react';

import SiteHeader from '@/components/TutorialHeader/TutorialHeader';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <SiteHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
