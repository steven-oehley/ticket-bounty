import { ZodError } from "zod";

export interface TActionState {
  status?: "SUCCESS" | "ERROR";
  message: string;
  fieldErrors: Record<string, string> | undefined;
  payload: FormData;
  timestamp?: number;
}

export const EMPTY_ACTION_STATE: TActionState = {
  message: "",
  fieldErrors: {},
  payload: new FormData(),
  timestamp: Date.now(),
};

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
      status: "ERROR",
      message: "",
      fieldErrors,
      payload: formData,
      timestamp: Date.now(),
    };
  }

  if (error instanceof Error) {
    return {
      status: "ERROR",
      message: error.message,
      fieldErrors: {},
      payload: formData,
      timestamp: Date.now(),
    };
  }

  return {
    status: "ERROR",
    message: "An unexpected error occurred",
    fieldErrors: {},
    payload: formData,
    timestamp: Date.now(),
  };
};

export const toActionState = (
  message: string,
  formData: FormData
): TActionState => {
  return {
    status: "SUCCESS",
    message,
    fieldErrors: {},
    payload: formData,
    timestamp: Date.now(),
  };
};
