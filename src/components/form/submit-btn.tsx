'use client';
import { useFormStatus } from 'react-dom';

import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';

interface SubmitBtnProps {
  label?: String;
}

const SubmitBtn = ({ label }: SubmitBtnProps) => {
  const { pending } = useFormStatus();
  return (
    <Button className="cursor-pointer" disabled={pending} type="submit">
      {pending && <Spinner className="text-base" inline={true} size="sm" />}
      {label}
    </Button>
  );
};
export default SubmitBtn;
