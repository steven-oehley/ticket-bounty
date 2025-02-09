import { ZodError } from "zod";

export interface TActionState {
  message: string;
  payload?: FormData;
}

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): TActionState => {
  if (error instanceof ZodError) {
    const message = error.errors[0].message;
    return { message, payload: formData };
  } else if (error instanceof Error) {
    return { message: error.message, payload: formData };
  } else {
    return { message: "An error occurred", payload: formData };
  }
};
