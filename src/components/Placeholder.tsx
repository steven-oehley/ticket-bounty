import { LucideTriangleAlert } from "lucide-react";
import React, { cloneElement } from "react";

interface PlaceHolderProps {
  label: string;
  icon?: React.ReactElement;
  button?: React.ReactElement;
}

const Placeholder = ({
  label,
  icon = <LucideTriangleAlert />,
  button = <div className="h-10" />,
}: PlaceHolderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center ">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {cloneElement(icon as React.ReactElement<any>, {
        className: "w-12 h-12",
      })}
      <h2 className="text-lg">{label}</h2>
      {button}
    </div>
  );
};
export default Placeholder;
