'use client';

import { useFormStatus } from 'react-dom';
import Link from 'next/link';

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';

interface ItemLinkButtonProps {
  path?: string;
  icon: React.ReactNode;
}

const ItemLinkButton = ({ path, icon }: ItemLinkButtonProps) => {
  const { pending } = useFormStatus();

  // If we have a path, render a Link inside Button with asChild
  if (path) {
    return (
      <Button asChild size="icon" variant="outline">
        <Link className="text-sm" href={path} prefetch={true}>
          {icon}
        </Link>
      </Button>
    );
  }

  // If no path, render a regular button
  return (
    <Button disabled={pending} size="icon" variant="outline">
      {!pending && icon}
      {pending && <Spinner inline size="sm" />}
    </Button>
  );
};

export default ItemLinkButton;
