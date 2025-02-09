import { ZodError } from "zod";

export interface TActionState {
  message: string;
  fieldErrors: Record<string, string> | undefined;
  payload: FormData;
}

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): TActionState => {
  if (error instanceof ZodError) {
    const fieldErrors: Record<string, string> = {};
    error.errors.forEach((err) => {
      if (err.path) {
        fieldErrors[err.path[0]] = err.message;
      }
    });
    return {
      message: "",
      fieldErrors,
      payload: formData,
    };
  }

  if (error instanceof Error) {
    return {
      message: error.message,
      fieldErrors: {},
      payload: formData,
    };
  }

  return {
    message: "An unexpected error occurred",
    fieldErrors: {},
    payload: formData,
  };
};
