import React from 'react';
import { cn } from 'src/utils/cn';

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}
export declare type IconType = (props: IconBaseProps) => JSX.Element;

export type TimelineEventProps = {
  color?: string;
  icon?: IconType;
  children?: React.ReactNode;
  isFirst?: boolean;
};

export const TimelineEvent = ({
  icon: Icon,
  isFirst = false,
  color = '#e0e0e0',
  children,
}: TimelineEventProps) => {
  return (
    <div className={cn('relative', 'min-w-40', `${!isFirst && '-ml-[10px]'}`)}>
      <div className={cn('relative flex flex-col')}>
        <>
          {Icon && (
            <Icon className="absolute top-[calc(23%_-_clamp(10px,1vw,20px))] left-1/2 transform -translate-x-1/2 text-[clamp(20px,2vw,40px)] text-white" />
          )}
          <svg width={'100%'} height={'100%'} viewBox="0 0 60 40">
            <g transform="matrix(.99959 0 0 .99838 -100.96 -38.57)">
              <path
                d="M101.002 69.656h55.492l4.064 4.158-4.064 4.205h-55.492l3.85-4.205z"
                fill={color}
                strokeWidth={0.24}
              />
              <circle
                cx={130.726}
                cy={73.838}
                r={1.522}
                fill="#fff"
                strokeWidth={0.15}
              />
              <circle
                cx={130.78}
                cy={48.202}
                r={9.57}
                fill={color}
                strokeWidth={0.194}
              />
              <rect
                width={0.794}
                height={14.363}
                x={130.383}
                y={56.309}
                ry={0}
                fill={color}
                strokeWidth={0.108}
              />
            </g>
          </svg>
        </>
      </div>
      <div className="relative flex flex-col items-center ">{children}</div>
    </div>
  );
};
