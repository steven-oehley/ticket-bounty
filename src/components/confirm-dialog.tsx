'use client';

import type React from 'react';
import {
  cloneElement,
  type ReactElement,
  useActionState,
  useState,
} from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import Form from './form/form';
import SubmitBtn from './form/submit-btn';
import { ActionState, EMPTY_ACTION_STATE } from './form/utils/to-action-state';

interface UseConfirmDialogProps {
  title?: string;
  description?: string;
  action: () => Promise<ActionState>;
  trigger: ReactElement<{ onClick?: () => void }>;
}

const useConfirmDialog = ({
  title = 'Are you sure?',
  description = 'This action cannot be undone.',
  action,
  trigger,
}: UseConfirmDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dialogTrigger = cloneElement(trigger, {
    onClick: () => setIsOpen((state) => !state),
  });

  const [actionState] = useActionState<ActionState>(action, EMPTY_ACTION_STATE);

  const handleSuccess = () => {
    setIsOpen(false);
  };

  const dialog = (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Form
              action={action}
              actionState={actionState}
              onSuccess={handleSuccess}
            >
              <SubmitBtn label="Confirm" />
            </Form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );

  return [dialogTrigger, dialog] as const;
};

export default useConfirmDialog;
