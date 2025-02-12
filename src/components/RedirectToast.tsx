"use client";

import { useEffect } from "react";
import { toast } from "sonner";

import {
  deleteCookieByKey,
  getCookieByKey,
} from "@/features/ticket/actions/cookies";

const RedirectToast = () => {
  useEffect(() => {
    const showCookieToast = async () => {
      const message = await getCookieByKey("toast");

      if (message) {
        await deleteCookieByKey("toast");
        toast.success(message);
      }
    };

    showCookieToast();
  }, []);

  return null;
};

export { RedirectToast };
