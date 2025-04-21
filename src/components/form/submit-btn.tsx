import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';

interface SubmitBtnProps {
  label?: String;
  isPending?: boolean;
}

const SubmitBtn = ({ label, isPending }: SubmitBtnProps) => {
  return (
    <Button className="cursor-pointer" disabled={isPending} type="submit">
      {isPending && <Spinner className="text-base" inline={true} size="sm" />}
      {label}
    </Button>
  );
};
export default SubmitBtn;
