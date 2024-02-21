/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { Children, cloneElement } from 'react';
import { cn } from 'src/utils/cn';
import { Fallback } from './fallback';

export type TimelineProps = {
  children: React.ReactNode;
  minEvents?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const Timeline = ({
  children,
  minEvents = 0,
  ...rest
}: TimelineProps) => {
  const difference = children
    ? minEvents - Children.count(children)
    : minEvents;

  const childrenWithProps = children
    ? Children.map(children, (child, index) =>
        cloneElement(child as React.ReactElement, {
          isFirst: index === 0,
        }),
      )
    : [];

  return (
    <div className={cn('flex overflow-x-auto overflow-y-hidden')} {...rest}>
      {childrenWithProps}

      {minEvents > 0 &&
        difference > 0 &&
        Array.from({ length: difference }, (_, index) => {
          return <Fallback key={index} />;
        })}
    </div>
  );
};
