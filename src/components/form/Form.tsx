import { toast } from "sonner";

import useActionFeedback from "./hooks/useActionFeedback";
import { TActionState } from "./utils/fromErrorToActionState";

interface FormProps {
  action: (payload: FormData) => void;
  children: React.ReactNode;
  actionState: TActionState;
}

const Form = ({ action, children, actionState }: FormProps) => {
  useActionFeedback(actionState, {
    onSuccess: ({ actionState }) => {
      if (actionState.message) {
        toast.success(actionState.message);
      }
    },
    onError: ({ actionState }) => {
      if (actionState.message) {
        toast.error(actionState.message);
      }
    },
  });
  return (
    <form action={action} className="flex flex-col gap-y-2">
      {children}
    </form>
  );
};
export default Form;
