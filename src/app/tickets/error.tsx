"use client";

import Placeholder from "@/components/Placeholder";

interface ErrorProps {
  error: Error;
}

const Error = ({ error }: ErrorProps) => {
  return <Placeholder label={error.message || "something went wrong"} />;
};
export default Error;
