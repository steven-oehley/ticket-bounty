'use client';

import { cloneElement } from 'react';
import { useFormStatus } from 'react-dom';

import clsx from 'clsx';

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';

interface SubmitBtnProps {
  label?: string;
  icon?: React.ReactElement<{ className?: string }>;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const SubmitBtn = ({
  label,
  icon,
  variant = 'default',
  size = 'default',
}: SubmitBtnProps) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} size={size} type="submit" variant={variant}>
      {pending && <Spinner className="text-base" inline={true} size="sm" />}
      {label}
      {pending ? null : icon ? (
        <span
          className={clsx({
            'ml-2': !!label,
          })}
        >
          {cloneElement(icon, {
            ...icon.props,
            className: clsx(icon.props.className, 'w-4 h-4'),
          })}
        </span>
      ) : null}
    </Button>
  );
};
export default SubmitBtn;
