"use client";

import { Ticket } from "@prisma/client";
import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button } from "../ui/button";

interface SubmitButtonProps {
  ticket?: Ticket | null;
}

const SubmitButton = ({ ticket }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full">
      {pending && <LucideLoaderCircle className="animate-spin w-4 h-4 mr-2" />}
      {ticket ? "Edit Ticket" : "Create Ticket"}
    </Button>
  );
};
export default SubmitButton;
