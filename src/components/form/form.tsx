'use client';

import { toast } from 'sonner';

import { useActionFeedback } from './hooks/use-action-feedback';
import { ActionState } from './utils/to-action-state';

interface FormProps {
  action: (payload: FormData) => void;
  actionState: ActionState;
  onError?: (actionState: ActionState) => void;
  onSuccess?: (actionState: ActionState) => void;
  children: React.ReactNode;
}

const Form = ({
  action,
  children,
  actionState,
  onError,
  onSuccess,
}: FormProps) => {
  useActionFeedback(actionState, {
    // could also use closures and not need to pass actionState
    // pass as object so can extend later if needed
    onError: ({ actionState }) => {
      // if we have a field error we have no message so don't show toast
      if (actionState.message) toast.error(actionState.message);
      onError?.(actionState);
    },
    onSuccess: ({ actionState }) => {
      if (actionState.message) toast.success(actionState.message);
      onSuccess?.(actionState);
    },
  });
  return (
    <form action={action} className="flex flex-col gap-y-3">
      {children}
    </form>
  );
};
export default Form;
