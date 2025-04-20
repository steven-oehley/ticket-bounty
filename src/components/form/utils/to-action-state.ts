import { ZodError } from 'zod';

export interface ActionState {
  message: string;
  payload?: FormData;
}

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData,
): ActionState => {
  // Check if the error is a ZodError
  if (error instanceof ZodError) {
    return {
      // Extract the first error message from the ZodError
      message: error.errors[0].message,
      payload: formData,
    };
  } else if (error instanceof Error) {
    // Handle other types of errors
    return {
      message: error.message,
      payload: formData,
    };
  } else {
    // Handle other types of errors
    return {
      message: 'An unexpected error occurred',
      payload: formData,
    };
  }
};
