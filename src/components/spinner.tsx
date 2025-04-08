import { LucideLoaderCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

interface SpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Spinner = ({ className, size = 'md' }: SpinnerProps) => {
  // Size variants
  const sizeClasses = {
    lg: 'w-8 h-8 ',
    md: 'w-6 h-6 ',
    sm: 'w-4 h-4 ',
    xl: 'w-12 h-12 ',
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center self-center">
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
