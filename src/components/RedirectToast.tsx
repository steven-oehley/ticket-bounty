"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

import {
  deleteCookieByKey,
  getCookieByKey,
} from "@/features/ticket/actions/cookies";

const RedirectToast = () => {
  const path = usePathname();

  useEffect(() => {
    const showCookieToast = async () => {
      const message = await getCookieByKey("toast");

      if (message) {
        await deleteCookieByKey("toast");
        toast.success(message);
      }
    };

    showCookieToast();
  }, [path]);

  return null;
};

export { RedirectToast };
