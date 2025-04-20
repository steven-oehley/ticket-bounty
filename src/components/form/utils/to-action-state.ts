import { ZodError } from 'zod';

export interface ActionState {
  message: string;
  payload?: FormData;
  status?: 'SUCCESS' | 'ERROR';
  fieldErrors: Record<string, string[] | undefined>;
  timestamp: number;
}

export const EMPTY_ACTION_STATE: ActionState = {
  fieldErrors: {},
  message: '',
  timestamp: Date.now(),
};

export const toActionState = (message: string): ActionState => {
  return {
    fieldErrors: {},
    message,
    status: 'SUCCESS',
    timestamp: Date.now(),
  };
};

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData,
): ActionState => {
  // Check if the error is a ZodError
  if (error instanceof ZodError) {
    return {
      // fieldErrors: error.flatten().fieldErrors looks like this:
      // ZodError {
      //   content: [ 'Content must be at least 3 characters long' ],
      //   title: [ 'Title must be at least 15 characters long' ]
      // }
      fieldErrors: error.flatten().fieldErrors,
      // Extract the first error message from the ZodError
      message: '',
      payload: formData,
      status: 'ERROR',
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    // Handle other types of errors
    return {
      fieldErrors: {},
      message: error.message,
      payload: formData,
      status: 'ERROR',
      timestamp: Date.now(),
    };
  } else {
    // Handle other types of errors
    return {
      fieldErrors: {},
      message: 'An unexpected error occurred',
      payload: formData,
      status: 'ERROR',
      timestamp: Date.now(),
    };
  }
};
