'use client';

import { FC, PropsWithChildren } from 'react';
import { ILayoutWithHeaderProps } from './interfaces';
import BasicHeader from '@/components/BasicHeader';

const LayoutWithHeader: FC<PropsWithChildren<ILayoutWithHeaderProps>> = ({
  children,
  session,
  className
}) => {
  return (
    <div className={`layout-with-basic-header ${className}`}>
      <BasicHeader session={session} />
      {children}
    </div>
  );
};

export default LayoutWithHeader;
