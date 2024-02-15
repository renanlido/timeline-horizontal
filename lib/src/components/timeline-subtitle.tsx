import { cn } from 'src/utils/cn';

export type TimelineTitleProps = {
  children?: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const TimelineSubTitle = ({
  children,
  className,
  ...rest
}: TimelineTitleProps) => {
  return (
    <div
      className={cn(
        'font-roboto text-xs leading-5 text-black flex justify-center font-normal',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
