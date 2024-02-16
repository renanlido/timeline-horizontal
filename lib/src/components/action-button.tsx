import { cn } from 'src/utils/cn';

export type ActionButtonProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.HTMLAttributes<HTMLButtonElement>['style'];
} & React.HTMLAttributes<HTMLButtonElement>;

export const ActionButton = ({
  children,
  className,
  ...rest
}: ActionButtonProps) => {
  return (
    <button
      className={cn(
        'flex px-6 mt-2 text-white py-1 hover:bg-blue-600 transition-colors cursor-pointer bg-blue-500 rounded-lg font-roboto',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
