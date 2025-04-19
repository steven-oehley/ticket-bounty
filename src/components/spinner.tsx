import { LucideLoaderCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

interface SpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  containerClassName?: string;
  inline?: boolean;
}

export const Spinner = ({
  className,
  size = 'md',
  containerClassName,
  inline = false,
}: SpinnerProps) => {
  // Size variants
  const sizeClasses = {
    lg: 'w-8 h-8',
    md: 'w-6 h-6',
    sm: 'w-4 h-4',
    xl: 'w-12 h-12',
  };

  // If inline is true, just return the spinner without the container
  if (inline) {
    return (
      <LucideLoaderCircle
        aria-label="Loading"
        className={cn('animate-spin', sizeClasses[size], className)}
        role="status"
      />
    );
  }

  // Otherwise, return the spinner with the container
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center self-center',
        containerClassName,
      )}
    >
      <LucideLoaderCircle
        aria-label="Loading"
        className={cn(
          'animate-spin text-indigo-500 dark:text-indigo-600',
          sizeClasses[size],
          className,
        )}
        role="status"
      />
    </div>
  );
};
