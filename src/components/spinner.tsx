import { cn } from '@/lib/utils';

interface SpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Spinner = ({ className, size = 'md' }: SpinnerProps) => {
  // Size variants
  const sizeClasses = {
    lg: 'w-8 h-8 border-3',
    md: 'w-6 h-6 border-2',
    sm: 'w-4 h-4 border-2',
    xl: 'w-12 h-12 border-4',
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center self-center">
      <span
        aria-label="Loading"
        className={cn(
          'border-primary animate-spin rounded-full border-solid border-t-transparent',
          sizeClasses[size],
          className,
        )}
        role="status"
      />
    </div>
  );
};
