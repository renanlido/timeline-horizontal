import { cn } from 'src/utils/cn';

export type TimelineTitleProps = {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const TimelineTitle = ({
  children,
  className,
  ...rest
}: TimelineTitleProps) => {
  return (
    <div
      className={cn(
        'font-roboto text-xl leading-8 text-black flex justify-center font-medium',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
