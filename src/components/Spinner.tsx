import { LucideLoaderCircle } from "lucide-react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-96">
      <LucideLoaderCircle className="animate-spin animate-infinite animate-ease-linear" />
    </div>
  );
};
export default Spinner;
