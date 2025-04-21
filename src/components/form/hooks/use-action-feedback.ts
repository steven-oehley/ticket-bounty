import { useEffect, useRef } from 'react';

import { ActionState } from '../utils/to-action-state';

type onArgs = {
  actionState: ActionState;
};

type useActionFeedbackOptions = {
  onError?: (onArgs: onArgs) => void;
  onSuccess?: (onArgs: onArgs) => void;
};

export const useActionFeedback = (
  actionState: ActionState,
  options: useActionFeedbackOptions,
) => {
  const prevTimestamp = useRef(actionState.timestamp);
  const isUpdate = actionState.timestamp !== prevTimestamp.current;

  useEffect(() => {
    const { onError, onSuccess } = options;
    if (!isUpdate) return;

    if (actionState.status === 'ERROR') {
      onError?.({ actionState });
    }

    if (actionState.status === 'SUCCESS') {
      onSuccess?.({ actionState });
    }
  }, [actionState, options, isUpdate]);
};
